#  Angular 8 Primeiros Passos

###### Anotações sobre os principais conceitos e exemplos de aplicações

___
___

### Requisitos

 * HTML Básico.
 * JS Básico.

### Ambiente

 * Node.js.
 * Angular CLI.
 * Visual Studio Code.

1 - Instalação do [Node.js v12.x](https://github.com/nodesource/distributions/blob/master/README.md) (node -v e npm -v)

* Gerenciar pacotes (npm).
* Configurar dependências.

2 - Instalação do angular pelo npm (ng version)

`sudo npm install -g @angular/cli`

 * Produtividade.
 * Agilizar a criação de projetos.
 * Configuração de componentes.
 * Configuração de rotas.
 * Criar Guards.

3 - Instalação [VSCode.deb](https://code.visualstudio.com/download)
___

### Criando a base do projeto:
1 - Abra o terminal e navegue até a pasta onde o projeto será criado.

2 - Crie um projeto chamado course-manager:

`ng new course-manager`

 * O projeto será no contexto de um curso, editar, consultar, criar validações e navegar nas páginas dos cursos. 
 
 * Não vamos utilizar o módulo de rotas por enquanto.
 
 * A folha de estilo será em .css.

3 - Abra o diretório do projeto pelo VSCode, ou digite "code ." no terminal, dentro da pasta do projeto.
___

### Estrutura do projeto "Visão geral"

 * **package.json:** contém todas as dependências da nossa aplicação. Quando instalamos uma dependência, ela automaticamente vai aparecer aqui.
 
 * **angular.json:** contém configurações globais da aplicação e qual é o arquivo que vai inicializar a nossa aplicação. 
 
	* **assets:** path das pastas de imagens e arquivos estáticos globais.
	* **styles:** path do .css global.
	
	* **scripts:** path do .js global. 
	
	* **index:** path da página base. "No caso do angular, tudo é envelopado aqui dentro, direta ou indiretamente."
	
	* **main:** path da pasta coração da parada, responsável por fazer o bootstrap da aplicação, "hook."
 
 * **node_modules:** contém as dependências da aplicação.
 * **src:** é onde você vai codar. 
 
 	* **index.html:** arquivo responsável por fazer o SPA (Single Page Application).
 	
 	* **main.ts:** inicializa a nossa aplicação. O main espera receber um módulo raiz para fazer o processo de leitura e inicialização da aplicação "bootstrap". Este módulo é o "appmodule" que fica em: app.module.ts.

 * **app/app.module.ts:** vai ser lido pelo main.ts e a partir dele é que será lido o componente pai "componente responsável por envelopar todos os outros componentes que vamos criar de maneira direta ou indireta". Este componente será lido e carregado dentro do index.html, que é o html raiz da aplicação. Os outros .htmls que vamos criar, serão adicionados dentro do index.html dentro da tag: 
 **<app-root>**.
 `<app-root></app-root>`
 
Através do **<app-root>** é que todos os nossos componentes serão carregados. Ele faz referencia ao componente pai  **app/app.component.ts** este é lido dentro de **app/app.module.ts**.
___

### Primeiro run

1 - Botão esquerdo no nome do projeto e escolha: Open in integrated terminal:

![img/001.png](https://github.com/aluiziomonteiro/angular/blob/master/img/001.png)

2 - Escreva `ng serve ` para carregar a aplicação.

3 - Acesse: localhost:4200/ pelo navegador. O resultado deve ser:

![img/002.png](https://github.com/aluiziomonteiro/angular/blob/master/img/002.png)

Esta é a face da nossa aplicação inicial. Conforme formos criando componentes, eles irão aparecendo aqui e as coisas vão se modificando.

___

### Módulos

O angular trabalha com o conceito de módulos e componentes. O módulo pai é o app/app.module.ts e este pode ter submódulos.
O que o usuário vê em nossas páginas na verdade são componentes. Já os módulos são, na verdade, limitadores de contextos.
O que dá vida e cor aos módulos, são os componentes.

~~~typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
  
  // declaração dos componentes que vão compor o módulo
    AppComponent 
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
~~~

Abrindo o **app/app.component.ts** podemos ver que ele tem um **decorator** chamado **@Component({})** . Dentro dele temos algumas propriedades que dão informações ao angular para que os componentes possam ter funcionalidades a mais.

~~~typescript

import { Component } from '@angular/core';

@Component({

  // diretiva que vai fazer um binding com o nosso componente
  // "cria uma tag dentro do index.html"
  selector: 'app-root',
  
  // definição do template html do componente
  templateUrl: './app.component.html',
  
  // definição do css do componente
  styleUrls: ['./app.component.css']
})
export class AppComponent {

// título que está no template
  title = 'course-manager';
}
~~~
___

### Interpolação

Em um template HTML no angular existem alguns recursos que são importantes no decorrer de um projeto.
A Interpolação nada mais é do que um recurso de ‘embedar’ expressões dentro de uma área delimitada por {{ .. }}.

O title do código do código exposto acima foi interpolada no template **app/app.component.html**.

1 - Acesse o **app/app.component.html**, apague todo o seu conteúdo e em seguida interpole somente o title:


![img/003.png](https://github.com/aluiziomonteiro/angular/blob/master/img/003.png)

2 - Vamos criar um novo atributo dentro do **app/app.compontent.ts**. Vamos tipá-lo só para ficar explicito que é uma String:

~~~typescript
...
export class AppComponent {
  title = 'course-manager';
  nome: string = 'Clint Eastwood';
}
~~~

3 - Interpole o nome no template logo abaixo do título:

~~~html
{{ title }}
<br />
{{ nome }}
~~~


O angular nos dá todos os recursos do html e mais algumas coisas, como é o caso da interpolação e outros recursos.

___

### One-way  e two-way data binding

One way databinding, significa que a view, sua página, só consegue ler o dado (model) disponibilizado pelo controller do Angular. É uma relação unidirecional, somente leitura. O two-way data binding você consegue tanto ler quando modificar um model disponibilizado pelo controller.

1 - Para uma melhor visualização, vamos adicionar um input com `[ngModel]` que é a forma **One-way** de interligar o input com alguma variável:

~~~typescript

{{ title }}
<br />
{{ name }}
<br />
// ngModel = nome-da-propriedade "binding"
<input [ngModel] = "name" name="name" >
~~~

2 - Vai dar um erro de:

~~~cmd
Can't bind to 'ngModel' since it isn't a known property of 'input'.
~~~
Isso porque o ngModel perdence ao módulo de formulários e este módulo não importado.

3 - Vamos importar o módulo no **app/app.module.ts**:

~~~typescript

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// importação da classe FormsModule
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [ // Declaração dos componentes
    AppComponent
  ],
  imports: [ // Usado para importar Módulos
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

~~~

Lembre-se de que o app/app.module.ts é o módulo raiz da nossa aplicação. Isto quer dizer que tudo o que estiver nele, estará disponível para toda a nossa aplicação.

4 - Rode o ng serve e atualize a página se for necessário.

Caso a gente altere o conteúdo do input via navegador, esta alteração não será refletida em suas outras referências. Este é o one-way "Junção de uma via". É bom para exibir informações.

![img/004.png](https://github.com/aluiziomonteiro/angular/blob/master/img/004.png)

Já o two-way é uma junção de duas vias, onde as alterações feitas no input vão alterar o valor do atributo em todos os lugar em que o mesmo for referenciando.
Para configurar o two-way basta adicionar parenteses dentro do colchetes do [ngModule].
`<input [(ngModel)] = "name" name="name" >`:

![img/005.png](https://github.com/aluiziomonteiro/angular/blob/master/img/005.png)
___

### Criando Componentes

Vamos começar a criar nossos componentes que farão parte do projeto que é o foco desse tutorial.

1 - Crie uma pasta chamada **courses** dentro da pasta **/app**.
Nessa pasta vamos colocar todos os componentes que forem referentes aos nossos cursos.
2 - crie um arquivo com o nome de **course-list-component.ts** dentro de **/courses**.
Precisamos criar uma classe que represente nossa lista de componentes:

![img/006.png](https://github.com/aluiziomonteiro/angular/blob/master/img/006.png)

3 - Para o angular saber que esta classe é um componente, é preciso ter um **decorator**. Então vamos importar Component:


~~~typescript
import { Component } from "@angular/core";
// Digite "@" e escolha Component no pop-up que o VSCode completa pra gente
@Component
export class CourseListComponent{

}
~~~

4 - Vamos definir o seletor e o template. Podemos definir o template de duas maneiras: pelo path e de forma estática:

~~~typescript
import { Component } from "@angular/core";

@Component({ // aqui vai algumas características desse componente
    selector: 'app-course-list', // vai virar uma tag
    template: '<h2> Course List </h2>', // Definição estática do template
  })
export class CourseListComponent{

}
~~~

5 - No **app/app.component.html** chame a nossa tag **app-course-list**:

~~~typescript
<app-course-list></app-course-list>
~~~

Nesse momento recebemos um erro informando que o componente não é reconhecido pelo módulo raiz:

` Error: src/app/app.component.html:1:1 - error NG8001: 'app-course-list' is not a known element:`

6 - Vamos declarar o componente no modulo raiz **app/app.module.ts**:


~~~typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list-component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent // Nosso componente
  ],
  
  ...
  ~~~

Agora sim, nosso H2 é exibido corretamente:

![img/007.png](https://github.com/aluiziomonteiro/angular/blob/master/img/007.png)

note: sempre declare os seus componentes no módulo que pertence a ele. Como aqui estamos usando somente o módulo raiz, então é nele que estamos declarando tudo.

Não é legal misturar html com typescript, portanto vamos separa aquele h2 do template?

~~~typescript
...
componente
    selector: 'app-course-list', // vai virar uma tag
    template: '<h2> Course List </h2>', // Definição estática do template
 ...
~~~

 1 - Crie um arquivo dentro da pasta **app** chamado de **course-list-component.html** e coloque o H2 dentro dele:
 
 ~~~typescript
 <h2> Course List </h2>
 ~~~
 
 2 - Altere o course-list-component.ts para que o templateUrl busque o .html:
 
 ~~~typescript
 
import { Component } from "@angular/core";

@Component({ // aqui vai algumas características desse componente
    selector: 'app-course-list', // vai virar uma tag
    templateUrl: './course-list-component.html' // Definição estática do template
  })
export class CourseListComponent{

}
~~~
___

### Instalação do Bootstrap via Node Package Manager

Vamos usar alguns componentes do bootstrap no HTML da nossa aplicação e para que isso seja possível,  será preciso instalá-lo via npm.

1 - Clique no terminal do VSCode e dê um CTRL+C para parar a aplicação.

2 - Escreva no terminal do VSCode `npm install bootstrap`.

3 - Certifique-se de que dentro da pasta **node-modules**, surgiu uma outra pasta chamada bootstrap:

![img/008.png](https://github.com/aluiziomonteiro/angular/blob/master/img/008.png)

A definição do path do estilo global fica localizado no arquivo angular.json:

![img/009.png](https://github.com/aluiziomonteiro/angular/blob/master/img/009.png)

4 - Importe o css do bootstrap dentro do src/style.css:

![img/010.png](https://github.com/aluiziomonteiro/angular/blob/master/img/010.png)

5 - Para testar se o bootstrap está funcionando corretamente, acesse **app/app.component.html** e envolva a tag `<app-course-list></app-course-list>` com uma ´<div class="container">`:

![img/011.png](https://github.com/aluiziomonteiro/angular/blob/master/img/011.png)

6 - Rode o ng serve e acesse localhost:4200 pelo brownser:


![img/012.png](https://github.com/aluiziomonteiro/angular/blob/master/img/012.png)

Podemos notar que o estilo do bootstrap foi aplicado em nosso título com sucesso.

7 - Crie um arquivo chamado **course.ts** dentro da pasta **courses**. Defina uma Classe dentro dele:

~~~typescript
export class Course{

}
~~~
 8- Defina os atributos do nosso curso dentro da classe. A tipagem dos atributos não é obrigatória, mas é interessante para facilitar na leitura e identificação dos dados que cada um precisa receber:
 
 ~~~typescript
export class Course{
	id: number;
    name: string;
    imageUrl: string;
    price: number;
    code: number;
    releaseData: string;
    duration: number;
    rating: number;
}
~~~

9 - Na classe **course-list-component.ts**, vamos declarar um array de cursos vazio. Use o auto complete quando for escrever o nome da Classe Curso que o VSCode faz o import automático pra gente:

~~~typescript
import { Component } from "@angular/core";
import { Course } from "./course";

@Component({ // aqui vai algumas características desse componente
    selector: 'app-course-list', // vai virar uma tag
    templateUrl: './course-list-component.html' // Definição estática do template
  })
export class CourseListComponent{
  courses: Course[] = []; // array de Cursos vazio
}
~~~

Podemos implementar o OnInit para que algumas operações sejam executadas assim que o componente for inicializado. Estas operações devem ser descritas dentro do método ngOnInit():

~~~typescript
...

export class CourseListComponent implements OnInit{ // OnInit
    courses: Course[] = []; // Array de Cursos vazio

    ngOnInit(){ // Método que será executado na inicialização

    }
}
~~~

Vamos inicializar nosso componente preenchendo nossa lista de array de Cursos:

~~~typescritp
...
    ngOnInit(){ // Método que será executado na inicialização
      this.courses = [{
        id: 1,
        name: 'Angular: Forms',
        imageUrl: ' ',
        price: 99.99,
        code: 'XPS-8796',
        releaseData: 'November, 2, 2019',
        duration: 120,
        rating: 4.5,
      },
      {
        id: 2,
        name: 'Angular: HTTP',
        imageUrl: ' ',
        price: 45.99,
        code: 'LKL-1094',
        releaseData: 'December, 4, 2019',
        duration: 80,
        rating: 4,
      }
    ]
    }
}
~~~

10 - Vamos exibir a lista de cursos no nosso template html, no caso é o **course-list-component.html**:


~~~typescript
<h4>Course List</h4>

<table class="table table-striped"> // Tabela do bootstrap
    <thead>
        <th>Image</th>
        <th>Name</th>
        <th>Price</th>
        <th>Code</th>
        <th>Release Data</th>
        <th>Rating</th>
        <th>Options</th> // Futuramente teremos lindos botões aqui
    </thead>

    <tbody>
     
    </tbody>
</table>
~~~

11 - Vamos iterar sobre as informações dos cursos e para isso, vamos utilizar o `*ngFor` do angular dentro da tag `<tr>`:

~~~typescript
<h4>Course List</h4>

<table class="table table-striped">
    <thead>
        <th>Image</th>
        <th>Name</th>
        <th>Price</th>
        <th>Code</th>
        <th>Release Data</th>
        <th>Rating</th>
        <th>Options</th> 
    </thead>

    <tbody>
        <!-- let "variável-de-template" of "nossa-lista-de-cursos"-->
        <tr *ngFor="let course of courses">
            <td>{{ course.imageUrl }}</td> <!-- Interpolação -->
            <td>{{ course.name }}</td>
            <td>{{ course.price  }}</td>
            <td>{{ course.code }}</td>
            <td>{{ course.releaseData }}</td>
            <td>{{ course.rating }}</td>
            <td></td>
        </tr>
    </tbody>
</table>
~~~


O resultado já pode ser visto a seguir:



![img/013.png](https://github.com/aluiziomonteiro/angular/blob/master/img/013.png)

Revisando:

1 - Criamos um novo componente.

2 - Criamos uma classe que representa os valores que queremos exibir.

3 - Criamos e populamos um array com o mesmo tipo dessa classe.

4 - Vimos o método `ngOnInit()` que é executado no momento em que o componente é carregado.

5 - Vimos que podemos criar uma classe de modelo com typeScript e que podemos tipar nossos atributos.

6 - Vimos que quando criar-mos um novo componente devemos declará-lo no módulo raiz da aplicação **app.module**.

7 - Exportamos o módulo do bootstrap.

8 – Vimos como exibir nossa lista no browser utilizando o `*ngFor`.


Visão global do projeto:

![img/DIagrama1.png](https://github.com/aluiziomonteiro/angular/blob/master/img/Diagrama1.png)

___

### Criando Componentes com Atributo Interdependente

Criaremos um componente que vai receber informação do  **Rating** e conforme for o valor dessa informação, ele exibirá o número de estrelas adequadamente.

1 - Crie uma pasta chamada **images** dentro de **src/assets**.

2 - Coloque as imagens dentro dessa pasta:

[imagens](https://github.com/aluiziomonteiro/angular/blob/master/img/images)

3 - Declare o path das imagens no arquivo **course/course-list-component.ts**:


![img/014.png](https://github.com/aluiziomonteiro/angular/blob/master/img/014.png)

4 - Agora em **courses/course-list-component.html** precisamos mesclar as informações de um atributo da tag html com informações do angular:

~~~typescript
...
        <th>Release Data</th>
        <th>Rating</th>
        <th>Options</th>
    </thead>

    <tbody>
        <tr *ngFor="let course of courses">
        
            <!-- Com os colchetes, o angular vai entender que precisa mesclar o src com o valor da variável-->
             <td> <img [src]="course.imageUrl" width="40" height="40"> </td>
             
            <td>{{course.name}}</td>
            <td>{{course.price}}</td>
            <td>{{course.code}}</td>
            <td>{{course.releaseData}}</td>
            <td>{{course.rating}}</td>
            <td> </td>
        </tr>
    </tbody>
</table>
~~~

Agora vamos passar para a criação do nosso componente de estrela.

1 - Crie uma nova pasta chamada star dentro da pasta app. Dentro de star, crie nossa classe de componente chamada **star-component.ts**:

![img/015.png](https://github.com/aluiziomonteiro/angular/blob/master/img/015.png)

Até aqui, não há nenhuma novidade.
No componente anterior, nós carregamos as informações com `OnInit`, mas como o angular trabalha com http de forma assíncrona, nós não sabemos se a informação será carregada exatamente no momento da inicialização. Para detectar e carregar a informação de forma correta, vamos utilizar o `OnChanges`.

2 - Implemente a classe OnChanges:

~~~typescript

...

export class StarComponent implements OnChanges{

    // Detecta o momento de mudança do componente
    ngOnChanges(){
    }
}
~~~

Quando temos uma variável que vai ser usada fora do componente para receber algum valor, precisamo anotá-la com `@input`.

3 - Vamos criar uma variável que recebe um valor externo chamada rating:

~~~typescript
export class StarComponent implements OnChanges{

    @Input()
    rating: number = 0;
...
~~~

4 - Crie uma variável local chamada `starWidth`, Ela será o tamanho de uma div que, conforme for o número do rating, esta div vai diminuir ou aumentar de tamanho. O tamanho da div sera a nossa starWidth:

~~~typescript

import { Component, Input, OnChanges } from "@angular/core";

@Component({ // Decorator
    selector: 'app-star' 
})

export class StarComponent implements OnChanges{

    @Input()
    rating: number = 0;

    starWidth: number;
    
    ngOnChanges(){
        // Cálculo maluco que vai ajustar a proporção da nossa div
        this.starWidth = this.rating * 94 / 5;
    }
}
~~~
 O cálculo maluco é baseado nas especificações do 
**Font Awesome**. Ele já tem um recurso de estrelas, e nós vamos instalá-lo agora.

5 - Pare a aplicação com CRTL+C e digite:
`npm install font-awesome`.

6 - Vamos importar esse layout de forma global:

![img/016.png](https://github.com/aluiziomonteiro/angular/blob/master/img/016.png)

7 - Agora precisamos criar um template e declará-lo no componente:

![img/017.png](https://github.com/aluiziomonteiro/angular/blob/master/img/017.png)

8 - Dentro do .html, vamos criar uma div geral, cujo o tamanho será igual ao valor da variável `starWidth` definida na classe de componente. Lembre-se que para se mesclar o valor de uma propriedade com o valor de uma variável, devemos colocá-la entre colchetes:

~~~typescript
<div [style.width.px]="starWidth">
</div>
~~~

9 - Criaremos uma outra div dentro dela, Isso porque a ideia aqui é que vamos ter uma div interna que será escondida conforme seja o valor da variável `starWidth`:

~~~typescript
<div [style.width.px]="starWidth" [title]="rating"> // alt
    <div style="width: 100px">

    </div>
</div>
~~~

10 - Por fim, vamos utilizar cinco `<span>` com as classes do awesome que nós acabamos de instalar. Serão cinco estrelas:

~~~typescript
<div [style.width.px]="starWidth" [title]="rating"> // alt
    <div style="width: 100px;">
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
    </div>
</div>
~~~

11 - Só agora é que vamos colocar um componente dentro de outro componente e isso vai ser feito colocando o seletor das estrelas dentro do rating do template:

* seletor no **star-component.ts**:

~~~typescript
...
@Component({
    selector: 'app-star', // <--
    templateUrl: './star-component.html' 
})

export class StarComponent implements OnChanges{

    @Input() // Vai virar um atributo do seletor
    rating: number = 0;
...
~~~

* template no **course-list-component.html**:

~~~typescript
...
@Component({ // Decorator
    selector: 'app-star', // <--
    templateUrl: './star-component.html' 
})
...
~~~

12 - Declare o novo componente no módulo raiz **app-module.ts**:

~~~typescript
...

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent.
    StarComponent // Nosso componente
  ],
  ...
~~~

Reinicie o server:
![img/018.png](https://github.com/aluiziomonteiro/angular/blob/master/img/018.png)

Podemos ver que as estrelas ainda não acompanham o valor do rating. Para isso, precisamos de mais um complemento.

13 - Crie um arquivo chamado **star-component.css** dentro da pasta **star**.

14 - Declare o path do **star-component.css** dentro do **star-component.ts** pois ele é um estilo exclusivo desse componente:

~~~typescript
...
@Component({ 
    selector: 'app-star',
    templateUrl: './star-component.html',

    // Este carinha recebe um array de styles
    styleUrls: ['./star-component.css'] 
})

export class StarComponent implements OnChanges{
...
~~~

15 - Crie uma classe chamada **crop** dentro do **star-component.css** e no overflow passe um hidden:

~~~typescript
.crop {
    overflow: hidden;
}
~~~

16 - declare a classe **crop** na div do **star-component.html**:

~~~typescript
<div class="crop" [style.width.px]="starWidth" [title]="rating">
    <div style="width: 100px;">
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
...
~~~

Caso as estrelas ainda não obedeçam a numeração do rating, você deve ir na classe star-component.ts e modificar o calculo maluco de 94 para 74. Um dos dois valores vai servir:

~~~typescript
...
  starWidth: number;
    
    ngOnChanges(){
        // this.starWidth = this.rating * 94 / 5;
        this.starWidth = this.rating * 74 / 5;
    }
}
~~~

O resultado é:

![img/019.png](https://github.com/aluiziomonteiro/angular/blob/master/img/019.png)
        

Recapitulando:

1 - Dentro do componente de estrela, criamos uma variável chamada **rating** e anotamos ela com @Input().

2 - Este input fará com que nossa variável possa receber um valor do componente externo e vire um atributo tag **<app-star>** que é a tag que representa o nosso componente de estrelas: `<app-star [rating]="course.rating"> </app-star>`.

3 - Para se passar o valor de uma variável de template ou de um componente para o template, é preciso colocá-la dentro de colchetes.


Visão Geral:

![img/Diagrama2.png](https://github.com/aluiziomonteiro/angular/blob/master/img/Diagrama2.png)
        


























