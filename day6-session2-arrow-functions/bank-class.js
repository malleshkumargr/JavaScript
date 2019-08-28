class Customer {
    constructor(customer) {
        this.accNo = customer.accNo;
        this.name = customer.name;
        this.balance = customer.balance;
    }
    getDetails() {
        return `${this.accNo} - ${this.balance}`;
    }
    transaction(amount,code) {
        if(code) {
            this.balance += amount;
        } else {
            if(this.balance < amount) {
                return 'The balance is insufficient';
            } else {
                this.balance -= amount;
            }
        }
        return `${this.accNo} - ${this.balance}`;
    }
}

const c1 = new Customer({accNo: 'SBI123', name: 'arjun', balance: 1500});

console.log(c1.getDetails());
console.log(c1.transaction(1000,1));
console.log(c1.transaction(2000, 0));
console.log(c1.transaction(1000,0));
console.log(c1 instanceof Customer)