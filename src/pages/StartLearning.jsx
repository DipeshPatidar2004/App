import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function StartLearning(){
const navigate = useNavigate()
const courses = [
{ title: 'Intro to JavaScript', len: '6 lessons' },
{ title: 'React Basics', len: '8 lessons' },
{ title: 'AI for Everyone', len: '5 lessons' },
]


return (
<div className="min-h-screen bg-slate-900 text-slate-200 p-6">
<div className="max-w-4xl mx-auto">
<h1 className="text-3xl font-bold text-slate-50 mb-6">Start Learning</h1>
<div className="grid grid-cols-1 gap-4">
{courses.map((c,i)=>(
<div key={i} className="bg-white/5 p-4 rounded-lg flex items-center justify-between">
<div>
<div className="font-semibold text-slate-50">{c.title}</div>
<div className="text-sm text-slate-400">{c.len}</div>
</div>
<div>
<button onClick={()=>navigate('/app')} className="px-4 py-2 bg-teal-400 text-slate-900 rounded-full">Open Course</button>
</div>
</div>
))}
</div>
</div>
</div>
)
}