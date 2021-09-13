const trainList = document.getElementById("train-list");
for(let i=0; i < 5; i++){
    let trainListItem = document.createElement("li");
    let trainListItemButton = document.createElement("button");
    trainListItemButton.id = "train-list-item-btn" +i;
    trainListItemButton.className = "btn";
    trainListItem.appendChild(trainListItemButton);
    trainListItem.id = "train-list-item"+i;
    trainListItem.className = "train-list-item"
    let trainListItemText = document.createTextNode("Sample Text");
    trainListItem.appendChild(trainListItemText);
    trainList.appendChild(trainListItem);
}