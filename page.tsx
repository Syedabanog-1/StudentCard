import React from 'react';
import StudentCard from './Components/StudentCard'; // Adjust the path if necessary
import  Student  from './models/Student'; // Ensure this model exists in your project

const students: Student[] = [
  { id: 1, name: 'John Doe', grade: 'A', image: 'john.jpg' },
  { id: 2, name: 'Jane Doe', grade: 'B', image: 'jane.jpg' },
];

const Home = () => {
  return (
    <div>
      {students.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
    </div>
  );
};

export default Home;