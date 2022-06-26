import { Route, Routes } from 'react-router-dom'
import EventPage from './src/pages/EventPage';
import { Subscribe } from './src/pages/Subscribe';

export function Routerx() {

  return (
    <Routes>
      <Route path="/" element={<Subscribe />} />
      <Route path="/event" element={<EventPage />} />
      <Route path="/event/lesson/:slug" element={<EventPage />} />
    </Routes>
  )
}