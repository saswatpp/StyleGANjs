# StyleGANjs

Minimal Example to generate StyleGAN HQ face images deployed using Tensorflowjs-node Framework for offline generation in the browser.

## Sample Images

![Image 1](/images/image1.png){width: 200px;}
![Image 2](/images/image2.png){width: 200px;}
![Image 3](/images/image3.png){width: 200px;}


## System Requirements
The whole setup was tested on WSL for windows, Microsoft Edge browser with `WebGL` enabled and NVIDIA Geforce 940MX GPU. The warmup took about 10-15 seconds and subsequent generation takes about 3-4 seconds. Any suggestions regarding optimising the performance is welcome. *** It wasn't tested on any other platform but chances are the browser will crash (will certainty). ***

## Installation

### 1. Downloading Pretrained Weights 
To download the pretrained weights for Pretrained StyleGAN on the dataset `Flickr-Faces-HQ` run the following python script in an environment supporting `tensorflow==1.x`
```bash
python ModelWeightsSaver.py
```

### 2. Converting model to Keras Format

To convert the downloaded weights to `tensorflow==2.x` format, run the following python script : 
```bash
python Convertor.py
```

### 3. Saving the Model as GraphModel usable in tensorflowjs-node

Run the following commant in bash :

```bash
pip install tensorflowjs #ignore if tensorflowjs preinstalled in the environment

tensorflowjs_converter \ 
	--input_format=tf_saved_model \ 
	--output_format=tfjs_graph_model \ 
	--signature_name=serving_default \ 
	--saved_model_tags=serve \
	/my_model \
	/gan-models/stylegan
```

### Installing Node App and Running 
Install the node app using the following command:

```bash
npm install
npm install --global http-server
```

### Running the server with parcel.js

```bash
parcel home.html
```

You have to separately host the model files using `http-server` using the following command in another terminal:

```bash
http-server --cors
```




