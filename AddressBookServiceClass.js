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

editContact(personInfoList,firstname) {
    personInfoList.forEach(element => {
        if( (element.firstName === firstname) == true ) {
            console.log("Press 1 to edit Last Name");
            console.log("Press 2 to edit Address");
            console.log("Press 3 to edit City")
            console.log("Press 4 to edit State");
            console.log("Press 5 to edit Zip");
            console.log("Press 6 to edit Phone Number");
            console.log("Press 7 to edit Email");
            let option = parseInt(prompt("Enter your choice : "));
            let personInfo = new PersonInfo();
            
            switch ( option ) {
                case 1:
                    personInfo.lastName = prompt("Enter Last Name : "); 
                    element.lastName = personInfo.lastName;
                    break;
                case 2:
                    personInfo.addressName = prompt("Enter Address : "); 
                    element.addressName = personInfo.addressName;
                    break;
                case 3:
                    personInfo.cityName = prompt("Enter City : "); 
                    element.cityName = personInfo.cityName;
                    break;
                case 4:
                    personInfo.stateName = prompt("Enter State : "); 
                    element.stateName = personInfo.stateName;
                    break;
                case 5:
                    personInfo.zipNumber = prompt("Enter Zip : "); 
                    element.zipNumber = personInfo.zipNumber;
                    break;
                case 6:
                    personInfo.phoneNumberInput = prompt("Enter Phone Number : ");
                    element.phoneNumberInput = personInfo.phoneNumberInput;
                    break;
                case 7:    
                    personInfo.emailInput = prompt("Enter Email : ");
                    element.emailInput = personInfo.emailInput;
                    break;
                default:
                    console.log("You have entered invalid input!");
                    break;
            }
        }
    });
    console.log("Contact Edited Successfully!!!")
    return personInfoList;
    }
    deleteContact(personInfoList, firstname) {
        personInfoList.forEach(element => {
            if( (element.firstName === firstname) == true ) {
                let index = personInfoList.indexOf(firstname);
                personInfoList.splice(index, 1);
            }
        });
        console.log("Contact Deleted Successfully!!!")
        return personInfoList;
    }
}

module.exports = AddressBookService;