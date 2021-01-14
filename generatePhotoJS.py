import os
from PIL import Image

def generatePhotoJS(path):
    start = "export const photos = [\n\t"
    end = "];"
    prependPath = "/images/hobbies/"
    for filename in os.listdir(path):
        fullPath = os.path.join(path, filename)
        if fullPath.endswith("jpg") or fullPath.endswith("heic"):
            try: 
                im = Image.open(fullPath)
                width = round(im.size[0]/im.size[1],5)
                start += "	  {\n"
                start += "      src: \"" + prependPath + filename + "\",\n" 
                start += "      width: " +str(width) +",\n"
                start += "      height: 1\n\t},\n" 
            except:
                print("failed: " + fullPath)
    start += end 
    return start
    
def writeJS(text):
    f = open("photo.js", "w")
    f.write(text)
    f.close()
        
        
        


def convertHEICtoJPG(path):
    
    for filename in os.listdir(path):
        fullPath = os.path.join(path, filename)
        if fullPath.endswith("HEIC"):
            base = os.path.splitext(path)[0]
            os.rename(path, base + '.jpg')
    
#convertHEICtoJPG("D:\Works\personal_website\public\images\hobbies")
writeJS(generatePhotoJS("D:\Works\personal_website\public\images\hobbies"))
