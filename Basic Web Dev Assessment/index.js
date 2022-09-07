let myRequest = new Request("./data.json");

fetch(myRequest)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    //product 1
    var productName1 = data.product1.name;
    var productVol1 = data.product1.vol;
    var productPrice1 = data.product1.price;
    document.getElementById("dom-name1").textContent =
      productName1 + " " + productVol1;
    document.getElementById("dom-price1").textContent = "$" + productPrice1;

    //product2

    var productName2 = data.product2.name;
    var productVol2 = data.product2.vol;
    var productPrice2 = data.product2.price;
    document.getElementById("dom-name2").textContent =
      productName2 + " " + productVol2;
    document.getElementById("dom-price2").textContent = "$" + productPrice2;

    //product3

    var productName3 = data.product3.name;
    var productVol3 = data.product3.vol;
    var productPrice3 = data.product3.price;
    document.getElementById("dom-name3").textContent =
      productName3 + " " + productVol3;
    document.getElementById("dom-price3").textContent = "$" + productPrice3;

    //product4

    var productName4 = data.product4.name;
    var productVol4 = data.product4.vol;
    var productPrice4 = data.product4.price;
    document.getElementById("dom-name4").textContent =
      productName4 + " " + productVol4;
    document.getElementById("dom-price4").textContent = "$" + productPrice4;

    //product 5
    var productName5 = data.product5.name;
    var productVol5 = data.product5.vol;
    var productPrice5 = data.product5.price;
    document.getElementById("dom-name5").textContent =
      productName5 + " " + productVol5;
    document.getElementById("dom-price5").textContent = "$" + productPrice5;

    //product6

    var productName6 = data.product6.name;
    var productVol6 = data.product6.vol;
    var productPrice6 = data.product6.price;
    document.getElementById("dom-name6").textContent =
      productName6 + " " + productVol6;
    document.getElementById("dom-price6").textContent = "$" + productPrice6;

    //product7

    var productName7 = data.product7.name;
    var productVol7 = data.product7.vol;
    var productPrice7 = data.product7.price;
    document.getElementById("dom-name7").textContent =
      productName7 + " " + productVol7;
    document.getElementById("dom-price7").textContent = "$" + productPrice7;

    //product8

    var productName8 = data.product8.name;
    var productVol8 = data.product8.vol;
    var productPrice8 = data.product8.price;
    document.getElementById("dom-name8").textContent =
      productName8 + " " + productVol8;
    document.getElementById("dom-price8").textContent = "$" + productPrice8;
  });

function button1() {
  console.log(document.getElementById("img1").getAttribute("src"));
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

const open = document.getElementById("open");
const modal_container = document.getElementById("modal_container");
const close = document.getElementById("close");

open.addEventListener("click", () => {
  modal_container.classList.add("show");
});

close.addEventListener("click", () => {
  modal_container.classList.remove("show");
});

var itemsToAdd = document.getElementById("itemsAdded");

const btn1 = document.getElementById("button1");
btn1.addEventListener("click", () => {
  var atcName = document.getElementById("dom-name1").innerHTML;
  var atcPrice = document.getElementById("dom-price1").innerHTML;
  var forReceipt = atcName + "................................." + atcPrice;
  itemsToAdd.textContent += forReceipt;
});

const btn2 = document.getElementById("button2");
btn2.addEventListener("click", () => {
  var atcName = document.getElementById("dom-name2").innerHTML;
  var atcPrice = document.getElementById("dom-price2").innerHTML;
  var forReceipt = atcName + "................................." + atcPrice;
  itemsToAdd.textContent += forReceipt;
});

const btn3 = document.getElementById("button3");
btn3.addEventListener("click", () => {
  var atcName = document.getElementById("dom-name3").innerHTML;
  var atcPrice = document.getElementById("dom-price3").innerHTML;
  var forReceipt = atcName + "................................." + atcPrice;
  itemsToAdd.textContent += forReceipt;
});

const btn4 = document.getElementById("button4");
btn4.addEventListener("click", () => {
  var atcName = document.getElementById("dom-name4").innerHTML;
  var atcPrice = document.getElementById("dom-price4").innerHTML;
  var forReceipt = atcName + "................................." + atcPrice;
  itemsToAdd.textContent += forReceipt;
});

const btn5 = document.getElementById("button5");
btn5.addEventListener("click", () => {
  var atcName = document.getElementById("dom-name5").innerHTML;
  var atcPrice = document.getElementById("dom-price5").innerHTML;
  var forReceipt = atcName + "................................." + atcPrice;
  itemsToAdd.textContent += forReceipt;
});

const btn6 = document.getElementById("button6");
btn6.addEventListener("click", () => {
  var atcName = document.getElementById("dom-name6").innerHTML;
  var atcPrice = document.getElementById("dom-price6").innerHTML;
  var forReceipt = atcName + "................................." + atcPrice;
  itemsToAdd.textContent += forReceipt;
});

const btn7 = document.getElementById("button7");
btn7.addEventListener("click", () => {
  var atcName = document.getElementById("dom-name7").innerHTML;
  var atcPrice = document.getElementById("dom-price7").innerHTML;
  var forReceipt = atcName + "................................." + atcPrice;
  itemsToAdd.textContent += forReceipt;
});

const btn8 = document.getElementById("button8");
btn8.addEventListener("click", () => {
  var atcName = document.getElementById("dom-name8").innerHTML;
  var atcPrice = document.getElementById("dom-price8").innerHTML;
  var forReceipt = atcName + "................................." + atcPrice;
  itemsToAdd.textContent += forReceipt;
});
