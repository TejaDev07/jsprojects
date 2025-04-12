const addForm=document.querySelector('.add');
const list=document.querySelector('.todos');
const deleteicon=document.querySelectorAll('.delete');
// const listitem=document.querySelector('.list-group-item');

const search=document.querySelector('.search input');

const genaratetemp = todo =>{

    const html =`
     <li class="list-group-item d-flex justify-content-between align-items-center ">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
          </li>
    `;
    
    list.innerHTML += html;
};


addForm.addEventListener('submit',e =>{

    e.preventDefault();
    const todo = addForm.add.value.trim();
    
    if(todo.length){
    genaratetemp(todo);
    }
    
    addForm.reset()
    
});





// deleteicon.forEach((deletebtn)=>{
//     deletebtn.addEventListener('click', ()=>{
//         const listitem = deletebtn.parentNode;
//         listitem.remove();
//     })
// })

  list.addEventListener('click',e=>{
  
    if(e.target.classList.contains('delete')){
        e.target.parentNode.remove();
    
    }
})

const filtertodos = searchterm =>{
//   console.log( Array.from(list.children));
  
   Array.from(list.children)
   .filter((todo)=> !todo.textContent.toLowerCase().includes(searchterm))
   .forEach((todo)=> todo.classList.add('filtered'));
   
   Array.from(list.children)
   .filter((todo)=> todo.textContent.toLowerCase().includes(searchterm))
   .forEach((todo)=> todo.classList.remove('filtered'));
   
}

search.addEventListener('keyup',()=>{
    const searchterm = search.value.trim().toLowerCase();

     filtertodos(searchterm);
});


