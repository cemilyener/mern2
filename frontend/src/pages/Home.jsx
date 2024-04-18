import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-4">Satranç Öğrenci Yoklama Sistemi</h1>
      <div className="grid grid-cols-2 gap-4">
        <Link to="/add-student" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Öğrenci Ekle
        </Link>
        <Link to="/list-students" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Öğrencileri Listele
        </Link>
        <Link to="/take-attendance" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Yoklama Al
        </Link>
        <Link to="/generate-report" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Rapor Oluştur
        </Link>
      </div>
    </div>
  );
}

export default Home;
