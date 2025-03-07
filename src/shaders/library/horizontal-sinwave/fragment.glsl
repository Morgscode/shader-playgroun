varying vec2 v_uv;

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mousepos;

void main() 
{  
    gl_FragColor = vec4(
        v_uv.x, 
        smoothstep(0.0, 0.1, sin(v_uv.y * u_time * 130.0)),
        v_uv.y,
        1.0
    );
}