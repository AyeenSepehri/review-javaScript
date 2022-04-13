const instruments = [
    {
        id:1,
        name: "گیتار",
        type: "زهی زخمه ای",
        image:"https://cdn-icons-png.flaticon.com/512/820/820691.png",
        info:"گیتار سازیست زهی و دارای شش سیم که با دست چپ فرت گیری و با دست راست ضربه زدن به سیم انجام میشود گیتار در سبک های مختلف موسیقی مانند کلاسیک پاپ و فلامنکو اسپانیایی بسیار پر کاربرد است"
    },
    {
        id:2,
        name: "ویولن",
        type: "زهی آرشه ای",
        image:"https://cdn-icons-png.flaticon.com/512/820/820690.png",
        info:"ویولن سازیست زهی که چهار سیم دارد و با آرشه نواخته میشود این ساز در همنوازی و ارکستر نقش بسیار پر رنگی دارد و این ساز توانایی اجرای تمامی فواصل موسیقی غربی و ایرانی را دارد."
    },
    {
        id:3,
        name: "پیانو",
        type: "زهی چکشی",
        image:"https://cdn-icons-png.flaticon.com/512/195/195183.png",
        info:"پیانو سازیست زهی که با فشردن شاسی های آن چکشی در داخل جعبه پیانو به سیم هایش ضربه میزند و سبب تولید صدا میشود پیانو در بین ساز ها بیشترین گستره صوتی را دارد ور در مجموع بیش از هفت اکتاو گستره صوتی پیانو است."
    },
    {
        id:4,
        name: "آکاردئون",
        type: "بادی",
        image:"https://cdn-icons-png.flaticon.com/512/820/820675.png",
        info:"آکاردئون سازیست بادی که از بازو بسته شدن دم آن تولید هوا میشود و به وسیله ی زبانه های داخل ساز و فشردن شاسی های آکاردئون تولید صدا میشود عمدتا گستره بم ساز در شاسی های سمت چپ و گستره صداهای زیر بر روی شاسی های دست راست وجود دارد"
    }
];
const picture = document.getElementById("instrument-img");
const instrument = document.getElementById("instrument");
const type = document.getElementById("type");
const info = document.getElementById("info");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
//set start nuber
let currentItem = 0;

window.addEventListener("DOMContentLoaded", function(){
    showPerson()
})
//conecting objects with consts 
function showPerson() {
    const item = instruments[currentItem];
    picture.src = item.image;
    instrument.textContent = item.name;
    type.textContent = item.type;
    info.textContent = item.info
}
//set next button
nextBtn.addEventListener("click", function(){
    currentItem ++;
    if(currentItem > instruments.length -1){
        currentItem = 0;
    }
    showPerson()
})
//set prev button
prevBtn.addEventListener("click", function(){
    currentItem --;
    if(currentItem < 0){
        currentItem = instruments.length -1;
    }
    showPerson()
})
