import React, { useEffect, useRef, useState } from "react";
import { Text } from "@react-three/drei";
import { gsap } from 'gsap';
import { useCallback } from 'react';


export const TextTioms = (props) => {

  //pos
  const position = props.miniPosition?[0,props.miniPosition,0]:[0,0,0];
  //First anim
  const group = useRef();

  const accL = useRef();
  const accR = useRef();
  const tiomsTextRef = useRef(new Array());
  const [tiomsArray] = useState(['t','i','o','m','s','.']);
  const charPos1 = [-0.55, -0.42, -0.29, -0.13, 0.11, 0.32, 0.45, 0.55];
  const charPos2 = [-1.2, -1, -0.48, -0.17, 0.25, 0.62, 1.08, 1.2];

  const imeTextRef = useRef();
  const isTextRef = useRef();
  const onTextRef = useRef();
  const myTextRef = useRef();
  const sideTextRef = useRef();


  useEffect(()=>{
    textFunc()
  },[])

  useEffect(()=>{
    textFunc()
  },[props.togglePosition])

    
    const textFunc = useCallback(() => {
                accL.current.visible = true
                accR.current.visible = true
                
                gsap.to(accL.current.position, { duration: 0.5, x: props.togglePosition?charPos1[0]:charPos2[0], ease:"power2.out"});
                gsap.to(accR.current.position, { duration: 0.5, x: props.togglePosition?charPos1[7]:charPos2[7], ease:"power2.out" });

                tiomsArray.map((val, index)=>{
                      tiomsTextRef.current[index].visible = true;
                      gsap.to(tiomsTextRef.current[index], { duration: 1, fillOpacity: 1, ease:"power2.out" });
                      gsap.to(tiomsTextRef.current[index].position, { duration: 0.5, x: props.togglePosition?charPos1[index+1]:charPos2[index+1], ease:"power2.out" });
                })
                // Other texts
                //Visibility toggle
                imeTextRef.current.visible = props.togglePosition?false:true;
                isTextRef.current.visible = props.togglePosition?false:true;
                onTextRef.current.visible = props.togglePosition?false:true;
                myTextRef.current.visible = props.togglePosition?false:true;
                sideTextRef.current.visible = props.togglePosition?false:true;

                gsap.to(imeTextRef.current.position,{ duration: 0.5, x: props.togglePosition?charPos1[1]+0.25:charPos2[1]+0.25, ease:"power2.out" })
                gsap.to(isTextRef.current.position,{ duration: 0.5, x: props.togglePosition?charPos1[2]+0.12:charPos2[2]+0.12, ease:"power2.out" })
                gsap.to(onTextRef.current.position,{ duration: 0.5, x: props.togglePosition?charPos1[3]+0.17:charPos2[3]+0.17, ease:"power2.out" })
                gsap.to(myTextRef.current.position,{ duration: 0.5, x: props.togglePosition?charPos1[4]+0.21:charPos2[4]+0.21, ease:"power2.out" })
                gsap.to(sideTextRef.current.position,{ duration: 0.5, x: props.togglePosition?charPos1[5]+0.22:charPos2[5]+0.22, ease:"power2.out" })

              })

     useEffect(()=>{
        if(props.animation2){
        gsap.to(accL.current, { duration: 0.5, fillOpacity: 0, ease:"power2.out"});
        gsap.to(accR.current, { duration: 0.5, fillOpacity: 0, ease:"power2.out" });
        }
     },[props.animation2])


  return (

          <group ref={group} {...props} dispose={null}>
            
            <group name="Scene" position={position}>

              <Text ref={accL} color={"black"} fontSize={"0.3"} position={[0,0,0]} visible={false}>[ </Text>
              
              {/* tioms  */}
              {tiomsArray.map((char, index)=>{
                return(
                      <Text key={index} ref={(elem)=> tiomsTextRef.current.push(elem)} color={"black"} fillOpacity={0} fontSize={"0.3"} visible={false} font='./polices/peace_sans/Peace_Sans.woff'>{char}</Text>
                      )
              })}

              <Text ref={imeTextRef} textAlign='left' color={"black"} fontSize={"0.2"} position={[0, -0.05, 0]} visible={false}>ime, </Text>
              <Text ref={isTextRef} textAlign='left' color={"black"} fontSize={"0.2"} position={[0, -0.05, 0]} visible={false}>s, </Text>
              <Text ref={onTextRef} textAlign='left' color={"black"} fontSize={"0.2"} position={[0, -0.05, 0]} visible={false}>n, </Text>
              <Text ref={myTextRef} textAlign='left' color={"black"} fontSize={"0.2"} position={[0, -0.05, 0]} visible={false}>y, </Text>
              <Text ref={sideTextRef} textAlign='left' color={"black"} fontSize={"0.2"} position={[0, -0.05, 0]} visible={false}>ide </Text>

              <Text ref={accR} color={"black"} fontSize={"0.3"} position={[0, 0, 0]} visible={false}> ]</Text>
              </group>
            
          </group>
          
          
        );
}