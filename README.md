# Orango Examples

This project provides a range of examples on how to use Orango.

### Setup

Install dependencies

```
npm i
```

### Setup example Arango databases

You need to have docker installed

```
npm run docker
```

You will notice that the snippets reference `orango` like so...

```js
module.exports = async ({ orango }) => {
  ...
}
```

### Running examples

You can run the examples from the command line by using

```js
npm run examples
```

You will be presented with a menu of examples you can run...

![Screenshot 1](img/ss1.png)

### How this works...

This is to separate the model and controller from having to know the instance of 
Orango it is using. The Orango instance can be managed by your application. This
practice of passing it in allows you to have multiple databases that may share the
same models and is considered best practice.

Of course, how you choose to pass the reference of Orango is up to you. This library
does not force you to setup your project in any certain way. This information is 
provided so you can understand how the examples in this project have been setup.

### Injecting Orango

There is a helper called `di.js` that injects the Orango reference into the models 
and snippets.

