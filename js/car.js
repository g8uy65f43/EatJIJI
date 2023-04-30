let item_box = document.querySelector("#item_box")
import price_list from "../data/price_list.json" assert { type: 'json' }
import title_list from "../data/title_list.json" assert { type: 'json' }



for (let i = 0; i < title_list.length; i++) {

    var item = localStorage.getItem(i)
    if (item) {
        let element =
                        ` <div  class="item_header item_body">
                                <div class="item_detail">
                                    <img src="./uploads/goods/${i}.jpg"  alt="">
                                    <div class="name">${title_list[i]}</div>
                                </div>
                                    <div class="price">
                                        <span>$</span>
                                        ${price_list[i]}
                                    </div>
                                    <div class="count">
                                        <button id="minus${i}"　class="minus">-</button>
                                        <i class = "goodCount">${item}</i>
                                        <button id="plus${i}" class="plus">+</button>
                                    </div>
                                    <div class="goodAmount">${price_list[i].replace(",", "") * item}</div>
                                    <div class="operate">
                                    <button>刪除</button>
                                    </div>
                                </div>
                            </div>
                        `
        item_box.insertAdjacentHTML("beforeend", element)
    }
}

for (let i = 0; i < title_list.length; i++) {
    let item = localStorage.getItem(i)
    let minus = document.querySelector(`#minus${i}`)
    let plus = document.querySelector(`#plus${i}`)
    if (item) {
        minus.addEventListener("click", () => {
            const index = i
            let item = localStorage.getItem(index)
            localStorage.setItem(index, item-1)
            item = localStorage.getItem(index)
            if(item <= 0){
                localStorage.removeItem(index);
                parent.location.reload();
            }
            minus.nextElementSibling.innerHTML = item
            minus.parentElement.nextElementSibling.innerHTML = price_list[i].replace(",", "") * item
        })
        plus.addEventListener("click", () => {
            const index = i
            let item = localStorage.getItem(index)
            localStorage.setItem(index, item*1+1)
            item = localStorage.getItem(index)
            minus.nextElementSibling.innerHTML = item
            minus.parentElement.nextElementSibling.innerHTML = price_list[i].replace(",", "") * item
        })
    }
}
