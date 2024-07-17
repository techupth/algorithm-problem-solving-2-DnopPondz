function findStudentIndex(students, searchStudent) {
	// เริ่มเขียนโค้ดตรงนี้จ้า
	let left = 0;
    let right = students.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (students[mid] === searchStudent) {
            return mid;
        } else if (students[mid] < searchStudent) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}


let students = ["Andrew", "Bobby", "Diana", "George", "Hannah", "Isaac", "Jasmine", "John"]
let searchStudent = "John"
console.log(findStudentIndex(students, searchStudent)); 

let student = ["Alice", "Bob", "Charlie", "Diana", "Ethan", "Fiona"]
let searchStudents = "Andrew"
console.log(findStudentIndex(student, searchStudents)); 


// ตอบคำถามตรงนี้จ้า
// Big O เป็น Log n เพราะ มีการเรียง ชื่อตามตัวอักษร เลยทำให้ห่จุดตรงกลางก่อนแล้วค่อยไล่หาชื่อที่ตรงกัน ซึงจะมีขั้นตอนคือหาไปทีละครึ่งๆจนเจอถ้าไม่เจอจะreturn -1