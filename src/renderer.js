

const render = (selected, companies, companyList) => {
    const html = companies.map( (company, idx) => {
        return `
            <li>
                <a href='#${idx}'>
                ${ company.name }
                </a>
                <ul>
                ${
                    selected === idx ? company.products.map( product => {
                        return `
                        <li>
                            ${product}
                        </li>
                        `
                    }).join('') : ''
                }
                </ul>
            </li>   
        `
    }).join('')
    companyList.innerHTML = html
    }

    module.exports = {
        render
    }