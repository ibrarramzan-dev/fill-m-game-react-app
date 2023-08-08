import "antd/dist/reset.css";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import Layout from "./components/Layout";
import App from "./App";
import "./styles/app.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Layout>
      <App />
    </Layout>
  </StrictMode>
);
