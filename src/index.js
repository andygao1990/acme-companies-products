const faker = require ('faker')
const dataGenerator = require ('./dataGenerator.js')
const renderer = require ('./renderer.js')

const companies = dataGenerator.generateCompanies()
const companyList = document.querySelector('#company-list')

renderer.render((window.location.hash).slice(1)*1, companies, companyList)

window.addEventListener('hashchange', () => {
    const selected = (window.location.hash).slice(1)*1
    renderer.render (selected, companies, companyList)
})