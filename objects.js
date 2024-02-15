// const car = {
//     brand: "Mercedes"
//     model: 2020
//     speed: 5
//     color: ["pink", "black" ]
// }




// function Personel(id, name, age, salary) {
// this.id = id
// this.name = name
// this.age = age
// this.salary = salary
// }

// const person1 = new Peronel("1234567890", "Ahmet Can",33, 30000)
// const person2 = new Peronel("1234567890", "Ahmet Can",33, 30000) 

// console.log(person1)



// const personel = {
//     name : "Ahmet",
//     surname : "Canan",
//     dob : 1990,
//     salary: 30000,
//     drivingLicence: true,
//     calculateAge: function(){
//         return new Date().getFullYear() - this.dob
//     }
// }

// console.log(personel.name + "" + peronel.surname)

// console.log(personel.calculateAge()) 



// const teamFullName1 = team.map((p) => {
//     return {
//         fullName: p.name.toUpperCase() + " " + p.surname.toUpperCase(),
//         age: p.age + 5,
//     }
// })
// console.log(teamFullName1)



// const ismet = names[2]
// console.log(ismet)

// const [ahmo, , ismo, safo] = names

// console.log(ahmo, ismo, safo)




//   const araclar = ["bmw", "merso", "ferrari", "rover", "lambo"]

//   const [araba1]



//   const names = ["Ahmet", "Mehmet", "İsmet", "Saffet"]


//   const ismet = names[2]
//   console.log(ismet)

//   const [ahmo, , ismo, safo] = names

//   console.log(ahmo, ismo, safo)





//   const araclar = ["bmw", "mercedes" , "ferrari", "rover", "lambo"]


//   const [araba1, araba2, ...geriKalanlar] = araclar

//   console.log(araba1)
//   console.log(geriKalanlar)


//   const kisi= {
//     ad : "Canan",
//     soyad : "Cano",
//     yas : 33,
//     meslek : "tester"
//   }



//   const {meslek,yas, ...bilgi} = kisi


//   console.log(meslek,yas)
//   console.log(bilgi)


  const topla = (a,b) => a + b

  console.log("SONUC:", topla(2,5,10,4))

  const toplaminiAl = (...sayilar) => {
    console.log(...sayilar)
    return sayilar.reduce((t,v) => t + v, 0 )
  } 
console.log("SONUC:", toplaminiAl(2,5,10,4))
