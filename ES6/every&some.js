var computers = [{
        name: "Apple",
        ram: 16
    },
    {
        name: "IBM",
        ram: 4
    },
    {
        name: "HW",
        ram: 32
    },
]
var computerEvery = computers.every((computer) => {
    return computer.ram > 16
})
// console.log(computerEvery)
var computerSome = computers.some((computer) => {
    return computer.ram > 16
})
// console.log(computerSome)


function Field(value) {
    this.value = value
}
Field.prototype.validate = function () {
    return this.value.length > 0
}
var username = new Field('Tobenew');
var telephone = new Field('13812345678');
var password = new Field('');


// console.log(username.validate());
// console.log(telephone.validate());
//实际用法
var fields = [username, telephone, password];
var formIsValid = fields.every((field) => {
    return field.validate()
})
// console.log(formIsValid);