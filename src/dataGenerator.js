const faker = require ('faker')

const generateCompanies = () => {
    if (window.localStorage.getItem('companies')) {
        return JSON.parse(window.localStorage.getItem('companies'))
    } else {
    const names = new Array(50).fill('').map( _ => faker.company.companyName())
    const companies = names.map( name => {
        const products = new Array(3). fill('').map( _ => faker.commerce.productName())
        return {
            name,
            products
        }
    })
    window.localStorage.setItem('companies', JSON.stringify(companies))
    return companies
}
}

module.exports = {
    generateCompanies
}