// var tf = require('@tensorflow/tfjs');

import * as tf from '@tensorflow/tfjs'
import 'regenerator-runtime/runtime'
import * as tfvis from '@tensorflow/tfjs-vis'

let generator;
(async function(){
    generator = await tf.loadGraphModel("http://localhost:8080/gan-models/stylegan/model.json");
})();


//Code for Generating MNIST handwritten digits images
// let generatedImage;
// document.getElementById("generate-button").addEventListener("click",async function(){
//     const noise = tf.randomNormal([100]).expandDims();

//     let generatedImage = await generator.predict(noise).squeeze([0]);
//     let resizedImage = tf.image.resizeBilinear(generatedImage, [256,256]).mul(tf.scalar(127.5)).add(tf.scalar(127.5)).asType('int32');
//     const mycanvas = document.getElementById("generated-image");
//     tf.browser.toPixels(resizedImage,mycanvas).then(()=>{
//         generatedImage.dispose();
//     });
//     console.log(generatedImage.shape);
// })

document.getElementById("generate-button").addEventListener("click",async function(){
    const noise = tf.randomNormal([512]).expandDims(0);

    let generatedImage = await generator.predict(noise).squeeze([0]);
    let unnormalizedImage = tf.image.resizeBilinear(generatedImage,[512,512]).add(tf.scalar(1)).mul(tf.scalar(0.5)).clipByValue(0.0, 1.0).mul(tf.scalar(255)).asType('int32');
    const mycanvas = document.getElementById("generated-image");
    tf.browser.toPixels(unnormalizedImage,mycanvas).then(()=>{
        generatedImage.dispose();
    });
    console.log(generatedImage.shape);
})