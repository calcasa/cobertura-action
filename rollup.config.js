import commonjs from '@rollup/plugin-commonjs'
	import json from '@rollup/plugin-json'
	import nodeResolve from '@rollup/plugin-node-resolve'
	import path from 'path'
	
	const config = {
	  input: 'index.js',
	  output: {
	    esModule: true,
	    file: 'dist/index.js',
	    format: 'es',
	    sourcemap: true
	  },
	  plugins: [
	    nodeResolve({ preferBuiltins: true }),
	    commonjs({ ignoreTryCatch: false }),
	    json()
	  ]
	}
	
	export default config