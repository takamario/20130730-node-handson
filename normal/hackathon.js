exports.name = "Yaro Wakuten";
exports.say = function() {
  console.log("Wakuten!");
};
exports.taro = {
    name: "Taro Wakuten"
  , say: function() {
    console.log("Taro!");
  }
}

// this is error
exports = {
    name: "Yaro Wakuten"
  , say: function() {
      console.log("Taro!");
  }
}
