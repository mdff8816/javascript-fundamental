// 1. 
function calculateStudentData(students) {
  if (students.length === 0) {
    return null;
  }

  const nilai = students.map((student) => student.Score);
  const umur = students.map(
    (student) => new Date().getFullYear() - new Date(student.Age).getFullYear()
  );

  const dataNilai = {
    Highest: Math.max(...nilai),
    Lowest: Math.min(...nilai),
    Average: nilai.reduce((acc, val) => acc + val, 0) / nilai.length,
  };

  const dataUmur = {
    Highest: Math.max(...umur),
    Lowest: Math.min(...umur),
    Average: umur.reduce((acc, val) => acc + val, 0) / umur.length,
  };

  return {
    Nilai: dataNilai,
    Umur: dataUmur,
  };
}

const students = [
  { Name: "Budi", Age: "2000-04-19", Score: 85 },
  { Name: "Siti",  Age: "1999-09-20", Score: 90 },
];

const studentData = calculateStudentData(students);
console.log(studentData);
