import {Calculator} from './calculator';

class Application {
    constructor() {
        const calculator = new Calculator();
        const result = calculator.add(1, 1);
        
        console.log(result);
    }
}

const app = new Application();