const simpleObj = {}; //путой объект
// добавление свойств

const person = {
    name: 'Petro',
    secondName: 'Bamper',
    getFullName: function() {

        console.log(this);
        console.log(this.name + ' ' + this.secondName);
    },

    getNameLenght () {
        console.log(this.name.length);
    }
}

person.getFullName();
person.getNameLenght();
