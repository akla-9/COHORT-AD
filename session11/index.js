function addItem() {

  const myList = [];

  let shoppingItem = document.getElementById('shoppingItem').value;

  if(myList.includes(shoppingItem)) {
    windows.alert("this item is already in the list");

  }

}