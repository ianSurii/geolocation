 (function() {

     window.onload = init;
     //decalare and initilizing

  
     var startLatitude;
     var startLongitude;
     
     var map;
      var mypath = [];
     var currentLat;
     var currentLong;
   
    

    

    

    // register the event handlers

     function init() {
        //initializing 
       
      
         //on click listener
       startTrackingLocation();
       
        
       
      
        
        
      
        
    }

     function startTrackingLocation() {

         
         //check if geolocation is supported
         if (navigator.geolocation) {
            //  call the show postion method
            
             navigator.geolocation.getCurrentPosition(showStartPosition);
              //disable the button
            

            
         } else {
             //show geoocation is not supported
            
        }
       
        
        
     }
     function showStartPosition(position) {
         //displa the start lat and longitude

        //  startLatitude.innerHTML = "Start Latitude: " + position.coords.latitude;
        //  startLongitude.innerHTML = "Start Longitude: " + position.coords.longitude;
        //  countervalue;
        //  //show update count
        //  counter.innerHTML = "Update#: " + countervalue;
         //set the LtLang object to show the marker and center of the map
         const startLocation = { lat: position.coords.latitude, lng: position.coords.longitude };
        
        //displa the map
         map = new google.maps.Map(document.getElementById("map"), {
             zoom: 13,
             center: startLocation,
            
            });
        //    /set maker
            const marker = new google.maps.Marker({
                position: startLocation,
                map: map,
            });
        
               mypath.push(
                startLocation
               );

             
// set currentLat and long to startLocation
         currentLat = position.coords.latitude;
         currentLong=position.coords.longitude
//  update inter function after 5 seconds
          setInterval(function () {

                 //after five seconds  update the current positon and sum current postion with rand1 and rand2
        //  intializing  random1 and random2
               var random1 = Math.random() / 100;
              var random2 = Math.random() / 100;
            // intilixing the new location
             var newLat = currentLat + random1;
              var newLong = currentLong - random2;
              //push then new latitiude and longitude to may path array
               mypath.push(
                 { lat: newLat, lng: newLong }
               );
            //   update count value +1
              //  countervalue=countervalue+1
            //  set currentLat and currentLongitude to new lat and new longitude
             currentLat = newLat;
              currentLong = newLong;
              //show the new curren latitude and longitude and update count value;
            
         
              console.log(currentLong, currentLat);
              //call plotpath
            plotPath();

              
                    }, 5000);
              
    
           

     }
     function plotPath() {
         //intilize the Polyline and assign it path 
        var poly= new google.maps.Polyline({
    path: mypath,
    geodesic: true,
    strokeColor: "#15AEF5",
    strokeOpacity: 1.0,
    strokeWeight: 4,
  });

       //if my map array.leght is grater than 1 show the path
         if (Object.keys(mypath).length > 1) {
             poly.setPath(mypath);
         poly.setMap(map);

             
         }
       

         
   
    
  
          
     }


})();









