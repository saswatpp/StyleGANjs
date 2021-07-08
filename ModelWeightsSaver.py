import tensorflow as tf
import os
import pickle
import numpy as np
import PIL.Image
import sys
import tensorflow as tf

sys.path.append('stylegan/');
import dnnlib
import dnnlib.tflib as tflib
import config
import gdown
import collections

url = 'https://drive.google.com/uc?id=1MEGjdvVpUsu1jB4zrXZN7Y4kBBOzizDQ'
output = 'ffhq1024.pkl'
gdown.download(url, output, quiet=False) 

tflib.init_tf()
f = open('ffhq1024.pkl','rb')
_G, _D, _Gs = pickle.load(f)

sess = tf.get_default_session()
all_weights = collections.OrderedDict()
with sess.as_default():
  for i, (key, weight_tensor) in enumerate(_Gs.vars.items()):
    all_weights[key] = weight_tensor.eval()
    print('.',end='')
print(' ({}) weights found.'.format(len(all_weights)))

pickle.dump(all_weights,open('gs_weights.pkl','wb'))
print('Saved original styleGAN weights to disk')