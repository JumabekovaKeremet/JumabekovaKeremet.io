let button = document.querySelector('button');
let inputName = document.querySelector('.name');
let inputMessage = document.querySelector('.message');
let inputColor = document.querySelector('.color');

button.addEventListener("mousedown", function(){
let div  = document.createElement('div');
let spanName = document.createElement('span');
let spanMessage = document.createElement('span');

spanName.innerText = inputName.value + " ";
spanMessage.innerText = inputMessage.value + " ";
spanName.style.color = inputMessage.value;
div.append(spanNmae, spanMessage);
document.body.append(div);

fetch("./https://live-chat-countinue-default-rtdb.firebaseio.com/" ,{
    method: "POST",
    body: JSON.stringify({
        name: inputName.value,
        massage: inputMessage.value,
        color: inputColor.vaalue,
    })
})
let interval = setInterval(function () {
     fetch("https://ita-ajax-default-rtdb.firebaseio.com/list.json")
         .then(function(response) {
             return response.json();
         })
         .then(function(list) {
             ul.innerHTML = "";
 
             for (let i in list) {
                 let li = returnListItem(list[i]);
                 if (li) {
                     ul.append(li);
                 }
             }
         });
 }, 2000);
});