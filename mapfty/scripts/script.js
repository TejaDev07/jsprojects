'use strict';



// let map , MapEvent;

class Workout{
    date = new Date();
    id = ( Date.now() + '').slice(-10);

    constructor(coords,distance,duration){
        this.coords = coords;
        this.distance = distance;// in km
        this.duration=duration; // in min
    }
}

class Running extends Workout{
  constructor(coords,distance,duration,cadence){
    super(coords,distance,duration);
    this.cadence=cadence;
    this.calpace();
  }
  calpace(){
    this.pace = this.duration/this.distance;
    return this.pace;
  }
}

class Cycling extends Workout{
    constructor(coords,distance,duration,elevationGain){
        super(coords,distance,duration);
        this.elevationGain=elevationGain;
        this.calspeed();
    }
    calspeed(){
        this.speed = this.distance / (this.duration /60);
        return this.speed;
    }
}

const run1=new Running([39,-12],5.2,24,128);
const cycling1=new Cycling([39,-12],27,95,540);
console.log(run1,cycling1);

const form =document.querySelector('.form');
const containerWorkouts=document.querySelector('.workouts');
const inputtype = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputduration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--Cadence');
const inputElevation = document.querySelector('.form__input--Elevation');


class App {
    #map;
    #MapEvent;
    constructor() {
        this._getposition();
        form.addEventListener('submit', this._newWorkout.bind(this));
        inputtype.addEventListener('change',this._toggleElevationField);
    }
   
    _getposition(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(this._loadMap.bind(this),function(){
                    alert('Geolocation is not supported by this browser.');
                });
            };
            
    }

    _loadMap(position){
            const {latitude} = position.coords;
            const {longitude} = position.coords;
            console.log(`https://www.google.com/maps/@${latitude},${longitude},3.11z`);
    
            const coords= [latitude,longitude];
             this.#map = L.map('map').setView(coords, 13);
    
                L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }).addTo(this.#map);
    
        
                this.#map.on('click',this._showMap.bind(this));
                
    }

    _showMap(mapE){
        this.#MapEvent = mapE;
        form.classList.remove('hidden');
        inputDistance.focus();
    }

    _toggleElevationField(){
        inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
        inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
    }

    _newWorkout(e){
        e.preventDefault();
          
        //Get daata from form

        //check if data is valid

        //if workout running ,create running object 

        //if workout cycling ,create cycling object

        //Add new object to workout Array

        //render workout on map as marker
        const {lat,lng} = this.#MapEvent.latlng;
        L.marker([lat,lng])
          .addTo(this.#map)
          .bindPopup(L.popup({
            "maxWidth": 250,
            "minWidth": 100,
            "autoPan": true,
            "autoClose":false,
            "closeonClick":false,
             className:'running-popup',
          }))
          .setPopupContent('yeah')
          .openPopup();
        //Render workout on list

        //Hide form and clear input list or field
        //clear input fields
           inputDistance.value = inputCadence.value = inputduration.value =inputElevation.value = '';
         //Display marker
     
             
    }

}

const app = new App();




