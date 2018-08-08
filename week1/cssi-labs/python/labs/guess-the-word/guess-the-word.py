

def Word(word):
    temp = []
    for x in word:
        temp.append('_')
    return temp
def printBoard(board,guesslist):
    print ' '.join(board)
    print 'guesses: ' + ' '.join(guesslist)

def Addvalue(board,word,guess):
    for y in range(len(word)):
        if guess == word[y]:
            board[y] = guess
def Game():
    chosenWord = 'hamburger'.lower()
    Guesses = []
    board = Word(chosenWord.lower())

    while '_' in board:
        printBoard(board,Guesses)
        guess = raw_input("Enter a letter: ").lower()

        if len(guess) == 1:
            if guess in chosenWord:
                Addvalue(board,chosenWord,guess)

            Guesses.append(guess)
    else:
        print "".join(board)
        print "Congrats You Win"

Game()
