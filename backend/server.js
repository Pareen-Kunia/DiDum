import express from 'express';
import NodeCache from 'node-cache';
import cors from 'cors';
import 'dotenv/config';


const app = express();
const mycache = new NodeCache({ stdTTL: 2700, checkperiod: 2400 });
const BACKEND_TIMEOUT = parseInt(process.env.REACT_BACKEND_TIMEOUT) || 40000;

app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }));

app.get('/', (req, res) => {
    res.json({ message: 'Hello' });
});

app.post('/api/login', (req, res) => {
    try {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(400).json({ error: 'Authorization token is required' });
        }
        
        const currentTime = Date.now();
        const success = mycache.set(token, currentTime);
        
        if (!success) {
            return res.status(500).json({ error: 'Failed to store session in cache' });
        }
        
        res.json({ message: 'Login successful' });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/api/get-cache', (req, res) => {
    try{
        const token = req.headers.authorization;
        console.log(mycache.get(token))
        res.json({
            message: "done successfully!"
        })
    }catch(error){
        res.json({
            message: "error occured"
        })

    }
})

app.post('/api/check-session', (req, res) => {
    try {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(400).json({ error: 'Authorization token is required' });
        }

        const storedTime = mycache.get(token);
        
        if (storedTime === undefined) {
            return res.json({ expired: true, message: 'Session expired or never existed' });
        }
        
        if (Date.now() - storedTime > BACKEND_TIMEOUT) {
            return res.json({ expired: true, message: 'Session expired' });
        }

        res.json({ expired: false, message: 'Session active' });
    } catch (error) {
        console.error('Session check error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/api/logout', (req, res) => {
    try {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(400).json({ error: 'Authorization token is required' });
        }

        console.log("Inside logout")


        res.json({ success: true, message: 'Logout successful' });
    } catch (error) {
        console.error('Logout error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.use((req, res) => {
    res.status(404).json({ error: 'Endpoint not found' });
});

app.listen(3001, () => {
    console.log('Listening on port 3001');
});
