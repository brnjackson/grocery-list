document.querySelector("#clear").addEventListener("click", () => {
  document.querySelector("#all_items").textContent = "";
});

document.querySelector("#clear").addEventListener("click", () => {
  document.querySelector("#all_prices").textContent = "";
});

document.querySelector("#clear").addEventListener("click", () => {
    document.querySelector("#total_items").innerHTML = "0";
  });

  document.querySelector("#clear").addEventListener("click", () => {
    document.querySelector("#total_price").innerHTML = "0";
  });

// functionality for adding item
addItemAndPrice = () => {
  // item is going to be an new h2 element
  const item = document.createElement("h2");
  const price = document.createElement("h2")
    price.id = 'price'
  // consisting of the user input
  item.textContent = document.querySelector("#user_input_item").value;
  price.textContent = document.querySelector("#user_input_price").value;

  const inputItem = document.querySelector("#user_input_item").value
  const inputPrice = document.querySelector("#user_input_price").value

  // when item is clicked
  item.addEventListener("click", () => {
    // if there is not a line through the item
    if (item.style.textDecoration != "line-through")
      // cross it out
      item.style.textDecoration = "line-through";
    // if not just let be
    else item.style.textDecoration = "none";
  });

  if ( inputItem !== "" && inputPrice !== "") {
    document.querySelector("#all_items").appendChild(item);
    document.querySelector("#all_prices").appendChild(price);
    // clear the user input after enter
    document.querySelector("#user_input_item").value = "";
    document.querySelector("#user_input_price").value = ""
  } 
  
  if (inputItem === "") {
    alert("Please enter an item");
  }

  if(inputPrice === "") {
    alert("Please enter the item's price");
  }

  // add the new item to the all items div
};

totalItems = () => {};

totalPrice = () => {
    let arr = []
    let eachPrice = Number(document.getElementsByClassName('price').innerHTML)

    arr.push(eachPrice)

    return arr.reduce((a, b) => a + b)
};


document.getElementById("calculate").onclick = () => {
  document.getElementById("total_items").innerHTML =
    document.getElementById("all_items").children.length;
};

document.getElementById("calculate_price").onclick = () => {
    let eachPrice = parseInt(document.getElementById('price').innerHTML) + 5 
    for(let i = 0; i < eachPrice[i]; i++) {
        console.log(eachPrice[i])
    }

    document.getElementById("total_price").innerHTML = eachPrice
}
// if no price OR item - alert X
// quantify amount of items and display in total X
// calculate total of all prices
// button to add item and price together X
// no enters only clicks....add one and the other X
