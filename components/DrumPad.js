import React from 'react'
import playAudio from '../index'

const DrumPad = () => {

    const padLetters = [
        ['Q', 'kick', sounds.kick], 
        ['W', 'snare', sounds.snare], 
        ['E', 'clap', sounds.clap], 
        ['A', 'closed-hat', sounds.closedHat], 
        ['S', 'open-hat', sounds.openHat], 
        ['D', 'cymbal', sounds.cymbal], 
        ['Z', 'floor-tom', sounds.floorTom], 
        ['X', 'mid-tom', sounds.midTom], 
        ['C', 'low-tom', sounds.lowTom]
    ]

  return (
    <div>
        {padLetters.map((e)=> {
            <div onClick={() => {playAudio(e[0])}} className='drum-pad' id={e[1]}>Q<audio className="clip" id={e[0]} src={e[2]}></audio></div>
        })}
    </div>
  )
}

export default DrumPad