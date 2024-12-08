import { StrictMode, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { ContactShadows, OrbitControls, PerformanceMonitor, PerspectiveCamera } from '@react-three/drei';
import { WebGLLights } from '../WebGLLights';
import { WebGLLightsKnowledge } from '../WebGLLightsKnowledge.tsx';
import '../../Styles/knowledgeCanvas.css';
import { Datalogic } from './props/Datalogix.tsx';
//import Inventar from './VirtualApp/Inventar/Inventar.js';

export const KnowledgeCanvas = () => {
    const horizontalAngle = 30 * Math.PI / 180;
    const distance = 20;
    const posUpDown = 0;
    const minQuality = 0.5;
    const maxQuality = 1.5;
    const [dpr, setDpr] = useState(1)

    return(
        <>
        <StrictMode>
            <div className='knowledgeCanvas'>
                    <Canvas
                    gl={{
                        powerPreference: "high-performance",
                        antialias: true,
                        alpha: true,
                        premultipliedAlpha: false,
                        useLegacyLights: true
                        }}
                    dpr={dpr}
                    performance= {{ min: minQuality }}
                    >
                        <PerformanceMonitor flipflops={3} onIncline={()=> setDpr(maxQuality)} onDecline={()=> setDpr(minQuality)} onFallback={() => setDpr(1)}/>
                      <WebGLLights/>
                      <WebGLLightsKnowledge/>
                      {/* <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 3.6} maxPolarAngle={Math.PI / 1.5} minAzimuthAngle={-horizontalAngle} maxAzimuthAngle={horizontalAngle}/> */}
                      <OrbitControls enableZoom={false} enablePan={false} />
                      
                      <PerspectiveCamera fov={50} makeDefault position={[0, posUpDown, distance]}/>
                      
                      
                    <Datalogic/>

                    <ContactShadows position={[0, -4, 0]} scale={25} blur={2} far={4.5}/>
                    

                    </Canvas>
            </div>
                  </StrictMode>
        </>
    )
}