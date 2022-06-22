const countries = [
'Siberia', 
'India',
'Japan',
'Italy',
'Mexico']
console.table(countries); //1

const names = ['Aleksandr', 'Aarush', 'Aoi', 'Gianna', 'Andres']
const title = ['Researcher', 'Engineer', 'Singer', 'Consultant', 'Presidente']
const city = ['Krasnoyarsk', 'Delhi', 'Tokyo', 'Rome','Tijuana']
const age = [39, 74, 20, 58, 61]
const people = [
    {
        name: 'Aleksandr',
        title: 'Researcher',
        country: 'Siberia',
        city: 'Krasnoyarsk',
        age: 39
    },
    {
        name: 'Aarush',
        title: 'Engineer',
        country: 'India',
        city: 'Delhi',
        age: 74
    },
    {
        name: 'Aoi',
        title: 'Singer',
        country: 'Japan',
        city: 'Tokyo',
        age: 20
    },
    {
        name: 'Gianna',
        title: 'Consultant',
        country: 'Italy',
        city: 'Rome',
        age: 58
    },
    {
        name: "Andres",
        title: "Presidente",
        country: "Mexico",
        city: "Tijuana",
        age: 61
    }
  ]
  console.table(people) //2
  
  console.group('Names')
  console.log(names)
  console.groupEnd();
  
  console.group('Titles')
  console.log(title)
  console.groupEnd();

  console.group('Countries')
  console.log(countries)
  console.groupEnd();

  console.group('Cities')
  console.log(city)
  console.groupEnd();

  console.group('Ages')
  console.group(age)
  console.groupEnd();
  
  console.group('People')
  console.log(people)
  console.groupEnd(); //3