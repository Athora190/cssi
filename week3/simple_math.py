from random import randint

#The function should take a number list, nums, as a parameter,
#and return the largest element in nums. If nums is empty,
#it should return 0
def Maximum(nums):
    max = nums[0]
    if nums == 0:
        return 0
    for x in nums:
        if x > max:
            max = x
    return max



#The function should take a number list, nums, as a parameter,
#and return the smallest element in nums. If nums is empty,
#it should return 0
def Minimum(nums):
    numbers = nums[0]
    if nums == 0:
        return 0
    for y in nums:
        if y < numbers:
            numbers = y
    return numbers

#The function should take a number list, nums, as a parameter,
#and return the distance between the largest and smallest elements
#in nums. If nums is empty, it should return 0
def Range(nums):
    return Maximum(nums) - Minimum(nums)

#The function should take a number list, nums, as a parameter,
#and return the average of the elements. If nums is empty,
#it should return 0
def Average(nums):
    sum = 0
    for z in nums:
        sum = z + sum
    return sum / len(nums)

def main():
	numbers = []

	for i in range(30):
		numbers.append(randint(1,100))

	print "The maximum value in numbers is {0}".format(Maximum(numbers))
	print "The minimum value in numbers is {0}".format(Minimum(numbers))
	print "The range of numbers is {0}".format(Range(numbers))
	print "The average of numbers is {0}".format(Average(numbers))

main()
