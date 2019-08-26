// get joke function 
const getJokes = (e) => {
  const userInput = document.querySelector('#number').value;
  
  // instantiate xhr object 
  const xmlHttp = new XMLHttpRequest()

  // make call to external api 
  xmlHttp.open('GET', `http://api.icndb.com/jokes/random/${userInput}`, true);

  // get response from the api call
  xmlHttp.onload = function(){
    // check status code 200
    if(this.status === 200){
      const response = JSON.parse(this.responseText);

      // set variable to output joke
      let jokesToDisplay = '';
      console.log(response);
      // check for success in response 
      if(response.type === 'success'){
        response.value.forEach(joke => {
          jokesToDisplay += `
            <p>${joke.joke}</p>
          `
        })
      } else {
        jokesToDisplay += 'There was an error...😩';
      }

      document.querySelector('.show-jokes').innerHTML = jokesToDisplay;
    }
  }

  xmlHttp.send();

  e.preventDefault();
}

// add event listener to  button element
document.querySelector('#get-jokes').addEventListener('click', getJokes);