import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

// might change later
const auth0Domain = "dev-bfi6yh9d.us.auth0.com";
const auth0ClientId = "XXOuDrNQAhVcZd36fmf5xkC1eiCc49pJ";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={auth0Domain}
      clientId={auth0ClientId}
      redirectUri={window.location.origin}
      cacheLocation="localstorage"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
