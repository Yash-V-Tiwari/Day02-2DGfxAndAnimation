/** CSci-4611 Example Code
 * Copyright 2023+ Regents of the University of Minnesota
 * Please do not distribute beyond the CSci-4611 course
 */

import * as gfx from 'gophergfx'


export class ExampleApp extends gfx.GfxApp
{   
    bgColor = new gfx.Color(0,0,0);
    
    mouth = gfx.Geometry2Factory.createBox(1, 0.1);

    elapsedTime = 0.0;

    // --- Create the ExampleApp class ---
    constructor()
    {
        // initialize the base class gfx.GfxApp
        super();
    }


    // --- Initialize the graphics scene ---
    createScene(): void 
    {
        this.renderer.background = this.bgColor;

        const rEye = gfx.Geometry2Factory.createBox(0.1, 0.5);
        const lEye = gfx.Geometry2Factory.createBox(0.1, 0.5);
        const nose = gfx.Geometry2Factory.createBox(0.1, 0.2);
    
        rEye.position = new gfx.Vector2(-0.5, 0.5);
        lEye.position = new gfx.Vector2(0.5, 0.5);
        this.mouth.position = new gfx.Vector2(0, -0.5);

        this.scene.add(rEye);
        this.scene.add(lEye);
        this.scene.add(nose);
        this.scene.add(this.mouth);
    }


    // --- Update is called once each frame by the main graphics loop ---
    update(deltaTime: number): void 
    {
        this.elapsedTime += deltaTime;
        this.bgColor.b += 0.01;
        this.bgColor.r += 0.001;
        this.renderer.background = this.bgColor;

        this.mouth.scale = new gfx.Vector2(1, Math.abs(Math.sin(this.elapsedTime)));

    }
}
