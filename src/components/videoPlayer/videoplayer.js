import React, { useState, useRef, useEffect } from 'react';
import './styles.scss'; // Import your CSS file
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchDataFromApi } from '../../store/actions';
import fluidPlayer from 'fluid-player';

const VideoPlayer = () => {
   const dispatch=useDispatch();
  const {id}=useParams();
    const[videosData,setVideosData]=useState();
            const [videosLoading, setVideosLoading] = useState(false);
 useEffect(()=>{
  
              setVideosLoading(true);
              dispatch(fetchDataFromApi(`/movies/movie/${id}/videos`,{},(res)=>{
                setVideosData(res);
                setVideosLoading(false);
              },()=>{
                  setVideosLoading(false);
              }))
     },[id])

    useEffect(()=>{
      var myFP = fluidPlayer(
        'video-id',	{
  "layoutControls": {
    "controlBar": {
      "autoHideTimeout": 3,
      "animated": true,
      "autoHide": true
    },
    "htmlOnPauseBlock": {
      "html": null,
      "height": "",
      "width": null
    },
    "autoPlay": true,
    "mute": true,
    "allowTheatre": false,
    "playPauseAnimation": true,
    "playbackRateEnabled": true,
    "allowDownload": false,
    "playButtonShowing": true,
    "fillToContainer": false,
    "posterImage": ""
  },
  "vastOptions": {
    "adList": [],
    "adCTAText": false,
    "adCTATextPosition": ""
  }
})

    },[])

  return (
    <>
<div key='uniqueKey'>
{/* https://www.youtube.com/watch?v=${videosData?.results?.[0]?.key} */}
    <video id="video-id"  autoPlay={true} style={{width:"100vw",height:'100vh'}}>
    <source src='https://content.jwplatform.com/videos/BPr16NTj-liGZ8Ry2.mp4' type="video/mp4" />
    </video>
    </div>
    </>
  );
};

export default VideoPlayer;