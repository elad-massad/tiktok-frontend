import React from 'react';
import './App.css';
import Video from "./Video";
import waves from "./videos/waves.mp4";

function App() {
  return (
    <div className="App">
      <div className="app__videos">

        <Video 
        url='https://player.vimeo.com/external/188557098.sd.mp4?s=d66005678b7aca2dc9c0e7d7033f6c0deb6410a9&profile_id=164&oauth2_token_id=57447761'
        channel='emass'
        description='Best sight in the world!!'
        song="I wish it would never stop snowing"
        likes={111}
        messages={222}
        shares={333}
        />
        <Video 
        url='https://player.vimeo.com/external/271510997.sd.mp4?s=4cf911b949066ba984a9535427043fc5c8fbef22&profile_id=164&oauth2_token_id=57447761'
        channel='emass'
        description='Best sight in the world!!'
        song="I wish it would never stop snowing"
        likes={485}
        messages={138}
        shares={152}/>
      </div>

      {/* app container* */}
      {/* videos*/}
    </div>
  );
}

export default App;
