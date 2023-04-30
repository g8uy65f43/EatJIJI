let Korekusyon_box = document.querySelector(".Korekusyon_box")
let my_tyuumon = document.querySelector(".my-tyuumon")
import price_list from "../data/price_list.json" assert { type: 'json' }
import title_list from "../data/title_list.json" assert { type: 'json' }



for (let i = 0; i < title_list.length; i++) {

    var item = localStorage.getItem(i)
    if (item) {
        console.log(i);
        let element =
            `<div> <li> <p><img src="/uploads/goods/${i}.jpg"  alt="">  </p>  </li>
                        <li>    
                        <span>${title_list[i]}
                            </span>
                        </li>
                        <li><span>待付款</span></li>
                        <li>
                            <span>$ ${price_list[i] * item + 70} </span>
                            <p>(含運費:$70元)</p>
                            <p>在線支付</p>
                        </li>
                        <li><button>立即付款</button>
                            <p>查看詳情</p>
                            <p>取消訂單</p>
                        </li>
                    </div>
                        `
        let korekusyon = `<li><img src="/uploads/goods/${i}.jpg"  alt=""><span>
        ${title_list[i]}<p><i>$</i>${price_list[i]}</p>
    </span></li>`
        my_tyuumon.insertAdjacentHTML("beforeend", element)
        Korekusyon_box.insertAdjacentHTML("beforeend", korekusyon)
    }
}
