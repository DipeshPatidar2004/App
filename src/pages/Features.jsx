import React from 'react'


export default function Features(){
const features = [
{ icon: '🤖', title: 'AI Personalization', desc: 'Adaptive learning paths tailored to each student.' },
{ icon: '📱', title: 'Offline-First', desc: 'Save lessons for offline consumption.' },
{ icon: '🌐', title: 'Multilingual', desc: 'Content in 25+ languages.' },
{ icon: '📊', title: 'Analytics', desc: 'Track student progress and outcomes.' },
{ icon: '🎮', title: 'Gamification', desc: 'Badges, leaderboards & streaks.' },
{ icon: '🔒', title: 'Privacy', desc: 'Data-secure by design.' },
]


return (
<div className="min-h-screen bg-slate-900 text-slate-200 p-6">
<div className="max-w-6xl mx-auto">
<h1 className="text-3xl font-bold text-slate-50 mb-6">Features</h1>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{features.map((f,i)=>(
<div key={i} className="bg-white/5 p-6 rounded-xl">
<div className="text-4xl mb-3 text-teal-300">{f.icon}</div>
<h3 className="text-xl font-semibold text-slate-50">{f.title}</h3>
<p className="text-slate-300 mt-2">{f.desc}</p>
</div>
))}
</div>
</div>
</div>
)
}