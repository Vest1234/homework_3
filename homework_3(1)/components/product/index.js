export class ProductComponent {
    constructor(parent) {
        this.parent = parent
    }

    getHTML(data) {
        return (
            `
                <div class="card mb-3" style="width: 540px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${data.src}" class="img-fluid" alt="картинка">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${data.title}</h5>
                                <p class="card-text">${data.text}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `
        )
    }

    render(data) {
        const html = this.getHTML(data)
        this.parent.insertAdjacentHTML('beforeend', html)
    }
}

import {ProductComponent} from "../../components/product/index.js";

// ...

render(); {
    this.parent.innerHTML = ''
    const html = this.getHTML()
    this.parent.insertAdjacentHTML('beforeend', html)

    const data = this.getData()
    const product = new ProductComponent(this.pageRoot)
    product.render(data)
}

import {ProductPage} from "../product/index.js";

// ...

clickCard(e); {
    const cardId = e.target.dataset.id

    const productPage = new ProductPage(this.parent, cardId)
    productPage.render()
}