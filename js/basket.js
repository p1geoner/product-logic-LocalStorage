class Basket{


  render(){
    const productsStore = localStorage.getProducts();
    let HtmlCatalog ='';
    let sumPrice=0;
    CATALOG.forEach(({id, name, price, img})=>{
      if(productsStore.indexOf(id)!==-1){
        HtmlCatalog+=`
          <div class="iphone__block">
            <div class="blockCard">
              <div class="img" style="background-image: url(${img});"></div>
              <span class="leftCard">
                <div class="cardName">
                ${name}
                </div>
                <span class="btnCard">
                  <button id="fav">В избранное</button>
                  <button id="del" class="del">Удалить</button>
                </span>
              </span>
              <span class="rightCard">
                <div class="cardPrice">${price.toLocaleString()}₽</div>
                <div class="btnAmount">
                  <button class="btnMinus">
                    <div class="minusItem" data-action="minus">-</div>
                  </button>
                  <span class="itemAmount" data-counter>1</span>

                  <button class="btnPluse">
                    <div class="pluseItem" data-action="plus">+</div>
                  </button>
                </div>
              </span>
            </div>
            <span class="accordCard">
              <a href="" class="btnAfter">Добавить необходимый аксессуар</a>
              <div class="accordCard__item" style="display: none">
                <div class="marginAccord">
                  <div class="checkPrice">
                    <div class="checkPrice__left">
                      <input type="checkbox" id="serv" name="serv" />
                      <label for="serv">Быстросервис для смартфонов 2 года
                      </label>
                    </div>

                    <div class="checkPrice__right">15 999 ₽</div>
                  </div>
                  <a href="#">Подробнее</a>
                </div>
                <a href="#">Полный список услуг</a>
              </div>
              <br />
              <a href="" class="btnAfter active">Выбрать услуги</a>
              <div class="accordCard__item active">
                <div class="marginAccord">
                  <div class="checkPrice">
                    <div class="checkPrice__left">
                      <input type="checkbox" id="serv" name="serv" />
                      <label for="serv">Быстросервис для смартфонов 2 года
                      </label>
                    </div>

                    <div class="checkPrice__right">15 999 ₽</div>
                  </div>
                  <a href="#">Подробнее</a>
                </div>
                <a href="#">Полный список услуг</a>
              </div>
            </span>
          </div>
        `;
        sumPrice +=price;
      }
    });
    const html =`
      <div class="bascet-container">
        <table>
          ${HtmlCatalog}
        </table>
      </div>
    `;
    const htmlsum=`
    <p style="margin: 10px 0">
    Итого
      <span class="dashed">
      </span>
    </p>
    <span class="amountSum" >
      ${sumPrice.toLocaleString()}₽
    </span>
    `;
    ROOT_SUM.innerHTML=htmlsum;
    ROOT_SHOPPING.innerHTML=html;
    
  }
}
const basketPage = new Basket();
basketPage.render();
