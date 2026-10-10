* {
  box-sizing: border-box;
}

:root {
  --bg: #f4efe6;
  --panel: #fffaf0;
  --primary: #1b4d3e;
  --primary-dark: #123b31;
  --accent: #d29f35;
  --text: #1d1d1d;
  --muted: #6a6a6a;
  --border: #e7dec7;
  --success: #2e8b57;
  --warning: #c77d22;
  --danger: #b34646;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: linear-gradient(135deg, #f5f0e7 0%, #efe8d9 100%);
  color: var(--text);
}

button, input, select, textarea {
  font: inherit;
}

.app-shell {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;
  padding: 12px 16px;
  border: 1px solid var(--border);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.6);
}

.eyebrow {
  margin: 0 0 6px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--muted);
  font-size: 12px;
}

h1, h2 {
  margin: 0;
}

.status-badge {
  background: var(--primary);
  color: white;
  font-weight: 700;
  border-radius: 999px;
  padding: 8px 14px;
  font-size: 12px;
}

.layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.card {
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 18px;
  box-shadow: 0 10px 30px rgba(36, 26, 4, 0.05);
  padding: 20px;
}

.summary-card {
  grid-column: 1 / -1;
}

.summary-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(150px, 1fr));
  gap: 16px;
  margin-top: 16px;
}

.stat-box {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 16px;
}

.stat-box span {
  display: block;
  color: var(--muted);
  margin-bottom: 8px;
  font-size: 14px;
}

.stat-box strong {
  font-size: 1.8rem;
  color: var(--primary-dark);
}

.form-card {
  min-height: 100%;
}

.field-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(180px, 1fr));
  gap: 14px;
  margin: 18px 0;
}

label {
  display: block;
  color: var(--text);
  font-weight: 600;
}

input, select, textarea {
  width: 100%;
  margin-top: 8px;
  padding: 11px 12px;
  border-radius: 10px;
  border: 1px solid var(--border);
  background: white;
  color: var(--text);
}

textarea {
  resize: vertical;
}

button {
  background: var(--primary);
  color: white;
  border: none;
  border-radius: 10px;
  padding: 11px 18px;
  cursor: pointer;
  font-weight: 700;
  transition: 0.2s ease;
}

button:hover {
  background: var(--primary-dark);
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}

.table-card {
  grid-column: 1 / -1;
}

.table-wrap {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

th, td {
  border-bottom: 1px solid var(--border);
  padding: 12px 10px;
  text-align: left;
}

th {
  color: var(--primary-dark);
  background: rgba(27, 77, 62, 0.04);
}

.status-pill {
  display: inline-block;
  border-radius: 999px;
  padding: 6px 10px;
  font-size: 12px;
  font-weight: 700;
}

.status-presente {
  background: rgba(46, 139, 87, 0.12);
  color: var(--success);
}

.status-faltou {
  background: rgba(179, 70, 70, 0.12);
  color: var(--danger);
}

.status-atrasado {
  background: rgba(199, 125, 34, 0.12);
  color: var(--warning);
}

@media (max-width: 850px) {
  .layout {
    grid-template-columns: 1fr;
  }

  .summary-grid,
  .field-grid {
    grid-template-columns: 1fr;
  }
}
