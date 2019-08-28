function HashTag(str) {
    this.str = str;
    const words = this.str.split(' '); // words become private varibale which cannot be accessed outside the function
    this.generateTag = function() {
        let hashTag = '#';
        for(let i = 0; i < words.length; i++) {
            hashTag = hashTag.concat(words[i].charAt(0).toUpperCase() + words[i].substring(1).toLowerCase());
        }
        return hashTag;
    }

}
const tag1 = new HashTag('hello world');
console.log(tag1.generateTag()); // '#HelloWorld'

const t2 = new HashTag(' make in india ');
console.log(t2.generateTag());

