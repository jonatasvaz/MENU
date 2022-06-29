let  breakFesat = [
     {name1:"pancake",source1:"./img-section/panqueca.jpg" ,discricion1:"pancake with chocolate syrup and caramel sauce" , price1:"US $ " + 13.50,
    name2:"cookies",source2:"./img-section/biscoito.jpg" ,discricion2:"crunchy cookies with chocolate pins and some side dishes" , price2:"US $ " +  8.25,
      name3:"bread",source3:"./img-section/pao.jpg" ,discricion3:"bread with butter and a cup of coffee" , price3:"US $ " +  2.50},
]
let index = 0
//pancake
let breakfeast = document.querySelector("#breakfeast")
let name1 = document.querySelector("#name1 ")
let img1 = document.querySelector("#img1")
let discricion1=document.querySelector("#discricion1")
let price1 = document.querySelector("#price1")
//cockies
let name2 =document.querySelector("#name2")
let img2=document.querySelector("#img2")
let discricion2=document.querySelector("#discricion2")
let price2= document.querySelector("#price2")
//bread
let name3 =document.querySelector("#name3")
let img3=document.querySelector("#img3")
let discricion3=document.querySelector("#discricion3")
let price3= document.querySelector("#price3")



breakfeast.addEventListener("click", (e)=>{
    e.preventDefault()
    change()
})


 function changeBreak(){
   let item = breakFesat[index]
  //pancake
     name1.textContent=item.name1
      img1.src=item.source1
     discricion1.textContent=item.discricion1
     price1.textContent=item.price1
     //cockies
    name2.textContent=item.name2;
    img2.src=item.source2
    discricion2.textContent=item.discricion2
    price2.textContent= item.price2
   //bread
   name3.textContent=item.name3;
   img3.src=item.source3
   discricion3.textContent=item.discricion3
   price3.textContent= item.price3
    }

//luch
let  lunch = [
  {name4:"noodle",source4:"./img-section/macarrão.jpg" ,discricion4:"pasta in tomato sauce with majerica" , price4:"US $ " + 19.50,
 name5:"salad",source5:"./img-section/salada.jpg" ,discricion5:"salad dressed with olive oil vegetable and mustard and salt" , price5:"US $ " +  9.25,
   name6:"fish",source6:"./img-section/peixe.jpg" ,discricion6:"fried fish with sauce and salad" , price6:"US $ " +  22.50},
]




document.querySelector("#lunch").addEventListener("click",(e)=>{
   e.preventDefault()
   changeLunch()
})

function changeLunch(){
  let item2=lunch[index]
  //  
  name1.textContent=item2.name4
  img1.src= item2.source4
  discricion1.textContent= item2.discricion4
  price1.textContent= item2.price4
//
name2.textContent=item2.name5
img2.src= item2.source5
discricion2.textContent= item2.discricion5
price2.textContent= item2.price5


name3.textContent=item2.name6
img3.src= item2.source6
discricion3.textContent= item2.discricion6
price3.textContent= item2.price6
}


//



let  ice = [
  {name7:"whiskey",source7:"./img-section/whiskey.jpg" ,discricion7:"whiskey with ice and lemon" , price7:"US $ " + 7.50,
 name8:"beer",source8:"./img-section/beer.jpg" ,discricion8:"500 ml artisanal cold beer with lemon or fruit" , price8:"US $ " +  3.25,
   name9:"wine",source9:"./img-section/vinho.jpg" ,discricion9:"artisanal fresh red wine" , price9:"US $ " +  5.50},
]

document.querySelector("#ice-shakes").addEventListener("click",(e)=>{
  e.preventDefault()
  changeIce()
})

function changeIce(){
    let item3 =ice[index]

    name1.textContent=item3.name7
    img1.src= item3.source7
    discricion1.textContent= item3.discricion7
    price1.textContent= item3.price7

    name2.textContent=item3.name8
    img2.src= item3.source8
    discricion2.textContent= item3.discricion8
    price2.textContent= item3.price8

    name3.textContent=item3.name9
    img3.src= item3.source9
    discricion3.textContent= item3.discricion9
    price3.textContent= item3.price9
}

//
let  milk = [
  {name10:"milk shake",source10:"./img-section/milk.jpg" ,discricion10:"chocolate milkshake with strawberry sprinkles" , price10:"US $ " + 4.50,
 name11:"ice cream",source11:"./img-section/sorvete.jpg" ,discricion11:"chocolate or vanilla ice cream with different colors and sprinkles" , price11:"US $ " +  2.25,
   name12:"pie",source12:"./img-section/torta.jpg" ,discricion12:" ice cream pie with chocolate spread" , price12:"US $ " +  6.50},
]

document.querySelector("#milk-shakes").addEventListener( "click",(e)=>{
e.preventDefault()
changeMilk()
})

function changeMilk(){
  let item4 =  milk[index]

  name1.textContent=item4.name10
    img1.src= item4.source10
    discricion1.textContent= item4.discricion10
    price1.textContent= item4.price10

    name2.textContent=item4.name11
    img2.src= item4.source11
    discricion2.textContent= item4.discricion11
    price2.textContent= item4.price11

    name3.textContent=item4.name12
    img3.src= item4.source12
    discricion3.textContent= item4.discricion12
    price3.textContent= item4.price12

}

 


