// Question - WAP which enter sales made by any salesman than calculate and print the commision, according
// 				to following rules - 
// 				Sale                      Commission
// 				upto 25000                5% of sales
// 				25001 - 50000             7% of sales
// 				50001 - 75000             8% of sales
// 				75001 +                   10% of sales
           
let sales = 60000;

let commission;
if (sales <= 25000) {
    commission = sales * 0.05; 
} else if (sales <= 50000) {
    commission = sales * 0.07;
} else if (sales <= 75000) {
    commission = sales * 0.08; 
} else {
    commission = sales * 0.10; 
}
console.log("Commission:", commission);