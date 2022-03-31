// targeting pencil icon
document.querySelector("#pencil").addEventListener("click", () => {
    // clear all items on pencil click
    document.querySelector("#all_items").textContent = "";
})

// if Enter is pressed after typing info into user input
document.querySelector("#user_input").addEventListener("keydown", (event) => {
    if(event.key === "Enter")
    // add item to grocery list
        addItem()
})

// functionality for adding item
addItem = () => {
    // item is going to be an new h2 element
    const item = document.createElement("h2")
    // consisting of the user input
    item.textContent = "- " + document.querySelector("#user_input").value


    // when item is clicked
    item.addEventListener("click", () => {
        // if there is not a line through the item
        if(item.style.textDecoration != "line-through")
        // cross it out
            item.style.textDecoration = "line-through"

        else
        // if not just let be
            item.style.textDecoration = "none"
    })

    // add the new item to the all items div
    document.querySelector("#all_items").appendChild(item)
    // clear the user input after enter
    document.querySelector("#user_input").value = ""
}