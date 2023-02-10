//табы
let navItem = document.querySelectorAll('.tabs__header-item');
let contentItem = document.querySelectorAll('.tabs__body-content');
let contTab = document.querySelectorAll('.tab-2');
let navTab = document.querySelectorAll('.tab');
function open(){
    
    navItem.forEach(function(elem){
        elem.classList.remove('active');
    })
    contentItem.forEach(function(elem){
        elem.classList.remove('active');
    })
    navTab.forEach(function(elem){
        elem.classList.add('active');
    })
    contTab.forEach(function(elem){
        elem.classList.add('active');
    })
    
}

navItem.forEach(function(elem){
    elem.addEventListener('click',activeTab);
})
function activeTab(){
    navItem.forEach(function(elem){
        elem.classList.remove('active');
    })
    this.classList.add('active');
    let tabName = this.getAttribute('data-tab');
    // console.log(tabName);
    activeTabContent(tabName);
    }
function activeTabContent(tabName){
    contentItem.forEach(function(item){
        if(item.classList.contains(tabName)){
            item.classList.add('active');
            
        }else{
            item.classList.remove('active');
        }
    })
};
// аккардеон на главную страницу
    document.querySelectorAll('.tab__script').forEach((el) => {
      el.addEventListener('click', () => {
        let content = el.nextElementSibling;
        let child = el.lastElementChild;
        if (content.style.maxHeight == 0 + 'px') {
          child.style.transform = 'rotate(' + 180 + 'deg)';
          content.style.maxHeight = content.scrollHeight + 'px';
          console.log(content);



        } else {



          console.log(content);
          child.style.transform = 'rotate(' + 0 + 'deg)';
          content.style.maxHeight = 0 + 'px';
        }
      })
    })
// аккардеон футер
let current_rotation = 0;
    document.querySelectorAll('.footer__tabs-header').forEach((el) => {
      el.addEventListener('click', () => {
        let content = el.nextElementSibling;
        let child = el.lastElementChild;
        document.querySelectorAll('.footer__tabs-header-img').forEach((el) => {
          el.style.transform = 'rotate(' + 0 + 'deg)';
        })
        if (content.style.maxHeight) {


          current_rotation = 180;
          document.querySelectorAll('.footer__tabs-header-img').forEach((el) => {
            el.style.transform = 'rotate(' + 0 + 'deg)';
          })
          document.querySelectorAll('.footer__tabs-body').forEach((el) => {
            el.style.maxHeight = null
          });

        } else {

          document.querySelectorAll('.footer__tabs-body').forEach((el) => {
            el.style.maxHeight = null
          });
          current_rotation = 180;
          child.style.transform = 'rotate(' + current_rotation + 'deg)';
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      })
    })
    
