
# KW RiskDetector

![image](https://github.com/user-attachments/assets/1255d92a-d481-47d2-86ff-fbf077ffc958)


**Smart Claims Automation & Fraud Detection**

KW RiskDetector is a full-stack AI-driven platform that helps insurance companies process claims faster and detect fraudulent behavior through automation and machine learning.

---

## 🌐 Project Structure

```
KW_RiskDetector/
├── frontend/      # React + Tailwind UI
├── backend/       # FastAPI API
└── docs/          # Business presentation PDF
```

---

## 🚀 Getting Started

### 🔧 Prerequisites

- Node.js (v18+)
- Python 3.9+
- pip

---

## ⚙️ Running the Application

### Frontend (React + Vite)

```bash
cd frontend
npm install
npm run dev
```

Access the UI at: `http://localhost:5173`

---

### Backend (FastAPI)

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

Backend available at: `http://localhost:8000`

Endpoints:

- `GET /claims` — Returns example flagged claims
- `GET /automation-rate` — Simulates automation rate %
- `POST /upload` — Simulates document ingestion

---

## 📄 Included Documentation

- `docs/KW_RiskDetector_Pitch_EN.pdf` — Presentation deck with business use case and impact

---

## 🧠 Features

- Document triage using NLP + OCR
- Confidence scoring for auto-approval
- Fraud detection with rule engine + anomaly detection
- Real-time Automation Rate Dashboard
- React UI + FastAPI API integration

---

## 📦 Deployment

### To deploy frontend on Vercel:
- Push `/frontend` to GitHub
- Connect repo to [Vercel](https://vercel.com)
- Framework: **Vite**
- Build command: `npm run build`
- Output dir: `dist`

---

## 🛡️ License

MIT — Wesley Kurosawa, 2025
