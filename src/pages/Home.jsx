import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function Home(){
const navigate = useNavigate()
return (
<div className="min-h-screen bg-slate-900 text-slate-200">
<header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
<div className="text-2xl font-bold text-teal-300">EduMantra</div>
<nav className="space-x-6 hidden md:block">
<button onClick={()=>navigate('/app')} className="text-slate-200 hover:text-teal-300">Home</button>
<button onClick={()=>navigate('/features')} className="text-slate-200 hover:text-teal-300">Features</button>
<button onClick={()=>navigate('/benefits')} className="text-slate-200 hover:text-teal-300">Benefits</button>
<button onClick={()=>navigate('/dashboard')} className="text-slate-200 hover:text-teal-300">Dashboard</button>
</nav>
</header>


<main className="px-6 py-20 text-center">
<h1 className="text-4xl md:text-6xl font-extrabold text-slate-50">Welcome to EduMantra</h1>
<p className="mt-4 text-slate-300 max-w-2xl mx-auto">An adaptive learning platform built to reach every student — online or offline. Explore features, benefits, and jump straight into learning.</p>
<div className="mt-8 flex justify-center gap-4">
<button onClick={()=>navigate('/start')} className="px-6 py-3 rounded-full bg-teal-400 text-slate-900 font-semibold">Start Learning</button>
<button onClick={()=>navigate('/app')} className="px-6 py-3 rounded-full border border-teal-400 text-teal-300">Open App Demo</button>
</div>


<div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
<div className="bg-white/5 p-6 rounded-xl">
<h3 className="text-xl font-semibold text-slate-50">Personalized Paths</h3>
<p className="text-slate-300 mt-2">AI-driven courses that adapt to learner pace.</p>
</div>
<div className="bg-white/5 p-6 rounded-xl">
<h3 className="text-xl font-semibold text-slate-50">Offline First</h3>
<p className="text-slate-300 mt-2">Download lessons and continue without internet.</p>
</div>
<div className="bg-white/5 p-6 rounded-xl">
<h3 className="text-xl font-semibold text-slate-50">Community</h3>
<p className="text-slate-300 mt-2">Peer learning, mentor sessions and leaderboards.</p>
</div>
</div>
</main>
</div>
)
}