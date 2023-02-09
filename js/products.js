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
          
          <li class="tovar__block">
          <div class="photo_tovara" style="background-image: url(${img});"></div>
          <h2 class="tovar_name">${name}</h2>
          <div class="tovar_otziv">
            <img src="img/images/Star.svg" alt="">
            <a href="" class="otziv_cifra">4.8</a>
            <a href="" class="otziv_kolvo"> / 47 отзывов</a>
          </div>
          <div class="cena_tovara">
            <a class="old_cena">79 999</a>
            <span class="new_cena">
            ${price.toLocaleString()} RUB
            </span>
          </div>
          <div class="block_korzina">
          <button class="add_korzina${activeClass}" onclick="productsPage.hamdleSetLocationStorage(this,'${id}')">
          ${activeText}
          </button>
            <button class="like_tovar"><img src="/img/like_tovar.png" alt=""></button>
            <button class="sravnen_tovara"><img src="/img/sravnen_tovar.png" alt=""></button>
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