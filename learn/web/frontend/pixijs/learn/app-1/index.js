// import  * as PIXI from  "./pixi.js"


// let hello  = () => {
    // "use strict";

    
    // var canvas = document.getElementById("canv-1");
    // const app = new PIXI.Application({
    //     // view:canvas,
    //     width: window.innerWidth,
    //     height: window.innerHeight
    // });
    // document.body.appendChild(app.view);



    var canvas = document.getElementById("canv-1");

    // document.body.appendChild(app.view);
    /*
    PIXI.Application: This is the main class that i 
    use to create a new PIXI application. It is 
    responsible for creating the renderer and the root 
    container, and it also provides a convenient way to 
    start and stop the rendering loop.

    This is the pixi application helper class.
    This helper class creting different classes and objects.
    pixijs work well with 2d canvas and 2D webGL

    pixi team is mostly focused on webGL, but they still
    support canvas render.default render is webGL

    Stage: This is the root container of your PIXI application.
    You can add all your sprites and other display objects 
    to the stage, and they will be rendered in the order 
    that they were added


    Renderer: 
    */
    const app = new PIXI.Application({
        view:canvas,
        width: window.innerWidth,
        height: window.innerHeight
    });
    /*

    Texture: This is an object that represents an image or a 
    part of an image that can be used to create sprites. 
    You can load textures from image files or create them 
    dynamically using the PIXI.Texture.from method.
    */
    const texture = PIXI.Texture.from("sprite.png");
    /*
    sprite means images(img)

    Sprite: This is a display object that represents an 
    image or a part of an image. You can create sprites 
    from textures using the PIXI.Sprite.from method, 
    and you can add them to the stage or to other display 
    objects.
    */

    const img = new PIXI.Sprite(texture);
    img.x = app.renderer.width/2;
    img.y = app.renderer.height/2;
    img.anchor.x = 0.5;
    img.anchor.y = 0.5;
    app.stage.addChild(img);
    /*
    // ticker or render loop is used for animation and move things around.

    Ticker: This is an object that provides a convenient way to update 
    your game or application at a fixed rate. You can use 
    the ticker to run a function every frame, or to run a 
    function at a fixed interval.
    */

    app.ticker.add(animate);
        function animate(){
        img.rotation += 0.1;
    }

// }
// hello()
