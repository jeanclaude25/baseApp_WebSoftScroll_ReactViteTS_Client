import { useDepthBuffer } from '@react-three/drei'
import { SMAA, EffectComposer, Bloom, Vignette, Noise, SSAO, Depth, DepthOfField, Glitch } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'

export const WebGLEffects = () => {

    return <EffectComposer>

    <Noise
    premultiply
    opacity={1.0}
    blendFunction={ BlendFunction.SOFT_LIGHT }
    />



    
    
    
    
</EffectComposer>


}