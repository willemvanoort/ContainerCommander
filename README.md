# Shipyard CP
=======

## Shipyard CP, A Docker Controller.

Code copyright Matt Wisniewski <contact.mattdylan@gmail.com> until future notice.

---

## Installation

Shipyard requires you to have node installed on a Linux server. If you are unfimilliar with NodeJS learn more here: http://nodejs.org 

Shipyard also requires Bower and Grunt. Additionally we make use of forever, to avoid screening our application. Install them globally with the following command.

> npm install -g grunt bower forever

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
