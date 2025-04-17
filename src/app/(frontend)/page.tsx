'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from './start.module.css'
import Image from 'next/image'
import BACKGROUND from '../assets/images/background.png'
import { Badge, Button, Center, Paper, PasswordInput, Stack, TextInput, Title } from '@mantine/core'

export default function HomePage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleLogin = async () => {
    setError('')

    try {
      const res = await fetch('http://localhost:3000/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include', // wichtig für Session-Cookie
        body: JSON.stringify({ email, password }),
      })

      if (!res.ok) {
        const errorData = await res.json()
        throw new Error(errorData.message || 'Login fehlgeschlagen')
      }

      const user = await res.json()

      // 🔒 Daten speichern für spätere Requests
      localStorage.setItem('isLoggedIn', 'true')
      localStorage.setItem('userId', user.user.id)
      localStorage.setItem('role', user.user.role)
      localStorage.setItem('email', user.user.email)

      router.push('/album')
    } catch (err: any) {
      setError(err.message)
    }
  }

  return (
    <div className={styles.page}>
      <Image className={styles.background} src={BACKGROUND} alt={'x'} loading="lazy" fill />
      <Paper p={{ base: '10px', lg: '50px' }} className={styles.contnet}>
        <Center w={'100%'} h={'100%'}>
          <Stack p="md" w={{ base: '250px', xs: '300px', sm: '400px', lg: '500px' }}>
            <Title order={1} ta="center">
              Anmelden
            </Title>
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
            {error && (
              <Badge variant="light" color="red">
                {error}
              </Badge>
            )}
            <Button variant="light" color="#3c8935" fullWidth mt="md" onClick={handleLogin}>
              Anmelden
            </Button>
          </Stack>
        </Center>
      </Paper>
    </div>
  )
}
