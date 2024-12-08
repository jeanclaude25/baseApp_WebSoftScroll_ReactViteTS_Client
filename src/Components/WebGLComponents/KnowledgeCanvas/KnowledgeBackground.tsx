import { Vector2 } from 'three';
import { extend, useFrame } from '@react-three/fiber';
import { Plane } from '@react-three/drei';
import { KnowledgeBackgroundMaterial } from "../../Shaders/Knowledge/knowledgeBackgroundMaterial"
import { useRef } from 'react';


extend({KnowledgeBackgroundMaterial})

export const KnowledgeBackground = () => {
    const backgroundRef = useRef()

    useFrame((state)=>{
        if(backgroundRef.current){
            backgroundRef.current.uniforms.uTime.value = state.clock.getElapsedTime();
            backgroundRef.current.uniforms.uMouse.value = new Vector2(state.mouse.x, state.mouse.y);
            backgroundRef.current.uniforms.uRatio.value = new Vector2(state.size.width/state.size.height, 1);

            }
    })

    return(
        <>
        {/* <color args={ ['#259900'] } attach="background" /> */}
                        <Plane>
                          <knowledgeBackgroundMaterial ref={backgroundRef} />
                        </Plane>
        </>
    )
}