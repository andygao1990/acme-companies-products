const faker = require ('faker')

const names = new Array(50).fill('').map( _ => faker.company.companyName())
const companies = names.map( name => {
    const products = new Array(3). fill('').map( _ => faker.commerce.productName())
    return {
        name,
        products
    }
})
console.log(companies)
console.log('hello world')