

(function () {
    var heightInterval,heightElement,maxHeight,decreaseHeight;



//==========================================================================
//-------------------Change Height of element Smoothly----------------------
//==========================================================================




    var filterBtn=document.querySelector('.filter__btn'),
        filterOptions=document.querySelector('.filter__options'),
        searchBtn=document.querySelector('.products__header__categories__tools__search'),
        searchBox=document.querySelector('.search__box');



    if(filterBtn)
        filterBtn.addEventListener('click',function () {
        searchBox.style.height=0;
        heightElement=filterOptions;
        var initHeight=heightElement.clientHeight;
        if(initHeight>10){
            maxHeight=0;
            decreaseHeight=true;
        }else {
            heightElement.style.height='auto';
            maxHeight=Number(heightElement.clientHeight);
            heightElement.style.height=0;
            decreaseHeight=false;
        }
        heightElement.classList.add('border');

        heightInterval=setInterval(changeHeight,50);
    });

    if(searchBtn)
    searchBtn.addEventListener('click',function () {

        filterOptions.style.height=0;
        filterOptions.classList.remove('border');
        heightElement=searchBox;
        var initHeight=heightElement.clientHeight;

        if(initHeight>10){
            maxHeight=0;
            decreaseHeight=true;
        }else {
            heightElement.style.height='auto';
            maxHeight=40;
            heightElement.style.height=0;

            decreaseHeight=false;
        }

        heightElement.classList.add('border');

        heightInterval=setInterval(changeHeight,50);

    })


    function changeHeight() {


        var boxCurrentHeightpx=heightElement.style.height;
        var boxCurrentHeight= boxCurrentHeightpx.split('');
        boxCurrentHeight.pop();
        boxCurrentHeight.pop();
        boxCurrentHeight=boxCurrentHeight.join('');

        boxCurrentHeight=Number(boxCurrentHeight);



        var height=heightElement.style.height;
        var heightArray= height.split('');
        heightArray.pop();
        heightArray.pop();
        heightArray=heightArray.join('');
        height=Number(heightArray);

        if(decreaseHeight){
            if(height<=0){
                clearInterval(heightInterval);
                heightElement.classList.remove('border');

                return;
            }else heightElement.style.height=(boxCurrentHeight-20)+'px';
        }else {
            if(height>=maxHeight){
                clearInterval(heightInterval);
                return;
            }else heightElement.style.height=(boxCurrentHeight+20)+'px';
        }

    }




//=================================================================
//------------Product Preview Number Functionality-----------------
//=================================================================

    let productDownBtn=document.querySelectorAll('.productNumDown'),
        productUpBtn=document.querySelectorAll('.productNumUp'),
        productNum=document.querySelector('.productNum');


    productDownBtn.forEach(function (val) {
        val.addEventListener('click',function () {
            let num=val.closest('.productNumCount').children[1].children[0];
            if(num.value>Number(num.min)){
                num.value--;
            }
        })
    })
    productUpBtn.forEach(function (val) {
        val.addEventListener('click',function () {
            let num=val.closest('.productNumCount').children[1].children[0];

            if(num.value<Number(num.max)){
                num.value++;

            }
        })
    })



//=================================================================
//------------Product Preview Close-----------------
//=================================================================


    let previewClose=document.querySelector('.closeBtnX'),
        productPreview=document.querySelector('.productPreview'),
        productPreviewBtn=document.querySelectorAll('.productPreviewBtn');
    if(previewClose)
    previewClose.addEventListener('click',function () {
        productPreview.classList.add('close');
    });


    for(let i=0;i<productPreviewBtn.length;i++){
        let btn=productPreviewBtn[i];
        btn.addEventListener('click',function () {
            productPreview.classList.remove('close');
        })
    }








    //======================================================
    //---------------Search Box-----------------------------
    //======================================================


    let searchIcon=document.querySelector('.nav-search-svg'),
        searchCloseBtn=document.querySelector('.searchModal__content__close'),
        searchModal=document.querySelector('.searchModal'),
    searchForm=document.querySelector('.searchModal__content__box');


    searchIcon.addEventListener('click',()=>{
        searchModal.classList.remove('closeModal')
    });


    searchCloseBtn.addEventListener('click',()=>{
        searchModal.classList.add('closeModal')
    })


    searchForm.onsubmit=function () {
        searchModal.classList.add('closeModal')
    }





})();

