'use strict';

function handleClick() {
  $("form").submit(event, function() {
  event.preventDefault();
  let noDogs = $(".js-no-dogs").val();
  if (checkInput(noDogs)) { 
  fetch (`https://dog.ceo/api/breeds/image/random/${noDogs}`)
  .then(response => response.json())
  .then(responseJson => {
          printToConsole(responseJson.message);  
          displayImages(responseJson.message);
          })
  .catch("An error occured, please try again")
  } else return alert("Please enter a value between 1 and 50");
})
}

function displayImages(arr) {
  let displayArea = $('.display-results');

  displayArea.removeClass("hidden");
  displayArea.html("<h2>Your Dogs</h2>");

  arr.forEach(img => {
    $('.display-results').append(
      `<img src="${img}" class="dog-img">`)
  });
}

function printToConsole(msg) {
  console.log(`${msg}`);
}

function checkInput(input) {
  if (input >= 1 && input <= 50) return true
    else return false 
}

$(handleClick);