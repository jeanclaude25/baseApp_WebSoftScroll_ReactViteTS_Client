//import { WebGLEffects } from "./WebGLComponents/WebGLEffects";
import { WebGLLights } from "./WebGLComponents/WebGLLights";
import { Suspense } from 'react'
import { PerspectiveCamera, ContactShadows } from '@react-three/drei'
import { MiniCanvas } from "./WebGLComponents/MiniCanvas";
import { FirstPageCanvas } from "./WebGLComponents/FirstPageCanvas";


const WebGLCanvas = (props) => {

        
    return (
                <>
                {/*<color args={ [ '#250000' ] } attach="background" />*/}
                
                <PerspectiveCamera makeDefault position={[0, 1, 10]} zoom={props.cameraZoom}/>
                {!props.mini && (
                                    <>
                                        <WebGLLights/>
                                        <ContactShadows opacity={1} scale={30} blur={5} far={10} resolution={64} color="#000000" />
                                    </>
                                    )}
                
                <Suspense fallback={<></>}>
                    {!props.mini?<FirstPageCanvas/>:<MiniCanvas mouseOver={props.mouseOver} mouseClick={props.mouseClick}/>}
                </Suspense>
                
                {
                    /*
                <mesh>
                    <planeGeometry/>
                    <meshStandardMaterial
                        transparent
                        opacity={1.0}
                        color={"yellow"}
                        />
                </mesh>
                */
                }
                 {
                    /*
                <WebGLEffects/>
                */
                }
                </>
            );
    
  }
  
  export default WebGLCanvas;