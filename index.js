const inputField = document.getElementById('inputField');
const add = document.getElementById('add');
const display = document.getElementById('display');
const stringArr = [];

function AddTask() {
    const stringValue = inputField.value;
    stringArr.push(stringValue);
    inputField.value = "";

    displayList();
}

function displayList() {
    display.innerHTML = "";

    stringArr.forEach((value,index) => {
        const ullist = document.createElement('li');
        ullist.innerHTML = value;

        const delBtn = document.createElement('button');
        delBtn.innerHTML = 'delete';

        display.appendChild(ullist);
        display.appendChild(delBtn);
    });

}