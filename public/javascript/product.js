let goHome = () => {
  document.location.href = "/";
};
let createProduct = (product) => {
  let name = $("itemName");
  let price = $("itemPrice");
  let stock = $("itemStock");

  fetch(`/api/items`, {
    method: "POST",
    body: JSON.stringify({
      item_name: name,
      price: price,
      stock: stock,
    }),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then(goHome);
};

// update
let updateProduct = (product) => {
  fetch(`/api/items`, {
    method: "PUT",
    body: JSON.stringify({
      title,
      content,
    }),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
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
