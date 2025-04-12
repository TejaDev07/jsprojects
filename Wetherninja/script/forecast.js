    const temp=document.querySelector('span');
    
    
    const key = 'fa8633f8d7935599514159c80a4074d4';

    const getcity = async (city)=>{
    
        const base = 'https://api.openweathermap.org/data/2.5/weather';

        const query =`?apikey=${key}&q=${encodeURIComponent(city)}`;
        const response = await fetch(base + query);
        const data = await response.json();
        console.log(data);
        
                        // console.log(`City: ${data.name}`);
                        // console.log(`Temperature: ${data.main.temp}°C`);
                        // console.log(`Weather: ${data.weather[0].description}`);

                        //    console.log(typeof data.main.temp);
                        // const tempinc = data.main.temp;
                        
                        // const approx= (tempinc - 273.25).toFixed(2);
                        
                        //    temp.textContent =approx;


       temp.textContent = `${(data.main.temp - 273.15).toFixed(2)}`;
      
                        //icons
      
       const iconCode = data.weather[0].icon;

       // Construct the URL for the weather icon
       const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
       document.querySelector('.icon img').src=iconUrl;

       const sunriseTime = data.sys.sunrise * 1000; 
       const sunsetTime = data.sys.sunset * 1000;  
       const currentTime = new Date().getTime();

       let timeSrc = null;

       (currentTime >= sunriseTime && currentTime < sunsetTime)?timeSrc = 'img/day.svg': timeSrc = 'img/night.svg';
    //    if(currentTime >= sunriseTime && currentTime < sunsetTime){
    //     timeSrc = 'img/day.svg';
    //    }else{
    //     timeSrc = 'img/night.svg';
    //    }

       time.setAttribute('src',timeSrc);


       const customIconMapping = {
        "01d": "1",  // Clear sky day
        "01n": "2",  // Clear sky night
        "02d": "3",  // Few clouds day
        "02n": "4",  // Few clouds night
        "03d": "5",  // Scattered clouds day
        "03n": "6",  // Scattered clouds night
        "04d": "7",  // Broken clouds day
        "04n": "8",  // Broken clouds night
        "09d": "9",  // Shower rain day
        "09n": "10", // Shower rain night
        "10d": "11", // Rain day
        "10n": "12", // Rain night
        "11d": "13", // Thunderstorm day
        "11n": "14", // Thunderstorm night
        "13d": "15", // Snow day
        "13n": "16", // Snow night
        "50d": "17", // Mist day
        "50n": "18"  // Mist night
    };
    
   
    const customIconNumber = customIconMapping[iconCode];
    const customIconUrl = `img/icons/${customIconNumber}.svg`;
     document.querySelector('.icon img').src = customIconUrl;   
    


   
    
        
    }

//    getcity('mumbai')
//    .then(data => console.log(data))
//    .catch(error => console.error(error));
