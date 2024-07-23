import * as esbuild from "esbuild";

await esbuild.build({
    entryPoints: ["src/index.tsx"], // Entry point of your React app
    bundle: true,                   // Bundle all dependencies into the output file
    outfile: "dist/bundle.js",      // Output file
    minify: true,                   // Minify the output
    sourcemap: true,                // Generate source maps
    loader: {                       // Loaders for handling different file types
        ".js": "jsx",               // Load JavaScript files as JSX
        ".ts": "tsx"               // Load TypeScript files as TSX
    },
    target: ["es2015"],             // Target ECMAScript version
    jsxFactory: "React.createElement", // JSX factory function for React
    jsxFragment: "React.Fragment"  // JSX fragment for React
});
