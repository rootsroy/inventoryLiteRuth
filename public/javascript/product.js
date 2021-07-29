$(document).ready(function () {
  $("#productConfirm").click((event) => {
    let itemId = $("#itemId").val();
    console.log("itemId=" + itemId);
    if (itemId == undefined || itemId.length <= 0) {
      createProduct();
    } else {
      updateProduct(itemId);
    }
  });
});

let goHome = () => {
  document.location.href = "/";
};

let createProduct = () => {
  let name = $("#itemName").val();
  let price = $("#itemPrice").val();
  let stock = $("#itemStock").val();
  console.log("adada!!!");
  fetch(`/api/items`, {
    method: "POST",
    body: JSON.stringify({
      item_name: name,
      price: price,
      stock: stock,
    }),
    headers: { "Content-Type": "application/json" },
  })
    // .then((response) => response.json())
    // .then((response) => console.log(response))
    .then(goHome);
};

// update
let updateProduct = (productId) => {
  let name = $("#itemName").val();
  let price = $("#itemPrice").val();
  let stock = $("#itemStock").val();
  console.log("adada!!!");
  fetch(`/api/items/${productId}`, {
    method: "PUT",
    body: JSON.stringify({
      id: productId,
      item_name: name,
      price: price,
      stock: stock,
    }),
    headers: { "Content-Type": "application/json" },
  })
    // .then((response) => response.json())
    // .then((response) => console.log(response))
    .then(goHome);
};

// delete
let deleteProduct = (productId) => {
  fetch(`/api/items`, {
    method: "DEL",
    body: JSON.stringify({
      title,
      content,
    }),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then(goHome);
};
