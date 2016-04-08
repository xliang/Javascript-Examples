
var Fenton = (function () {
    function Customer(name) {
        this.name = name;
    }
    Customer.prototype = {
        constructor: Customer,
        greet: function () {
            return this.name + ' says hi!';
        }
    };
    function VipCustomer(name, discountPercentage) {
        Customer.call(this, name);
        this.discountPercentage = discountPercentage;
    }
    VipCustomer.prototype = new Customer();
    VipCustomer.prototype.constructor = VipCustomer;
   
    return {
        Customer: Customer,
        VipCustomer: VipCustomer
    };

}());

var steve = new Fenton.Customer('Steve');
var todd = new Fenton.VipCustomer('Todd', 10);

///// 

var AiPlayer = function() {
  var moveSign;

  function setMoveSign(moveSign) {
    ...
  }

  function getMoveSign() {
    ...
  }

  function makeMove(board) {
    ...
  }

  function minimax(board, myTurn, depth) {
    ...
  }

  function scoreBoard(board) {
    ...
  }

  // revealing ... 

  return {

    setMoveSign: setMoveSign,
    getMoveSign: getMoveSign,
    makeMove: makeMove
  }
};

// Revealing Prototype Pattern

function AiPlayer(moveSignature) {
  this.moveSignature = moveSignature;
}

AiPlayer.prototype = {
  getMove: function(board) {
    ...
  },
  minimax: function(board, myTurn, depth) {
    ...
  },
  scoreBoard: function(board) {
    ...
  }
}

/*

Revealing Prototype Pattern better use memory

Using the revealing prototype pattern, our constructor creates objects efficiently 
and hides private information. New AiPlayer objects only store their own moveSignature and a reference to the prototype, and the prototype only exposes a makeMove() function.

*/
