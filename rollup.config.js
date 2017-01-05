import resolve from 'rollup-plugin-node-resolve';
import buble from 'rollup-plugin-buble';
import commonjs from 'rollup-plugin-commonjs';

export default {
    entry: 'roadtrip.js',
    dest: 'roadtrip.bundle.js',
    format: 'iife',
    plugins: [
        buble({
            objectAssign: 'Object.assign'
        }),
        resolve({
            jsnext: true,
        }),
        commonjs(),
    ],
};
