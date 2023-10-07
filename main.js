import {MainPage} from "./pages/main/index.js";

const root = document.getElementById('root');
console.log(root)

const mainPage = new MainPage(root);

mainPage.render();
