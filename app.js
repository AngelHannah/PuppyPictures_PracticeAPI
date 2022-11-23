const http = new FetchLibrary;

//Variables for the button and stuff
let btnPicture;
let pictureContainer;
let puppyPicture;

//load event listener
window.addEventListener('load', function () {
    //Get references
    btnPicture = document.getElementById('btnPicture');
    pictureContainer = document.getElementById('picture-container');
    puppyPicture = document.getElementById('puppyPicture');

    //Listener for the button
    btnPicture.addEventListener('click', getPicture);
    
    //Call to get picture on load of page so link isn't broken
    getPicture();
})

//Define function to be called on click of button
function getPicture() {
    //Using the Get method to ask for a doggo pic
    //Get returns a promise, we call a promise with then
    http.get('https://dog.ceo/api/breeds/image/random')
        //Function that runs on resolve, this is where I will have the picture and be able to display it
        .then(data => displayDoggo(data))
        //This runs on reject
        .catch(err => console.log(err));
}

//This function is called once the api call has been answered and something successfully returned from the server(hopefully a doggo pic)
function displayDoggo(returnedMessage) {
    //Reset source to blank
    puppyPicture.src = "";
    //grab the url out of the object to get the pic
    let url = returnedMessage.message;
    //Add picture
    puppyPicture.src = url;
}

