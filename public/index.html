const express = require('express');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = process.env.PORT || 3000;
const dbPath = path.join(__dirname, 'database', 'capoeira.db');
const db = new sqlite3.Database(dbPath);

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

function toISODate(date = new Date()) {
  return new Date(date).toISOString().slice(0, 10);
}

function seedData() {
  const classes = [
    ['Capoeira Angola', 'Segunda e Quarta • 18:30', 'Mestre Nino'],
    ['Capoeira Regional', 'Terça e Quinta • 19:00', 'Professor Tatu'],
    ['Infantil', 'Sábado • 09:00', 'Professora Bambu']
  ];

  const students = [
    ['João da Silva', 'Branca', 'Capoeira Angola', '11999990001', 120, 'ativo'],
    ['Maria Souza', 'Amarela', 'Capoeira Regional', '11999990002', 120, 'ativo'],
    ['Pedro Rocha', 'Verde', 'Infantil', '11999990003', 90, 'ativo'],
    ['Ana Paula', 'Azul', 'Capoeira Angola', '11999990004', 120, 'inativo'],
    ['Lucas Martins', 'Preta', 'Capoeira Regional', '11999990005', 150, 'ativo']
  ];

  db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS classes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      schedule TEXT,
      instructor TEXT,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS students (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      belt TEXT,
      turma TEXT,
      phone TEXT,
      value REAL DEFAULT 0,
      status TEXT DEFAULT 'ativo',
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS attendance (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      student_id INTEGER NOT NULL,
      class_id INTEGER NOT NULL,
      date TEXT NOT NULL,
      status TEXT DEFAULT 'presente',
      notes TEXT,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY(student_id) REFERENCES students(id),
      FOREIGN KEY(class_id) REFERENCES classes(id)
    )`);

    db.run(`INSERT OR IGNORE INTO classes (name, schedule, instructor) VALUES (?, ?, ?)`, classes[0]);
    db.run(`INSERT OR IGNORE INTO classes (name, schedule, instructor) VALUES (?, ?, ?)`, classes[1]);
    db.run(`INSERT OR IGNORE INTO classes (name, schedule, instructor) VALUES (?, ?, ?)`, classes[2]);

    students.forEach((student) => {
      db.run(
        `INSERT OR IGNORE INTO students (name, belt, turma, phone, value, status) VALUES (?, ?, ?, ?, ?, ?)`,
        student
      );
    });

    const today = toISODate();
    const classList = [1, 2, 3];
    classList.forEach((classId, index) => {
      db.run(
        `INSERT OR IGNORE INTO attendance (student_id, class_id, date, status, notes)
         VALUES (?, ?, ?, ?, ?)`,
        [index + 1, classId, today, 'presente', 'Presença registrada']
      );
    });
  });
}

function getSummary(callback) {
  const today = toISODate();

  db.get(`SELECT COUNT(*) AS total_students FROM students`, (err, studentCount) => {
    if (err) return callback(err);

    db.get(
      `SELECT COUNT(*) AS total_present FROM attendance WHERE date = ? AND status = 'presente'`,
      [today],
      (err2, presentCount) => {
        if (err2) return callback(err2);

        db.get(
          `SELECT COALESCE(SUM(value), 0) AS total_revenue FROM students WHERE status = 'ativo'`,
          (err3, revenue) => {
            if (err3) return callback(err3);

            db.all(`SELECT * FROM classes ORDER BY id ASC`, (err4, classes) => {
              if (err4) return callback(err4);

              callback(null, {
                total_students: studentCount.total_students,
                total_present: presentCount.total_present,
                total_revenue: revenue.total_revenue,
                classes
              });
            });
          }
        );
      }
    );
  });
}

app.get('/api/health', (req, res) => {
  res.json({ ok: true, message: 'Sistema da academia online' });
});

app.get('/api/classes', (req, res) => {
  db.all(`SELECT * FROM classes ORDER BY id ASC`, (err, rows) => {
    if (err) {
      return res.status(500).json({ error: 'Erro ao buscar turmas' });
    }
    res.json(rows);
  });
});

app.post('/api/classes', (req, res) => {
  const { name, schedule, instructor } = req.body;

  if (!name || !schedule || !instructor) {
    return res.status(400).json({ error: 'Nome, horário e instrutor são obrigatórios.' });
  }

  db.run(
    `INSERT INTO classes (name, schedule, instructor) VALUES (?, ?, ?)`,
    [name, schedule, instructor],
    function (err) {
      if (err) {
        return res.status(500).json({ error: 'Erro ao criar turma' });
      }

      res.status(201).json({ id: this.lastID, name, schedule, instructor });
    }
  );
});

app.get('/api/students', (req, res) => {
  db.all(`SELECT * FROM students ORDER BY id ASC`, (err, rows) => {
    if (err) {
      return res.status(500).json({ error: 'Erro ao buscar alunos' });
    }
    res.json(rows);
  });
});

app.post('/api/students', (req, res) => {
  const { name, belt, turma, phone, value, status } = req.body;

  if (!name) {
    return res.status(400).json({ error: 'Nome é obrigatório.' });
  }

  db.run(
    `INSERT INTO students (name, belt, turma, phone, value, status) VALUES (?, ?, ?, ?, ?, ?)`,
    [name, belt || 'Sem faixa', turma || 'Sem turma', phone || '', Number(value) || 0, status || 'ativo'],
    function (err) {
      if (err) {
        return res.status(500).json({ error: 'Erro ao cadastrar aluno' });
      }

      res.status(201).json({
        id: this.lastID,
        name,
        belt: belt || 'Sem faixa',
        turma: turma || 'Sem turma',
        phone: phone || '',
        value: Number(value) || 0,
        status: status || 'ativo'
      });
    }
  );
});

app.get('/api/attendance', (req, res) => {
  const date = req.query.date || toISODate();
  const classId = req.query.classId;

  let sql = `
    SELECT a.id, a.date, a.status, a.notes, s.name AS student_name, s.belt, c.name AS class_name
    FROM attendance a
    INNER JOIN students s ON s.id = a.student_id
    INNER JOIN classes c ON c.id = a.class_id
    WHERE a.date = ?
  `;
  const params = [date];

  if (classId) {
    sql += ` AND a.class_id = ?`;
    params.push(classId);
  }

  sql += ` ORDER BY a.id DESC`;

  db.all(sql, params, (err, rows) => {
    if (err) {
      return res.status(500).json({ error: 'Erro ao buscar presença' });
    }
    res.json(rows);
  });
});

app.post('/api/attendance', (req, res) => {
  const { studentId, classId, date, status, notes } = req.body;

  if (!studentId || !classId || !date) {
    return res.status(400).json({ error: 'Aluno, turma e data são obrigatórios.' });
  }

  db.run(
    `INSERT INTO attendance (student_id, class_id, date, status, notes) VALUES (?, ?, ?, ?, ?)`,
    [studentId, classId, date, status || 'presente', notes || ''],
    function (err) {
      if (err) {
        return res.status(500).json({ error: 'Erro ao registrar presença' });
      }

      res.status(201).json({
        id: this.lastID,
        studentId,
        classId,
        date,
        status: status || 'presente',
        notes: notes || ''
      });
    }
  );
});

app.get('/api/dashboard', (req, res) => {
  const today = toISODate();

  getSummary((err, summary) => {
    if (err) {
      return res.status(500).json({ error: 'Erro ao carregar dashboard' });
    }

    db.all(
      `SELECT a.id, a.date, a.status, s.name AS student_name, c.name AS class_name
       FROM attendance a
       INNER JOIN students s ON s.id = a.student_id
       INNER JOIN classes c ON c.id = a.class_id
       WHERE a.date = ?
       ORDER BY a.id DESC LIMIT 10`,
      [today],
      (attendanceErr, attendanceRows) => {
        if (attendanceErr) {
          return res.status(500).json({ error: 'Erro ao buscar presença do dia' });
        }

        res.json({
          ...summary,
          attendanceToday: attendanceRows,
          date: today
        });
      }
    );
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

db.serialize(() => {
  seedData();
});

app.listen(port, () => {
  console.log(`App da academia rodando em http://localhost:${port}`);
});
