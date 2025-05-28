let math = +prompt ("Please enter your Obtained Marks in Math");
let english = +prompt ("Please enter your Obtained Marks in English");
let science = +prompt ("Please enter your Obtained Marks in Science");

let obtainedMarks = math + english + science;

const totalMarksPerSubject = 100;
const numberOfSubjects = 3;
const totalMarks = totalMarksPerSubject * numberOfSubjects;

let percentage = (obtainedMarks / totalMarks) * 100;

let grade = percentage >= 80 && percentage <= 100 ? "A+"
           : percentage >= 70 && percentage < 80 ? "A"
           : percentage >= 60 && percentage < 70 ? "B"
           : percentage >= 50 && percentage < 60 ? "C"
           : percentage >= 40 && percentage < 50 ? "D"
           : "Fail";

document.write(`
  <h2>Mark Sheet</h2>
  <p>Math: ${math} out of ${totalMarksPerSubject}</p>
  <p>English: ${english} out of ${totalMarksPerSubject}</p>
  <p>Science: ${science} out of ${totalMarksPerSubject}</p>
  <hr>
  <p><strong>Total Marks:</strong> ${totalMarks}</p>
  <p><strong>Obtained Marks:</strong> ${obtainedMarks}</p>
  <p><strong>Percentage:</strong> ${percentage.toFixed(2)}%</p>
  <p><strong>Grade:</strong> ${grade}</p>
`);
