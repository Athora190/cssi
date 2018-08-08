# 1
def smallestNumber(num1,num2,num3):
    if num1 < num2 and num1 < num3:
        print num1
    if num2 < num1 and num1 < num3:
        print num2
    if num3 < num1 and num3 < num2:
        print num3
smallestNumber(3,65,2)

# 2 did not finish, looking at the board
def sumOfEven(n):
    sum = 0
    for x in range(n):
        sum = sum + 2 * x + 1
    return sum
print sum
sumOfEven(3)
