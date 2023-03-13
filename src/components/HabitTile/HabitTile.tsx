import React from 'react'
import { TileContainer } from './HabitTile.styled'
import headshot from '../../assets/headshot.jpg'

export default function HabitTile() {
  return (
    <TileContainer>
        <div>
          <img src={headshot} />
        </div>
        <h1>cool tile</h1>
    </TileContainer>
  )
}
