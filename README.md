# LunchTime #

An app for easy group catering and ordering.
Upon signing up and resgistering with a group, a designated admin can take
charge of collecting orders, and tracking payment statuses.


### Deployed to Heroku using MongoDB, Express, React, and Node (MERN)
https://lunchytime.herokuapp.com/

- [Using the App](#using-the-app)
- [Under the Hood](#under-the-hood)
- [yarn Commands](#yarn-commands)
- [Directory Structure](#directory-structure)



## Using the App
** Upon entering the application, register as a new user using the Signup button
at the bottom of the slider menu.

** Once you've signed up, simply choose a restaurant and place an order!

** Orders are placed by clicking on menu items to select them, and clicking on the
submit button to send the order to the admin.

** The admin can view all submitted orders for the group as well as delete individual orders.



## Under the Hood
Our app was NOT created using the standard create-react-app boilerplate. Rather, we configured babel and webpack ourselves in order for us to meet our specific needs.

Our MongoDB currently uses Mongoose to make CRUD calls, and our query methods are currently in the process of optimization.
Our React UI is designed so that all pages and components lead to the index.js in client/src
Passport and bCrypt are used for user authentication. Session stores have not been configured yet, and will be available in v2




## Yarn Commands
Run `yarn install` upon cloning


`~/pathway/Lunchy$ yarn dev`
runs babel-node in a development environment and uses webpack hot reloading

`~/pathway/Lunchy$ yarn build`
transpiles express files from ./lunchyapp into ./build

`~/pathway/Lunchy$ yarn bundle`
transpiles and minifies jsx from ./client/src/index.js to ./client/public/bundle.js

`~/pathway/Lunchy$ yarn start`
runes node in production




## Directory Structure
-- build: Currently holds all of the transpiled ES6 jS from the "lunchyapp" directory, created and populated via "yarn build"
         This folder will not be in the GitHub repo once Jenkins is properly configured to run build commands on its own
         
-- client: holds all static files and React components
    -- public: holds the index.html page and the bundled React (as bundle.js)
    -- src: holds all images, React components, and React pages
    
-- lunchyapp: holds all Express files (written in ES6)
    -- config: holds functions for making database calls regarding users, as well as configuring user authentication via Passport
    -- middlewares: holds functions for making database calls for CRUD-ing orders
    -- models: holds MongoDB models (included for visibility)
    -- routes: all routes, including api routes under /api
    -- server: Express server file as well as webpack.config files
    -- utils: scraper function for retrieving restaurant menu data









