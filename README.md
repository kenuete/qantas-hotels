# Qantas Hotels

## 🚀  To run the application, follow the below steps
1. **Clone the repository**

  > git clone git@github.com:kenuete/qantas-hotels.git

3. **Set the node version**

  > nvm use

this application requires the latest node version v23.3.0

4. **Install the depdencies**

   > yarn install

5. **Run the app**

   > yarn all 

This command will run the mock [json-server](https://www.npmjs.com/package/json-server) and then [vite](https://vite.dev/guide/) dev server to serve the front-end application. The json-server is hosting the json response and is accessible at port 5001. Vite is configured to proxy to the json-server

if the above combined command does not work for any reason, please run the json server and vite seperately in 2 terminal tabs using below commands,

  > yarn dev:server

  > yarn dev

6. **Open the application** in your browser:

   👉 [http://localhost:5173/](http://localhost:5173/)

7. **To run the tests**

  > yarn test

The codebase has 100% test coverage.

## Tech Stack

1. **Frontend**: React, Vite, TypeScript, Styled Components
2. **Backend**: json-server to server the provided json file.
3. **Open source components used**: (react-rating)[https://www.npmjs.com/package/react-rating] (react-sweetalert2)[https://www.npmjs.com/package/react-sweetalert2]
---
