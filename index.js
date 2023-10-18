// 1-chi masala 
// function poyezd(a) {
//     if (a == 1 || a == 10) {
//         return "VIP 210K"
//     }
//     if (a >= 2 || a <= 7){
//         return "ECANOM 105K"
//     }
//     if (a == 8 || a == 9 ){
//         return "BIZNES 140K"
//     }
// }
// 2-chi masala
// let arr = [1,2,3,4,5]
// function maxAll(n) {
   
//     let sum = 0;
//     let sumMax;
//     let sumMin;
//     let max = arr[0];
//     let min = arr[0];
//     if (max < arr[1]){
//         max = arr[1];
//     }
//     if (max < arr[2]){
//         max = arr[2];
//     }
//     if (max < arr[3]){
//         max = arr[3];
//     }
//     if (max < arr[4]){
//         max = arr[4];
//     }
//     if (min > arr[1]){
//         min = arr[1];
//     }
//     if (min > arr[2]){
//         min = arr[2];
//     }
//     if (min > arr[3]){
//         min = arr[3];
//     }
//     if (min > arr[4]){
//         min = arr[4];
//     }
//     for(i = 0 ; i < arr.length; i++){
//         sum += arr[i]
//     }
//     sumMax = sum - min 
//     sumMin = sum - max 
//     console.log(sumMax);
//     console.log(sumMin);
    
// }



// juft indexdagi elementlarni kopaytmasini topish 
// function juft(n) {
  
// let arr = [25,55,12,24,36,27,19,44,67,7];
// let sum = 1;
// for ( i = 0; i < arr.length ; i+=2){
//     console.log(arr[i]);
//     sum *= arr[i]
   
// }
// console.log(sum);
// }



// 5ga karali va 7 ga karali emas
// function karr(n) {
//     let arr = [25,12,44,20,85,15]
// let i = 0;
// let sum = 0;
// while(i<arr.length){
//     if(arr[i] % 5 == 0 && arr[i] % 7 !=0){
//         sum += arr[i]
//     }
//     i++
// }
    
// }

// floyd uchburchagi
// function uchburchak(n) {
//     let n = 5;
// let sum = 0;
// for (i = 0; i<=n; i++){
//     sum+=i
    
// }
// for(g = 1; g<=sum ; g++){
//     console.log(g);
// }
    
// }
// console.log(sum);
// massivda nechta 3 ning darjasi boriligini topish
// let arr = [3, 12 ,24,9,27,55,15,81]
// let sum = 0;
// let count = 0; 
// for(i = 0 ; i< arr.length ; i++){
//    if(arr[i]%3==0){
//     for (g = 0 ; g < arr.length; g++){
//         arr[i]=arr[i]/3
//         if (arr[i] == 1){
//             count++ 
//         }
//     }
//    }
// }
// console.log(count);
