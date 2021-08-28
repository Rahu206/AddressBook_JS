/**
 * Ability to ensure Valid Contacts are added.
     - First Name and Last Name should start with Capital and Minimum 3 Characters
     - Address, City and State should also have minimum 4 characters
     - Zip, Phone and Email should be valid as done in the Pattern Exercise
     - Throw Error if the RegEx test fails
 * 
 */

//importing another class file to the class file
const PersonInfo = require("./PersonInfoData.js"); 
const prompt = require('prompt-sync')();

class AddressBookService {
    personInfoList = new Array();
    insert(personInfoList) {
try{
    let personInfo = new PersonInfo();
    personInfo.firstName = prompt("Enter First Name : "); 
    personInfo.lastName = prompt("Enter Last Name : "); 
    personInfo.addressName = prompt("Enter Address : "); 
    personInfo.cityName = prompt("Enter City : "); 
    personInfo.stateName = prompt("Enter State : "); 
    personInfo.zipNumber = prompt("Enter Zip : "); 
    personInfo.phoneNumberInput = prompt("Enter Phone Number : "); 
    personInfo.emailInput = prompt("Enter Email : "); 
    personInfoList.push(personInfo);

            return personInfoList;
        } catch ( e ) {
            console.error(e);
        }
    }
}

module.exports = AddressBookService;