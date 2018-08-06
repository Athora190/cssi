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
console.log('Script is running');
let amusementParks = ["Disney World", "Hershey Park", "Six Flags", "Dorney Park", "Sea World"];
//Complete task one below

function Amusementparks(value,index,array){
   value = value.toUpperCase();

console.log(value +' is a great amusment park.');
}
amusementParks.forEach(Amusementparks);


let rollerCoasters = ["Big Thunder Mountain Railroad","Splash Mountain","Space Mountain", "Expedition Everest","The Twilight Zone Tower of Terror"];
//Complete task two below
for (var i = 0; i < rollerCoasters.length; i++) {
  let ride = rollerCoasters[i]
  console.log('I will ride ' + ride + " for ever roller coaster up to Space Mountain.")
  if(ride === "Space Mountain"){
     break;
   }
}


let height = 6;
//Complete task three below
let number = Math.floor(Math.random() * 6) + 2;
while (number > 4) {

  console.log('Next Customer', number);
  number = Math.floor(Math.random() * 6) + 2;

}
