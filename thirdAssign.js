// const students = [
//             ['name','David'],[ 'skills',['HTM', 'CSS', 'JS', 'React']],['scores', [98, 85, 90, 95]],
//             ['name','John'],['skills', ['HTM', 'CSS', 'JS', 'React']],['scores', [85, 80, 85, 80]]
//       ]
const students = [
    ['name','David'], ['skills',['HTM', 'CSS', 'JS', 'React']],['scores', [98, 85, 90, 95]],
    ['name','John'],['skills', ['HTM', 'CSS', 'JS', 'React']],['scores', [85, 80, 85, 80]]
]

function convertArrayToObject() {
  var object = {}; 
  for (var i = 0; i < students.length; i++) { 
    var convertedArray =students[i];
    object[convertedArray[0]] = convertedArray[1];
    //object[convertedArray[1]] = convertedArray[2];
  }
  return object; 
}
console.log(convertArrayToObject(students));
