//Library connection
let http = new FetchLibrary;

//Variables
let btnCatPicture;
let catPictureContainer;
let catPicture;

//Load listener
window.addEventListener('load', function() {
    //Get references
    btnCatPicture = document.getElementById('btnCatPicture');
    catPictureContainer = document.getElementById('cat-picture-container');
    kittyPicture = document.getElementById('kittyPicture');

    //Listener for the button
    btnCatPicture.addEventListener('click', getCatPicture);
})

//Define function that will get the cat picture
function getCatPicture() {
    //Using the Get method to ask for a doggo pic
    http.get('https://api.thecatapi.com/v1/images/search?limit=1&api_key=live_8agZbJAbwbGGYaXijzvzfapB5jPwXrP6sarClBfog0Et9vFfTWEHtZ1jVDrHS2wD')
        //Function that runs on resolve, here I have the picture and will be able to display it
        .then(data => console.log(data))
        //This runs on reject
        .catch(error => console.log(error));
}

//Function that is called once the call has been successfully answered
function displayKitty(dataReturned) {
    //Reset source to blank
    catPicture.src = "";
    //grab the url out of the object to get the pic
    let url = dataReturned.message;
    //Add picture
    catPicture.src = url;
}