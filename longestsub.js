   
let arr =[2,6,1,9,4,5,3]
let endIndx = 0, maxLength = 0, indx = 1,tempMax = 0;
while (indx < arr.length) {
  if (arr[indx] > arr[indx - 1])
    tempMax++;
  else {
    if (maxLength <= tempMax) {
      maxLength = tempMax+1
      endIndx = indx
      tempMax=0;
    }
  }
  ++indx
}
if (maxLength < tempMax) {
      maxLength = tempMax
      endIndx = indx
    }
console.log("Sub array of consecutive numbers: ", arr.slice(endIndx-maxLength,endIndx))
console.log("Output :",maxLength)

