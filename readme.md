Tributary
=========
A collaborative prototyping system and boilerplate for design studios to rapidly explore web application design in its native environment.

It's based on NodeJS, ExpressJS, Bootstrap, and the Jade templating language.

Requirements:
-------------
```
NodeJS 0.6.x
Expressjs 2.x
Jade
```

How to install me
-----------------
Install nodeJS on your system. It will come with NPM.
https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager

Checkout this project from github with
`git clone git@github.com:readywater/tributary.git`

Install expressJS and Jade.
`sudo npm install -g express jade`


How to use me
-------------
All projects are based on Jade and partials. CSS, images, and js files are placed in the "public" folder. All files placed in the public 
Parts of a large application are divided into folders. For example
```
project
	- global
		- header
		- footer
	- pages
		- home
		- profile
```

Individual pages are divided into folders. Each folder will have an index.jade, template.jade, and additional components as necessary.



### index.jade
Each folder will have an index.jade file. Index files should _never_ have content based information. 
They should mostly be used for managing linked files, includes, and any kind of iteration.

### template.jade
Structure and template for a page is defined in this file. Not all the styling of the page needs to be here, but content buckets, partial placement, and similar should be here.

MORE TO COME

How to use me in teams
----------------------
Let's say we have three primary users categories.
> Designer
> Documentation responsibility
> Technical responsibility

Everyone is a designer. However, some designers have more responsibility than others.

#### Technical responsibility
This is the person or people who are responsible for the index.jade files and the overall structure. They need a level of technical expertise in order to navigate the complexities of Jade recursion. I've tried to hide of the complexity as possible but a few basic pieces of knowledge are required.
These include an understanding of:
```
Unix file systems
Recursion and linking
Javascript (mostly jQuery)
Twitter bootstrap and LESS/CSS
```
#### Documentation responsibility
This person is responsible for recording both internal and external documentation. The entire site can be rendered as a PDF via the `localhost/renderPDF`. 
This document structure is defined by the `sitedoc.txt` file.
A simple site might look like this:
```
TBD
```