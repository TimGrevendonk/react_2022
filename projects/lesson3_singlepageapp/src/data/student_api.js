const students = [
  {id: 565, name: "Annelies Gevers", grade: "A-"},
  {id: 11, name: "Ben Pauwels", grade: "A+"},
  {id: 91, name: "Elien Stevens", grade: "F"},
  {id: 23, name: "David Van Mol", grade: "D"},
  {id: 4002, name: "Paul Verstraeten", grade: "F"},
  {id: 8, name: "Sandra Wouters", grade: "D-"}
];

export function getAllStudents() {
  return students;
}

export function getStudentById(id) {
  return students.find((s) => s.id === id);
}