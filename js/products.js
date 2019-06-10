
//=========================================================================
//-----------------EventListener of Whole Document-------------------------
//=========================================================================


document.addEventListener('click',clickEvent);

function clickEvent(e) {

    if(e.target.className==='productCategoryLinks')sortProducts(e);

    if(e.target.classList[0]==='productsvg')setActiveClassProducts(e.target);


    if(e.target.closest('.section__categories__item')){
        var cat =e.target.closest('.section__categories__item').dataset.cat;
        sortProducts(cat,false);
    }
}







//===========================================================
//--------------Adding Products in Product Section---------
//===========================================================


let productsContent=document.querySelector('.products__content');

let productData=[
    {name:"Product 0",price:"1.00",url:"product-01",category:"woman",favourite:false,tag:'woman'},
    {name:"Product 1",price:"2.07",url:"product-02",category:"woman",favourite:false,tag:'woman'},
    {name:"Product 2",price:"13.09",url:"product-03",category:"man",favourite:false,tag:'man'},
    {name:"Product 3",price:"16.70",url:"product-04",category:"woman",favourite:false,tag:'woman'},
    {name:"Product 4",price:"11.12",url:"product-05",category:"woman",favourite:false,tag:'woman'},
    {name:"Product 5",price:"41.85",url:"product-06",category:"watch",favourite:false,tag:'watch'},
    {name:"Product 6",price:"35.10",url:"product-07",category:"woman",favourite:false,tag:'woman'},
    {name:"Product 7",price:"49.78",url:"product-08",category:"woman",favourite:false,tag:'woman'},
    {name:"Product 8",price:"73.18",url:"product-09",category:"shoes",favourite:false,tag:'accessory'},
    {name:"Product 9",price:"14.90",url:"product-10",category:"woman",favourite:false,tag:'woman'},
    {name:"Product 10",price:"57.71",url:"product-11",category:"man",favourite:false,tag:'man'},
    {name:"Product 11",price:"86.01",url:"product-12",category:"belt",favourite:false,tag:'accessory'},
    {name:"Product 12",price:"1.88",url:"product-13",category:"woman",favourite:false,tag:'woman'},
    {name:"Product 13",price:"107.21",url:"product-14",category:"woman",favourite:false,tag:'woman'},
    {name:"Product 14",price:"112.26",url:"product-15",category:"watch",favourite:false,tag:'accessory'},
    {name:"Product 15",price:"11.93",url:"product-16",category:"woman",favourite:false,tag:'woman'}
];



for(var i=0;i<16;i++){
    makeProduct(productData[i],i);
}

function makeProduct(data,index) {


    var product=document.createElement('div');
    product.classList.add('product');
    product.classList.add('product'+i);

    var productImg=document.createElement('div');
    productImg.classList.add('product__img');
    productImg.dataset.index=index;


    var img=document.createElement('img');
    img.src='img/'+data.url+'.jpg';
    var pButton=document.createElement('button');
    pButton.className='btn btn--primary productPreviewBtn';
    pButton.innerText='View More';
    productImg.appendChild(img);
    productImg.appendChild(pButton);


    //=============Product Text=============
    var productText=document.createElement('div');
    productText.className='product__text';


    //-----------Product Text About-----------
    var productTextAbout=document.createElement('div');
    productTextAbout.className='product__text__about';

    var paragraph=document.createElement('p');
    paragraph.innerText=data.name;

    var svgElem = document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
        useElem = document.createElementNS('http://www.w3.org/2000/svg', 'use');

    svgElem.classList.add('productsvg');
    useElem.classList.add('productsvg');


    useElem.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', 'img/sprite.svg#icon-heart');
    useElem.className='productsvg';

    svgElem.appendChild(useElem);

    productTextAbout.appendChild(paragraph);
    productTextAbout.appendChild(svgElem);


    productText.appendChild(productTextAbout);

    //-----------Product Text Price-----------
    var priceP=document.createElement('p');
    priceP.innerText='$'+data.price;
    priceP.className='product__text__price';

    productText.appendChild(priceP);




    product.appendChild(productImg);
    product.appendChild(productText);

    productsContent.appendChild(product);

}


//==================================================================
//=====================End of addding Products======================
//==================================================================








function sortProducts(e,chk=true) {
    var cat;
    if(chk){
        cat =e.target.parentElement.dataset.cat;
    }else {
        cat=e;
    }

    if(cat==='all') {
        for (let i = 0; i < productData.length; i++) {
            let product = document.querySelector('.product' + i);
            product.style.position='relative';
            product.style.visibility='visible';
            product.style.transform='scale(1)';
            product.style.opacity=1;
        }
        if(chk){

            setActiveClassProductSec(e);
        }
        return;
    }



    for(var i=0;i<productData.length;i++){
        var product=document.querySelector('.product'+i);
        if(productData[i].category===cat || productData[i].tag===cat){
            product.style.position='relative';
            product.style.visibility='visible';
            product.style.transform='scale(1)';
            product.style.opacity=1;
        }else {
            product.style.position='absolute';
            product.style.opacity=0;
            product.style.transform='scale(0)';
            product.style.visibility='hidden';
        }
    }




    if(chk) {
        setActiveClassProductSec(e.target.parentElement.dataset.cat);

    }else {
        setActiveClassProductSec(cat);


    }


}

function setActiveClassProductSec(e) {

    var allLinks=document.querySelector('.products__header__categories__links'),removeCount=0;


    for(var i=0;i<allLinks.childElementCount;i++){
        var elem=allLinks.children[i];

        if(elem.dataset.cat===e){
            elem.classList.add('active');
        }else {
            elem.classList.remove('active');
            removeCount++;
        }


    }

    if(removeCount===allLinks.childElementCount){
        allLinks.children[0].classList.add('active');
    }
}

function setActiveClassProducts(el) {
    el.classList.toggle('favourite');
    el.parentElement.classList.toggle('favourite');

}



