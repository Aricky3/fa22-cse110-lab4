# Answers
1. line 12 will ouput 3, this is because we used the var variable and it the last val that i was 3 so it will of course print that out, a way to fix this would be to use a let function that way the i variable is "private" to that block
2. line 13 will out put 150 this is beacause the last value at array[i] was 300 and applying the discount gets you 150 which was the most reccent value that discounterPrice took, there fore will return 150.
3. line 14 will result in 150 this is mainly due to the same reason as before the last value that finalPrice took on was 150 and therefore is printing it out. 
4. The return is nothing because we need to print the result of the return to the command line
5. This would throw an error because we have now made i with the let deleration, therefore we can't access it outside of the block
6. Line 13 will produce an error because yet again we have declared discountedPrice with let and therefore can't access it outside of the blcok it was declared in.
7. Line 14 will produece 150 becasue yet again it was the last value that the variable finalPrice took on before the loop ended.
8. The function should return [50,100,150]
9. Line 13 would produce an error becasue yet again variable i is delcared with let making the scope only avliable to the block its in.
10. line 12 will get us a value of 3 beasue the length vairable was in no way manipulated and was set with const.
11. This function shoudl return [50,100,150]
12. A: student.name B: student['Grad Year'] C:student.greeting() D:student["Favorite Teacher"].name E:student.courseLoad[0]
13. A: This is taking the string '3' and concatinating it with the integer 2 and converting the result to a string type. B: This returns int 1 because it is converting strind '3' to a integer and subtracting 2 from it. C: this returns 3 becasue null is interpreted as 0. D: This returns '3null' becasue it converts into a string thus concatinating both strings. E:this returns int 4 becasue it interprets true as a int 1 and adds it to 3. F:this returns 0 becasue false is interpreted as 0 and null is 0 as well so returns 0. G: this returns '3undefinded' this is becasue it interprets undefined as a strign and concatinates it with '3'. H: we get NaN this is becasue it is trying to subtract a number that is undefined from a regular int whcih will result in NaN
14. A: this returns true because it converts '2' to an int and does comparision B: This returns false becasue the 1 in 12 is less than 2 C: this returns true it convers '2' to an int and does comparison D: this returns false becasue it doesnt convert any data types before comparison E: this returns false becasuse it converts true into 1 and 1 != 2. F: this returns true because all other numbers in Boolean function turn into 0 (there are special cases beut all other numbers for the most part turn true).
15. == converts data types before comparision and === doesnt convert before comparision.
16. 21,45,5,2
17. the result is [2,4,6] basically what the modifyArray function does it iterate thru the array and create a new array to store them and as it is iterating thru old vals it calles the doSomething() functiom and applies it to them, resulting in the elements doubling in value.
18.  check js file 
19.  ouput is 1 4 3 2 