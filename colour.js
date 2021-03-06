var colours = {
    black :   "\033[30;1m",
    red :     "\033[31;1m",
    green :   "\033[32;1m",
    yellow :  "\033[33;1m",
    blue :    "\033[34;1m",
    magenta : "\033[35;1m",
    cyan :    "\033[36;1m",
    white :   "\033[37;1m",
    std :   "\033[39;1m",
    bold : "\033[1m",
    "/" : "\033[0m" //RESET
};

var parse = function (txt) {
  Object.keys(colours).some(function (colour) {
    var pattern = RegExp("<" + colour + ">", "g");
    txt = txt.replace(pattern, function (match, index) { return colours[colour]; });
  });
  return txt;
};

var out = (function colour(){
  var api = { log: { }, text : {}, parse : parse }
    Object.keys(colours).some(function (colour) {
      api.text[colour] = function (text) {
        return colours[colour] + text + colours["/"];
      };
      api.log[colour] = function (text) {
          var args = Array.prototype.slice.call(arguments, 0), i = 0, l = args.length;
          while(i< l){
              console.log(api.text[colour](args[i++]));
          }
          return api.log;
      };
    });
    api.log.parse = function(text){
      console.log(parse(text));
    };
    return api;
})();

module.exports = out;
