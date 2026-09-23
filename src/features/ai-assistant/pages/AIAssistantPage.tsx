import { Bot, Send, Sparkles } from 'lucide-react'
import { useState } from 'react'
export function AIAssistantPage() {
 const [prompt,setPrompt]=useState(''); const [messages,setMessages]=useState<string[]>([])
 const submit=()=>{if(!prompt.trim())return;setMessages(current=>[...current,prompt.trim()]);setPrompt('')}
 const suggestions=['Summarize today’s operational risks','Which companies need attention?','Explain the revenue trend']
 return <main className="page"><header className="page-header"><div><span className="eyebrow">Intelligence</span><h1>AI Operations Assistant</h1><p>Ask operational questions and turn business data into actionable insights.</p></div></header>
 <section className="panel ai-panel"><div className="ai-intro"><div className="ai-mark"><Bot size={24}/></div><div><h2>Decision support</h2><p>Ready for an LLM and enterprise data layer.</p></div></div>
 <div className="suggestion-row">{suggestions.map(item=><button className="suggestion" key={item} onClick={()=>setPrompt(item)}><Sparkles size={13}/>{item}</button>)}</div>
 <div className="messages">{messages.length===0?<div className="empty-state">Choose a suggested question or write your own prompt.</div>:messages.map((message,index)=><div className="message" key={index}><span>You</span>{message}</div>)}</div>
 <div className="prompt-box"><input value={prompt} onChange={e=>setPrompt(e.target.value)} onKeyDown={e=>{if(e.key==='Enter')submit()}} placeholder="Ask the operations assistant..." aria-label="AI prompt"/><button onClick={submit} aria-label="Send prompt"><Send size={18}/></button></div></section></main>
}