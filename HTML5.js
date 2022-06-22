
localStorage.setItem('firstName', 'Dontrell') 
localStorage.setItem('lastName', 'Martin')
localStorage.setItem('Age', '27') 
localStorage.setItem('country', 'United States')
localStorage.setItem('city', 'Detroit')
console.log(localStorage) //1

localStorage.getItem('key')
let firstName = localStorage.getItem('firstName')
let lastName = localStorage.getItem('lastName')
let age = localStorage.getItem('age')
let skills = localStorage.getItem('skills')
let country = localStorage.getItem('country')
let enrolledKeys = localStorage.getItem('enrolled Keys')
console.log(firstName, lastName,  age, skills, country, enrolledKeys) //2

const personAccount = {
    firstName: 'Dontrell',
    lastName: 'Martin',
    incomes: ['Job', 'Grants', 'Scholarships'],
    expenses: ['Gas', 'CarNote', 'Insurance', 'Bills']
  }
