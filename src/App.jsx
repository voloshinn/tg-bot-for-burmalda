import './App.css'
import ControlPanel from './components/ControlPanel/ControlPanel';
import Header from './components/Header/Header';
import InfoBlock from './components/InfoBlock/InfoBlock';
import MinesPanel from './components/MinesPanel/MinesPanel';
import { useTelegram } from './hooks/useTelegram';



export default function App() {

  const {onClose} = useTelegram

  return (
    <>
      <Header />
      <InfoBlock />
      <MinesPanel />
      <ControlPanel />
    </>
  )
}
