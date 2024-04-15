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

  a. Install Vite(Lets use suggested version) :   npm create vite@4.1.0     (Fill all and we'll be using Typescript variant)

  b. Run : cd "your_file_name" to browse to your folder where your project is. Ex: npm "First React Project"

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


# 6. HOOKS
--------------


# 7. STATES
------------


# 8. API WITH REACT
--------------------


