import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ProfileStudent = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/students/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Student not found');
        }
        return response.json();
      })
      .then(data => {
        setStudent(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Student Profile</h2>
      <div>
        <p><strong>Name:</strong> {student.firstName} {student.lastName}</p>
        <p><strong>Discipline:</strong> {student.discipline}</p>
        <p><strong>Attention:</strong> {student.attention}</p>
        <p><strong>Responsibility:</strong> {student.responsibility}</p>
        <p><strong>Goal:</strong> {student.goal}</p>
      </div>
      <button onClick={() => navigate(-1)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Back</button>
    </div>
  );
};

export default ProfileStudent;
