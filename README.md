# 0. HOW TO CREATE A REACT APP
-------------------------------
There are two common ways to create a react app. Namely : 
By using : 

- CRA (Create React App)
- VITE


   ## BUT WE WILL BE USING   --VITE-- BECAUSE IT'S GETTING POPULAR



 



# 1. HOW TO INSTALL REACT FILES
--------------------------------


  ## We need to install Vite first of all

  a. Install Vite(Lets use suggested version) :        (Fill all and we'll be using Typescript variant)

  b. Run : cd "your_file_name" to browse to your folder where your project is. Ex: cd "First React Project"

  c. Run : npm i      (To install all third party libraries)




# 2. REACT FILES STRUCTURE and CREATING YO FIRST REACT APP
----------------------------------------------------------



   ## Creating your first react web app
      ---------------------------------

      a. Run the server :  npm run dev      (Then you'll see a server where my web app is being run at)
      b. Follow the host link and you'll see a default website
      c. The page you'll see on that server is the default react website. To create your own, we will create them in components which we are about to see next






   ## 10 Basic files (3 folders and 7 files)
      --------------------------------------

      a. node_modules    (folder)      // Never touch this
      b. public          (folder)      // Where images, fonts and video files are located
      
      c. src             (folder):
        -----
      Contains JavaScript & CSS files & any other components or       resources are located. There will be a default file named App.tsx. App.tsx is a typescript file that will contain react components.
      We use .ts or .tsx extensions for :

      - ts : For plain typescript files
      - tsx: For react components



      d. gitignore
      e. index.html
      f. package-lock.json
      g. package.json
      h. tsconfig.json
      i. tsconfig.node.json
      j. vite.config.ts
----------------------------------------------------------------------------------------------------------------




# 3. COMPONENTS 
----------------
-   Go to src then create a file and give it a .tsx extension
-   2 Ways to create a react component. Either use javascript class or js function. Functions(better) 
-   Define a function and export it with: export default function_name;
-   Go to App.tsx
-   Import what you exported by : import function_name from './file_name';
-   Then u can use that function wherever whenever 
-   And also export every function defined too


# 4. EVENTS 
--------------
- React events allow you to respond to user interactions such as clicks, keyboard input, mouse movements, and more within your React applications.

- Examples are: onClick, onSubmit, onCopy, onPaste, onDrag, onPlay, onPause, onVolumeChange ,...


# 5. PROPS (Properties)
-----------
- Think of props as a way to pass information from one React component to another
- Components are like functions, and props are like the arguments you give to those functions
- Props help your components talk to each other, share information, and make your app more flexible and interactive.

- Define a function by specifying the variable type we want to access from the parent class too like 
function Toprops(props: { name: string }) {}




# 6. STATES
------------
- Each component in React can have its own state, which is an object that represents various pieces of data that component needs to keep track of.

- In React, state is managed using the useState hook



# 7. HOOKS
-----------
- A hook in react is a feature that allows you to use state and other React features without writing a class
- Hooks are functions that let you "hook" into React state and lifecycle features from function components.

- Lets take an example of an app that clicks and adds number of items into a shopping cart. Whenever I click +, the items in cart increase and for - it decrease. We'll useState hook. 

- By the above example, a hook will help me update the number of items to the cart. You'll learn more in the Hooks file. But below is a step by step of how to use hooks:

## a) Import a hook from React package
## b) Create a function or component as usual
## c) Declare an array which calls a hook





# 8. REACT JSX
---------------

- JSX means Javascript XML
- JSX allows us to write HTML in React.
- JSX makes it easier to write and add HTML in React.
- JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement()  and/or appendChild() methods.

- JSX converts HTML tags into react elements.




# 9. STYLING WITH REACT
------------------------
- Styling is done either in your component element
- Or can be done using App.css
- For more find Styling.tsx to learn more



# 10. Jsx fragments/elements vs functional components
-----------------------------------------------------
- Jsx fragments are like normal variables which store more data in react
ex:
const A = (
   <>
   <h1>Hello World</h1>
   </>
);

<div>{A}</div>



- Functional components are normal funtions in react
ex:
const B = () => {
   <>
   <h1>Hello World</h1>
   </>
};

<div><B/></div>



- Jsx elements are returned in {}
- Functional components are returned in </>

- Jsx elements cannot include logic, state, or props
- Functional cannot include logic, state, or props unlike jsx elements

- Jsx elements cannot use return()
- Functional components can use return() because they are functions



# 11. REACT ROUTER
------------------


# 12.REDUX IN REACT STATE MANAGEMENT
------------------------------------

