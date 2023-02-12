class compare{
  constructor(){
    this.classNameActive='_active';
    this.labelAdd=`<img src="img/images/basket.svg" alt="#">`;
    this.labelRemove='Удалить';
    this.labelAddCompare=`<img src="img/images/heart.svg" alt="#">`
    this.labelRemoveCompare=`<img src="img/images/heartred.svg" alt="#">`
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
  hamdleSetLocationStorageCompare(element, id){
    const {pushProduct, productsCompare} = localStorageCompare.putProductsCompare(id);
    if(pushProduct==true){
      element.innerHTML = this.labelRemoveCompare;
    }else{
      element.innerHTML = this.labelAddCompare;
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
        const productsCompare = localStorageCompare.getProducts();
        let activeHeart= '';
        if(productsCompare.indexOf(id)=== -1){
          activeHeart = this.labelAddCompare;
        }else{
          activeHeart = this.labelRemoveCompare;
        }
        const Compare_items = localStorageCompare.getProducts();
        if(Compare_items.indexOf(id)!==-1){
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
            ${price.toLocaleString()} ₽
          </div>
        </div>
        <div class="item-form">
          <div class="item-form__btn${activeClass}" onclick="ComparePage.hamdleSetLocationStorage(this,'${id}')">
            ${activeText}</div>
          <div class="item-form__heart" onclick="ComparePage.hamdleSetLocationStorageCompare(this,'${id}')" >${activeHeart}</div>
          <div class="item-form__stat"><img src="img/images/Compare.svg" alt="#"></div>
        </div>
      </li>
        `;
    }})
      const Html =`
        <ul class="compare-flex">
          ${HtmlCatalog}
        </ul>
      `;
      ROOT_SHOPPING.innerHTML = Html;
    }
}
const ComparePage = new compare();
ComparePage.render();