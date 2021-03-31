left = int(input())
right = int(input())

for x in range(left,right+1):
    sqrt=pow(x,1/2)
    if sqrt==round(sqrt):
        print(x)