// pages/Login/Login.tsx

'use client';

import { FC, useState }                                                   from 'react';
import {TextInput, Button, Container, Paper, Title, PasswordInput, Stack} from '@mantine/core';
import styles                                                             from './Login.module.css';

interface LoginProps {
}

const Login: FC<LoginProps> = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('Anmelden mit:', email, password);
        localStorage.setItem('isLoggedIn', 'true');
    };

    return (
        <div className={styles.page}>
            <Stack  p="md" w={"350px"}>
                <Title order={4} ta={"center"}>DiVo-Cloud</Title>
                <Title order={1} ta={"center"}>Anmelden</Title>
                <TextInput
                    label="E-Mail"
                    placeholder="E-Mail eingeben"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <PasswordInput
                    label="Passwort"
                    placeholder="Passwort eingeben"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <Button fullWidth mt="md" onClick={handleLogin}>
                    Anmelden
                </Button>
            </Stack>
        </div>
    );
};

export default Login;
