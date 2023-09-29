export class BackButtonComponent {
    constructor(parent) {
        this.parent = parent;
    }

    addListeners(listener) {
        document
            .getElementById("back-button")
            .addEventListener("click", listener)
    }

    getHTML() {
        return (
            `
                <button id="back-button" class="btn btn-primary" type="button">Назад</button>
            `
        )
    }

    render(listener) {
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        this.addListeners(listener)
    }
}

import {BackButtonComponent} from "../../components/back-button/index.js";
import {MainPage} from "../main/index.js";

// ...

clickBack(); {
    const mainPage = new MainPage(this.parent)
    mainPage.render()
}

render(); {
    this.parent.innerHTML = ''
    const html = this.getHTML()
    this.parent.insertAdjacentHTML('beforeend', html)

    const backButton = new BackButtonComponent(this.pageRoot)
    backButton.render(this.clickBack.bind(this))

    const data = this.getData()
    const stock = new ProductComponent(this.pageRoot)
    stock.render(data)
}