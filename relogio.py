h = int(input())
m = int(input())
s = int(input())
t = int(input())
s += t
if s > 60:
    while s >= 60:
        s -= 60
        if h == 24:
            h = 0
            m = 0
            s = 0
        if m == 60:
            h += 1
            m = 0
            s = 0
        if s == 60:
            m += 1
            s = 0
        else:
            s = s
else:
    if s >= 60:
        m += 1
        s = 0
    if m >= 60:
        h += 1
        m = 0
        s = 0
    if h > 23:
        h = 0
        m = 0
        s = 0
print(h)
print(m)
print(s)