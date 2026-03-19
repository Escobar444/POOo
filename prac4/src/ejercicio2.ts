const reeadline = require('readline');

const rl = reeadline.createInterface({
  input: process.stdin,
  output: process.stdout
});

abstract class aparato {
    abstract encender(): void;  
}