def main():
    try:
        v = int(input())
        t = int(input())
        if t < 0: 
            print(0)
        if v > 0:
            print((v*t)%109)
        elif v < 0: 
            v=-v
            print(108-((v*t)%109))
        else: print(0)
    except:
        print("Ошибка")

main()