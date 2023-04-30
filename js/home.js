let  imgBox = document.querySelectorAll(".good-ImgBox")
import price_list from "../data/price_list.json" assert { type: 'json' }
import title_list from "../data/title_list.json" assert { type: 'json' }
for (let i = 0 ;i<imgBox.length;i++){
var img_item = imgBox[i].firstElementChild
var title_item = imgBox[i].nextElementSibling
var price_item = title_item.nextElementSibling
var li_item = price_item.parentElement
li_item.addEventListener("click",()=>{
    window.location.assign(`http://127.0.0.1:5500/goods_page/${i}.html`)
})
img_item.src +=i+".jpg"
title_item.innerHTML=title_list[i]
price_item.innerHTML = price_list[i]+"元"
}

