class products{
  constructor(){
    this.classNameActive='_active';
    this.labelAdd=`<img src="img/images/basket.svg" alt="">`;
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
      CATALOG.forEach(({id, name, price, img, reviews, grade})=>{
        let activeClass='';
        let activeText= '';
        if(productsStore.indexOf(id)=== -1){
          activeText=this.labelAdd;
        }else{
          activeClass=' '+this.classNameActive;
          activeText=this.labelRemove
        }
        HtmlCatalog +=`
          
        <li class="product__item">
        <div class="item__image" style="background-image: url(${img});"></div>
        <div class="container_flex-gap">
          <a href="#">${name}</a>
          <div class="item__star">
            <div class="star"><img src="img/images/Star.svg" alt="#"></div>
            <a href="#" class="item__text_red">${grade}</a>
            <a href="#" class="item__text">/ ${reviews} отзыва</a>
          </div>
          <div class="item__price">
            ${price.toLocaleString()} RUB
          </div>
        </div>
        <div class="item-form">
          <div class="item-form__btn${activeClass}" onclick="productsPage.hamdleSetLocationStorage(this,'${id}')">
            ${activeText}</div>
          <div class="item-form__heart"><img src="img/images/heart.svg" alt="#">
          </div>
          <div class="item-form__stat"><img src="img/images/Compare.svg" alt="#"></div>
        </div>
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