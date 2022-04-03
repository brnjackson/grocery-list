document.querySelector("#clear").addEventListener("click", () => {
  document.querySelector("#all_items").textContent = "";
  document.querySelector("#all_prices").textContent = "";
  document.querySelector("#total_items").innerHTML = "0";
  document.querySelector("#total_price").innerHTML = "$0";
  document.getElementById("total_price").style.color = 'black'
  document.getElementById("total_items").style.color = 'black'
});

// functionality for adding item
addItemAndPrice = () => {
  // item is going to be an new h2 element
  const item = document.createElement("h2");
  const price = document.createElement("h2");
  price.className = "price_class";
  // consisting of the user input
  
  const inputItem = document.querySelector("#user_input_item").value;
  const inputPrice = document.getElementById("user_input_price").value;

  let inputPrice2 = Number(inputPrice).toFixed(2)

  
  item.textContent = inputItem
  price.textContent = inputPrice2
  // when item is clicked
  item.addEventListener("click", () => {
    // if there is not a line through the item
    if (item.style.textDecoration != "line-through")
      // cross it out
      item.style.textDecoration = "line-through";
    // if not just let be
    else item.style.textDecoration = "none";
  });

  if (inputItem !== "" && inputPrice !== "") {
    document.querySelector("#all_items").appendChild(item);
    document.querySelector("#all_prices").appendChild(price);
    // clear the user input after enter
    document.querySelector("#user_input_item").value = "";
    document.querySelector("#user_input_price").value = "";
  }

  if (inputItem === "") {
    alert("Please enter an item");
  }

  if (inputPrice === "") {
    alert("Please enter the item's price");
  }

  // add the new item to the all items div
};


// document.getElementById("cheese").onclick = () => {
//   const item = document.createElement("h2");
//   const price = document.createElement("h2")
//     price.className = 'price_class'

//   item.innerHTML = "cheese"
//   price.innerHTML = 5

//   document.querySelector("#all_items").appendChild(item);
//     document.querySelector("#all_prices").appendChild(price);
// }

document.getElementById("calculate").onclick = () => {
  document.getElementById("total_items").innerHTML =
    document.getElementById("all_items").children.length;
    document.getElementById("total_items").style.color = 'blue';
};

document.getElementById("calculate_price").onclick = () => {
  let collection = document.getElementsByClassName("price_class");
  let sum = 0;
  for (let i = 0; i < collection.length; i++) {
    sum += Number(collection[i].innerHTML)
  }
  
  document.getElementById("total_price").innerHTML = "$" + sum.toFixed(2);
  document.getElementById("total_price").style.color = 'darkgreen'
};

document.getElementById("cheese").onclick = () => {
  const item = document.createElement("h2");
  const price = document.createElement("h2");
  price.className = "price_class";

  item.innerHTML = "cheese";
  price.innerHTML = Number(3.20).toFixed(2);

  item.addEventListener("click", () => {
    // if there is not a line through the item
    if (item.style.textDecoration != "line-through")
      // cross it out
      item.style.textDecoration = "line-through";
    // if not just let be
    else item.style.textDecoration = "none";
  });

  document.querySelector("#all_items").appendChild(item);
  document.querySelector("#all_prices").appendChild(price);

}

document.getElementById("bread").onclick = () => {
  const item = document.createElement("h2");
  const price = document.createElement("h2");
  price.className = "price_class";


  item.innerHTML = "bread";
  price.innerHTML = Number(2.50).toFixed(2);

  item.addEventListener("click", () => {
    // if there is not a line through the item
    if (item.style.textDecoration != "line-through")
      // cross it out
      item.style.textDecoration = "line-through";
    // if not just let be
    else item.style.textDecoration = "none";
  });

  document.querySelector("#all_items").appendChild(item);
  document.querySelector("#all_prices").appendChild(price);

}

document.getElementById("milk").onclick = () => {
  const item = document.createElement("h2");
  const price = document.createElement("h2");
  price.className = "price_class";

  item.innerHTML = "milk";
  price.innerHTML = 3.99;

  item.addEventListener("click", () => {
    // if there is not a line through the item
    if (item.style.textDecoration != "line-through")
      // cross it out
      item.style.textDecoration = "line-through";
    // if not just let be
    else item.style.textDecoration = "none";
  });

  document.querySelector("#all_items").appendChild(item);
  document.querySelector("#all_prices").appendChild(price);

}

document.getElementById("chips").onclick = () => {
  const item = document.createElement("h2");
  const price = document.createElement("h2");
  price.className = "price_class";

  item.innerHTML = "chips";
  price.innerHTML = 2.75;

  item.addEventListener("click", () => {
    // if there is not a line through the item
    if (item.style.textDecoration != "line-through")
      // cross it out
      item.style.textDecoration = "line-through";
    // if not just let be
    else item.style.textDecoration = "none";
  });

  document.querySelector("#all_items").appendChild(item);
  document.querySelector("#all_prices").appendChild(price);

}
document.getElementById("ketchup").onclick = () => {
  const item = document.createElement("h2");
  const price = document.createElement("h2");
  price.className = "price_class";

  item.innerHTML = "ketchup";
  price.innerHTML = 4.35;

  item.addEventListener("click", () => {
    // if there is not a line through the item
    if (item.style.textDecoration != "line-through")
      // cross it out
      item.style.textDecoration = "line-through";
    // if not just let be
    else item.style.textDecoration = "none";
  });

  document.querySelector("#all_items").appendChild(item);
  document.querySelector("#all_prices").appendChild(price);

}
document.getElementById("lettuce").onclick = () => {
  const item = document.createElement("h2");
  const price = document.createElement("h2");
  price.className = "price_class";

  item.innerHTML = "lettuce";
  price.innerHTML = 1.99;

  item.addEventListener("click", () => {
    // if there is not a line through the item
    if (item.style.textDecoration != "line-through")
      // cross it out
      item.style.textDecoration = "line-through";
    // if not just let be
    else item.style.textDecoration = "none";
  });

  document.querySelector("#all_items").appendChild(item);
  document.querySelector("#all_prices").appendChild(price);

}
document.getElementById("chicken").onclick = () => {
  const item = document.createElement("h2");
  const price = document.createElement("h2");
  price.className = "price_class";

  item.innerHTML = "chicken";
  price.innerHTML = 9.75;

  item.addEventListener("click", () => {
    // if there is not a line through the item
    if (item.style.textDecoration != "line-through")
      // cross it out
      item.style.textDecoration = "line-through";
    // if not just let be
    else item.style.textDecoration = "none";
  });

  document.querySelector("#all_items").appendChild(item);
  document.querySelector("#all_prices").appendChild(price);

}
document.getElementById("garlic").onclick = () => {
  const item = document.createElement("h2");
  const price = document.createElement("h2");
  price.className = "price_class";

  item.innerHTML = "garlic";
  price.innerHTML = 4.25;

  item.addEventListener("click", () => {
    // if there is not a line through the item
    if (item.style.textDecoration != "line-through")
      // cross it out
      item.style.textDecoration = "line-through";
    // if not just let be
    else item.style.textDecoration = "none";
  });

  document.querySelector("#all_items").appendChild(item);
  document.querySelector("#all_prices").appendChild(price);

}
document.getElementById("pasta").onclick = () => {
  const item = document.createElement("h2");
  const price = document.createElement("h2");
  price.className = "price_class";

  item.innerHTML = "pasta";
  price.innerHTML = Number(1.60).toFixed(2);

  item.addEventListener("click", () => {
    // if there is not a line through the item
    if (item.style.textDecoration != "line-through")
      // cross it out
      item.style.textDecoration = "line-through";
    // if not just let be
    else item.style.textDecoration = "none";
  });

  document.querySelector("#all_items").appendChild(item);
  document.querySelector("#all_prices").appendChild(price);

}

// if no price OR item - alert X
// quantify amount of items and display in total X
// calculate total of all prices
// button to add item and price together X
// no enters only clicks....add one and the other X
