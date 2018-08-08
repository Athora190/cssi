#!/usr/bin/python
#
# Copyright 2018 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.


choice = ""

print("Welcome to the shopping list app!")

shopping_list = []

def printList():
    print '###'
    for i in shopping_list:
        print i
    print '\n'

while choice.lower() != "e":
    print("Please choose your action from the following list:")
    print("a. Add an item to the list")
    print("b. Remove an item from the list")
    print("c. Check to see if an item is on the list")
    print("d. Show all items on the list")
    print("e. exit")

    choice = raw_input("Enter your choice [a|b|c|d|e]:")

# Your code below! Handle the cases when the user chooses a, b, c, d, or e

    if choice == 'a':
        items = raw_input('Enter items ')
        for i in items.split(','):
            t = i.strip()
            if not t in shopping_list:
                shopping_list.append(t)
            else:
                print "you already have this item "


    if 'b' == choice:
        item = raw_input('Enter the name you want to remove ')
        remove = raw_input("Are you sure you what to remove this item? ")
        if remove == 'yes':
            shopping_list.remove(item)
        printList()

    if 'c' == choice:
        find = raw_input('What item are you looking for? ')
        if find in shopping_list:
            print find + ' is in your list'
            item = raw_input('Would you like to remove it? ')
            if item == 'yes':
                shopping_list.remove(find)
        else:
            item = raw_input("would you like to add it? ")
            if item == 'yes':
                shopping_list.append(find)
        




    if 'd' == choice:
        print "The items in your list are " + str(printList())
