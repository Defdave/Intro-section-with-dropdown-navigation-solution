const body = document.querySelector('body')
const features = document.querySelector('#features')
const company = document.querySelector('#company')
const navsbar = document.querySelector('.navsbar-mobile')
const dropFeatures = features.querySelector('.dropdown-content')
const dropCompany = company.querySelector('.dropdown-content')
const openNav = document.querySelector('#opennav')
const closeNav = document.querySelector('#closenav')
const openfeatures = document .querySelector('#openfeatures')
const closefeatures = document .querySelector('#closefeatures')
const opencompany = document .querySelector('#opencompany')
const closecompany = document .querySelector('#closecompany')


/*features.addEventListener('click', () => {
    dropFeatures.classList.toggle("show")
})

company.addEventListener('click', () => {
    dropCompany.classList.toggle("show")
})*/

const featuresDrop = (choice) => {
    if (choice == openfeatures) {
        dropFeatures.style.display = 'block'
        closefeatures.style.display = 'inline'
        openfeatures.style.display = 'none'
    }
    else if(choice == closefeatures) {
        dropFeatures.style.display = 'none' 
        closefeatures.style.display = 'none'
        openfeatures.style.display = 'inline'
    }
}

openfeatures.addEventListener('click', () => {
    featuresDrop(openfeatures)
})

closefeatures.addEventListener('click', () => {
    featuresDrop(closefeatures)
})

const companyDrop = (choice) => {
    if (choice == opencompany) {
        dropCompany.style.display = 'block'
        closecompany.style.display = 'inline'
        opencompany.style.display = 'none'
    }
    else if(choice == closecompany) {
        dropCompany.style.display = 'none'
        closecompany.style.display = 'none'
        opencompany.style.display = 'inline'
    }
}

opencompany.addEventListener('click', () => {
    companyDrop(opencompany)
})

closecompany.addEventListener('click', () => {
    companyDrop(closecompany)
})

const funcNav = (choice) => {
    if (choice == openNav) {
        navsbar.style.display = 'block'
        closeNav.style.display = 'block'
        body.style.background = 'hsl(0, 0%, 41%)'
        
    }
    else if(choice == closeNav) {
        navsbar.style.display = 'none'
        openNav.style.display = 'block'
        body.style.background = 'none'
    }
}

openNav.addEventListener('click', () => {
    funcNav(openNav)
})

closeNav.addEventListener('click', () => {
    funcNav(closeNav)
})