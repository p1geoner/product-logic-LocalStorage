class Header{
  headerOpenBascet(){
    basketPage.render();
  }

  render(count){
    const Html = `
      <div class="header-container">
        <a class="header-counter" href="basket.html"  onclick="headerPage.headerOpenBascet();">
          Корзина ${count}
        </a>
      </div>
    
    `;
    ROOT_HEADER.innerHTML= Html; 
  }
}
const headerPage =new Header();
const productsStore = localStorage.getProducts();
headerPage.render(productsStore.length);
