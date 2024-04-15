export function counter(element, product) {
    let countNum = document.getElementById(`num${product.id}`);
    let totalPriceProduct = document.getElementById(`price${product.id}`);
  
      if (element.target.id === "plus") {
        countNum.innerText++;
      } else if (countNum.innerText != 0 && element.target.id === "mines") {
        countNum.innerText--;
      }
      totalPriceProduct.innerText = `$${product.price * countNum.innerText}.00`;

}
