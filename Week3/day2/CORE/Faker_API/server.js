const {faker} = require("@faker-js/faker")
const express = require('express')
const PORT = 5000
const app = express()


const CreateUser = () => ({
    _id: faker.datatype.uuid(),
    lastName: faker.name.lastName(),
    firstName: faker.name.firstName(),
    phoneNumber: faker.phone.imei(),
    email: faker.internet.exampleEmail(),
    password: faker.internet.password()})

const CreateCompany = () => ({
    _id: faker.datatype.uuid(),
    Name: faker.company.name(),
    adress: {
        country: faker.address.country(),
        state: faker.address.state(),
        city: faker.address.cityName(),
        street: faker.address.streetAddress(),
        zipCode: faker.address.zipCode()
    }
})

app.get("/api/users/new", (req,res) => {
    const newUser = CreateUser()
    console.log(newUser)
    console.log("dddddddddddddddddddddd")
    res.json(newUser)
})
app.get("/api/companies/new", (req,res) =>{
    const newCompany = CreateCompany()
    res.json(newCompany)
})

app.get("/api/user/company", (req,res) => {
    const newUser = CreateUser()
    const newCompany = CreateCompany()
    console.log(".................>>>")
    const CompanyandUser = 
       {user: newUser,
        company: newCompany
    }
    
    res.json(CompanyandUser)
    console.log(CompanyandUser)

})


app.listen(PORT, () => console.log(`express server running on port ${PORT}`));