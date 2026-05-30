# Build React App using Node, Webpack and Babel
React is a JavaScript library which helps us to create UI components in a simpler way without worrying about
manipulating browser **DOM**.
<br/><br/>
![Sorry, but I tried my best](https://miro.medium.com/max/720/1*MhPvRNsjw50MQ7pU5jFUpw.png)
<br/><br/>
Most modern **front end** applications are written in the supersets of JavaScript. In order to run our application, we need to convert these modern **JavaScript** syntax into Vanilla JS before it loads into the browser, here comes the use of Babel.   
<br/>
**Babel** is a transpiler which helps us to transpile our next generation JavaScript code into browser compatible version.
<br/><br/>
We also need to serve our modules into browser, before we do that we first need to convert them into static assets. Hence we need some sort of module bundler to bundle our code, in order to do that we will use webpack.
<br/><br/>
**Webpack** helps us to bundle our modules with dependencies into static assets which can directly be served from any web server.
<br/><br/>
Following are the list of tools we will be using going forward.
<br/><br/>
* Node   
* Webpack 
* Babel  
* Editor 
<br/><br/>
So lets get started by creating our React application from scratch without using the **create-react-app** npx command.
<br/><br/>

For the sake of simplicity we will use **React CDN**.

>&lt;script src="https://unpkg.com/react@16/umd/react.development.js"></script>

>&lt;script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>

To serve our web application we will use a simple **http server** so lets install that.

>npm install --global http-server 

Let us now create our simple react component.
## App.jsx 
<Code language="javascript">
function App() {
 const title = "React";
 return (&lt;h2>Hello {title} &lt;/h2>);
}
export default App; 
</Code>
To render our App component we will create another file called index.jsx.

## index.jsx

<Code language="javascript">
import App from './App.jsx'
ReactDOM.render(&lt;App />, document.getElementById("root"));
</Code>  

You might have noticed that we used import and export which is the JavaScript modules syntax hence we require a module bundler to bundle our code.

Before we started configuring our webpack, let us first initialise the npm project using npm command.

>npm init

Now install webpack and webpack cli using npm.

> npm install --save-dev webpack webpack-cli

Now let us create our **webpack.config.js** at the root of the project.

<Code language="javascript">
module.exports = {
   mode:'production',
   entry: './index.jsx',
   output: { 
          filename: 'main.js'
           },
   module: {
      rules: [{
           test: /\.js$|jsx/,
           exclude: /node_modules/,
           use: {
              loader: 'babel-loader',
                   options: {
                      presets: [
                 ['@babel/preset-env', { targets: "defaults" }]]
                            }
                }
             }]
            }
};
</Code>  

Here in the above webpack config we have set the mode as production, entry point as index.jsx and in the output section we have used the main.js which will be created inside the dist folder if we have not specified any custom path.

As we have JavaScript modules in our project we need to use babel-loader.

> npm install -D babel-loader @babel/core @babel/preset-env 

To handle the **jsx** files support, we need one more package to add support for react jsx plugins, so lets install that as well.

> npm install --save-dev @babel/preset-react

Babel preset package requires one config file created at the root of the project which mentions the list of presets available to use.

## .babelrc

<Code language="javascript">
{
 "presets": ["@babel/preset-env", "@babel/preset-react"]
 }
</Code>
 
We can now include our webpack command inside scripts section of package.json file.

<Code language="javascript">
 "scripts": {
   "build": "webpack --config webpack.config.js"
 }
</Code>

After all those imports our package.json file will look like this.

<Code language="javascript">
{
  "name": "react-from-scratch",
  "version": "1.0.0",
  "description": "",
  "main": "webpack.config.js",
  "dependencies": {},
  "devDependencies": {
       "@babel/core": "^7.15.8",
       "@babel/preset-env": "^7.15.8",
       "@babel/preset-react": "^7.14.5",
       "babel-loader": "^8.2.3",
       "webpack": "^5.59.1",
       "webpack-cli": "^4.9.1"
      },
   "scripts": {
       "build": "webpack --config webpack.config.js"
      },
   "author": "Shamin Ali",
   "license": "ISC"
}
</Code>

Now we are good to run our build command as.

> $npm run-script build

After build is successful, a dist folder will be created containing main.js file , we can use that file in our index.html.

So lets create our index.html file with a single div with id “root” and use the main.js script file from the dist folder.

![Sorry, but I tried my best](https://miro.medium.com/max/720/1*FmAY1j-Hs1RZzs5LS3CRLA.png)

Now lets start our server using.

> $http-server

Our application is now started at url: **http://localhost:8080**
<br/><br/>
![Sorry, but I tried my best](https://miro.medium.com/max/720/1*mcc2sDImVKPkyswtkWJGmQ.png)
Hurray!! 😄 we have created our first React app from scratch.
<br/><br/>
Happy Coding!!
