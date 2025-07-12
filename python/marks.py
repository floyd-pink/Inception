subject=int(input("Enter the total subjects"))
total=[]
sum=0
for number in range(1,subject+1):
    mark=int(input(f"Enter the marks of {number} subject(0-100)"))
    total.append(mark)
    sum=sum+mark
avg = int(sum/subject)
if(avg>=90):
    print("Grade A")
elif(avg>=70):
    print("Grade B")
elif(avg>=50):
    print("Grade C")
elif(avg>=30):
     print("Grade D")
else:
    print("NOT GRADE")
orginal=total.copy()
total.sort()
print(f"The marks are {orginal}")
print(f"The Highest marks is {total[-1]} and the lowest marks is {total[0]}")
print(f"The highest subject index is {orginal.index(max(orginal))+1} and Lowest subject index is {orginal.index(min(orginal))+1}")
print(f"The average of marks is:{avg:.2f}")
print(f"The sum of  marks are {sum}")