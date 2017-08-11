function checkPangram(str) {

    var chars = "abcdefghijklmnopqrstuvwxyz";
    str = str.toLowerCase();
    
    for (var i = 0; i < chars.length; i++) {
        if (!str.includes(chars[i])) {
          return false;
        }
      }
      return true;
}
document.write(checkPangram("The brow quick fox jumps over the lazy dog"));