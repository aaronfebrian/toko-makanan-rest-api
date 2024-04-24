const express = require('express');
const { Pool } = require('pg');

const app = express();
const PORT = process.env.PORT || 3000;

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: '12345',
  database: 'Food_App',
  port: 5432,
});

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Route untuk mendapatkan daftar makanan
app.get('/makanan', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM makanan');
    const makanan = result.rows;
    client.release();
    res.json(makanan);
  } catch (err) {
    console.error('Error getting makanan', err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route untuk menambahkan makanan baru
app.post('/makanan', async (req, res) => {
  const { nama_makanan, harga } = req.body;
  try {
    const client = await pool.connect();
    const result = await client.query(
      'INSERT INTO makanan (nama_makanan, harga) VALUES ($1, $2) RETURNING *',
      [nama_makanan, harga]
    );
    const newMakanan = result.rows[0];
    client.release();
    res.status(201).json(newMakanan);
  } catch (err) {
    console.error('Error adding new makanan', err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route untuk mengupdate makanan berdasarkan ID
app.put('/makanan/update/:id', async (req, res) => {
  const { id } = req.params;
  const { nama_makanan, harga } = req.body;
  try {
    const client = await pool.connect();
    const result = await client.query(
      'UPDATE makanan SET nama_makanan = $1, harga = $2 WHERE id = $3 RETURNING *',
      [nama_makanan, harga, id]
    );
    const updatedMakanan = result.rows[0];
    client.release();
    res.json(updatedMakanan);
  } catch (err) {
    console.error('Error updating makanan', err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route untuk menghapus makanan berdasarkan ID
app.delete('/makanan/delete/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const client = await pool.connect();
    await client.query('DELETE FROM makanan WHERE id = $1', [id]);
    client.release();
    res.json({ message: 'Makanan berhasil dihapus' });
  } catch (err) {
    console.error('Error deleting makanan', err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
