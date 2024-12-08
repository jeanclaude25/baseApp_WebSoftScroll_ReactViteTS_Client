import { Instances, Instance } from "@react-three/drei";

export default function ObjectInstance ({ Positions = [], object, Scales = [], Rotations = [], ...props }){
    const Pos = Positions
    const Ob = object
    const Scal = Scales
    const array = !Pos.length?Rotations:Pos
    const Rota = Rotations
    const {position, rotation} = props
    
    /* const geometry = new THREE.BufferGeometry().setFromPoints( points ); */
    return (
      <Instances range={array.length} material={Ob.material} geometry={Ob.geometry}>
        <group position={position} rotation={rotation}>
          {
              array.map((point, i) => (
                <Instance key={i} 
                position={Pos[i]?[point.x, point.y, point.z]:[0,0,0]}
                scale={Scal[i]?[Scal[i][0], Scal[i][1],Scal[i][2]]:[1,1,1]}
                rotation={Rota[i]?[Rota[i][0], Rota[i][1],Rota[i][2]]:[0,0,0]}/>
              ))
        }
        </group>
      </Instances>
    )
  }