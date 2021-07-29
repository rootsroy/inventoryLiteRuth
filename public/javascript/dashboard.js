//*************
// API  FUNCTIONS
//
function removeStock(){

}

function addStock(){
  
}

// readAll
function getProducts() {
  return new Promise((resolve, reject) => {
    fetch("/api/items")
      .then((response) => response.json())
      .then((data) => console.log(data));
  });
}
