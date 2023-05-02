import math
import os
import secrets
import string

# cwd = os.getcwd()

# print('Current working directory: ',cwd) 

# def current_path():
#     print('Current working directory before:')
#     print(os.getcwd())
#     print()
#     print(os.getcwdb())
#     print()

# current_path()

# os.chdir('../')

# current_path()

# os.chdir('../')

# current_path()

#Directory
# directory = 'firstdir'

# #Parent directory path
# parent_dir = 'My Memory Game files'

# #Path
# path = os.path.join(parent_dir,directory)

# os.mkdir(path)
# print("Directory '% s' created" % directory)


# #Directory
# directory = 'seconddir'

# #Parent directory path
# parent_dir = 'My Memory Game files'
# #mode
# mode = 0o666


#Path
# path = os.path.join(parent_dir,directory)

# os.mkdir(path,mode)

# print("Directory '% s' created" % directory)


#leaf dir
# directory = 'newdir'

# #parent dir
# parent_dir = 'My Memory Game files/firstdir/childdir'

# #path
# path = os.path.join(parent_dir,directory)

# os.makedirs(path)
# print("Directory '% s created" % directory)

# path = '/'
# dir_list = os.listdir(path)

# print("Files and directories in '", path, "' :")
# print(dir_list)

##file name
# file = 'file1.txt'

# #file location
# location = "My Memory Game files/seconddir/"

# #path
# path = os.path.join(location,file)

# #remove the file
# os.remove(path)

# #directory name
# directory = 'seconddir'

# # #parent directory
# location = "My Memory Game files/"

#  #path
# path = os.path.join(location,directory)

#  #remove the file
# os.rmdir(path)

# print(os.name)

  
# try:
#     # If the file does not exist,
#     # then it would throw an IOError
#     filename = 'GFG.txt'
#     f = open(filename, 'a')
#     text = f.read()
#     f.close()
  
# # Control jumps directly to here if 
# # any of the above lines throws IOError.    
# except IOError:
  
#     # print(os.error) will <class 'OSError'>
#     print('Problem reading: ' + filename)
      
# # In any case, the code then continues with 
# # the line after the try/except


# fd = "GFG.txt"
  
# # popen() is similar to open()
# file = open(fd, 'w')
# file.write("Hello")
# file.close()
# file = open(fd, 'r')
# text = file.read()
# print(text)
  
# # popen() provides a pipe/gateway and accesses the file directly
# file = os.popen(fd, 'w')
# file.write("Hello")
# # File not closed, shown in next function.
# os.close(fd=1)

# os.rename(fd,'New.txt')

# os.remove('New.txt')

# result = os.path.exists('Afile.txt')
# print(result)

# size = os.path.getsize('Microsoft Edge.jpg')
# print('Size of file is ',size,"bytes.")



  
# alphabet = string.ascii_letters + string.digits
# password = ''.join(secrets.choice(alphabet) for i in range(10))
  
# print(password)

# # Generate a ten-character alphanumeric password with at least one lowercase character,
# # at least one uppercase character, and at least three digits.  
# alphabet = string.ascii_letters + string.digits
# while True:
#     password = ''.join(secrets.choice(alphabet) for i in range(10))
#     if (any(c.islower() for c in password) and any(c.isupper() 
#     for c in password) and sum(c.isdigit() for c in password) >= 3):
#         print(password)
#         break

# passwd = secrets.randbelow(20)
# print(passwd)

# passwd = secrets.randbits(9)
# print(passwd)


  
# token1 = secrets.token_bytes()
# token2 = secrets.token_bytes(10)
  
# print(token1)
# print(token2)

  
# token1 = secrets.token_hex(16)
# token2 = secrets.token_hex(9)
  
# print(token1)
# print(token2)

  
# url = 'https://mydomain.com/reset=' + secrets.token_urlsafe()
# print(url)

#use at least 32 bytes of tokens to secure against a brute force attack.