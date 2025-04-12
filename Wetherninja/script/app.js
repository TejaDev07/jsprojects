const place=document.querySelector('.change-location');
const inputvalue=document.querySelector('.form-control');
const details=document.querySelector('.details');
const card =document.querySelector('.card');

const time=document.querySelector('img.time');





const cityname=document.querySelector('h5');

const updatecity = async (city)=>{
    
    const weather=await getcity(city);
   return weather;
}

place.addEventListener('submit',(e)=>{
    e.preventDefault();
    const data=place.city.value.trim();
    place.reset();
      //storeing in local storage
   localStorage.setItem('city',data);

    cityname.textContent = data;
   updatecity(data);
//    if(card.classList.contains('d-none')){
//     card.classList.remove('d-none');
//    }
   
 
})


const data=localStorage.getItem('city');
if(data){
    updatecity(data);
    cityname.textContent = data;
    card.classList.remove('d-none');
} else {
        card.classList.add('d-none');
    }



 
                           //icon



// Set the src attribute of the icon element to the icon URL
