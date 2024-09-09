import React, { useState } from 'react';
import { TextField, Button, CircularProgress } from '@mui/material';

function RegisterPage() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const
        [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError(null);


        if (password !== confirmPassword) {
            setError('Пароли не совпадают');
            setLoading(false);
            return;
        }

        try {
            // Отправка запроса на сервер для регистрации пользователя
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email,
                    password }),
            });

            if (!response.ok) {
                throw new Error('Ошибка  
                при регистрации');
            }

            // Обработка успешной регистрации
            console.log('Регистрация прошла успешно');
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Регистрация</h2>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Имя пользователя"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}

                />
                <TextField
                    label="Пароль"

                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <TextField
                    label="Подтвердите пароль"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <Button type="submit" variant="contained" disabled={loading}>
                    {loading ? <CircularProgress size={20} /> : 'Зарегистрироваться'}
                </Button>
            </form>
            {error && <div>{error}</div>}
        </div>
    );
}

export default RegisterPage;