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

// Task 1
let dogName1 = "Steve";
let dogType1 = "beagle";

console.log("I will walk Steve today at 12:00pm");// Complete Task 1 Below



let dogName2 = "Joe";
let dogType2 = "corgi";

if (dogName2 && dogType2=== 'corgi') {
  console.log("I will walk Joe today at 12:00pm ");
}
else {
  console.log("I will walk Lola today at 1:00pm");
}

// Complete Task 2 Below



let dogName = "Lola";
let dogType = "poodle";

// if dog is a corgi or beagle
if (dogType==="corgi" || dogType==="beagle") {
  console.log("I will walk Lola today at 12:00pm");
}
//if dog is a bulldog
if (dogType==="bulldog") {
    console.log("I will walk Max today at 1:00pm");
}
else {
  console.log("I will walk Kyle at 2:00pm");
}
