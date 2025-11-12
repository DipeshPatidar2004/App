import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Features from './pages/Features'
import Benefits from './pages/Benefits'
import Dashboard from './pages/Dashboard'
import StartLearning from './pages/StartLearning'
import EduForAllPage from './pages/EduForAllPage'


export default function App(){
return (
<Routes>
<Route path="/" element={<Home />} />
<Route path="/app" element={<EduForAllPage />} />
<Route path="/features" element={<Features />} />
<Route path="/benefits" element={<Benefits />} />
<Route path="/dashboard" element={<Dashboard />} />
<Route path="/start" element={<StartLearning />} />
</Routes>
)
}