export default /* glsl */`
precision lowp float;


//uniform float uTime;


//varying vec2 vUv;

void main()
{
    //vec2 uv = vUv -.5;
    vec3 col = vec3(1.0, 0., 0.) ;
    gl_FragColor = vec4(vec3(col), 1.0);
}
`