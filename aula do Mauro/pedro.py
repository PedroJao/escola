#(BASE MAIOR + BASE MENOR) * ALTURA/2
valor = 0
B = int(input())
T = int(input())
r = (B + T) * (70/2)
a = 160 * 70
if r > a/2:
    valor = 100
if B > T:
    print(1)
elif T > B:
    print(2)
else:
    print(0)