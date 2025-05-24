import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FollowCard } from './FollowCard.jsx'
import './index.css'

const root = createRoot(document.getElementById('root'))

root.render(
  <section className="yq-followCard-container">
    <FollowCard username = "Juan" name="Juan alberto" />
    <FollowCard username = "yaquea" name="Luis Gerardo" />
    <FollowCard username = "Michi" name="Norena Michelle" />
     <FollowCard username = "JuanPabloFloresDiaz" name="Juan flore" />
  </section>
)