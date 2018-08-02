const button =document.querySelector('button');
button.addEventListener('mouseover', (e) => {
  button.innerHTML = "Don't click!";
  button.classList.add ('danger');
});
