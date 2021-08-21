// Memory
document.getElementById("8GB-memory").addEventListener("click", function () {
  getMemory(0);
});
document.getElementById("16GB-memory").addEventListener("click", function () {
  getMemory(180);
});
// memory common function
function getMemory(memoryCost) {
  const totalMemoryCost = document.getElementById("memory-cost");
  totalMemoryCost.innerText = memoryCost;
  totalPrice();
}

// storage
document.getElementById("256GB-storage").addEventListener("click", function () {
  getStorage(0);
});
document.getElementById("512GB-storage").addEventListener("click", function () {
  getStorage(100);
});
document.getElementById("1TB-storage").addEventListener("click", function () {
  getStorage(180);
});
// storage common function
function getStorage(storageCost) {
  const totaStorageCost = document.getElementById("storage-cost");
  totaStorageCost.innerText = storageCost;
  totalPrice();
}

//  delivery
document.getElementById("free-delivery").addEventListener("click", function () {
  getDeliveryCost(0);
});
document
  .getElementById("costing-delivery")
  .addEventListener("click", function () {
    getDeliveryCost(20);
  });

// delivery common function
function getDeliveryCost(deliveryCost) {
  const delivery = document.getElementById("delivery-cost");
  delivery.innerText = deliveryCost;
  totalPrice();
}

function totalPrice() {
  const memoryCost = parseInt(document.getElementById("memory-cost").innerText);
  const storageCost = parseInt(
    document.getElementById("storage-cost").innerText
  );
  const deliveryCost = parseInt(
    document.getElementById("delivery-cost").innerText
  );
  const totalPrice = 1299 + memoryCost + storageCost + deliveryCost;
  document.getElementById("total-price").innerText = totalPrice;
  document.getElementById("total").innerText = totalPrice;
}

// promo code
function matchCode() {
  let input = document.getElementById("input-code").value;
  if (input == "stevekaku") {
    document.getElementById("input-code").value = "";
    const total = document.getElementById("total").innerText;
    const discountPrice = total - total * (20 / 100);
    document.getElementById("total").innerText = discountPrice;
  } else {
    document.getElementById("input-code").value = "";
  }
}
