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

let customer_name;
let balance;

function openAccount(name,startingbalance = 0){
  balance = startingbalance;
  customer_name = name;
  // Set the value for customer_name equal to name below

  return customer_name + " has opened a new account with a balance of $" + startingbalance +'.';//write the statment you need to return here
}
console.log(openAccount('Kim',300));

function deposit(value){
  balance = value + balance; // update the value of balance
  return customer_name + " has deposited " + value + "." + customer_name + " has $ " + balance + " remaining ";//return the correct statement
}
console.log(deposit(50));

function withdraw(num){//
  if (num > balance) {
    let difference = num - balance;
    return "Sorry, " + customer_name +" , you don't have enough money in your account. You need " + difference + " more dollars.";
  }
  else {
    balance = balance - num;//update the value of balance
    return customer_name + " has withdrawn " + num + "." + customer_name + " has $ " + balance + " remaining ";
  }
  //return the correct statement
}
console.log(withdraw(500));

// Write your script below

console.log("script is running...");
