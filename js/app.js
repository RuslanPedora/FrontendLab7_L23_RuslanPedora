'use strict';

import renderer from './render-module'; 

let app;
//--------------------------------------------------------------------------------
class App {
    constructor() {
    }
    render() {
        renderer.render();
    }
}
//--------------------------------------------------------------------------------
window.onload = () => {
    app = new App();
    app.render();
}