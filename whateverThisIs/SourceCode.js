/*window.onload = function() {
    //Let's get to work shall we?

    const canvas = document.querySelector("#glCanvas");
    //set canvas dimensions
    canvas.width = 9 * (window.innerWidth / 10);
    canvas.height = 9 * (window.innerHeight / 10);
    //initialize the GL context
    const gl = canvas.getContext("webgl");

    //Only continue is WebGL is available and working
    if (!gl //or "gl===null" // ) {
        alert("Unable to initialize WebGL. Your browser or machine may not support it"); //or "throw new Error("WebGL not supported)".
    }

    //Set clear color to black, fully opaque
    gl.clearColor(0.0, 0.0, 0.0, 1.0);

    //Clear the color buffer with specified clear color

    gl.clear(gl.COLOR_BUFFER_BIT);

    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, [
        'attribute vec2 position;',
        'void main(){',
        'gl_Position = vec4(position,0.0,1.0);',
        '}'
    ].join['\n']);
    gl.compileShader(vertexShader);

    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, [
        'precision highhp float;',
        'uniform vec4 color;',
        'void main(){',
        'gl_FragColor = color;',
    ].join('\n'));
    gl.compileShader(fragmentShader);

    var program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    var vertices = new Float32Array([-0.5, -0.5,
        0.5, -0.5,
        0.0, 0.5
    ]);

    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);


    gl.useProgram(program);

    program.color = gl.getUniformLocation(program, 'color');
    gl.uniform4fv(program.color, [0, 1, 0, 1.0]);

    program.position = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(program.position)
    gl.vertexAttribPointer(program.position, 2, gl.FLOAT, false, 0, 0);

    gl.drawArrays(gl.TRIANGLES, 0, vertices.length / 2);
}*/