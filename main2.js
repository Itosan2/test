//single element
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('.container'));

//multi element
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item'))
// console.log(document.getElementsByTagName('li'))

// const items = document.querySelectorAll('.item');

// items.forEach((item) => console.log(item));

const ul = document.querySelector('.items');

// ul.remove()
// ul.lastElementChild.remove()
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Choong';
ul.lastElementChild.innerHTML = '<h1>Happy</h1>';

const btn = document.querySelector('.btn');
btn.style.background = 'red';