function FilterNumbers(arr) {
    this.arr = arr;
    this.count = arr.length;
    this.getEvens = function() {
        const evenNums = this.arr.filter(function(num){
            return num % 2 === 0;
        })
        return evenNums;
    }
    this.getOdds = function() {
        const oddNums = this.arr.filter(function(num){
            return num % 2 !== 0;
        })
        return oddNums;
    }
}
const filterNum = new FilterNumbers([10,15,20,25,30]);
console.log(filterNum.getEvens());
console.log(filterNum.getOdds());
console.log(filterNum.count);