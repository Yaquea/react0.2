import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FollowCard } from './FollowCard.jsx'
import './index.css'

const root = createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <section className="yq-followCard-container">
      <FollowCard username="Juan" name="Juan Alberto" isFollowing={false} />
      <FollowCard username="yaquea" name="Luis Gerardo" isFollowing />
      <FollowCard username="Michi" name="Norena Michelle" isFollowing />
      <FollowCard username="JuanPabloFloresDiaz" name="Juan Flore" isFollowing />
    </section>
  </StrictMode>
)
