$(document).ready(function () {
  var numArray = [];
  var string = "";
  var arr = [];
  
  $("#0").on("click", function () {
    numArray.push(0);
    string += 0;
    $("#input").html(string);
  })
  $("#1").on("click", function () {
    numArray.push(1);
    string += 1;
    $("#input").html(string);
  })
  $("#2").on("click", function () {
    numArray.push(2);
    string += 2;
    $("#input").html(string);
  })
  $("#3").on("click", function () {
    numArray.push(3);
    string += 3;
    $("#input").html(string);
  })
  $("#4").on("click", function () {
    numArray.push(4);
    string += 4;
    $("#input").html(string);
  })
  $("#5").on("click", function () {
    numArray.push(5);
    string += 5;
    $("#input").html(string);
  })
  $("#6").on("click", function () {
    numArray.push(6);
    string += 6;
    $("#input").html(string);
  })
  $("#7").on("click", function () {
    numArray.push(7);
    string += 7;
    $("#input").html(string);
  })
  $("#8").on("click", function () {
    numArray.push(8);
    string += 8;
    $("#input").html(string);
  })
  $("#9").on("click", function () {
    numArray.push(9);
    string += 9;
    $("#input").html(string);
  })
  $("#plus").on("click", function () {
    numArray.push("add");
    string += " + ";
    $("#input").html(string);
  })
  $("#minus").on("click", function () {
    numArray.push("minus");
    string += " - ";
    $("#input").html(string);
  })
  $("#mult").on("click", function () {
    numArray.push("multiply");
    string += " * ";
    $("#input").html(string);
  })
  $("#dvsn").on("click", function () {
    numArray.push("divide");
    string += " / ";
    $("#input").html(string);
  })
  $("#clear").on("click", function () {
    numArray = [];
    string = "";
    $("#input").html("");
  })
  $("#equal").on("click", function () {
    arr = string.split(" ");
    var output = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === "/") {
        output = arr[i - 1] / arr[i + 1];
        arr[i + 1] = output;
      }
      else if (arr[i] === "*") //Only does the last ones
      {
        output = arr[i - 1] * arr[i + 1];
        arr[i + 1] = output;

      }
      else if (arr[i] === "+") //idk wtf wrong BRUHHH
      {
        output = parseInt(arr[i - 1]) + parseInt(arr[i + 1]);
        arr[i + 1] = output;
      }
      else if (arr[i] === "-") {
        output = arr[i - 1] - arr[i + 1];
        arr[i + 1] = output;
      }
    }

    $("#input").html(output);
    string = "";

  })


})
