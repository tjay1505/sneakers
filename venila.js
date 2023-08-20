let num = 0
const vars = document.getElementById('vars')
const openers = document.getElementById('opener')
const rate = document.getElementById('rate')
vars.innerHTML = num
let x = 125.00
rate.innerHTML = x
function Caly(e){
  let dummy = 125.00
if(e == '+'){
  num++
  x = x+dummy
  rate.innerHTML = x
  vars.innerHTML = num

}

else{
num--
x = x-dummy
rate.innerHTML = x
vars.innerHTML= num
}
}

function Onloader(){
  if(openers.style.display == 'none'){
    openers.style.display = 'flex'
  }
  else{
    openers.style.display = 'none'
  }
}

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