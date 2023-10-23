// const input = document.getElementById("input")
// input.addEventListener("click", function(){
//     alert("i was clicked")
// })

// index.js

function addingEventListener() {
    const input = document.getElementById('input');
  
    function clickAlert() {
      alert('I was clicked!');
    }
  
    input.addEventListener('click', clickAlert);
  }
  
  addingEventListener(); // Call the function to attach the event listener
  