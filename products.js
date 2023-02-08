class products{
  constructor(){
    this.classNameActive='_active';
    this.labelAdd='Добавить в корзину';
    this.labelRemove='Удалить из корзины';
  }
  
  hamdleSetLocationStorage(element, id){
    const {pushProduct, products} = localStorage.putProducts(id);
    if(pushProduct==true){
      element.classList.add(this.classNameActive);
      element.innerHTML = this.labelRemove;
    }else{
      element.classList.remove(this.classNameActive);
      element.innerHTML = this.labelAdd;
    }
    headerPage.render(products.length);
  }

    render(){
      const productsStore = localStorage.getProducts();
      let HtmlCatalog ='';
      CATALOG.forEach(({id, name, price, img})=>{
        let activeClass='';
        let activeText= '';
        if(productsStore.indexOf(id)=== -1){
          activeText=this.labelAdd;
        }else{
          activeClass=' '+this.classNameActive;
          activeText=this.labelRemove
        }
        HtmlCatalog +=`
          <li class="products-element">
            <span class="products-element__name" >${name}</span>
            <img class="products-element__image" src="${img}"/>
            <span class="products-element__price">
            ${price.toLocaleString()} RUB
            </span>
            <button class="products-element__btn${activeClass}" onclick="productsPage.hamdleSetLocationStorage(this,'${id}')">
              ${activeText}
            </button>
          </li>
        `;
      })
      const Html =`
        <ul class="products-container">
          ${HtmlCatalog}
        </ul>
      `;
      ROOT_PRODUCTS.innerHTML = Html;
    }
}
const productsPage = new products();
productsPage.render();