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

    validate(obj) {
        let count = 0
        let empty = 0
        // ensure no value for key is empty
        Object.keys(obj).forEach(key => {
            if(key === ""){
                empty += 1;
            }
        }) 

        this.data.forEach(person => {
        if (person.email === obj.email || person.matricNumber === obj.matricNumber || person.password.length < 7){
            count += 1;
        }
        })  
        
    if (empty > 0 || count > 1 ){
        return false;
    } else {
        return true;
    }
}         
}


// Do not worry about the below for now; It is included so that we can test your code
// We will cover module exports in later parts of this course
module.exports = {
    User,
    Users
}
