let goodBox = document.querySelector(".good")
let goods 

import price_list from "../data/price_list.json" assert { type: 'json' }
import title_list from "../data/title_list.json" assert { type: 'json' }
for (let i = 0; i < title_list.length; i++) {
   
    let element = `<ul class="goods wrapper">
    <li>
        <div class="good-ImgBox">
            <img src="./uploads/goods/${i}.jpg" alt="" />
        </div>
        <h2>${title_list[i]}</h2>
        <p>${price_list[i]+ "元"}</p>
    </li>
</ul>`
goodBox.insertAdjacentHTML("beforeend",element)

}
goods = document.querySelectorAll(".goods")
for (let i = 0; i<title_list.length;i++){
    goods[i].addEventListener("click", () => {
            window.location.assign(`http://127.0.0.1:5500/goods_page/${i}.html`)
        })


}