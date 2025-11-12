import React from 'react'


export default function Benefits(){
const benefits = [
{ icon: '🏫', title: 'Rural Reach', desc: 'Bring quality content to underserved areas.' },
{ icon: '🏙️', title: 'Urban Scale', desc: 'Scalable solutions for large institutions.' },
{ icon: '👩‍🏫', title: 'Teacher Tools', desc: 'Dashboards for educators and admins.' },
{ icon: '💼', title: 'Career', desc: 'Skill-based pathways to employment.' },
]


return (
<div className="min-h-screen bg-slate-900 text-slate-200 p-6">
<div className="max-w-6xl mx-auto">
<h1 className="text-3xl font-bold text-slate-50 mb-6">Benefits</h1>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
{benefits.map((b,i)=>(
<div key={i} className="bg-white/5 p-6 rounded-xl text-center">
<div className="text-4xl mb-3 text-teal-300">{b.icon}</div>
<h3 className="text-xl font-semibold text-slate-50">{b.title}</h3>
<p className="text-slate-300 mt-2">{b.desc}</p>
</div>
))}
</div>
</div>
</div>
)
}