(function () {

    var heightInterval,heightElement,maxHeight,decreaseHeight;

//=========================================================================
//-----------------Configuration of Header---------------------------------
//=========================================================================


    var headerShipping=document.querySelector('.header__shipping');
    var headerNav=document.querySelector('.header__nav');

    window.onscroll=function(){

        heightElement=headerShipping;
        if(window.innerHeight/window.scrollY<16){
            clearInterval(heightInterval);
            maxHeight=0;
            decreaseHeight=true;
            heightInterval=setInterval(changeHeight,30);

        }else {
            clearInterval(heightInterval);

            maxHeight=25;
            decreaseHeight=false;
            heightInterval=setInterval(changeHeight,30);
        }





    }






//====================Nav Menu Click===========================

    var mobileMenu=document.querySelector('.nav__menu'),
        mobileNav=document.querySelector('.header__mobileNav');

    mobileMenu.addEventListener('click',function () {

        heightElement=mobileNav;

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

        heightInterval=setInterval(changeHeight,30);

    })




    function changeHeight() {


        var boxCurrentHeightpx=heightElement.style.height;

        var boxCurrentHeight=removePX(boxCurrentHeightpx);



        var height=heightElement.style.height;

        height=removePX(height);

        if(decreaseHeight){

            if(height<=0){

                clearInterval(heightInterval);
                window.clearInterval(heightInterval);
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


    function removePX(boxCurrentHeightpx) {
        var boxCurrentHeight= boxCurrentHeightpx.split('');
        boxCurrentHeight.pop();
        boxCurrentHeight.pop();
        boxCurrentHeight=boxCurrentHeight.join('');
        boxCurrentHeight=Number(boxCurrentHeight);
        return boxCurrentHeight;
    }


})();