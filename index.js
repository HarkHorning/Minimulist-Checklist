const list = document.getElementById("list");
const enterButton = document.getElementById("enterButton");
const textBoxObj = document.getElementById("textBox")

const addFunk = () => {
    if (textBoxObj.value != "") {
        
    let newItem = document.createElement('li');
    newItem.textContent = textBoxObj.value;
    list.appendChild(newItem);
    textBoxObj.value = "";

    newItem.addEventListener('dblclick', () => {
        list.removeChild(newItem);
    });

    } else {
        alert("Please enter a task.");
    }
}

enterButton.addEventListener('click', addFunk);

textBoxObj.addEventListener('keypress', (e) => {
    if (e.key === "Enter") {
        addFunk()
    }
});
