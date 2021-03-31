num=input()
power = 0
answ = 0
for x in range(len(num)-1,-1,-1):
    if num[x] == '1':
        answ += pow(2,power)
    power += 1
print(answ)