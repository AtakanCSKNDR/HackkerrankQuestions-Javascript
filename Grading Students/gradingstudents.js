/// Input array
let grades = [73, 67, 38, 33];

const gradingStudents = (grades) => {
  let data = [];
  grades.forEach((element) => {
    if (element > 36) {
      data.push(element % 5 < 3 ? element : element + 5 - (element % 5));
    } else {
      data.push(element);
    }
  });
  return data;
};

console.log(gradingStudents(grades));
