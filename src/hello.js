export default class Hello {
    constructor(message) {
        this.message = message;
    }

    hello() {
        alert("Hello, " + this.message);
    }
}
