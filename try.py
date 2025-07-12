
numbers=[12,23,4,454,65,23,5467,54,523,45,5467,43]
max= numbers[0]
lowest=numbers[0]
low=[]
max1=[]
for number in numbers:
    if number>max:
        max=number
for x in numbers:
    if x<lowest:
     lowest=x
for i in range(len(numbers)):
    if numbers[i]==max:
     max1.append(i)
for i in range(len(numbers)):
    if numbers[i]==lowest:
      low.append(i)
print("The max numebr is ",max,"and is found in the index",max1)
print("The lowest number is ",lowest,"and it is found in",low)
