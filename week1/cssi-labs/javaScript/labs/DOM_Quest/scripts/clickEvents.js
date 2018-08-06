// Copyright 2018 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

console.log("Running Click Events Script");
let box1 =  document.querySelector('#box1');
let box2 =  document.querySelector('#box2');
let box3 =  document.querySelector('#box3');

let box4 =  document.querySelector('#box4');
let box5 =  document.querySelector('#box5');


box1.addEventListener('click',() => setColor('box2','box3','red'));
box2.addEventListener('click',() => setColor('box1','box3','pink'));
box3.addEventListener('click',() => setColor('box1','box2','orange'));
box4.addEventListener('click',() => {toggle(box4);});
box5.addEventListener('click',() => {toggle(box5);});

function setColor(boxid1,boxid2, boxColor){
    let box =document.getElementById(boxid1);
    box.style.backgroundColor = boxColor;
    box =document.getElementById(boxid2);
    box.style.backgroundColor = boxColor;
}

function toggle(box){
  box.classList.toggle("active");
}
function toggle2(box2){
  box2.classList.toggle("active");
}

// let colors=['red','pink','orange'];
// let values=[];
//   const boxes = document.querySelectorAll('#container1','.box');
//
//
// for (var i = 0; i < boxes.length; i++) {
//  values[i]=document.getElementById(boxes);
//  values[i]=document.getElementById(colors);
//  boxes.style.background=colors;
// }
// function Boxes(){
//   boxes.forEach(boxes => {
//       boxes.addEventListener('click',() => {
//     const color = boxes.innerHTML;
//     color.style.background = colors;
//
//
// });
//
// });

  /*const boxes = document.querySelectorAll('box1');
  boxes.addEventListener('click', (e)=>{
    const box = document.querySelector('');
  box.forEach(box => {
  box.addEventListener('click', () => {
    const color = box.innerHTML;
    box.style.background = 'red';
  });
});

});
Boxes();*/
