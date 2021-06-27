## react-nodejs boilerplate
Start your next react project in seconds.
A highly scalable foundation with the best DX and a focus on performance and best practices.

## Features
- Webpack 5+
- TypeScript for both frontend and backend
- React 17+
- Styled System
- Redux-Saga
- Eslint
- Stylelint
- Prettier
- Express
- MongoDB

## Quick start

1.  Make sure that you have Node.js v8.15.1 and npm v5 or above installed.
2.  Clone this repo using `git clone --depth=1 https://github.com/bobrova-alena/react-nodejs-boilerplate.git <YOUR_PROJECT_NAME>`
3.  Move to the appropriate directory: `cd <YOUR_PROJECT_NAME>`.<br />
4.  Run `npm i` in order to install dependencies.<br />
5.  Move to the directory client `cd src\server` and run `npm i`.<br />
6.  Add .env file with credentials for you MongoDB. 

`db_name=<YOUR_CLUSTER_NAME>
db_collection=<YOUR_DB_COLLECTION_NAME>
password=<YOUR_PASSWORD>
user=<YOUR_USER_NAME>
cluster_uri=boilerplatecluster.urfud.mongodb.net/<db_name>
uri=mongodb+srv://<user>:<password>@<cluster_uri>?retryWrites=true&w=majority`
  
7. Run `npm run start`.
8. Move to the directory client `cd ..\client` and run `npm i`.<br />
9. Run `npm run start:web` (or `npm run start:mobile`) to see the example app at `http://localhost:8080`.
  
> Please note that this boilerplate is **production-ready and not meant for beginners**! If you're just starting out with react or redux, please refer to https://github.com/petehunt/react-howto instead. If you want a solid, battle-tested base to build your next product upon and have some experience with react, this is the perfect start for you.

## Documentation
- Styled System: https://styled-system.com
- Redux-Saga: https://redux-saga.js.org/
- MongoDB: https://docs.mongodb.com/manual/tutorial/getting-started/
- MongoDB Atlas: https://docs.atlas.mongodb.com/getting-started/
