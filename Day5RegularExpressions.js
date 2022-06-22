var salary = (4000 * 12)
var annualBonus = 10000
var onlineCourse = (5500 * 12)
var totalIncome = Math.abs(salary + annualBonus + onlineCourse)
console.log('His Total annual income is ' + totalIncome) //1


var points = ['-12', '-4', '-3', '-1', '0', '4', '8']
var x = -12 
var y = 8 
var minDist = Math.abs(x - y);
const space = ' '
console.log('Minimum distance between' + x + space + 'and' +
 space + y + space + 'is' + minDist ); //2


 let pattern = /^[A-Z][a-z]{3,12}$/;
 let name1 = 'Dontrell';
 let name2 = 'D*O*N*T*R*E*L*L';
 let name3 = 'Don_Trell';
 let name4 = 'D O N T R E L L'
 console.log(pattern.test(name1));
 console.log(pattern.test(name2));
 console.log(pattern.test(name3));
 console.log(pattern.test(name4)); //3