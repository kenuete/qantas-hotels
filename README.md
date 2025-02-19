# Qantas Hotels

## 🚀  To run the application, follow the below steps
1. **Clone the repository**

  > git clone git@github.com:kenuete/qantas-hotels.git

2. **Set the node version**

  > nvm use

this application requires the latest node version v23.3.0

3. **Install the depdencies**

   > yarn install

4. **Run the app**

   > yarn all 

This command will run the mock [json-server](https://www.npmjs.com/package/json-server) and then [vite](https://vite.dev/guide/) dev server to serve the front-end application. The json-server is hosting the json response and is accessible at port 5001. Vite is configured to proxy to the json-server

if the above combined command does not work for any reason, please run the json server and vite seperately in 2 terminal tabs using below commands,

  > yarn dev:server

  > yarn dev

5. **Open the application** in your browser:

   👉 [http://localhost:5173/](http://localhost:5173/)

6. **To run the tests**

  > yarn test

The codebase has 100% test coverage.

## Tech Stack

1. **Frontend**: React, Vite, TypeScript, Styled Components
2. **Backend**: json-server to serve the provided json file.
3. **Open source components used**:
   * [react-rating](https://www.npmjs.com/package/react-rating) -- this is for the rating icons
   * [react-sweetalert2](https://www.npmjs.com/package/react-sweetalert2) -- this is for the api error modal
   * [react-spinners](https://www.npmjs.com/package/react-spinners) -- this is for the api loading spinner
   * [react-lazy-load-image-component](https://www.npmjs.com/package/react-lazy-load-image-component) image lazy loading
  
## Notes

Some CSS files are part of the Vite template and I did not remove them. There is scope for improvements in terms of accessibility, directory structure and standardizing few constants, global styles, responsive design etc.

## Screenshots

## Application

<img width="826" alt="Screenshot 2025-02-19 at 9 03 02 pm" src="https://github.com/user-attachments/assets/f395a776-caef-4971-be0b-cdc4c22aeaea" />

## Test Overage
<img width="1511" alt="Screenshot 2025-02-19 at 9 00 23 pm" src="https://github.com/user-attachments/assets/3f67b78d-5c28-4d5e-aedd-2e4d56a32cd8" />




