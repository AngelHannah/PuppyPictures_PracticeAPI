//using ES6 Class
class FetchLibrary {

  //Since we are not using ES6 we can use classes and define the methods in the class
  //block without this or prototype
  get(url) {
    return new Promise((resolve, reject) => {
      //This is the fetching request
      fetch(url)
        //This line parses the response from the server into text or json
        .then(res => res.json())
        //This is where I can do what I want with the data
        .then(data => resolve(data))
        //This is here to handle any errors in case bad things happen
        .catch(err => reject(err));
    });
  }

  //Finish with post(url, data), put(url, data) and delete(url)
  //Post is for sending data to the server to create a new record
  post(url, data) {
    return new Promise((resolve, reject) => {
      //This is given as a parameter to the fetch request below
      let requestOptions = {
        //The method type, must specify what type of request
        method: 'POST',
        //Adding headers
        headers: { 'Content-type': 'application/json;charset=utf-8' },
        //Adding body
        body: JSON.stringify(data)
      }

      //The fetch request
      fetch(url, requestOptions)
        //This converts to json
        .then(response => response.json())
        //Displaying the converted results to the console
        .then(data => resolve(data))
        .catch(error => reject(error))
    });

  }

  //Almost like a post request, this updates data in the database
  put(url, data) {
    return new Promise((resolve, reject) => {
      let requestOptions = {
        //The method type, must specify what type of request
        method: 'PUT',
        //Adding headers
        headers: { 'Content-type': 'application/json;charset=utf-8' },
        //Adding body
        body: JSON.stringify(data)
      }

      //This is my fetch request
      fetch(url, requestOptions)
        //What comes back from the request
        .then(response => response.json())
        //Parsed data ready to use
        .then(json => resolve(json))
        //Catch any errors
        .catch(error => reject(error))
    });

  }

  delete(url) {
    return new Promise((resolve, reject) => {
      let requestOptions = {
        //The method type, must specify what type of request
        method: 'Delete',
        //Adding headers
        headers: { 'Content-type': 'application/json' },
        //Nothing to pass to the body
      }

      fetch(url, requestOptions)
        .then(response => response.json())
        //This could also be () => resolve() because we dont get anything back on delete
        .then(json => resolve(`Deleted ${json}`))
        .catch(error => reject(error))
    });
  }

}