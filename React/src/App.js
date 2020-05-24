import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from "./components/Sidebar"
import CreateApppointment from "./components/appointment/Create"
import AppointmentList from "./components/appointment/List"
import TodayAppointments from "./components/appointment/Today"

function App() {
  return (
    <div>
      <Sidebar />
      <CreateApppointment />
      <AppointmentList />
      <TodayAppointments />
    </div>
  );
}

export default App;
