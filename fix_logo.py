from PIL import Image
import numpy as np

# Reload from original backup or use the already processed one
img = Image.open("public/ZICA_LIGHT_LOGO.png").convert("RGBA")
data = np.array(img)

r, g, b, a = data[:,:,0], data[:,:,1], data[:,:,2], data[:,:,3]

# The remaining jagged edges are from semi-transparent checker remnants
# Clean up: any pixel that is already mostly transparent, make fully transparent
# And any pixel that has very low alpha but some color, clean it up
mostly_transparent = a < 30
data[mostly_transparent] = [0, 0, 0, 0]

# Also smooth the edges: pixels with alpha between 30-180 that are gray-ish
# are likely edge artifacts from the checker removal - soften them
edge_pixels = (a >= 30) & (a < 180)
gray_edge = edge_pixels & (np.abs(r.astype(int) - g.astype(int)) < 20) & (np.abs(g.astype(int) - b.astype(int)) < 20) & (r > 160)
data[gray_edge] = [0, 0, 0, 0]

result = Image.fromarray(data)
result.save("public/ZICA_LIGHT_LOGO.png")
print("Done! Edges cleaned up.")
