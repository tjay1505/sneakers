let num = 0
const vars = document.getElementById('vars')
const openers = document.getElementById('opener')
const rate = document.getElementById('rate')
vars.innerHTML = num
let x = 125.00
//rate.innerHTML = x
function Caly(e){
  let dummy = 125.00
if(e == '-' && num > 0){
  num--
x = x-dummy
//rate.innerHTML = x
vars.innerHTML= num


}

else{

num++
  x = x+dummy
  //rate.innerHTML = x
  vars.innerHTML = num
}
}

const contain = document.getElementById('contain')
function Onloader(){
  if(openers.style.display == 'flex'){
    openers.style.display = 'none'
  }
  else{
    openers.style.display = 'flex'
  }
}
function mYfun(){
  if(openers.style.display = 'flex'){
    openers.style.display = 'none'
  }
}
contain.addEventListener('click',mYfun)

// let xyx = {
//   img0 : './images/icon-cart.svg',
//   img1 : "./images/image-product-1-thumbnail.jpg",
//   img2 : "./images/image-product-2-thumbnail.jpg",
//   img3 : "./images/image-product-3-thumbnail.jpg",
//   img4 : "./images/image-product-4-thumbnail.jpg"

// }
let ary = [
"./images/image-product-1.jpg",
"./images/image-product-2.jpg",
"./images/image-product-3.jpg",
"./images/image-product-4.jpg",
]
const newimg = document.getElementById('newimg')
let num23 = 0
newimg.setAttribute('src',ary[num23])
newimg.style.borderRadius = '2vmin'

let n23 = 0
  function Moverfor(s){
    
    if(s == 'next' && n23 < 3 ){
        n23++
        console.log('o'+n23);
        newimg.setAttribute('src',ary[n23])
        
    }
    else if(s =='pre' && n23 > 0){
        n23--
        console.log('s'+n23);
        
        newimg.setAttribute('src',ary[n23])
    }
    else if(n23 <= 0){
        n23 =3
        newimg.setAttribute('src',ary[n23])

    }
    else{
        console.log('fuckup');
        
        n23=0
        newimg.setAttribute('src',ary[n23])
        

    }
  }

  // let xyx67 = {
  //   //   img0 : './images/icon-cart.svg',
  //      img1 : "./images/image-product-1-thumbnail.jpg",
  //      img2 : "./images/image-product-2-thumbnail.jpg",
  //      img3 : "./images/image-product-3-thumbnail.jpg",
  //      img4 : "./images/image-product-4-thumbnail.jpg"
    
  //    }
function thumbnailFunc(n){
    console.log(n);
    switch (n) {
      case 1:
        newimg.setAttribute('src',ary[0])
        break;
      case 2:
        newimg.setAttribute('src',ary[1])
        break;
      case 3:
        newimg.setAttribute('src',ary[2])
        break;
      case 4:
        newimg.setAttribute('src',ary[3])
        break;
      default:
        break;
    }
}
const gallery = document.getElementById('gallery')
const mainImg = document.getElementById('main-img')


function productView(event){
  var pageWidth = document.documentElement.scrollWidth;
if(pageWidth > 780){
  let newURL = event.srcElement.src
  //console.log(newURL);
  gallery.style.display = 'block'
  mainImg.setAttribute('src',newURL)
}
  
}


function closeFunc(){
  gallery.style.display = 'none'
}
const price = document.getElementById('prices')
const number = document.getElementById('number')
const emptyC = document.getElementById('emptyC')
const carticon = document.getElementById('cartIcon')
function cartLoader(){
  Load.style.display = 'grid'
  emptyC.style.display = 'none'
  let size = vars.innerText
  number.innerText = size
  price.innerText = size*125.00
  carticon.style.borderBottom = '5px solid orangered'
  
}
const Load = document.getElementById('loader')
function clearCart(){
  emptyC.style.display = 'block'
  Load.style.display = 'none'
  carticon.style.borderBottom = ''

}

const menubox = document.getElementById('menuBox')

function openMenu(opp){
  if(opp){
    menubox.style.display = 'flex'
  }
  else{
    menubox.style.display = 'none'
  }
}


