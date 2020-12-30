#  Angular 8 Primeiros Passos

___
___

### Digital Innovation One

###### *(Este material é uma transcrição modificada de uma das disciplinas que compõem o Bootcamp da Everis, oferecido por: Digital Innovation One).*

* ###### *Aula ministrada por: Wesllhey Holanda*

* ###### *Transcrito e modificado por: Aluizio Monteiro*

[Everis |]( https://www.everis.com/)
[ DIO |](https://www.linkedin.com/school/digitalinnovation-one/about/)
[ Wesllhey Holanda |](https://www.linkedin.com/in/wesllhey-holanda/)
[ Aluizio Monteiro](https://www.linkedin.com/in/aluizio-monteiro/)

___

### Requisitos

 * HTML Básico.
 * JS Básico.
 * Bootstrap Básico.

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

Visão Geral do Projeto:

![img/Diagrama2.png](https://github.com/aluiziomonteiro/angular/blob/master/img/Diagrama2.png)

[Código do Projeto](https://github.com/aluiziomonteiro/angular/tree/3c2f63017e2ffb4ac572ad00732a7dbe16d7d339)
___
___

#  Angular 8 - Lidando com Vários Componentes
___
___

### O que é Injeção de Dependências

Veremos agora o que é Injeção de Dependência, alguns recursos e facilidades que ela nos trás.

1 - Crie um arquivo chamado **course-service.ts** dentro da pasta **courses**.

2 - Crie o código da classe **course-service.ts**:

~~~typescript
export class CourseService {
}
~~~

3 - Copie somente o array que está [neste arquivo](https://github.com/aluiziomonteiro/angular/blob/master/files/course-service.ts) e cole-o abaixo da classe **course-service.ts**:

4 - Importe a classe Curso: "CTRL+." em seguida pressione "Enter" duas vezes:

![img/020.png](https://github.com/aluiziomonteiro/angular/blob/master/img/020.png)

Vishe! Vamos organizar estes erros:

Obs 01: Altere todas as ocorrências da variável **releaseData** para **releaseDate**. Ela foi citada em todos os arquivos que estão na pasta **courses**.

Obs 02: Crie o atributo **description** na classe de modelo **course.ts**.

Obs 03: No componente **course-list-component.ts**, adicione as seguintes descrições:

 * **Para o id = 1:** `description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Forms.',`.

 * **Para o id = 2:** `description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de HTTP.',`.

![img/021.png](https://github.com/aluiziomonteiro/angular/blob/master/img/021.png)

Obs 04: Ajuste o template para exibir as alterações feitas corretamente:

![img/022.png](https://github.com/aluiziomonteiro/angular/blob/master/img/022.png)

Reinicie o server e teste a application:

![img/023.png](https://github.com/aluiziomonteiro/angular/blob/master/img/023.png)

Agora podemos continuar com a Injeção.

5 - Na classe **course-service.ts**, use um **decorator** para informar ao angular que esta classe é elegível para ser uma injeção de dependências. O atributo **providedIn** vai especificar o lugar que a classe será injetada:

~~~typescript

import { Injectable } from "@angular/core";
import { Course } from "./course";

@Injectable({ // Determina que esta classe fornece um injetável
    providedIn: 'root' // Local que será injetado 
})

export class CourseService {

...
~~~

ProvidedIn pode assumir três valores:
* **root:** Carregado junto com o módulo raiz da aplicação.

* **platform:** Injetor compartilhado por todos as páginas de um aplicativo.

* **any:** Fornece uma instancia única em cada módulo.

[Angular - Injectable](https://angular.io/api/core/Injectable)

6 - Crie um método para trazer todos os nossos cursos cadastrados:

~~~typescript
...
export class CourseService {

    retrieveAll(): Course[]{ // Retorna o nosso array de cursos
        return COURSES;
    }

}
...
~~~

Obs: Evite criar variáveis comuns em classes de serviço. Quando o angular carrega o módulo raiz, ele cria uma instância do nosso objeto e sai por aí replicando conforme for as referências. Variáveis comuns criadas aqui serão replicadas, ocupando memória sem uma real necessidade. Portanto, tenha somente métodos e variáveis estáticas dentro de suas services.

Vamos injetar nossa dependência **course-service.ts** dentro do componente **course-list-component.ts**:

7 - Apague o array da classe **course-list-component.ts**:

~~~typescript
import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({ 
    selector: 'app-course-list',
    templateUrl: './course-list-component.html' 
  })
export class CourseListComponent implements OnInit{ // OnInit
    courses: Course[] = []; // Array de Cursos vazio

    ngOnInit(){ // Método que será executado na inicialização
    
    }
}
~~~

Quando o angular carregar a nossa aplicação, ele carregará também o nosso **course-service.ts** entendendo que o mesmo está elegível para a injeção de dependências por causa da anotação **@Injectable** e quando o angular perceber que temos um construtor, que é do mesmo tipo do objeto elegível, o angu injeta o objeto no construtor.

8 - Declare um construtor para que a classe possa receber a dependências:

![img/024.png](https://github.com/aluiziomonteiro/angular/blob/master/img/024.png)

9 - Por fim, vamos igualar nosso array com o array que vem da classe de service:

~~~typescript
...
export class CourseListComponent implements OnInit{ 
    courses: Course[] = []; 

    constructor (private courseService: CourseService){
        this.courses = this.courseService.retrieveAll(); // Array da classe service
    }
    ngOnInit(){ 
    
    }
}
~~~

Teste a aplicação:

![img/025.png](https://github.com/aluiziomonteiro/angular/blob/master/img/025.png)


![img/Diagrama3.png](https://github.com/aluiziomonteiro/angular/blob/master/img/Diagrama3.png)

___

### Tratando Eventos com Data Binding

Vamos compreender um pouco mais sobre os recursos de **Two-Way Data Binding**, como ele funciona internamente e ainda vamos utilizar algumas hooks para facilitar algumas operações que faremos de forma dinâmica.

Vamos criar um input para filtrar cursos.

1 - Crie um label e um input dentro do template **course-list-component.thml**. Aqui vamos envolver estes elementos com divs para poder estilizá-los com as classes do Bootstrap:

~~~typescript
<h4>Course List</h4>

<div class="form-group row">
    
    <label class="col-sm-2 col-form-label" for="">Filter by</label>

    <div class="col-sm-10">
        <input type="text" name="" class="form-control">
    </div>

</div>

<table class="table table-striped">
    <thead>
        <th>Image</th>

...
~~~

Podemos ver que nosso layout já está agradável:

![img/026.png](https://github.com/aluiziomonteiro/angular/blob/master/img/026.png)

Quando precisarmos fazer alguma referência com Two-Way Data Binding, utilizaremos a seguinte sintaxe: `[(ngModel)]=""`. Dentro das aspas duplas nós informamos o nome do atributo que queremos linkar. Vamos chamá-la de `"filter"`.

~~~typescript
<h4>Course List</h4>

<div class="form-group row">
    
    <label class="col-sm-2 col-form-label" for="">Filter by</label>

    <div class="col-sm-10">
        <input [(ngModel)]="filter" class="form-control">
    </div>

</div>

<table class="table table-striped">
...
~~~

Agora é preciso definir o que é `"filter"` dentro do componente **course-list-component.ts**. Além disso vai ser preciso criar dois eventos: Um de entrada e outro de saída de informações:

2 - Crie uma string chamada `_filterBy`: O underline é para informar para outros desenvolvedores de que a variável só está sendo utilizada ali e que ela não deve ser alterada.

~~~typescript
export class CourseListComponent implements OnInit{ 
    courses: Course[] = []; 

    _filterBy: string;
...
~~~

3 - Crie um método `set filter()` que recebe uma string como parâmetro dentro do componente:

~~~typescript
...
    ngOnInit(){ 
    
    }

    set filter(value: string) {

    }

}
~~~

4 - Dentro do método `filter()`, iguale o `_filterBy` com `value`:

~~~typescript
...
    ngOnInit(){ 
    
    }

    set filter(value: string) {
      this._filterBy = value;
    }

}
~~~

5 - Vamos criar também um `get filter()` que será usado quando o componente for atualizado. Este método retorna `filterBy`: 

~~~typescript
...
    set filter(value: string) {
      this._filterBy = value;
    }

    // Usado quando o componente for atualizado
    get filter() {
      return this._filterBy;
    }
}
~~~

6 - Passe o miolo do construtor: `this.courses = this.courseService.retrieveAll();` para dentro do `ngOnInit()`:

~~~typescript
...
    _filterBy: string;

    constructor (private courseService: CourseService){}

    ngOnInit(){ 
      // Cursos que vão ser filtrados
      this.courses = this.courseService.retrieveAll();
    }

...
   ~~~

A ideia é que o `this.curso` vai ser filtrado conforme as letras estão sendo digitadas no input. Precisamos ajustar mais algumas coisinhas:

1 - Vamos avisar para os outros desenvolvedores de que o array de cursos é intocável. Use underline:
`_courses: Course[] = [];`

2 - Coloque underline em `this._courses` dentro do `ngInit()`.

3 - Crie um array vazio chamado `filteredCourses`:

~~~typescript
...
export class CourseListComponent implements OnInit{ 

    filteredCourses: Course[] = [];
    
    _courses: Course[] = []; 
...
~~~

4 - Agora, no momento da inicialização do nosso componente em `ngOnInit()`, iguale `filteredCourses` com `_courses`:

~~~typescript
...
    ngOnInit(){ 
      // This curso será filtrado baseado no que for digitado no input
      this._courses = this.courseService.retrieveAll();
      this.filteredCourses = this._courses;
    }
...
~~~

5 - Agora faremos com o que `filteredCourses` receba um array de cursos filtrados dentro do método `set filter()`:

~~~typescript
...
   // Usado quando digitarmos no input
    set filter(value: string) {
      this._filterBy = value;

      this.filteredCourses = this._courses.filter((course: Course) => 
      course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
    }
...
~~~

Destrinchando o código acima, temos:

![img/027.png](https://github.com/aluiziomonteiro/angular/blob/master/img/027.png)

Agora o nosso template não vai mais iterar `cursos`. Vamos trabalhar com `filteredCourses`.

6 - Vá para a table do template e itere em `filteredCourses`:

![img/028.png](https://github.com/aluiziomonteiro/angular/blob/master/img/028.png)

Neste momento, nosso filtro deve estar funcionando maravilhosamente bem:

![img/029.png](https://github.com/aluiziomonteiro/angular/blob/master/img/029.png)


Até aqui, fizemos uma comunicação de duas vias, onde temos a união de um método que lê mais um outro de input: **Two-Way Data Binding**. 

Este é um recurso interessante e nós podemos utilizá-lo para outros fins conforme for a nossa criatividade e necessidade.
___






### Transformando informações com pipes

* Altera a forma que um dado é exibido em nosso template.
Sintaxe:  `| name:'padrão'`.

* Pipes personalizados.

* Pipes default do Angular.

* Aceita concatenação de pipes.

1 - Abra o **course-list-component.ts**.

2 - Adicione um pipe para formatar a data e outro para transformar as letras do código em minúsculas da seguinte forma:

~~~typescript
...
 <tbody>
        <tr *ngFor="let course of filteredCourses">
            <td> <img [src]="course.imageUrl" width="40" height="40"> </td>
            <td>{{course.name}}</td>
            <td>{{course.price}}</td>
            <td>{{course.code | lowercase}}</td>
            <td>{{course.description}}</td> 
            <td>{{course.releaseDate | date: 'dd/mm/yyyy'}}</td> 
            <td>
...
~~~


![img/030.png](https://github.com/aluiziomonteiro/angular/blob/master/img/030.png)



[Pipes Angular](https://angular.io/guide/pipes)

Vamos criar um pipe que transforma o traço **"-"** do código em um espaço em branco:

1 - Crie um arquivo chamado: **replace.pipe.ts** dentro da pasta `app/pipe/`.

2 - Crie uma classe exportável chamada **ReplacePipe** e adicione um decorator para indicar que ela é um **pipe**:

~~~typescript

import { Pipe } from "@angular/core";

@Pipe({

})

export class ReplacePipe {

}
~~~

3 - Defina um nome para o pipe no decorator. Este nome será usado para invocar o nosso pipe:

~~~typescript

@Pipe({
    name: 'replace'
})
~~~

4 - Implemente a interface PipeTransform, pois dentro dela nós temos o método `transform()`, que será usado para fazer uma transformação.

* O primeiro será uma string que corresponde ao valor do nosso campo `code`.

* O segundo parâmetro será o carácter que vamos modificar.

* O terceiro parâmetros será o valos depois de ser atualizado.

5 - Precisamos retornar o valor que será substituído e o valor substituidor:

~~~typescript
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'replace'
})

export class ReplacePipe implements PipeTransform{

    transform(value: string, char: string, valueToReplace: string) {
        return value.replace(char, valueToReplace);
    }
}

~~~

Nosso pipe está criado.
Agora vamos chamá-lo dentro do nosso component.

1 - Abra o arquivo **course-list-component.ts** e concatene o pipe para o campo code:

`<td>{{course.code | lowercase | replace: '-'; ' '}}</td>`


Nosso pipe não foi encontrado porque é preciso fazer com que ele seja carregado no início da nossa aplicação:

![img/031.png](https://github.com/aluiziomonteiro/angular/blob/master/img/031.png)

2 - Declare o nosso `replace` dentro do **app.module** para que ele possa ser carregado no início da nossa aplicação:

![img/032.png](https://github.com/aluiziomonteiro/angular/blob/master/img/032.png)

Não ficou mais bonito do que estava antes, mas o objetivo é demostrar como podemos criar nossos pipes e concatená-los.

![img/033.png](https://github.com/aluiziomonteiro/angular/blob/master/img/033.png)

Pipe são muito utilizados. Sempre que quisermos alterar a formatação de informações em nossos templates, devemos pensar em pipes.

Visão Geral dos Arquivos


![img/Diagrama4.png](https://github.com/aluiziomonteiro/angular/blob/master/img/Diagrama4.png)
___

### Protegendo Rotas com Guards


Permitem a navegação entre os componentes da aplicação.

Vamos criar um componente para representar uma **NavBar**:

1 - Crie o arquivo **nav-bar.component.ts** dentro de **app/nav-bar/**.

2 - No arquivo, crie uma classe chamada `NavBarComponent`:

~~~typescript
export class NavBarComponent{
    
}
~~~

3 - Como ela é um component, coloque um decorator de component nela para que seja possível definir um seletor e um template:

~~~typescript
import { Component } from "@angular/core";

@Component({ 
    selector: 'app-nav-bar', 
    templateUrl: './nav-bar.component.html'
})
export class NavBarComponent{
    
}
~~~

4 - Crie o template para este component na pasta que pertence a ele, isto é, **app/nav-bar/**. O template é um .html com o mesmo nome do component: **nav-bar.component.html**.

5 - aqui não vamos tratar das tags que compõem esta nav-bar, portanto, cole o conteúdo deste [arquivo](https://github.com/aluiziomonteiro/angular/blob/master/files/nav-bar.component.odt) dentro do template.

6 - Declare o componente de navbar dentro do **app.component.html**, pois ele é quem é o template da nossa página:

~~~typescript
<app-nav-bar></app-nav-bar> // Navbar

<div class="container">
    <app-course-list></app-course-list>
</div>
~~~

Aproveite que está no **app.component.html** e dê uma melhorada no layout da nossa lista:

~~~typescript
...
<div class="container mt-4">
    <app-course-list></app-course-list>
</div>
~~~
7 - Reinicie o server.

Temos um erro informando que o nosso componente  não foi encontrado. Isso porque, neste momento, a nossa aplicação está assim:

![img/Diagrama5.png](https://github.com/aluiziomonteiro/angular/blob/master/img/Diagrama5.png)

8 - Precisamos declarar nosso navbar em **app.module.ts** para que ele seja carregado junto com a aplicação:

~~~typescript
...
@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent, 
    StarComponent, 
    ReplacePipe, 
    NavBarComponent // Navbar
  ],
...
~~~

Agora sim temos isto:

![img/Diagrama6.png](https://github.com/aluiziomonteiro/angular/blob/master/img/Diagrama6.png)

9 - Reinicie o servidor e veja o resultado no browser:

![img/034.png](https://github.com/aluiziomonteiro/angular/blob/master/img/034.png)

Vamos criar a nossa primeira rota.

1 - Abra o **app.module.ts** e veja nossa parte de imports:

![img/035.png](https://github.com/aluiziomonteiro/angular/blob/master/img/035.png)

Todos os módulos que formos importar, vamos utilizar o módulo de imports.

2 - Importe o pacote de rotas do angular **RouterModule**;

~~~typescript
...
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { RouterModule } from '@angular/router'; // Módulo de Rotas

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent, 
    StarComponent, 
    ReplacePipe, 
    NavBarComponent 
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    RouterModule // Módulo de Rotas
  ],
...
~~~

3 - Para que o angular carregue nossa aplicação na inicialização, vamos utilizar a declaração: **RouterModule.forRoot([])**

O **forRoot([])** espera receber um array de rotas.
Vamos declarar todas as rotas da nossa aplicação dentro dele.

4 - Configure uma rota da seguinte maneira:

~~~typescript
...
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'courses', pathMatch: 'full'
      }
    ])
  ],
...
~~~
Primeiro o caminho, que é uma rota vazia. Essa será a rota inicial do aplicativo. Depois temos o redirecionamento, que alterará nosso caminho para **courses** ao encontrar a rota vazia. Depois, temos o pathMatch. Não detalharemos muito. Basta saber que isso fará a rota vazia casar nosso redirecionamento.

5 - Crie outro objeto que corresponda a nossa rota de listagem de cursos:

~~~typescript
...
imports: [
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'courses', pathMatch: 'full'
      },
      { // quando for escrito "courses" na url do browser vai ser acessado o componente "CourseListComponent"
        path: 'courses', component: CourseListComponent
      }
    ])
...
~~~

Como estamos usando rotas, agora não faz mais sentido utilizarmos seletores para acessar nossas páginas. Quem vai acessar as páginas agora é o caminho digitado na url do browser.
O uso do selector é ideal para adicionarmos componentes dentro de outros componentes.

6 - Vá para o componente **course-list-component.ts** e retire o `selector`:

![img/036.png](https://github.com/aluiziomonteiro/angular/blob/master/img/036.png)

7 - Retire a as tags: `<app-course-list></app-course-list>` de **app.component.html**.

Precisamos informar ao angular onde esta troca "switch" será realizada. No caso específico desta aplicação, esta troca será feita na div container do **app.component.html** com o selector de `router-outlet`:

~~~typescript
<app-nav-bar> </app-nav-bar>

<div class="container">
	// Avisa ao angular que quando uma rota for modificada, o resultado será carregado aqui.
    <router-outlet></router-outlet>
</div>
~~~

A partir deste momento, não estamos mais trabalhando com `selectors` e sim com `routers`:


![img/037.png](https://github.com/aluiziomonteiro/angular/blob/master/img/037.png)

O Angular possui duas rotas padrão:

a) `''` - É a rota padrão `localhost:4200/`; e

b) `**` - É quando ele não encontra a rota informada na url.

Vamos criar mais algumas rotas padrões do Angular.

1 - Crie um novo componente chamado de **error-404.component.ts** dentro de **app/error-404/**:

~~~typescript
import { Component } from "@angular/core";

@Component({
    templateUrl: './error-404.component.html'
})
export class Error404Component {
    
}
~~~

2 - Crie o template dele na mesma pasta:

![img/038.png](https://github.com/aluiziomonteiro/angular/blob/master/img/038.png)

3 - Defina nosso novo componente em **app.module.ts**.

4 - Passe o componente na Url de erro:

![img/039.png](https://github.com/aluiziomonteiro/angular/blob/master/img/039.png)

5 - Teste alguma url estranha no browser:


![img/040.png](https://github.com/aluiziomonteiro/angular/blob/master/img/040.png)

Qualquer rota digitada, que não existir em nossa aplicação, será redirecionada para esta página de erro.

Conclusão:

* O Angular disponibiliza duas rotas predefinidas que podemos usar: rota padrão e rota inexistente.

* Podemos criar nossas próprias rotas, como foi o caso da rota `courses` que redireciona para `CourseListComponent`.

* Quando trabalhamos com rotas, não faz sentido utilizar `selector`.

* Importante informar ao Angular, onde a troca de componentes será realizada com `<router-outlet></router-outlet>` que é o responsável por fazer esta troca.

___

### Ativando Rotas Através de Links e de Componentes

Vamos criar botões para acessar informações sobre os nossos cursos.

1 - Abra **course-list-component.html** e na tag `<td>`, que corresponde aos options, vamos criar um link com a propriedade `[routerLink]=""`. Esta propriedade do Angular, espera um array de links o quais queremos acessar.

2 - Passe para o `[routerLink]` a Url que vamos acessar e o id correspondente ao curso. Este id aqui é um **Path Variable**:

~~~typescript
...
<tbody>
        <tr *ngFor="let course of filteredCourses">
            <td> <img [src]="course.imageUrl" width="40" height="40"> </td>
            <td>{{course.name}}</td>
            <td>{{course.price}}</td>
            <td>{{course.code | lowercase | replace: '-': ' '}}</td>
            <td>{{course.description}}</td> 
            <td>{{course.releaseDate | date: 'dd/mm/yyyy'}}</td> 
            <td>
                <app-star [rating]="course.rating"> </app-star>
            </td>
            <td> <!--Options-->
                <a [routerLink]="['/courses/info', course.id]" class="btn btn-primary" >Edit</a> 
            </td>
        </tr>
    </tbody>
</table>
~~~


* No `routerLink`, informamos o caminho que queremos acessar. 

* Passamos o id referente ao curso que está na mesma linha do botão.

* Declaramos uma classe do Bootstrap para estilizar o botão.

* Definimos o texto do botão.

3 - Crie o componente **courses/course-info.component.ts** e o template **course-info.component.html** para corresponder à nossa rota:

![img/041.png](https://github.com/aluiziomonteiro/angular/blob/master/img/041.png)

4 - Crie uma nova rota em **app.module.ts** para triggar o nosso componente.

5 - Declare o nosso componente no ngModule para que angular entenda que ele é um componente.

Código do ngModule:

~~~typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list-component';
import { StarComponent } from './star/star-component';
import { ReplacePipe } from './pipe/replace.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { RouterModule } from '@angular/router'; // Módulo de Rotas
import { Error404Component } from './error-404/error-404.component';
import { CourseInfoComponent } from './courses/course-info.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent, 
    StarComponent, 
    ReplacePipe, 
    NavBarComponent,
    Error404Component,
    CourseInfoComponent // Novo componente
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'courses/info', component: CourseInfoComponent //Nova rota
      },
      {
        path: 'courses', component: CourseListComponent
      },
      {
        path: '**', component: Error404Component 
      },
      {
        path: '', redirectTo: 'courses', pathMatch: 'full'
      } 
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
~~~

Observe que nossa rota vai receber o id que foi passado no link criado anteriormente em **course-list.component.html**.

~~~typescript
 <td> <!--Options-->
                <a [routerLink]="['/courses/info/', 'course.id']" class="btn btn-primary" >Edit</a> 
            </td>
~~~

6 - Em nosso **course-info.component.ts** vamos carregar o id do curso na inicialização do componente.

Para que isso seja possível, nossa classe deve implementar `OnInit`, criar uma variável para receber o valor do id do curso, ter um construtor para injetar a dependência e precisa ter, como parametro, um ActivatedRoute, pois ele é quem permite que informações sejam capturadas da rota que está ativa no momento:

~~~typescript
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit{
    courseId: number;

    constructor(private activateRoute: ActivatedRoute){

    }
    ngOnInit(){
        this.courseId = +this.activateRoute.snapshot.paramMap.get('id');
    }

}
~~~

Observe:

~~~typescript
...
   ngOnInit(){
        // Captura o estado da rota neste momento, obtendo o parametro "id",
        // e atribui ao "courseId"
        this.courseId = +this.activateRoute.snapshot.paramMap.get('id');
    }
...    
~~~

A informação que vem da rota é uma String. Para capturar este `id` string e atribuir à um number, utilizamos o sinal de `+`.

7 - Vamos exibir este `id` em **course-info.component.html**:

~~~typescript
<h2>Course id = {{ courseId }}</h2>
~~~

8 - Reinicie o server e teste:

![img/042.png](https://github.com/aluiziomonteiro/angular/blob/master/img/042.png)

9 - Clique em **Edit**:

![img/043.png](https://github.com/aluiziomonteiro/angular/blob/master/img/043.png)

10 - Retire os `href` do **nav-bar.component.html** e coloque um `routerLink` para courses:

~~~typescript
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a [routerLink]="['/courses']" class="navbar-brand">Course Manager</a>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <a [routerLink]="['/courses']" class="nav-link">Courses</a>
            </li>
        </ul>
    </div>
</nav>
~~~

11 - Para fazer com que o link se destaque quando estiver ativo, adiciona a propriedade: `routerLinkActive="active"` na tag `a`: 

~~~typescript
 <li class="nav-item">
                <a [routerLink]="['/courses']" routerLinkActive="active" class="nav-link">Courses</a>
            </li>
~~~

Recapitulando:

* Criamos uma rota que passa um valor pela Url.

* Utilizamos o `ActivatedRouter` para pegar este parâmetro.

* Acessamos uma rota passando o id do curso com o `routerLink`.

* Utilizamos a classe `active`, chamada com o `routerLinkActive`, para deixar o nosso link ativo.

___

### Trabalhando com Formulários e Templates

Vamos trabalhar com a parte de edição de formulários, validação e rotas:

1 - Crie um método em **course-service.ts** que receba o `id` como parâmetro e retorne um curso:

~~~typescript
...
export class CourseService {

    retrieveAll(): Course[]{ // Retorna o nosso array de cursos
        return COURSES;
    }

    retrieveById(id:number): Course { // filtro
        
    }

...
~~~
2 - O retorno desse método será um `find` que fará uma varredura em nossos elementos e assim que ele encontrar a primeira ocorrência do item buscado, ele a retornará:

~~~typescript
...
retrieveById(id:number): Course { // Filtra um curso pelo id
        return COURSES.find((courseIterator: Course) => courseIterator.id === id)
    }
...
~~~

3 - Altere o `courseId:number` para `course: Course;`.
4 - Injete CourseService no construtor.
5 - Adicione o método `retrieveById` que acabamos de criar, dentro do `ngOnInit()`:

~~~typescript
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";
import { CourseService } from "./course-service";

@Component({
    templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit{
    course: Course;

    constructor(private activateRoute: ActivatedRoute, private courseService: CourseService){

    }
    ngOnInit(){
        this.course = this.courseService.retrieveById(+this.activateRoute.snapshot.paramMap.get('id'));
    }
}
~~~
Já temos o nosso curso filtrado e  agora vamos passar para o template.

1 - Apague tudo do **course-info.component.html**, pois vamos construir um formulário. Esta será a base:

~~~html
<h2>Course Info</h2>

<hr/>

<form>

</form>
~~~

2 - Aqui nós vamos utilizar **Variáveis de Template**:

~~~typescript
	<h2>Course Info</h2>

<hr/>

<form #courseForm="ngForm">
    <div class="form-group row">
        <label class="col-sm-2 col-form-label" for="">Name</label>
        <div class="col-sm-10">
            <!--Faz o TWDB com o name do course-->
            <input [(ngModel)]="course.name" name="name" class="form-control">
        </div>
    </div>
</form>
~~~
3 - Passe outra variável de template para `ngModel`:
~~~typescript
...
        <div class="col-sm-10">
            <!--Passa uma variável de template de volta-->
            <input [(ngModel)]="course.name" name="name" #courseName="ngModel" class="form-control">
        </div>
...
~~~
Veja se o nome do curso apareceu no Browser:

![img/044.png](https://github.com/aluiziomonteiro/angular/blob/master/img/044.png)

Temos algumas variáveis de interpolação que faz bem saber que elas existem. Adicione um `required` no `input` e teste cada uma delas e depois pode removê-las:

~~~typescript
<div class="col-sm-10">
            <input [(ngModel)]="course.name" required name="name" #courseName="ngModel" class="form-control">
        
            {{courseName.value}} <!--Obtém o valor-->
            {{courseName.valid}} <!--Valida-->
            {{courseName.invalid}} <!--Também valida-->
        </div>
~~~

4 - Vamos agora passar uma classe dinâmica para o `input`:

~~~typescript
...
<input [(ngModel)]="course.name" required name="name" #courseName="ngModel" [ngClass]="{'is-invalid': courseName.invalid}" class="form-control">
...
~~~
O `ngClass` indica que se o `value` do `input` for `invalid`, então `courseName` será `invalid`. Como nós informamos que o `input` é `required`, se apagarmos o conteúdo dele, ele vai ficar vermelho:

![img/045.png](https://github.com/aluiziomonteiro/angular/blob/master/img/045.png)

Ainda dentro da `<div class="col-sm-10">`, crie outra div para que possamos gerar um feedback de erro:

~~~typescript
...
<div class="col-sm-10">
            <input [(ngModel)]="course.name" required name="name" #courseName="ngModel" [ngClass]="{'is-invalid': courseName.invalid}" class="form-control">
            
            <div class="invalid-feedback">
                <span>Course name is required</span>
            </div>
        </div>
...
~~~

Abra  o Browser e apague novamente o conteúdo do `input`:

![img/046.png](https://github.com/aluiziomonteiro/angular/blob/master/img/046.png)

Faremos o mesmo para cada atributo do nosso Curso:

![img/047.png](https://github.com/aluiziomonteiro/angular/blob/master/img/047.png)

O código do template **course-info.component.html** mais a inclusão de dois botões ao final da página, ficou assim:

~~~typescript
<h2>Course Info</h2>

<hr/>

<form #courseForm="ngForm">
    <div class="form-group row">
        <label class="col-sm-2 col-form-label" for="">Name</label>
        <div class="col-sm-10">
            <input [(ngModel)]="course.name" required name="name" #courseName="ngModel" [ngClass]="{'is-invalid': courseName.invalid}" class="form-control">
            
            <div class="invalid-feedback">
                <span>Course name is required</span>
            </div>
        </div>
    </div>

    <div class="form-group row">
        <label class="col-sm-2 col-form-label" for="">Price</label>
        <div class="col-sm-10">
            <input [(ngModel)]="course.price" required name="price" type="number" #coursePrice="ngModel" [ngClass]="{'is-invalid': coursePrice.invalid}" class="form-control">
            
            <div class="invalid-feedback">
                <span>Course price is required</span>
            </div>
        </div>
    </div>

    <div class="form-group row">
        <label class="col-sm-2 col-form-label" for="">Code</label>
        <div class="col-sm-10">
            <input [(ngModel)]="course.code" required name="code" #courseCode="ngModel" [ngClass]="{'is-invalid': courseCode.invalid}" class="form-control">
            
            <div class="invalid-feedback">
                <span>Course code is required</span>
            </div>
        </div>
    </div>

    <div class="form-group row">
        <label class="col-sm-2 col-form-label" for="">Description</label>
        <div class="col-sm-10">
            <textarea [(ngModel)]="course.description" required name="description" #courseDescription="ngModel" [ngClass]="{'is-invalid': courseDescription.invalid}" class="form-control">
            </textarea>
            <div class="invalid-feedback">
                <span>Course description is required</span>
            </div>
        </div>
    </div>

    <div class="form-group row">
        <label class="col-sm-2 col-form-label" for="">Duration</label>
        <div class="col-sm-10">
            <input [(ngModel)]="course.duration" required name="duration" type="number" #courseDuration="ngModel" [ngClass]="{'is-invalid': courseDuration.invalid}" class="form-control">
            
            <div class="invalid-feedback">
                <span>Course duration is required</span>
            </div>
        </div>
    </div>

    <div class="form-group row">
        <label class="col-sm-2 col-form-label" for="">Rating</label>
        <div class="col-sm-10">
            <input [(ngModel)]="course.rating" required name="rating" type="number" #courseRating="ngModel" [ngClass]="{'is-invalid': courseRating.invalid}" class="form-control">
            
            <div class="invalid-feedback">
                <span>Course rating is required</span>
            </div>
        </div>
    </div>

    <div class="form-group row">
        <label class="col-sm-2 col-form-label" for="">Release Date</label>
        <div class="col-sm-10">
            <input [(ngModel)]="course.releaseDate" required name="releaseDate" type="date" #courseReleaseDate="ngModel" [ngClass]="{'is-invalid': courseReleaseDate.invalid}" class="form-control">
            
            <div class="invalid-feedback">
                <span>Course release date is required</span>
            </div>
        </div>
    </div>
    <!--Margem à direita 2 "mr-2"-->
    <button class="btn btn-primary mr-2">Save</button>
    <button class="btn btn-secondary">Back</button>
</form>
~~~

O Angular consegue verificar se todos os atributos estão válidos. Vamos habilitar o botão `Save` somente se eles estiverem válidos.
~~~typescript
...
<!--Colchetes são sempre usados para fazer referência à variáveis de templates e à variáveis de componentes-->
<button [disabled]="courseForm.invalid" class="btn btn-primary mr-2">Save</button>
...
~~~

Caso algum campo esteja inválido, o botão será desabilitado. Ele voltará a ficar disponível quando todos os campos estiverem okay.

![img/048.png](https://github.com/aluiziomonteiro/angular/blob/master/img/048.png)

Existe uma série de propriedades que podem ser aplicadas para as variáveis de template. Visite: [Angular.io](https://angular.io/guide/template-syntax)

Agora vamos capturar o clique do botão e chamar um método `save()`.

1 - Nosso service **course-service.ts** ficará assim:

~~~typescript
import { Injectable } from "@angular/core";
import { Course } from "./course";

@Injectable({ // Determina que esta classe fornece um injetável
    providedIn: 'root' // Local que será injetado 
})

export class CourseService {

    retrieveAll(): Course[]{ // Retorna o nosso array de cursos
        return COURSES;
    }

    retrieveById(id:number): Course { // Filtra um curso pelo id
        return COURSES.find((courseIterator: Course) => courseIterator.id === id)
    }

    // Espera receber um curso
    save(course: Course): void {
    //Se o curso possuir um id, ele vai alterar o elemento correspondente em nosso array
        if(course.id){
            // Quando a condição for verdadeira, será retornado o index do nosso array
            const index = COURSES.findIndex((courseIterator: Course) => courseIterator.id === course.id)
            COURSES[index] = course;
        } 
    }

}
...
~~~


2 - Abra o componente **course-info.component.ts e crie o método save para passar o curso por ele:

~~~typescript
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";
import { CourseService } from "./course-service";

@Component({
    templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit{
    course: Course;

    constructor(private activateRoute: ActivatedRoute, private courseService: CourseService){

    }
    ngOnInit(){
        this.course = this.courseService.retrieveById(+this.activateRoute.snapshot.paramMap.get('id'));
    }

    save(): void{
        this.courseService.save(this.course);
    }
}
~~~
Crie uma rota no botão **back** para voltar para a lista de cursos:

~~~typescript
 <button [routerLink]="['/courses']" class="btn btn-secondary">Back</button>
</form>
~~~

Teste o resultado no Browser:

![img/049.png](https://github.com/aluiziomonteiro/angular/blob/master/img/049.png)

Conclusão:
* Trabalhamos um pouco mais com formulários.
* Variáveis de template.
* Verificações no formulário.
* Adição de classes de validação.

[Código do projeto](https://github.com/aluiziomonteiro/angular/archive/cfe09393bdaace057be163f070b2cd0c34fb34af.zip)

___

### Segregando Responsabilidades
___
___

Vamos alterar a nossa classe de  serviço para que a mesma faça requisições http. No backend, vamos utilizar node.js.

1 - Copie a pasta [server](https://github.com/aluiziomonteiro/angular/tree/master/files/assets/server), para dentro da pasta assets do projeto. Esta pasta contém dois arquivos que serão utilizados para startar nosso projeto.



