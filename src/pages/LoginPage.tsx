import React, { useState } from 'react';
import { TextField, Button, CircularProgress } from '@mui/material';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError(null);


        try {
            // Отправка запроса на сервер для проверки данных пользователя
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok)
            {
                throw new Error('Неверный логин или пароль');
            }

            const data = await response.json();
            // Обработка успешной авторизации (например, сохранение токена)
            console.log('Успешная авторизация', data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Вход</h2>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    label="Пароль"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button type="submit" variant="contained" disabled={loading}>
                    {loading ? <CircularProgress size={20} /> : 'Войти'}
                </Button>
            </form>
            {error && <div>{error}</div>}
        </div>
    );
}

export default LoginPage;