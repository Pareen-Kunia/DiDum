import express from 'express';
import NodeCache from 'node-cache';
import cors from 'cors';
import 'dotenv/config';


const app = express();
const mycache = new NodeCache({ stdTTL: 2700, checkperiod: 2400 });
const BACKEND_TIMEOUT = parseInt(process.env.REACT_BACKEND_TIMEOUT) || 40000;
const PORT = parseInt(process.env.PORT) || 3001

app.use(express.json());
app.use(cors({ origin: `${process.env.REACT_FRONTEND_URL}` }));

app.get('/', (req, res) => {
    res.json({ message: 'Hello' });
});

app.post('/api/login', (req, res) => {
    try {
        const token = req.headers.authorization;
          
        const currentTime = Date.now();
        let success = mycache.set(token, currentTime);

        if (!success) {
            return res.json({ error: "Cache set failed" });
        } 

        return res.json({ message: "Login successful" }); 
    } catch (error) {
        console.error('Login error:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/api/check-session', (req, res) => {
    try {
        const token = req.headers.authorization;

        if (!token) {
            return res.status(400).json({ error: 'Authorization token is required' });
        }

        const storedTime = mycache.get(token);
        
        if (storedTime === undefined) {
            console.log("Session expired or never existed")
            return res.json({ expired: true, message: 'Session expired or never existed' });
        }
        
        if (Date.now() - storedTime > BACKEND_TIMEOUT) {
            console.log("Session expired ")
            return res.json({ expired: true, message: 'Session expired' });
        }

        res.json({ expired: false, message: 'Session active' });
        console.log("Session active")
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

        mycache.del(token);

        res.json({ success: true, message: 'Logout successful' });
    } catch (error) {
        console.error('Logout error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
