const DataModel = require('./data_model');

class User {
    constructor(id, firstname, lastname, email, password, matricNumber, program, graduationYear) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.matricNumber = matricNumber;
        this.program = program;
        this.graduationYear = graduationYear;
    }

    getFullName() {
        return `${this.firstname} ${this.lastname}`
    }
}

class Users extends DataModel {
    authenticate(email, password) {
        this.data.forEach((user) => {
            if (user.email === email && user.password === password) {
                return true;
            } else {
                return false;
            }    
        })
    }

    getByEmail(email) {
        this.data.forEach((user) => {
            if (user.email === email) {
                return user;
            } else {
                return null;
            }    
        })
    }

    getByMatricNumber(matricNumber) {
        this.data.forEach((user) => {
            if (user.matricNumber === matricNumber) {
                return user;
            } else {
                return null;
            }    
        })
    }

    validate(obj){
        let fvaluen = 0
        let fvaluey = 0
        // check if obj is first added user
        if (this.data.length == 0){
            // check the properties of the first added and ensure password is long
            Object.keys(obj).forEach(key => {
                if (obj[key] == "" || obj[key] == "undefined" || obj.password.length < 7){
                    fvaluen++;
                }
            })       

            if(fvaluen > 0){
                return false
            } else {
                return true
            }       
        }

        // if a user already exist
        if (this.data.length > 0){
            // check the properties of the currently added and ensure password is long
                Object.keys(obj).forEach(key => {
                    if (obj[key] == "" || obj[key] == "undefined" || obj.password.length < 7){
                        fvaluey++;
                    }  
                    
                    if(fvaluey > 0){
                        return false
                    } else {
                        // loop through already added users and check for duplicate emails and matric numbers using unique id.                        
                        this.data.forEach(person => {            
                            if(((person.email == obj.email) && (person.id != obj.id)) || 
                            ((person.matricNumber == obj.matricNumber) && (person.id != obj.id))){
                                fvaluey++
                            } 
                        })  
                    }     
                })

                if(fvaluey > 0){
                    return false
                } else {
                    return true
                }
    
            }    

           
        }
}

// Do not worry about the below for now; It is included so that we can test your code
// We will cover module exports in later parts of this course
module.exports = {
    User,
    Users
}