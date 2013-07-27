20130730-node-handson
=====================

Sample source for 20130730 node hands-on

## Install node

```
$ git clone git://github.com/creationix/nvm.git ~/.nvm
$ . ~/.nvm/nvm.sh
```

```
$ nvm install v0.10.15
```

## Install express, node-dev

```
$ npm install -g express node-dev coffee-script
```

## Create express project

```
### jade
$ express 20130730-hands-on

### ejs
$ express 20130730-hands-on -e

### hogan
$ express 20130730-hands-on --hogan

### Other template (e.g. handlebars)
$ express 20130730-hands-on

### less
$ express 20130730-hands-on -c less

### stylus
$ express 20130730-hands-on -c stylus
```

## Install dependencies

```
$ cd 20130730-hands-on

### If you choose other template
$ vi package.json

### Replace "jade" into "handlebars" and add "consolidate"
{
  "name": "application-name",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "start": "node app"
  },
  "dependencies": {
    "express": "3.1.0",
    "less-middleware": "*",
    "handlebars": "*",
    "consolidate": "*"
  }
}
```

## Run server

```
$ node-dev app.js
```

## Libraries

- Utils
-- [cofee-script](#)
-- [iced-coffee-script](#)
-- [async](#)
-- [conoliate](#)
- WebSocket
-- [socket.io](#)
- DB
-- [mongo](#)
-- [redis](#)
-- [sqlite](#)
