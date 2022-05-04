

const SeqRow = (props) => {

    const addClass = (e) => {
        e.classList.length < 3 ? e.classList.add('seq-btn-active') : e.classList.remove('seq-btn-active') 
    }

    return (
      <div className='seq-row'>
          <div className='seq-btn col-1' onClick={(e)=>addClass(e.target)}></div>
          <div className='seq-btn col-2' onClick={(e)=>addClass(e.target)}></div>
          <div className='seq-btn col-3' onClick={(e)=>addClass(e.target)}></div>
          <div className='seq-btn col-4' onClick={(e)=>addClass(e.target)}></div>
          <div className='seq-btn col-5' onClick={(e)=>addClass(e.target)}></div>
          <div className='seq-btn col-6' onClick={(e)=>addClass(e.target)}></div>
          <div className='seq-btn col-7' onClick={(e)=>addClass(e.target)}></div>
          <div className='seq-btn col-8' onClick={(e)=>addClass(e.target)}></div>
          <div className='seq-btn col-9' onClick={(e)=>addClass(e.target)}></div>
          <div className='seq-btn col-10' onClick={(e)=>addClass(e.target)}></div>
          <div className='seq-btn col-11' onClick={(e)=>addClass(e.target)}></div>
          <div className='seq-btn col-12' onClick={(e)=>addClass(e.target)}></div>
          <div className='seq-btn col-13' onClick={(e)=>addClass(e.target)}></div>
          <div className='seq-btn col-14' onClick={(e)=>addClass(e.target)}></div>
          <div className='seq-btn col-15' onClick={(e)=>addClass(e.target)}></div>
          <div className='seq-btn col-16' onClick={(e)=>addClass(e.target)}></div>
      </div>
    )
}

const App = () => {

    const [displayText, setDisplayText] = React.useState('')
    const [timerIsActive, setTimerIsActive] = React.useState(false)
    const [bpm, setBpm] = React.useState(100)
    const [step, setStep] = React.useState(1)

    React.useEffect(() => {
        document.addEventListener('keydown', (event) => {
            playAudio(event.key.toUpperCase())
        })
    }, [])

    const playStep = (num) => {
        const seqStep = document.getElementsByClassName(`col-${num}`)

    }

    let bps = bpm / 60
    let counter = 1
    let intervalId

    React.useEffect(() => {
        if (timerIsActive) {
            intervalId = setInterval(()=> {
                console.log('tick')
               
                if (counter < 16){
                    counter++
                    setStep(counter)
                } else {
                    counter = 1
                    setStep(counter)
                }

                if (counter === 1) {

                }
            }, 1000 / bps) 
        } 
        return function clear() {
            clearInterval(intervalId)
            console.log('return clear')
        }
        
    }, [timerIsActive])

    const timer = () => {
        counter = 1
        setStep(1)
        timerIsActive ? setTimerIsActive(false) : setTimerIsActive(true)
    }

    const playAudio = (letter) => {
        const audio = document.getElementById(letter)
        audio.currentTime = 0
        audio.play()
        const fadeEffect = (id) => {
            $(id).fadeOut(50)
            $(id).fadeIn(50)
        }
        switch(letter){
            case 'Q': setDisplayText('kick');
            fadeEffect('#kick')
            break;
            case 'W': setDisplayText('snare');
            fadeEffect('#snare')
            break;
            case 'E': setDisplayText('clap');
            fadeEffect('#clap')
            break;
            case 'A': setDisplayText('closed hat');
            fadeEffect('#closed-hat')
            break;
            case 'S': setDisplayText('open hat');
            fadeEffect('#open-hat')
            break;
            case 'D': setDisplayText('cymbal');
            fadeEffect('#cymbal')
            break;
            case 'Z': setDisplayText('floor tom');
            fadeEffect('#floor-tom')
            break;
            case 'X': setDisplayText('mid tom');
            fadeEffect('#mid-tom')
            break;
            case 'C': setDisplayText('high tom');
            fadeEffect('#high-tom')
            break;
            default: setDisplayText('');
            break;
        }
    }

    const sounds = {
        kick: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Kicks/120[kb]basic-ekick.wav.mp3',
        snare: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Snares/33[kb]909sd.wav.mp3',
        clap: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Claps/13[kb]707-clap.wav.mp3',
        closedHat: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Hats/15[kb]chh.wav.mp3',
        openHat: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Hats/43[kb]707-ohh.wav.mp3',
        cymbal: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Cymbals/82[kb]opencym.wav.mp3',
        floorTom: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Toms/44[kb]lotom.wav.mp3',
        midTom: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Toms/42[kb]midtom.wav.mp3',
        highTom: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Toms/39[kb]hitom.wav.mp3'
    }

    const padLetters = [
        ['Q', 'kick', sounds.kick], 
        ['W', 'snare', sounds.snare], 
        ['E', 'clap', sounds.clap], 
        ['A', 'closed-hat', sounds.closedHat], 
        ['S', 'open-hat', sounds.openHat], 
        ['D', 'cymbal', sounds.cymbal], 
        ['Z', 'floor-tom', sounds.floorTom], 
        ['X', 'mid-tom', sounds.midTom], 
        ['C', 'high-tom', sounds.highTom]
    ]

    const padKeys = padLetters.map( e => {
        return <div onClick={() => {playAudio(e[0])}} key={e[0]} className='drum-pad' id={e[1]}>{e[0]}<audio className="clip" id={e[0]} src={e[2]}></audio></div>
    })

    const clicked = () => {
        console.log('clicked')
    }

  return (
    <div id='container'>
        <div className='row'>
            <div id='drum-machine' >
                <div id='title-box'>
                    <h1 id="title">Beatboi 9000</h1>
                </div>
                <div id='drum-pads'>
                    {padKeys}
                </div>
                <div id='display-box'>
                    <div id='display'><p>{displayText}</p></div>
                    <div id='display'><p>{step}</p></div>
                    <button onClick={timer}>Play/Pause</button>
                </div>
            </div>
            <div id='sequencer'>
                <SeqRow clicked={clicked}/>
                <SeqRow clicked={clicked}/>
                <SeqRow clicked={clicked}/>
                <SeqRow clicked={clicked}/>
            </div>
        </div>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))
