const loadAllProduct=() => {
fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {
displayProduct(data);
  });
};

const displayProduct=(products)=> {
const productContainer = document.getElementById('product-container');
products.forEach(product => {
    const div = document.createElement("div"); 
    div.classList.add("cart"); 
    div.innerHTML=`
    <img class="card-img" src="${product.image}" alt=""/>
    <h5>${product.title.slice(0,50)}</h5>
    <h3>${product.price} $</h3>
    <p>${product.description.slice(0,50)}</p>
    <button>Details</button>
  <button onclick="handleAddToCart('${product.title.slice(0,10)}', ${parseFloat(product.price)})">Add to Cart</button>


    `;
    productContainer.appendChild(div); 
});
}


const handleAddToCart=(name,price)=> {
  const container = document.getElementById("cart-main-container");
  const div = document.createElement("div");
  // div.classList.add("cart-info");
  div.innerHTML=`
  <p>${name.slice(0,10)}</p>
  <h3 class="price">${price}</h3>
  `;
  container.appendChild(div);
  UpdateTotal(); // Ensure this is called after adding to the cart
};

const UpdateTotal=()=>{
  const allPrice = document.getElementsByClassName("price");
  let count =0;
  for(const element of allPrice){
    count= count+parseFloat(element.innerText);
  }
  document.getElementById("total").innerText = count.toFixed(2);
}

const singleProduct=()=>{
  
}
loadAllProduct();