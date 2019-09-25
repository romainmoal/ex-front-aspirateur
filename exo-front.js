//creation of the Aspirateur class to add all the required functionnalities later on

class Aspirateur {
  constructor(x, y, orientation) {
    this.grilleDim = [];
    this.position = [x, y, orientation];
    this.instructions = '';
  }

  // 1. function to get grid dimension
  gridDimension(xmax, ymax) {
    return this.grilleDim = [xmax, ymax]
  }

  // 2. function to execute a UNIQUE instruction
  uniqueInstruction(order) {
    switch (order) {
      // first of all for D and G since it only changes the orientation but there is no move
      case 'D':
        switch (this.position[2]) {
          case 'N':
            this.position[2] = 'E';
            break;
          case 'E':
            this.position[2] = 'S';
            break;
          case 'S':
            this.position[2] = 'W';
            break;
          case 'W':
            this.position[2] = 'N';
            break;
        }
        break;
      case 'G':
        switch (this.position[2]) {
          case 'N':
            this.position[2] = 'W';
            break;
          case 'W':
            this.position[2] = 'S';
            break;
          case 'S':
            this.position[2] = 'E';
            break;
          case 'E':
            this.position[2] = 'N';
            break;
        }
        break;

      // now case of the move on the grid
      case 'A':
        switch (this.position[2]) {
          case 'N':
            this.position[1]++;
            break;
          case 'W':
            this.position[0]--;
            break;
          case 'S':
            this.position[1]--;
            break;
          case 'E':
            this.position[0]++;
            break;
        }
        break;
    }
  }

  // 3. function to give successive instructions
  listOfOrders(stringOrder) {
    this.instructions = stringOrder
    let arrayOrders = stringOrder.split('');
    for (let i = 0; i < arrayOrders.length; i++){
      this.uniqueInstruction(arrayOrders[i])
    }
    return this.position
  }
}

//tests unitaires
var monAspi = new Aspirateur (5, 5, 'N')

monAspi.gridDimension(10,10)
monAspi.listOfOrders('DADADADAA')

console.log('Grid Dimension: ', monAspi.gridDimension)
console.log('monAspi position: ', monAspi.position)