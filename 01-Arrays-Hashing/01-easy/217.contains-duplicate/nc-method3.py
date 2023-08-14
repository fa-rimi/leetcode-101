
# ToDo: I had to "from typing import List" -> The List type hint comes from the typing module and is used to indicate that a variable or function parameter should be a list containing elements of a specific type. For example, List[int] indicates a list of integers.

# * Leetcode will provide:
# * class Solution:
# *  def containsDuplicate(self, nums: List[int]) -> bool:

#-------------------------------------------------------------------------------------
  
# blueprint Solution -> without it "Error: name 'Solution' is not defined"
class Solution:

    # ! Leetcode will provide:
    # ! def containsDuplicate(self, nums: List[int]) -> bool:
    # * This line defines a method (function) named containsDuplicate within the Solution class. This method takes one parameter, nums, which is expected to be a list of integers (List[int]). The -> bool part indicates that the method is expected to return a boolean value (True or False).

    # for the sake of this problem define function containsDuplicate with one parameter nums so we can run and test if this code works -> by writing python3 filename in terminal
    def containsDuplicate(nums):

        # create an empty container to check and store for value(n)
        hashset = set()

        # go through arr -> for value(n) in nums
        for n in nums:
            # check if value(n) is in the hashset
            if n in hashset:
                # if it is, we found a duplicate -> output: True
                return True
            # otherwise remember we checked this number for duplicates -> add the value(n) to the hashset
            hashset.add(n)
        # and if we reached the end of the arr and no value(n) duplicates -> output: False 
        return False
    
    # Test if it works by writing python3 filename in terminal 
    test_nums1 = [1, 2, 3, 4, 1, 10]
    test_nums2 = [2, 16, 3, 5]
    test_nums3 = [2, 3, 2, 1, 8]
    test_nums4 = [7, 11, 13, 21, 28]
    test_nums5 = [7, 8, 9, 3, 6, 9]

    # Calling the containsDuplicate function that we defined earlier and passing an argument test_nums to test your function and see if it correctly detects duplicates in the list.
    print(containsDuplicate(test_nums1))
    print(containsDuplicate(test_nums2))
    print(containsDuplicate(test_nums3))
    print(containsDuplicate(test_nums4))
    print(containsDuplicate(test_nums5))

    # * General Leetcode stats: Runtime(461ms) && Memory(30.97mb)
    # * This solution using 'hashset' has optimal time complexity but you need to sacrifice space. This is because we're using 'hashset.' While hash sets provide efficient membership testing and allows us to quickly check for duplicates, they require additional space to store the unique elements.

