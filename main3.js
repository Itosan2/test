// const btn = document.querySelector('.btn');


// e is the event parameter
// btn.addEventListener('click',(e)=>{
//     e.preventDefault();
//     document.querySelector('#my-form')
//     .style.background = '#ccc'; 
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello W</h1>';
// });


 //  document.querySelector('body').classList.add('bg-dark');

 const myForm = document.querySelector('#my-form');
 const nameInput = document.querySelector('#name');
 const emailInput = document.querySelector('#email');
 const msg = document.querySelector('.msg');
 const userList = document.querySelector('#users');

 myForm.addEventListener('submit', onSubmit);

 function onSubmit(e){
    e.preventDefault();
    if(nameInput.value ==='' || emailInput.value ===''){
       //error is defined in css 
       msg.classList.add('error');
       msg.innerHTML = 'Please enter the field';
       setTimeout(() => msg.remove(), 3000);

    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        userList.appendChild(li);
        // clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
 };