function  orderDes (arr) {
    if (arr.length <= 0) {
      return arr;
    }
  
    const pivot = arr[0];
    const left = [];
    const right = [];
  
    for (let i = 1; i < arr.length; i++) {
      if (parseFloat(arr[i].peso) > parseFloat(pivot.peso)) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  
    return [...orderDes(left), pivot, ...orderDes(right)];
  }
 export default orderDes ; 
