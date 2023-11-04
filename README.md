### terminal commands to set up the react app / on mac ###

   $ yarn
   $ yarn create react-app city-site-frontend // this creates the react app on your local device 
   $ cd city-site-frontend
   $ git add README.md
   $ git commit -m "initail commit"
   $ git branch -M main // this will create the main branch
   $ git branch // run this to make sure the main branch was created 
   $ git remote add origin https://github.com/LouisBrizuela/city-site-frontend.git // this link is the repo that you created, this will link the react app on your local device to git hub
   $ git push -u origin main // this will push up the app to git hub
   $ git checkout -b setup // this will create a new branch 'setup' can be named whatever you want but you must run $ git checkout -b <name of branch here>
   ### below are useful react component libraries that must be added to achieve certain looks *** order of adding them doesnt matter ###
   $ yarn add react-router-dom 
   $ yarn add bootstrap
   $ yarn add reactstrap

   ### Setup ###
   *** useful extension to use will be ES7+ by dsznajder it will make creating boilerplates for js files alot easier, by using the shortcut --> rfce <-- on an emtpy .js file ***

   import these to your src/index.js file at the top // these will allow you to use the libraries that we installed earlier and keep your UI in sync with your URL

     import { BrowserRouter } from 'react-router-dom';
     import 'bootstrap/dist/css/bootstrap.min.css';

    make sure to nest your <App /> inside of <BrowserRouter>
    like this
    <BrowserRouter>
    <App />
    </BrowserRouter>
    
   Then we create our components, pages, and assets folder inside our src folder. this is where we will place all of our logic, pictures and useful stuff that will be used on pages.
    
  *** also make sure to delete everything inside src/App.js and src/App.css because we will be replacing all of it with our own code. ***

    inside of our src/components folder we will create our Header.js and Footer.js files

  inside of src/pages we will add our pages that we want our user to navigate too, in our case its Faq.js and Home.js *** make sure to add .js to each file so we can use javascript and common practice is to have the naming convention be in PascelCase. this goes for the components as well

### setting up our App.js ###
  We have to import all the pages and components that we will be using, App.js is like our central hub, we dont use any logic here for the most part we want to keep this part nice and clean and just call stuff from here

      import React from 'react'
      import Home from './pages/Home'
      import Faq from './pages/Faq'
      import Header from './components/Header'
      import Footer from './components/Footer'
      import './App.css'
      import { Route, Routes } from 'react-router-dom' 

  we will set up our routes, we do this so we have connection between pages, header and footer are not inside routes because we want every page to have a footer and header.
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/faq' element={<Faq />} />
      </Routes>
      <Footer />
    </>