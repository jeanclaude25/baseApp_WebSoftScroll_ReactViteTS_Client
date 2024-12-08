export const WebGLLights = () => {

    return(

        <>
        <ambientLight intensity={2}/>
        <directionalLight position={[10,5,0]} intensity={5} color={"#ffddee"}/>
     <directionalLight position={[-10,5,0]} intensity={2} color={"#ddddff"}/>
    </>
    )
}