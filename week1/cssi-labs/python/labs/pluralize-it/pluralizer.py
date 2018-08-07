num = int(raw_input("Enter a number "))
word = raw_input('Enter a word ')

if num == 0 or num > 1:
    print str(num) + word +'s'
else:
    print num,word
