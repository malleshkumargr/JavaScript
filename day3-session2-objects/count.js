const c1 = {
    count: 0,
    up: function() {
        this.count += 1
        return this.count
    },
    down: function() {
        this.count -= 1;
        return this.count
    },
    reset: function() {
        this.count = 0
        return this.count
    },
    upBy: function(num) {
        this.count += num
        return this.count
    },
    downBy: function(num) {
        this.count -= num
        return this.count
    },
    setVal: function(val) {
        this.count = val
        return this.count
    },
    nested: function() {
        function returnThis() {
            return this
        }
        return(returnThis())
    }
}





console.log(c1.count)
console.log(c1.up())
console.log(c1.count)
console.log(c1.reset())
console.log(c1.upBy(3))
console.log(c1.downBy(2))
console.log(c1.setVal(5))
console.log(c1.nested())




c1.down()
c1.reset()
c1.upBy(3)
c1.downBy(2)
c1.setVal(5)