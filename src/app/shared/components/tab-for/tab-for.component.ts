import { Component, OnInit } from '@angular/core';
import { Itab } from '../../models/tab';

@Component({
  selector: 'app-tab-for',
  templateUrl: './tab-for.component.html',
  styleUrls: ['./tab-for.component.css']
})
export class TabForComponent implements OnInit {

  selectedFramework:string='angular'

tabArr:Array<Itab>=[
  {
    tabTitle:'angular 14',
    tabContent:'<strong>Angular 14</strong> :-The architecture of an Angular application relies on certain fundamental concepts. The basic building blocks of the Angular framework are Angular components.Components define views, which are sets of screen elements that Angular can choose among and modify according to your program logic and data  Components use services, which provide background functionality not directly related to views such as fetching data. Such services can be injected into components as dependencies, making your code modular, reusable, and efficient. Components and services are classes marked with decorators. These decorators provide metadata that tells Angular how to use them.'
  },
  {
    tabTitle:'react js',
    tabContent:'<strong>React</strong> :-The world live without mobile and web applications in this day and age. Everything is digitized, from booking cabs to ordering food to make bank transactions. Thanks to the efficient frameworks that provide a seamless user experience. One such robust frontend library is React. This tutorial on ‘what is React’ will help you understand the librarys fundamentals and work with a simple demo.  React-Frontend_LanguageReact is a framework that employs Webpack to automatically compile React, JSX, and ES6 code while handling CSS file prefixes. React is a JavaScript-based UI development library. Although React is a library rather than a language, it is widely used in web development. The library first appeared in May 2013 and is now one of the most commonly used frontend libraries for web development.React offers various extensions for entire application architectural support, such as Flux and React Native, beyond mere UI.ReactJS History.'
  },
  {
    tabTitle:'bootstrap',
    tabContent:'<strong>Bootstrap</strong>:-  Bootstris an HTML, CSS and JS libr that focuses on simplifying the development of informati web pages (as opposed to web applications). The primary purpose of adding it to a web project ito apply Bootstraps choices of color, size, font and layout to that projecAs such, the primary factor is whether the developers in charge find those choices to their likingOnce added to a project, Bootstrap provides basic style definitions for all HTML elementsThe result is a uniform appearance for prose, tables and form elements across web browsers.In addition, developers can take advantage of CSS classes defined in Bootstrap to further customize the appearance of their contents.For example, Bootstrap has provisioned for light- and dark-colored tables, page headings, more prominent pull quotes, and text with a highlight'
  },
  
]
  constructor() { }

  ngOnInit(): void {
  }

}
