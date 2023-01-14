import pandas as pd
import numpy as np

with open('tester.csv', 'r') as f:
    a = pd.read_csv(f)
print(a)