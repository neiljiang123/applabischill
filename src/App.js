import React, {useState} from 'react';
import './App.css';
// search the names of the items in the typebox

let shoppingCartItems = [
  {
    item: 'War and Peace',
    image: 'https://images4.penguinrandomhouse.com/cover/9781400079988',
    description: 'War and Peace broadly focuses on Napoleon’s invasion of Russia in 1812 and follows three of the most well-known characters in literature',
    price: "100$"
  },
  {
    item:"Wall E",
    image:'http://img3.imgtn.bdimg.com/it/u=806327439,850921122&fm=26&gp=0.jpg',
    description:'Little robot Wall E called Wall E ',
    price: "10000$"

  },
  {
    item:"Clark Kent",
  image:'http://img4.imgtn.bdimg.com/it/u=1479147330,2207305402&fm=26&gp=0.jpg',
  description:'Having a superman to protect u on Mars',
  price: "1000000000000$"

  }

]

let searchedItems = [

]

let searchedItemsHtml = null;



// for (let i = 0; i < products.length; i++) {
//   return shoppingCartItems[i]
// }



function App() {
  return (
    <div className="App">
      <h1>Your Shopping Cart</h1>
     <ShoppingCart />
    </div>
  );
}

// function ShoppingCart() {

//   const [products, setProducts] = useState(null);

//   var newProducts = searchedItems.map(function(singleProduct){
//     return (
//       <div className='product' >
//         <p>{singleProduct.description}</p>
//         <br>
//         </br>
//         <p className='money'>{singleProduct.price}</p>
//         <img src={singleProduct.image}></img>
//     </div>
//     )
//   })

//   setProducts(newProducts);

//   return(
//     <div className="cart">
//       {products}
//     </div>
//   );
// }

function ShoppingCart() {
  const [products, setProducts] = useState([]);
  function handleChange(e) {
   let input = e.target.value;
   searchedItems = shoppingCartItems.filter(function(singleItem){
     return singleItem.item === input
   });
   setProducts(searchedItems);
  }
  let productsHtml = products.map(function(singleProduct){
    return (
      <div className='product' >
        <p>{singleProduct.description}</p>
        <br>
        </br>
        <p className='money'>{singleProduct.price}</p>
        <img src={singleProduct.image}></img>
    </div>
    )
  })
  //setProducts(newProducts);
  return(
   <div>
   <form>
     <label>
       Search:
       <input type="text" name="name" onChange={handleChange} />
     </label>
     <input type="submit" value="Submit" />
   </form>
    <div className="cart">
      {productsHtml}
    </div>
    </div>
  );
  }

// function Product() {
//   return(
//     <div className="product">
//       <img src={shoppingCartItems[0].image} width="100"/>
//       <p text={"shoppingCartItems[0].description"}>description: 'War and Peace broadly focuses on Napoleon’s invasion of Russia in 1812 and follows three of the most well-known characters in literature',
//     price: 100</p>
//       <br></br>
//       <img src={shoppingCartItems[1].image} width="100"/>
//       <p>description:'Little robot Wall E called Wall E ',
//     price: 10000</p>
//       <img src={shoppingCartItems[2].image} width="100"/>
//       <p>description:'Having a superman to protect u on Mars',
//   price: 1000000000000</p>

//     </div>
//   )
// }

// function handleChange(e) {
//   let input = e.target.value;
//   console.log(input);
//   searchedItems = shoppingCartItems.filter(function(singleItem){
//     return singleItem.item === input
//   });
//   console.log(searchedItems);
// }

// function SearchForm() {
//   return(
//     <form>
//       <label>
//         Search:
//         <input type="text" name="name" onChange={handleChange} />
//       </label>
//       <input type="submit" value="Submit" />
//     </form>
//   );
// }



export default App;
