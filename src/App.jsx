import './App.css'
import { useEffect } from 'react';

const tg = window.Telegram.WebApp;

export default function App() {

  useEffect(() => {
    tg.ready();
  }, [])

  const onClose = () => {
    tg.close()
  }

  return (
    <>
      work
      <button onClick={onClose}>Закрыть</button>
    </>
  )
}