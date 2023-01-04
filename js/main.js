$(document).ready(function(){

    $(" .tabs a").click(function(event) {
        event.preventDefault(); // Prevents default behaviour of clicking on a link.

        // Cache varibles to improve performance
        const newTitle = $(".title");
        const newImage = $(".car-picture");
        const newPrice = $(".price");
        const newDescription = $(".description");
        
        const carProfile = $(this).attr("data-selection"); // Set carProfile variable and use attr() method to get the value of data-selection.
        console.log(carProfile);

        $.getJSON ({
            url: "cars.json", // Link to cars.json file.
            success: function(cars) { 
                // Use LiveServer to test this success condition.
                // cars represents the data that was retrieved and stores it for use.
                // Run this code if the request is successful.
                console.log("Success! The request for data was fulfilled.");
                console.log(cars); // Returns the cars array from the json file which contains car objects. 

                // Use a for loop to repeat a block of code, which is useful to find information from an array.
                for(const car of cars) {
                    if(carProfile == car.carNumber) {
                        console.log(`The selected car is ${carProfile} and the car keyword is ${car.keyword}.`); // To see output in the console.
                        newTitle.html(car.name);
                        newImage.attr("src", car.imgSrc);
                        newImage.attr("alt", car.keyword);
                        newPrice.html(car.price);
                        newDescription.html(car.description);
                    }
                }
            },
            error: function() {
                // To test this error condition, run the file locally. 
                // If the request for data is unsuccessful, run this code.
                console.log("Something went wrong. Cannot get the data."); // Message in console for troubleshooting.
                $("#main-content").html("<p>Oops, something has gone wrong. Please try again later!</p>"); // When the request for data is unsuccessful, the message will be displayed to the user to let them know something has gone wrong. 
            }
        }); // end getJSON
    }); // end click
}); // end ready
