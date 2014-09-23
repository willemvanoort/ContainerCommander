# AcixsCP
=======

## Acixs Control Panel

Code copyright Matt Wisniewski <contact.mattdylan@gmail.com> until future notice.

---

## Installation

AcixsCP requires you to have node installed on a Linux server. If you are unfimilliar with NodeJS learn more here: http://nodejs.org 

AcixsCP also requires Bower and Grunt. Install them globally with the following command.

> npm install -g grunt bower

Next we will load the needed front end dependancies with Bower, and run our inital build script with grunt.

> bower install && grunt build


---

## Grunt Commands

Strip: strip the package down by removing node_modules, bower components and other components that can be installed via our package managers. 

> grunt strip

Build: Build the package, ready to deploy.

> grunt build

Grunt: Build the package and run jshint

> grunt
