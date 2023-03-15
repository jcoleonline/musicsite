// Given the data array, use a reduce method to group students by major.
//
// Example:
//
// Input: data
//
// Output: 
// {
//   business: [
//     { name: 'Billy', age: 20, major: 'business' },
//     { name: 'Susie', age: 25, major: 'business' }
//   ],
//   chemistry: [ { name: 'Bobby', age: 30, major: 'chemistry' } ]
// }

const data = [
    {
      name: 'Billy',
      age: 20,
      major: 'business',
    },
    {
      name: 'Susie',
      age: 25,
      major: 'business',
    },
    {
      name: 'Bobby',
      age: 30,
      major: 'chemistry',
    },
  ];
  
  const createMajorGroups = (arr) => {
    return arr.reduce((acc, student) => {
      if (acc[student.major]) {
        acc[student.major].push(student);
      } else {
        acc[student.major] = [student];
      }
      return acc;
    }, {});
  };
  
  console.log(createMajorGroups(business));