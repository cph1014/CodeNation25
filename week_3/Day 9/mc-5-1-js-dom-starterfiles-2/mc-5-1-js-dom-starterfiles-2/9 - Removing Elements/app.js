const input = document.getElementById('input');
const button = document.getElementById('submit');

//Set a new const for the remove button
const removeBtn = document.getElementById('remove');

/*from previous ex*/
button.addEventListener('click', () => {
    let listItem = document.createElement('li');
    let list = document.getElementsByTagName('ul')[0];
    listItem.textContent = input.value;
    list.appendChild(listItem);
    input.value = '';
    })

//Create a new function to remove last item when the button is clicked, using the last child method:
removeBtn.addEventListener('click', () => {
    let lastItem = document.querySelector('li:last-child'); 
    let list = document.getElementsByTagName('ul')[0]; 
    list.removeChild(lastItem);  
    })