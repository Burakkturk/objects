const car = {
    brand: "Mercedes"
    model: 2020
    speed: 5
    color: ["pink", "black" ]
}




function Personel(id, name, age, salary) {
this.id = id
this.name = name
this.age = age
this.salary = salary
}

const person1 = new Peronel("1234567890", "Ahmet Can",33, 30000)
const person2 = new Peronel("1234567890", "Ahmet Can",33, 30000) 

console.log(person1)



const personel = {
    name : "Ahmet",
    surname : "Canan",
    dob : 1990,
    salary: 30000,
    drivingLicence: true,
    calculateAge: function(){
        return new Date().getFullYear() - this.dob
    }
}

console.log(personel.name + "" + peronel.surname)

console.log(personel.calculateAge()) 



const teamFullName1 = team.map((p) => {
    return {
        fullName: p.name.toUpperCase() + " " + p.surname.toUpperCase(),
        age: p.age + 5,
    }
})
console.log(teamFullName1)