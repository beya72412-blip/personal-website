import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const port = Number(process.env.PORT) || 5000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());

if (process.env.MONGODB_URI) {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected'))
    .catch((error) => console.error('MongoDB connection error:', error.message));
}

app.get('/api/health', (req, res) => {
  res.json({ success: true, message: 'Portfolio API is running.' });
});

app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'Please provide your name, email, and message.',
    });
  }

  console.log('New portfolio inquiry:', { name, email, subject, message });

  return res.status(200).json({
    success: true,
    message: 'Thanks for reaching out! Your message has been received.',
  });
});

const distPath = path.join(__dirname, 'dist');
app.use(express.static(distPath));

app.get('*', (req, res) => {
  if (req.path.startsWith('/api')) {
    return res.status(404).json({ success: false, message: 'API endpoint not found.' });
  }

  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`Portfolio server listening on http://localhost:${port}`);
});
