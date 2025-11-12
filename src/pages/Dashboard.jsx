import React from 'react'


export default function Dashboard(){
const stats = [
{ k: 'Courses', v: 12 },
{ k: 'Completed', v: '7' },
{ k: 'Streak', v: '14 days' },
{ k: 'XP', v: 4200 },
]


return (
<div className="min-h-screen bg-slate-900 text-slate-200 p-6">
<div className="max-w-5xl mx-auto">
<h1 className="text-3xl font-bold text-slate-50 mb-6">Dashboard</h1>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
{stats.map((s,i)=>(
<div key={i} className="bg-white/5 p-6 rounded-xl">
<div className="text-sm text-slate-400">{s.k}</div>
<div className="text-2xl font-bold text-slate-50 mt-2">{s.v}</div>
</div>
))}
</div>


<div className="mt-8 bg-white/5 p-6 rounded-xl">
<h2 className="text-xl font-semibold text-slate-50">Recent Activity</h2>
<ul className="mt-4 text-slate-300 list-disc list-inside">
<li>Completed: Basics of AI — 2 days ago</li>
<li>New badge: Consistency — 5 days ago</li>
<li>Joined study-group: React Beginners</li>
</ul>
</div>
</div>
</div>
)
}