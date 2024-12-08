import * as THREE from 'three'

import { shaderMaterial } from '@react-three/drei'
import vertexShader from './triangleVertex.ts'
import fragmentShader from './triangleFragment.ts'




export const TriangleMaterial = shaderMaterial(
    {
        side: THREE.FrontSide,
        blending: THREE.AdditiveBlending,
        transparent: false,
    },
    vertexShader,
    fragmentShader
)