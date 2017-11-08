import $ from 'jquery';

var equation = "";
var curr = "0";
var signs = ["+", "-", "×", "÷"];
var isResult = false;

$(document).ready(function() {
  $("#equal").on("click", function() {
    equation += curr;
    curr = calculate(equation);
    equation = "";
    isResult = true;
    display();
  }); 

  $("#multiple").on("click", function() {
    updateEquation("×");
  }); 

  $("#divide").on("click", function() {
    updateEquation("÷");
  }); 

  $("#minus").on("click", function() {
    updateEquation("-");
  }); 

  $("#plus").on("click", function() {
    updateEquation("+");
  });

  $("#backout").on("click", function() {
    if (!isResult) {
      curr = curr.slice(0, curr.length - 1);
      curr = setZero(curr);
      display();
    }
  });

  $("#C").on("click", function() {
    curr = "0";
    equation = "";
    display();
  });

  $("#CE").on("click", function() {
    curr = "0";
    display();
  });

  $("#negative").on("click", function() {
    if (curr.charAt(0) === "-") {
      curr = curr.slice(1);
    } else if (curr !== "0" && curr !== "") {
      curr = "-" + curr;
    }
    display();
  });
  
  $("#dot").on("click", function() {
    if (isResult) {
      curr = "0.";
    } else {
      curr = setZero(curr);
      if (curr.indexOf(".") === -1) curr += ".";
    }
    typeNumber();
  });
  
  $("#zero").on("click", function() {
    isResult ? curr = "0" : curr = setBlank(curr) + "0";
    typeNumber();
  });
  
  $("#one").on("click", function() {
    isResult ? curr = "1" : curr = setBlank(curr) + "1";
    typeNumber();
  });
  
  $("#two").on("click", function() {
    isResult ? curr = "2" : curr = setBlank(curr) + "2";
    typeNumber();
  });
  
  $("#three").on("click", function() {
    isResult ? curr = "3" : curr = setBlank(curr) + "3";
    typeNumber();
  });
  
  $("#four").on("click", function() {
    isResult ? curr = "4" : curr = setBlank(curr) + "4";
    typeNumber();
  });
  
  $("#five").on("click", function() {
    isResult ? curr = "5" : curr = setBlank(curr) + "5";
    typeNumber();
  });
  
  $("#six").on("click", function() {
    isResult ? curr = "6" : curr = setBlank(curr) + "6";
    typeNumber();
  });
  
  $("#seven").on("click", function() {
    isResult ? curr = "7" : curr = setBlank(curr) + "7";
    typeNumber();
  });
  
  $("#eight").on("click", function() {
    isResult ? curr = "8" : curr = setBlank(curr) + "8";
    typeNumber();
  });
  
  $("#nine").on("click", function() {
    isResult ? curr = "9" : curr = setBlank(curr) + "9";
    typeNumber();
  });
});

function setBlank(curr) {
  return curr === "0" || signs.includes(curr) ? "" : curr;
}

function setZero(curr) {
  return curr === "" || signs.includes(curr) ? "0" : curr;
}

function calculate(equation) {
  var symbols = equation.split(/\s/g);
  var stack = [];
  var sign = "+";
  for (var i = 0; i < symbols.length; i++) {
    var num = 0;
    if (symbols[i].match(/[0-9.]/g)) {
      num = parseFloat(symbols[i]);
      if (sign === '+') {
        stack.push(num);
      } else if (sign === "-") {
        stack.push(-num);
      } else if (sign === "÷") {
        stack.push(stack.pop() / num);
      } else if (sign === '×') {
        stack.push(stack.pop() * num);
      }
    } else {
      sign = symbols[i];
    }
  }
  var res = 0;
  while (typeof stack[0] !== 'undefined') {
    res += stack.pop();
  }
  return res.toString();
}

function updateEquation(sign) {
  if (signs.includes(curr)) {
    curr = sign;
    equation = equation.slice(0, equation.length - 2) + sign + " ";
  } else {
    equation += curr.charAt(curr.length - 1) === "." ? curr.slice(0, curr.length - 1) + " " : curr + " ";
    curr = sign;
    equation += curr + " ";
  }
  isResult = false;
  display();
}

function display() {
  var content = signs.includes(curr) ? calculate(equation) : curr;
  if (content.length > 12) {
    content = parseFloat(content).toPrecision(12);
    if (content.length > 17) {
      $(".h1-cal").text(content.slice(0, 17));
    } else {
      $(".h1-cal").text(content);
    }
  } else {
    $(".h1-cal").text(content);
  }
  $(".span-cal").text(equation);
}

function typeNumber() {
  isResult = false;
  display();
} 