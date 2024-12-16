uniform float u_time;

varying vec2 v_uv;

// render solid red
void main() {
    gl_FragColor = vec4(0.392, 0.584, 0.929, 1.0);
}

// render a gradient of black to white
// void main() {
//     gl_FragColor = vec4(vec3(v_uv.x), 1.0);
// }

// flip the gradient
// void main() {
//     gl_FragColor = vec4(vec3(1.0 - v_uv.x), 1.0);
// }

// render a colorful gradient
// void main() {
//     gl_FragColor = vec4(v_uv, 0.0, 1.0);
// }