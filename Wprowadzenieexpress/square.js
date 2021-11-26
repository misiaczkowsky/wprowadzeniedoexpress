exports.area = function() { return szerokosc * szerokosc; };
exports.perimeter = function(szerokosc) { return 4 * szerokosc; };

module.exports = {
    
    area: function(szerokosc) {
      return szerokosc **2;
    },
  
    perimeter: function(szerokosc) {
      return 4 * szerokosc;
    }
  };