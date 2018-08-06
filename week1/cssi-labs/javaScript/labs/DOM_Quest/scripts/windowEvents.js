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
let size = 100;
let newsize = size;
let box6 = document.querySelector('#box6');
let box7 =  document.querySelector('#rect');
console.log("Running Window Events Script");



window.addEventListener("keypress", (e)=>{
  if (e.key === 'c') {
    newsize = newsize / 2;
    box6.style.height = newsize + 'px';
    box6.style.width = newsize +'px';
    box6.style.borderRadius = '30px';
  }
  if (e.key ==='s') {
      box6.style.height = size + 'px';
    box6.style.width = size +'px';
    box6.style.borderRadius = '0px';
  }
});
window.addEventListener("scroll",(e) =>{
  if (document.body.scrollTop > 50) {
    box7.style.backgroundColor ='black';
  }});






// insert a function that prints out the key code of a key pressed
