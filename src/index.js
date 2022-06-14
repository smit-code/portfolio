// react would typically be imported on this line but not required anymore
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// ReactDOM.render(<App />, document.querySelector("#root"));

const rootApp = ReactDOM.createRoot(document.querySelector("#root"))
rootApp.render(
    <App />
)
