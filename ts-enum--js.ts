enum Color {
  Red = 1,
  Green,
  Blue,
}
let a: Color = Color.Green;

var Color;
(function (Color) {
  Color[(Color["Red"] = 1)] = "Red";
  Color[(Color["Green"] = 2)] = "Green";
  Color[(Color["Blue"] = 3)] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
