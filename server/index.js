const express = require('express');
const cors = require('cors');
const multer = require('multer');
const Tesseract = require('tesseract.js');
const { OpenAIAPI } = require('openai');

const app = express();
app.use(cors());

const upload = multer({ storage: multer.memoryStorage() });

app.post('/upload', upload.single('screenshot'), async (req, res) => {
  // TODO: Handle the uploaded file

  const {
    data: { text },
  } = await Tesseract.recognize(req.file.buffer, 'eng', {
    logger: console.log,
  });
  // TODO: Extract and store the sleep data from `text`
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
