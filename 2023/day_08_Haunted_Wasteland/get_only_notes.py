# Program to read single line in a file using readline() function
file = open("input.txt", "r")

number_line = 0

while True:
	content=file.readline()
	if not content:
		break
    
    #number_line = number_line + 1
	print(content[0:3])

print(number_line)

file.close()