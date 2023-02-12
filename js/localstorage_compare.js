class LocalstorageCompare  {
  constructor() {
    this.keyNameCompare = 'compare';
  }
  getProducts(){
    const productsLocalStorageCompare = window.localStorage.getItem(this.keyNameCompare);
    if(productsLocalStorageCompare !== null){
      return  JSON.parse(productsLocalStorageCompare);
    }
    return [];
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
    window.localStorage.setItem(this.keyNameCompare, JSON.stringify(productsCompare));
    return{pushProduct, productsCompare}
    
  }
}
const localStorageCompare = new LocalstorageCompare();