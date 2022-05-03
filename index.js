
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

  return (
    <div className='container-fluid overall'>
        <div id="drum-box" className='row'>
        <div id='drum-machine' className='col-sm-4'>
            <h1 id="title" className='col-sm-4'>Beatboi 9000</h1>
            <div id='drum-pads' className=''>
                <div onClick={() => {playAudio('Q')}} className='drum-pad' id='kick'>Q<audio className="clip" id="Q" src={sounds.kick}></audio></div>
                <div onClick={() => {playAudio('W')}} className='drum-pad' id='snare'>W<audio className="clip" id="W" src={sounds.snare}></audio></div>
                <div onClick={() => {playAudio('E')}} className='drum-pad' id='clap'>E<audio className="clip" id="E" src={sounds.clap}></audio></div>
                <div onClick={() => {playAudio('A')}} className='drum-pad' id='closed-hat'>A<audio className="clip" id="A" src={sounds.closedHat}></audio></div>
                <div onClick={() => {playAudio('S')}} className='drum-pad' id='open-hat'>S<audio className="clip" id="S" src={sounds.openHat}></audio></div>
                <div onClick={() => {playAudio('D')}} className='drum-pad' id='cymbal'>D<audio className="clip" id="D" src={sounds.cymbal}></audio></div>
                <div onClick={() => {playAudio('Z')}} className='drum-pad' id='floor-tom'>Z<audio className="clip" id="Z" src={sounds.floorTom}></audio></div>
                <div onClick={() => {playAudio('X')}} className='drum-pad' id='mid-tom'>X<audio className="clip" id="X" src={sounds.midTom}></audio></div>
                <div onClick={() => {playAudio('C')}} className='drum-pad' id='high-tom'>C<audio className="clip" id="C" src={sounds.highTom}></audio></div>
            </div>
            <div id='display' className="col-sm-4">{displayText}</div>
        </div>
        </div>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))