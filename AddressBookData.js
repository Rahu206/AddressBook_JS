/**
 * Ability to create a Address Book Contact with first and last names, address, city, state, zip, phone number and email.
 */

//importing another class file to the class file
const PersonInfo = require("./PersonInfo.js"); 
const prompt = require('prompt-sync')();

//Ability to add values to the PersonInfoData
var personInfo = new PersonInfo("Rahul", "Deshpande", "Tamarind Park,dhayri", "Pune", "Maharashtra", "411041", "7709569046", "rahuldeshpande@gmail.com");
console.log(personInfo.toString());

personInfo.firstName = "Meghna";
personInfo.lastName = "Borkar";
personInfo.address = "Meher Colony,nagpur";
personInfo.city = "Nagpur";
personInfo.state = "Maharashtra";
personInfo.zip = "440025";
personInfo.phoneNumber = "9158921359";
personInfo.email = "meghnaborkar95@gmail.com";
console.log(personInfo.toString());

//Ability to add user-defined values to the PersonInfo
personInfo.firstName = prompt("Enter First Name : "); 
personInfo.lastName = prompt("Enter Last Name : "); 
personInfo.address = prompt("Enter Address : "); 
personInfo.city = prompt("Enter City : "); 
personInfo.state = prompt("Enter State : "); 
personInfo.zip = prompt("Enter Zip : "); 
personInfo.phoneNumber = prompt("Enter Phone Number : "); 
personInfo.email = prompt("Enter Email : "); 
console.log(personInfo.toString());