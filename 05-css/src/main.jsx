import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Button from "./component/button/Button.jsx";
import Header from "./component/header/Header.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <Header />
    <Button />
    <App />
  </>
);
