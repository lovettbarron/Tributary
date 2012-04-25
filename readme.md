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
All projects are based on Jade and partials.
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

TBD TBD