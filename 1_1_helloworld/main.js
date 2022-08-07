console.log('hello world')

const canvas = document.getElementById("render");
const engine = new BABYLON.Engine(canvas, true);

function createScene()
{
    const scene = new BABYLON.Scene(engine);

    const camera = new BABYLON.ArcRotateCamera(
        "camera", 
        -Math.PI / 2, Math.PI / 2.5, 3, 
        new BABYLON.Vector3(0, 0, 0), scene);
    camera.attachControl(canvas, true);

    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0.0, 1.0, 0.0), scene);

    const box = BABYLON.MeshBuilder.CreateBox("box", {size : 1}, scene);

    return scene;
}

const scene = createScene();

engine.runRenderLoop(() => {
    scene.render();
});
