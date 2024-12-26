import type { Shader } from '../';
import baseVertex from '../base-vertex.glsl';
import proceduralGeometry1 from './procedural-geometry-1/fragment.glsl';
import pixelart from './procedural-pixelart/fragment.glsl';
import horizontalSinWave from './horizontal-sinwave/fragment.glsl';
import psychedellicVisuals1 from './psychedellic-visual-experiment-1/fragment.glsl';
import textures1 from './texture-techniques-1/fragment.glsl';
import theVoid from './the-void/fragment.glsl';
import fbmFractals from './fbm-fractals/fragment.glsl';
import pong from './pong/fragment.glsl';
import proceduralGeometry2 from './procedural-geometry-2/fragment.glsl';

const base: Shader = {
    fragment: ``,
    vertex: baseVertex,
    cameraType: "orthographic",
    geometry: "plane",
    controls: false,
};

export const shaders: Record<string, Shader> = {
    "procedural-equilateral-triangle-pixel-art": {
        ...base,
        fragment: pixelart,
    },
    "procedural-geometry-1": {
        ...base,
        fragment: proceduralGeometry1,
    },
    "procedural-geometry-2": {
        ...base,
        fragment: proceduralGeometry2,
    },
    "progressive-horizontal-sinwave": {
        ...base,
        fragment: horizontalSinWave,
    },
    "psychedellic-visuals-1": {
        ...base,
        fragment: psychedellicVisuals1,
    },
    "the-void": {
        ...base,
        fragment: theVoid,
    },
    "texture-techniques-1": {
        ...base,
        fragment: textures1,
        texture: './assets/images/galactic-core.webp',
    },
    "fbm-fractals": {
        ...base,
        fragment: fbmFractals,
    },
    "pong": {
        ...base,
        fragment: pong,
    }
};