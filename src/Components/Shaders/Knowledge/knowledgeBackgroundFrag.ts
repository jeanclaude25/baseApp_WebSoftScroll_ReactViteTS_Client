export default /* glsl */`
precision lowp float;


uniform float uTime;
uniform vec2 uRatio;
uniform vec2 uMouse;
uniform float uTile;
uniform float uRadius;
uniform float uRadius2;
uniform float uIntensity;

varying vec2 vUv;

vec2 rotateUV(vec2 uv, float angle) {
    float rad = radians(angle);
    float cosA = cos(rad);
    float sinA = sin(rad);
    mat2 rotationMatrix = mat2(cosA, -sinA, sinA, cosA);
    return rotationMatrix * uv;
}

float circle(vec2 _st, float _radius){
    vec2 dist = _st-vec2(0.5);
	return 1.-smoothstep(_radius-(_radius*0.01),
                         _radius+(_radius*0.01),
                         dot(dist,dist)*4.0);
}

float middlePart(vec2 _st){
    vec2 _uv1 = rotateUV(_st, -3.0);
    float s = 1.-smoothstep(0.719, 0.72, _uv1.x);

    vec2 _uv2 = rotateUV(_st, 3.0);
    float d = smoothstep(0.319, 0.32, _uv2.x);
    return d*s;
}


void main()
{

    vec2 uv = vUv;
    vec2 uvCircle = uv * uRatio;

    vec3 col = vec3(1.0, 1., 1.) ;
    col *= vec3(1.-circle(uvCircle , uRadius2) * 1.) ;

    vec2 uvPattern = mod(vec2(vUv * uRatio * uTile), 1.0);
    vec2 uvPattern2 = mod(vec2(vUv * uRatio * uTile * 0.5), 1.0);
    uvPattern = mix(uvPattern,uvPattern2,middlePart(uv));

    col *= vec3(1.-circle(uvPattern, uRadius) * uIntensity) ;
    col *= vec3(1.-circle(uvPattern, uRadius/8.) * uIntensity) ;


    gl_FragColor = vec4(col, 1.0);
}
`