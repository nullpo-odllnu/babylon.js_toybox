const canvas = document.getElementById("render");
const engine = new BABYLON.Engine(canvas, true);

function createScene()
{
    const scene = new BABYLON.Scene(engine);

    const camera = new BABYLON.ArcRotateCamera(
        "camera", 
        -Math.PI / 2, Math.PI / 2.5, 15,
        new BABYLON.Vector3(0, 0, 0), scene);
    camera.attachControl(canvas, true);

    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1.0, 1.0, 0.0), scene);

    BABYLON.SceneLoader.ImportMeshAsync(
        "", 
        "https://assets.babylonjs.com/meshes/", 
        "both_houses_scene.babylon")
        .then((result) => {
            result.meshes[1].position.x = -3;
            const mesh = scene.getMeshByName("detached_house");
            mesh.rotation.y = Math.PI / 2.0;
        });

    return scene;
}

const scene = createScene();
engine.runRenderLoop(() => {
    scene.render();
});

window.addEventListener("resize", function() {
    engine.resize();
});
