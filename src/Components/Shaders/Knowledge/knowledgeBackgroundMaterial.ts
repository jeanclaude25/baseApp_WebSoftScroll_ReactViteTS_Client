import * as THREE from 'three'
import { shaderMaterial } from '@react-three/drei'
import vertexShader from './knowledgeBackgroundVert.ts'
import fragmentShader from './knowledgeBackgroundFrag.ts'




export const KnowledgeBackgroundMaterial = shaderMaterial(
    {
        side: THREE.FrontSide,
        //blending: THREE.AdditiveBlending,
        transparent: true,
        uTime: 1,
        uRatio: new THREE.Vector2(1, 1),
        uTile: 20,
        uRadius: 0.1,
        uRadius2: 0.5,
        uIntensity: 0.02,
        uMouse: new THREE.Vector2()
    },
    vertexShader,
    fragmentShader
)