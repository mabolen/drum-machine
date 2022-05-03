

const App = () => {

    const [displayText, setDisplayText] = React.useState('')

    React.useEffect(() => {
        document.addEventListener('keydown', (event) => {
            playAudio(event.key.toUpperCase())
        })
    }, [])

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

  return (
    <div className='container-fluid overall'>
        <div id="drum-box" className='row'>
        <div id='drum-machine' className='col-sm-4'>
            <h1 id="title" className='col-sm-4'>Beatboi 9000</h1>
            <div id='drum-pads' className=''>
                {padKeys}
            </div>
            <div id='display' className="col-sm-4">{displayText}</div>
        </div>
        </div>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))
