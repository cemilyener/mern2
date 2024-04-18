import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ListStudents = () => {
  const [students, setStudents] = useState([]);


  useEffect(() => {
    fetch('http://localhost:4000/students')
      .then(response => response.json())
      .then(data => setStudents(data))
      .catch(error => console.error('Error fetching students:', error));
  }, []);

  const handleDelete = async (id) => {
    try {
      // Öğrenciyi sil
      await fetch(`http://localhost:4000/students/${id}`, {
        method: 'DELETE'
      });
  
      // Öğrencileri güncelle
      const response = await fetch('http://localhost:4000/students');
      const data = await response.json();
      setStudents(data);
  
      alert('Öğrenci başarıyla silindi.');
    } catch (error) {
      console.error('Öğrenci silinirken hata oluştu:', error);
      alert('Öğrenci silinirken bir hata oluştu.');
    }
  };
  



  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Student List</h2>
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="text-left">First Name</th>
            <th className="text-left">Last Name</th>
            <th className="text-left">Discipline</th>
            <th className="text-left">Attention</th>
            <th className="text-left">Responsibility</th>
            <th className="text-left">Goal</th>
            <th className="text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student._id}>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.discipline}</td>
              <td>{student.attention}</td>
              <td>{student.responsibility}</td>
              <td>{student.goal}</td>
              <td>
              <button onClick={() => handleDelete(student._id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2">Delete</button>
              <Link to={`/profile-student/${student._id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">View Profile</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListStudents;
