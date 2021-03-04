class DataModel {
    constructor() {
        this.data = [];
    }

    getAll() {
        return this.data;
    }

    getById(id) {
        this.data.forEach((obj) => {
            if(obj.id === id){
                return obj;
            }     
        })
    }

    save(obj) {
        if (this.validate(obj)) {
            this.data.push(obj);
            return true;
        }
        return false;
    }

    update(obj, id) {
        this.data.forEach((item) => {
            let result = item.id === id? true : false;
            return result     
        })
    }

    delete(id) {
        this.data.forEach((item) => {
            if(item.id === id){
                data.splice(item.id)
                return true;
            } else {
                return false;
            }
        }) 
    }

    // this method will be overriden in the sub classes
    validate(obj) {
        return false;
    }
}

// Do not worry about the below for now; It is included so that we can test your code
// We will cover module exports in later parts of this course
module.exports = DataModel;