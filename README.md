# Campers Shop Frontend

## Live Link

https://campers-shop-frontend-inky.vercel.app/


## Introduction

Campers Shop is your one-stop online store for all camping essentials and accessories. Whether you're planning a weekend getaway or an extended adventure, we offer a curated selection of products to enhance your outdoor experience.

## Project Description

Campers Shop is an e-commerce platform focused on delivering a seamless shopping experience for camping enthusiasts. Our goals are to provide a diverse range of high-quality camping gear, create an attractive and easy-to-use website, and build a community of outdoor lovers. By ensuring responsive design and integrating helpful features like product reviews and recommendations, Campers Shop aims to be the go-to destination for campers everywhere.


## Features

- Extensive Product Range: Discover a wide variety of camping gear and accessories.
- Intuitive Navigation: Easily browse products with clear categories and search options.
- Responsive Design: Shop on any device with a fully responsive website.
- Product Reviews: Read customer reviews to make informed decisions.
- Streamlined Checkout: Enjoy a quick and easy checkout process.


## Technology Stack
- React, Redux-toolkit, Redux-RTK query, Express js, Node.js, MongoDB, Mongoose etc.

## Run Locally

Clone the project

```bash
  git clone  https://github.com/Anikroy7/campers_shop.git
```

Go to the project directory

```bash
  cd campers_shop
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

### Configuration

1. Create a `.env` file in the root directory of the project.
2. Add necessary configuration variables in the `.env` file.
   Example:
   ```bash
    VITE_SEVER_URL=your_server_url
    VITE_PAYMENT_SECRET= your_stripe_secret
   ```
## Usage

```javascript
import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.tsx";
import { Provider } from "react-redux";
import store from "./redux/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

```


## Author

 [@anikroy](https://github.com/Anikroy7)




