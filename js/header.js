class Header{
  headerOpenBascet(){
    basketPage.render();
  }
  headerOpenCompare(){
    
  }
  render(count,countCompare){
    const Html = `
      <div class="header_width-1140px">
        <nav class="header__navigation">
          <div class="header__navigation-geo">
            <img src="img/images/strelkageo.svg" alt="#">
            <span id="tow">Город</span>
          </div>
          <ul class="header__menu">
            <li class="header__menu-item"><a href="#">Магазины</a></li>
            <li class="header__menu-item"><a href="#">Покупателям</a></li>
            <li class="header__menu-item"><a href="#">Юридическим лицам</a></li>
            <li class="header__menu-item"><a href="#">Сервисный центр</a></li>
          </ul>
          <a href="tel:+74959743333" class="header__navigation-phone">8 (495) 974-33-33 </a>
        </nav>
      </div>
      <div class="hr"></div>
      <div class="header_width-1140px">
        <div class="header__bottom">
          <div class="logo__container">
            <a href="main.html" class="logo"><img src="img/images/Logo.svg" alt="#" class="logo__img"></a>
          </div>
          <div class="geo2 geo">
            <img src="img/images/strelkageo.svg" alt="#">
            <span id="tow">Город</span>
          </div>
          <div class="header__select" >
            <select class="form__select" onchange="if (this.value) window.location.href = this.value">
              <option value="" disabled selected style='display:none;'>Каталог</option>
              <option value="index.html">Каталог</option>
              <option value="main.html">Главная</option>
              <option value="basket.html">Корзина</option>
              <option value="compare.html">Сравнение</option>
            </select>
          </div>
          <div class="header__search">
            <input type="search" class="header__search-input" placeholder="Поиск по сайту">
            <span class="header__search-icon">
              <img src="img/images/lupa-poisk.svg" height="20px" width="20px" alt="#">
            </span>
          </div>
          <ul class="menu">
            <li><a href="compare.html" class="header__btns_bottom"><img src="img/images/Compare.svg" alt=""><span>Сравнить</span>
              </a></li>
            <li><a href="basket.html" class="header__btns_bottom" onclick="headerPage.headerOpenBascet();"><img src="img/images/Market.svg" alt="#"><span>${count} Корзина</span></a>
            </li>
            <li><a href="" class="header__btns_bottom"><img src="img/images/Enter.svg" alt="#"><span>Войти</span></a>
            </li>
          </ul>
        </div>
      </div>
    
    `;
    document.getElementById('header').innerHTML= Html; 
  }
}
const headerPage =new Header();
const productsStore = localStorage.getProducts();
headerPage.render(productsStore.length);
