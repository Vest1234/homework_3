export class ProductCardComponent {
    constructor(parent) {
        this.parent = parent;
    }

    render() {
        
    }
}

getHTML(data); {
    return (
        `
            <div class="card" style="width: 300px;">
                <img class="card-img-top" src="${data.src}" alt="картинка">
                <div class="card-body">
                    <h5 class="card-title">${data.title}</h5>
                    <p class="card-text">${data.text}</p>
                    <button class="btn btn-primary">Нажми на меня</button>
                </div>
            </div>
        `
    )
}

render(data); {
    const html = this.getHTML(data)
    this.parent.insertAdjacentHTML('beforeend', html)
}

get; pageRoot(); {
    return document.getElementById('main-page')
}
    
getHTML(); {
    return (
        `
            <div id="main-page" class="d-flex flex-wrap"><div/>
        `
    )
}
    
render() ;{
    this.parent.innerHTML = ''
    const html = this.getHTML()
    this.parent.insertAdjacentHTML('beforeend', html)

    const data = this.getData()
    const productCard = new ProductCardComponent(this.pageRoot)
    productCard.render(data)
}

getData(); {
    return [
        {
            id: 1,
            src: "https://i.pinimg.com/originals/c9/ea/65/c9ea654eb3a7398b1f702c758c1c4206.jpg",
            title: "Акция",
            text: "Такой акции вы еще не видели 1"
        },
        {
            id: 2,
            src: "https://i.pinimg.com/originals/c9/ea/65/c9ea654eb3a7398b1f702c758c1c4206.jpg",
            title: "Акция",
            text: "Такой акции вы еще не видели 2"
        },
        {
            id: 3,
            src: "https://i.pinimg.com/originals/c9/ea/65/c9ea654eb3a7398b1f702c758c1c4206.jpg",
            title: "Акция",
            text: "Такой акции вы ещ;е не видели 3"
        },
    ]
}
    
render(); {
    this.parent.innerHTML = '<button class="btn btn-primary" id="click-card-${data.id}" data-id="${data.id}">Нажми на меня</button>'
    const html = this.getHTML()
    this.parent.insertAdjacentHTML('beforeend', html)
    
    const data = this.getData()
    data.forEach((item) => {
        const productCard = new ProductCardComponent(this.pageRoot)
        productCard.render(item)
    })
}

addListeners(data, listener); {
    document
        .getElementById(`click-card-${data.id}`)
        .addEventListener("click", listener)
}

render(data, listener); {
    const html = this.getHTML(data)
    this.parent.insertAdjacentHTML('beforeend', html)
    this.addListeners(data, listener)
}

clickCard(e); {
    const cardId = e.target.dataset.id
}

const productCard = new ProductCardComponent(this.pageRoot)
productCard.render(item, this.clickCard.bind(this))