https://jkrizzyburger.herokuapp.com/

# Joe's Burger

Using Handlebars:

Overview

As a full-stack web applications scale, I will need to address several issues related to that growth: organization of the codebase, ongoing development and maintenance, and continued collaboration. So far, my applications are easily managed as they only consist of a handful of files. I could limit the code base to these few files, but as I add functionality to my application, each of those files would grow in length to hundreds, if not thousands, of lines of code composed of unnecessarily complicated logic. Imagine how difficult it would be to resolve merge conflicts!

In this unit I will modularize my applications following the MVC paradigm. Short for Model View Controller, MVC is an architectural pattern that structures our codebase in three distinct sections according to a software design philosophy known as the separation of concerns.

Up to this point, I have been serving static HTML files to our client based on its requests. This approach is suitable for very small applications, but what happens when my application begins to grow and I need hundreds or even thousands of unique pages? Rather than hard code the HTML for many, many pages, I can dynamically generate the HTML using a template engine. In implementing a template engine, I were separating the concern of client-side rendering from other aspects of the application. This is the View layer in the MVC framework. The template engine I will learn and implement in this unit is Handlebars.js.

The Model is the data layer of my application. It is concerned with the structure of my database and the logic used to retrieve that data. I will implement object-relational mapping to create reusable methods for querying our database.

Last, but not least, is the Controller.  You can think of it as the intermediary between the View and the Model. The Controller handles input from the user, interacts with the Model to create, read, update or delete data, and then returns the results of that query to the user via the View layer. I'm already familiar with these operations in our Express.js apps, but I will now separate my client-side and server-side routes from one another.

MVC may not be immediately intuitive, or obviously useful on a small scale, but becomes very useful when working collaboratively or adapting an application to changing technical needs. Team members no longer need to work on top of each other as concerns are separated into distinct sections and components of the stack can be swapped in and out without dramatically affecting the codebase. Say, for example, I want to migrate my app from MySQL to PostgreSQL. To do so would simply be a matter of updating the ORM. The same is true for the View layer if I wanted to implement a template engine other than Handlebars or migrate to a front-end framework such as React (which I will do before I'm done!).


Joe's Burger

Following the MVC design pattern, you'll create a burger logger with:

MySQL, changing to Sequelized, Node, Express, Handlebars and a homemade ORM.

Helpful Links:
MVC
Separation of concerns
Handlebars.js
Handlebars Website


![image](https://user-images.githubusercontent.com/46582302/65398341-8cd98d00-dd84-11e9-9ae5-ff4aa2970e0b.png)

