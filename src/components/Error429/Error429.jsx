import './style/Error429.css'
const Error429 = () => {
  return (
    <>
      <div className="ErrorWrapper">
       <div className="ErrorContainer">
           <h1 className="MsgRequest"> Error 429 </h1>
         <audio src="/path/to/sound.mp3" loop={true} autoPlay={true} preload="auto"></audio>
            <p className="Msg">Hay muchas peticiones espere....</p>
          <img className = "DifficultiesMsg" src="https://pbs.twimg.com/media/As0rQOSCMAEhDo1.jpg"/> 
        </div>
    </div>
    </>
  )
}

export default Error429
