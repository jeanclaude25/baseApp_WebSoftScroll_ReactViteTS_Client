import { Canvas } from '@react-three/fiber'
import { StrictMode, useEffect, useState } from 'react';
import './Styles/WebGL.css';
import WebGLCanvas from './WebGLCanvas';

const AFirstPage = ({firstScroll, mini}) => {
    const [canvasHeight, setCanvasHeight] = useState("100%");
    const [canvasWidth, setCanvasWidth] = useState("100%");
    const [zIndex, setZindex] = useState("4");

    const [userCtrl, setUserCtrl] = useState(false);
    const [mouseOver, setMouseOver] = useState(false);
    const [downTime, setDownTime] = useState(null);
    const [mouseClick, setMouseClick] = useState(false);

    const [cameraZoom, setCameraZoom] = useState(1);


  useEffect(()=>{
    if(firstScroll){

    }

  },[firstScroll])

  useEffect(()=>{
    if(mini){
        setCanvasWidth("150px")
        setCanvasHeight("100px")
        setZindex("4000")
        setUserCtrl(true)
        setCameraZoom(4)
    }

  },[mini])

  const handleMouseEnter = () =>{
    if(userCtrl){
        setMouseOver(true)
    }
  }
  const handleMouseLeave = () =>{
    if(userCtrl){
        setMouseOver(false)
        setMouseClick(false)
    }
  }
  const handleMouseDown = () => {
    if(userCtrl){
      setDownTime(Date.now())
    }
  }
  const handleMouseUp = () => {
    if(userCtrl && Date.now() - downTime<200){
      setMouseClick(true)
    }
  }

    return (
                <>
                <StrictMode>
                    <Canvas
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onMouseDown={handleMouseDown}
                        onMouseUp={handleMouseUp}
                        className='canvas'
                        style={{width:canvasWidth, height:canvasHeight, zIndex:zIndex}}
                        gl={{
                            powerPreference: "high-performance",
                            antialias: true,
                            //alpha: true,
                            //premultipliedAlpha: false,
                            }}
                        dpr={[0.5, 1.0]}
                        performance= {{ min: 0.2 }}
                        >
                        <WebGLCanvas mouseOver={mouseOver} mouseClick={mouseClick} userCtrl={userCtrl} cameraZoom={cameraZoom} mini={mini}/>
                    </Canvas>
                </StrictMode>
                </>
            );
    
  }
  
  export default AFirstPage;