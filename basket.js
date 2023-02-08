class Basket{


  render(){
    const productsStore = localStorage.getProducts();
    let HtmlCatalog ='';
    CATALOG.forEach(({id, name, price, img})=>{
      if(productsStore.indexOf(id)!==-1){
        HtmlCatalog+=`
          <tr>
              <td><img src="${img}"></img></td>
              <td>${name}</td>
              <td>${price.toLocaleString()}RUB</td>
          </tr>
        `;
      }
    });
    const html =`
      <div class="bascet-container">
        <table>
          ${HtmlCatalog}
        </table>
      </div>
    `;
    const ROOT_SHOPPING = document.getElementById('shopping');
    ROOT_SHOPPING.innerHTML=html;
    
  }
}
const basketPage = new Basket();
basketPage.render();
