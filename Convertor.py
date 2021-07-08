import tensorflow as tf
import importlib
import pickle

stylegan = importlib.import_module('StyleGANModel')
print(tf.__version__)

all_weights = pickle.load(open('gs_weights.pkl','rb'))
stylegan.copy_weights_to_keras_model(model.model_mapping, all_weights)
stylegan.copy_weights_to_keras_model(model.model_synthesis, all_weights)

model.save('my_model')