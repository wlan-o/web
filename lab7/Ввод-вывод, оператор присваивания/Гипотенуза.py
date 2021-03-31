def gipotenuza(a, b):
    return pow((pow(a, 2)+pow(b, 2)), 1/2)

def main():
    try:
        a = int(input())
        b = int(input())
        print(gipotenuza(a,b))
    except:
        print('Ошибка')

main()
