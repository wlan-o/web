def is_power(a):
    poww=0
    p2 = 1
    while p2<=a:
        if p2 == a:
            return True
        p2=pow(2,poww)
        poww+=1
    return False

num=int(input())
if is_power(num):
    print("YES")
else: print("NO")