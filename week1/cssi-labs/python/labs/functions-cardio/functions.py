# exercise 3
'''def sum_to_n(num):
    sum = 0
    for x in range(1,num):
        sum = sum + x

    print sum

sum_to_n(10)
'''
# exercise 5
'''import random
random.randint(1,6)

def roll_dice(num):
    sum = 0

    for x in range(num):
        print "roll",x
        dice1 = random.randint(1,6)
        dice2 = random.randint(1,6)
        print " dice1 ", dice1
        print " dice2 ", dice2
        sum = sum + dice1 + dice2
        print " sum ", sum
roll_dice(1)
'''
#exercise 4
import random
random.randint(10,40)

def is_triangle(s1,s2,s3):
    s1 = s1 + s2 > s3
    s2 = s1 + s3 > s2
    s3 = s2 +s3 > s1
    if s1 and s2 and s3 :
        print 'True'
    else:
        print 'False'
is_triangle(14,20,50)
