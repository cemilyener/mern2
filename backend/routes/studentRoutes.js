const express = require('express');
const studentController = require('../controllers/studentController');
const router = express.Router();

// Öğrenci ekleme route'u
router.post('/add', studentController.addStudent);

// Öğrencileri listeleme route'u
router.get('/', studentController.getStudents);

// Yoklama alma route'u
router.post('/takeAttendance', studentController.takeAttendance);

// Rapor oluşturma route'u
router.post('/generateReport', studentController.generateReport);

// Öğrenci silme route'u
router.delete('/:id', studentController.deleteStudent);

// Öğrenci profil route'u
router.get('/:id', studentController.getStudentProfile);

module.exports = router;
