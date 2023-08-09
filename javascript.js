const btns = document.querySelectorAll('.topbtn');
let cont=document.querySelectorAll('.item'); 
const additembtn = document.getElementsByClassName('additem');
const content=document.getElementsByClassName('content');
const content2=document.getElementsByClassName('content2');
const returnbtn=document.getElementsByClassName('return');
const cartbtn = document.getElementsByClassName('cartcircle');
const billcont = document.getElementsByClassName('bill');
const billbtn = document.getElementsByClassName('checkout');
const cartallmenu = document.getElementsByClassName('allmenu');
let original = document.getElementsByClassName('singleproduct');
function clonning(cloneName){ cloneName = original[0].cloneNode(true);
    cloneName.classList.remove('heading');
    cloneName.childNodes[1].classList.remove('heading');
    cloneName.childNodes[3].classList.remove('heading');
    cloneName.childNodes[5].classList.remove('heading');
    return cloneName;}
let clone1 = clonning('clone1');
let clone2 = clonning('clone2');
let clone3 = clonning('clone3');
let clone4 = clonning('clone4');
let clone5 = clonning('clone5');
let totalQuantity;
let totalCost;
let totalObj = document.getElementsByClassName('billitemqty');
let totalCostObj = document.getElementsByClassName('cost');
function billItemAdd(itemName,cost,cloneName){
    cloneName.childNodes[1].innerHTML=itemName;
    cloneName.childNodes[3].innerHTML=quantity[0].innerHTML;
    cloneName.childNodes[5].innerHTML= '$ '+ (parseFloat(quantity[0].innerHTML)*cost);
    document.getElementById('add').appendChild(cloneName);
}
//Reduced code by defining function for clonning.
// let clone1 = original[0].cloneNode(true);
// clone1.classList.remove('heading');
// clone1.childNodes[1].classList.remove('heading');
// clone1.childNodes[3].classList.remove('heading');
// clone1.childNodes[5].classList.remove('heading');
// let clone2 = original[0].cloneNode(true);
// clone2.classList.remove('heading');
// clone2.childNodes[1].classList.remove('heading');
// clone2.childNodes[3].classList.remove('heading');
// clone2.childNodes[5].classList.remove('heading');
// let clone3 = original[0].cloneNode(true);
// clone3.classList.remove('heading');
// clone3.childNodes[1].classList.remove('heading');
// clone3.childNodes[3].classList.remove('heading');
// clone3.childNodes[5].classList.remove('heading');
// let clone4 = original[0].cloneNode(true);
// clone4.classList.remove('heading');
// clone4.childNodes[1].classList.remove('heading');
// clone4.childNodes[3].classList.remove('heading');
// clone4.childNodes[5].classList.remove('heading');
// let clone5 = original[0].cloneNode(true);
// clone5.classList.remove('heading');
// clone5.childNodes[1].classList.remove('heading');
// clone5.childNodes[3].classList.remove('heading');
// clone5.childNodes[5].classList.remove('heading');
let quantity;
let qty;
let selected;
btns.forEach((btnclick) => {
    btnclick.addEventListener(('click'),() => {
        cont.forEach((item) => {item.classList.remove('visible')})
    if(btnclick.innerHTML == 1)
    {
        cont[0].classList.add('visible');
    }
    else if(btnclick.innerHTML == 2)
    {
        cont[1].classList.add('visible');
    }
    else if(btnclick.innerHTML == 3)
    {
        cont[2].classList.add('visible');
    }
    else if(btnclick.innerHTML == 4)
    {
        cont[3].classList.add('visible');
    }
    else if(btnclick.innerHTML == 5)
    {
        cont[4].classList.add('visible');
    }  
    else
    {
    }
    }
)
}
);
additembtn[0].addEventListener(('click'),()=> {
        content[0].classList.remove('visible');
        content2[0].classList.add('visible');
    selected = document.querySelector('.visible h4');
    if(selected.innerHTML == 'Cappuccino')
    {
        qty = document.getElementById('capu');
        qty.innerHTML = (parseInt(qty.innerHTML) + 1);
    }
    else if(selected.innerHTML == 'Espresso')
    {
        qty = document.getElementById('espr');
        qty.innerHTML = (parseInt(qty.innerHTML) + 1);
    }
    else if(selected.innerHTML == 'Glace')
    {
        qty = document.getElementById('glac');
        qty.innerHTML = (parseInt(qty.innerHTML) + 1);
    }
    else if(selected.innerHTML == 'Cocoa')
    {
        qty = document.getElementById('coco');
        qty.innerHTML = (parseInt(qty.innerHTML) + 1);
    }
    else if(selected.innerHTML == 'Mocha')
    {
        qty = document.getElementById('moch');
        qty.innerHTML = (parseInt(qty.innerHTML) + 1);
    }
    })
returnbtn[0].addEventListener(('click'),()=>{
    content[0].classList.add('visible');
    content2[0].classList.remove('visible');
});
cartbtn[0].addEventListener(('click'),()=>{
    content[0].classList.remove('visible');
    billcont[0].classList.remove('visible');
    content2[0].classList.add('visible');
})
billbtn[0].addEventListener(('click'),()=>{
    content[0].classList.remove('visible');
    content2[0].classList.remove('visible');
    billcont[0].classList.add('visible');
    for(i=0;i<=4;i++)
    {
        quantity = cartallmenu[i].getElementsByTagName('span');
        if(parseInt(quantity[0].innerHTML) > 0)
        {
            if(quantity[0].id == 'capu')
            {
                billItemAdd('Cappuccino',5,clone1);
            }
            else if(quantity[0].id == 'espr')
            {
                billItemAdd('Espresso',5.5,clone2);
            }
            else if(quantity[0].id == 'glac')
            {
                billItemAdd('Glace',6,clone3);
            }
            else if(quantity[0].id == 'coco')
            {
                billItemAdd('Cocoa',6.5,clone4);
            }
            else if(quantity[0].id == 'moch')
            {
                billItemAdd('Mocha',7,clone5);
            }
            else{}
        }
        else{}

    }
    totalCost = 0;
    totalQuantity = 0;
    for(i=1;i<((Object.keys(totalObj).length)-1);i++)
    {
        console.log('Value of I '+i);
        totalQuantity += parseInt(totalObj[i].innerHTML);
        totalObj[(Object.keys(totalObj).length)-1].innerHTML = totalQuantity;
        totalCost += parseFloat((totalCostObj[i].innerHTML).substring(1));
    }
    totalCostObj[((Object.keys(totalObj).length)-1)].innerHTML = '$ ' +totalCost;
})
    
cartbtn[1].addEventListener(('click'),()=>{
    billcont[0].classList.remove('visible');
    content[0].classList.remove('visible');
    content2[0].classList.add('visible');
})


