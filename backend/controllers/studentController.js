const Student = require('../models/studentModel');

// Öğrenci ekleme işlemi
exports.addStudent = async (req, res) => {
  const student = new Student(req.body);
console.log(student)
  try {
    const newStudent = await student.save();
    res.status(201).json(newStudent);
  } catch (err) {
    console.log(err)
    res.status(400).json({ message: err.message })
  }
};

// Öğrencileri listeleme işlemi
exports.getStudents = async (req, res) => {
  try {
   
    const students = await Student.find();
    res.json(students);
     console.log(students)
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Yoklama alma işlemi
exports.takeAttendance = async (req, res) => {
  const { studentId, className, date, status } = req.body;

  try {
    const student = await Student.findById(studentId);
    const classIndex = student.classes.findIndex(c => c.className === className);
    
    if (classIndex !== -1) {
      student.classes[classIndex].attendance.push({ date, status });
      await student.save();
      res.json(student);
    } else {
      res.status(404).json({ message: 'Class not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.generateReport = async (req, res) => {
    const { studentId, startDate, endDate } = req.body;
  
    try {
      const student = await Student.findById(studentId);
      const report = student.classes.map(c => {
        const attendanceRecords = c.attendance.filter(a => new Date(a.date) >= new Date(startDate) && new Date(a.date) <= new Date(endDate));
        return {
          className: c.className,
          attendance: attendanceRecords
        };
      });
  
      res.json(report);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  exports.deleteStudent = async (req, res) => {
    const id = req.params.id;
  
    try {
      const deletedStudent = await Student.findByIdAndDelete(id);
      if (!deletedStudent) {
        return res.status(404).json({ message: 'Student not found' });
      }
      res.json({ message: 'Student deleted successfully', deletedStudent });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  // Öğrenci profilini getirme işlemi
exports.getStudentProfile = async (req, res) => {
  const { id } = req.params;

  try {
    const student = await Student.findById(id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.json(student);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
  