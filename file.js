const plusbuttons=document.querySelectorAll(".plus")
const quantityofArticle=document.querySelectorAll(".count")
const minusbuttons=document.querySelectorAll(".minus")
const deletbuttons=document.querySelectorAll(".delet")
const prices=document.querySelectorAll(".price")
console.log(prices)
const cards=document.querySelectorAll(".card-body")
const sum=document.querySelector(".sum")




function myFunction(x) {
    x.classList.toggle("fa-thumbs-down");
  }


for(let i=0;i<minusbuttons.length;i++){
    minusbuttons[i].addEventListener("click",function(){
        if(quantityofArticle[i].innerHTML>0)
        quantityofArticle[i].innerHTML--
        sum.innerHTML=parseInt(sum.innerHTML)-parseInt(prices[i].innerHTML)

    })
}



for(let i=0;i<plusbuttons.length;i++){
    plusbuttons[i].addEventListener("click",function(){
        quantityofArticle[i].innerHTML++
        sum.innerHTML=parseInt(sum.innerHTML)+parseInt(prices[i].innerHTML)

    })

}



for(let i=0;i<deletbuttons.length;i++){
    deletbuttons[i].addEventListener("click",function(){
        cards[i].remove()
        sum.innerHTML=parseInt(sum.innerHTML)-parseInt(prices[i].innerHTML)*parseInt(quantityofArticle[i].innerHTML)
    })
        

}






