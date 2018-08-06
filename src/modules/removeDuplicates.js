export const removeDuplicates = function() {
  Array.prototype.removeDuplicates = function(array, property) {
    return array.filter((obj, pos, array) => {
      return array.map(mapObj => mapObj[property]).indexOf(obj[property].trim()) === pos;
    })
  }
}();


