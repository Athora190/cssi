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

console.log("script is running...");
function Basic_Alarm(alarmMessage){
  return alarmMessage;
};
console.log(Basic_Alarm("My alarm!"));
//My Alarm
function My_Alarm(alarmMessage){
return alarmMessage;
};
console.log("Hey, Jade, wake up! It's 10:00!");
// Mom's Alarm
function Mom_Alarm(alarmMessage){
  return alarmMessage;
};
console.log("Hey, Mom, wake up! It's 6:00!");
//My sister's Alarm

function Family_Alarm(person,time){

  return 'hey,' + person + ", wake up! It's, " + time;

};
console.log(Family_Alarm("Blyss", "12:00!"));
//Important Alarm
function Important_Alarm(alarmMessage){
  return "WAKE UP, WAKE UP";
}
console.log(Important_Alarm('wake up, wake up'));
//Snooze Button
function Snooze_Alarm(originaltime){
  let Newtime = originaltime + 1;
  return "the alarm for, " + originaltime + " has been changed to, " + Newtime;

};
console.log(Snooze_Alarm(12));
