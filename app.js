// get joke function 
const getJokes = (e) => {
  const userInput = document.querySelector('#number').value;
  
  // instantiate xhr object 
  const xmlHttp = new XMLHttpRequest()

  // make call to external api 
  xmlHttp.open('GET', `http://api.icndb.com/jokes/random/${userInput}`, true);

  e.preventDefault();
}

// add event listener to  button element
document.querySelector('#get-jokes').addEventListener('click', getJokes);