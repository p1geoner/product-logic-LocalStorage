class Localstorage  {
  constructor() {
    this.keyName = 'products';
    this.keyNameCompare = 'compare';
  }
  getProducts(){
    const productsLocalStorage = window.localStorage.getItem(this.keyName);
    if(productsLocalStorage !== null){
      return  JSON.parse(productsLocalStorage);
    }
    return [];
  }
  putProducts(id){
    let products = this.getProducts();
    let pushProduct = false;
    const index =products.indexOf(id);
    if(index== -1){
      products.push(id);
      pushProduct = true;
    }else{
      products.splice(index, 1);
    }
    window.localStorage.setItem(this.keyName, JSON.stringify(products));
    return{pushProduct, products}
  }
  putProductsCompare(id){
    let productsCompare = this.getProducts();
    let pushProduct = false;
    const index =productsCompare.indexOf(id);
    if(index== -1){
      productsCompare.push(id);
      pushProduct = true;
    }else{
      productsCompare.splice(index, 1);
    }
    window.localStorage.setItem('compare', JSON.stringify(productsCompare));
    return{pushProduct, productsCompare}
    
  }
}
const localStorage = new Localstorage();
