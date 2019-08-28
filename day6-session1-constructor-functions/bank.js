//Bank Transaction
//Ceate a constructor function

const c1 = new Customer({accNo: 'SBI123', name: 'arjun', balance: 1500});

function Customer(customer) {
    console.log(this);
    this.accNo = customer.accNo;
    this.name = customer.name;
    this.balance = customer.balance;
    this.getDetails = function() {
        return `${this.accNo} - ${this.balance}`;
    }
    this.transaction = function(amount,code){
        if(code === 1) {
            this.balance = this.balance + amount;           
        } else {
            if(this.balance < amount) {
                return 'The balance is insufficient';
            } else {
                this.balance = this.balance - amount;
            }
        }
        return `${this.accNo} - ${this.balance}`;
    }
}

console.log(c1.getDetails());
console.log(c1.transaction(1000,1));
console.log(c1.transaction(2000, 0));
console.log(c1.transaction(1000,0));
console.log(c1 instanceof Customer)
