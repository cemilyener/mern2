import React, { useState } from 'react';

const AddStudent = () => {
  const [student, setStudent] = useState({
    firstName: '',
    lastName: '',
    discipline: '',
    attention: '',
    responsibility: '',
    goal: '',
    classes: []
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:4000/students/add', { // API endpoint'inizi buraya ekleyin
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(student),
      });
  
      if (response.ok) {
        alert('Öğrenci başarıyla eklendi!');
        setStudent({
          firstName: '',
          lastName: '',
          discipline: '',
          attention: '',
          responsibility: '',
          goal: '',
          classes: []
        });
      } else {
        alert('Bir hata oluştu. Lütfen tekrar deneyin.');
      }
    } catch (err) {
      console.error(err);
      alert('Bir hata oluştu. Lütfen tekrar deneyin.');
    }
  };
  return (
    <div className="container mx-auto px-4 bg-gray-100 py-8">
      <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">Add Student</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <input type="text" name="firstName" value={student.firstName} onChange={handleChange} placeholder="First Name" required className="block w-full px-4 py-2 mb-4 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" />
        <input type="text" name="lastName" value={student.lastName} onChange={handleChange} placeholder="Last Name" required className="block w-full px-4 py-2 mb-4 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" />
        <input type="number" name="discipline" value={student.discipline} onChange={handleChange} placeholder="Discipline" required className="block w-full px-4 py-2 mb-4 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" />
        <input type="number" name="attention" value={student.attention} onChange={handleChange} placeholder="Attention" required className="block w-full px-4 py-2 mb-4 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" />
        <input type="number" name="responsibility" value={student.responsibility} onChange={handleChange} placeholder="Responsibility" required className="block w-full px-4 py-2 mb-4 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" />
        <input type="text" name="goal" value={student.goal} onChange={handleChange} placeholder="Goal" required className="block w-full px-4 py-2 mb-4 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" />
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md block w-full">Add</button>
      </form>
    </div>
  );
};

export default AddStudent;