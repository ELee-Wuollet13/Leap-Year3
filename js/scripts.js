var leap = function(input) {
    if (input % 100 === 0 && input % 400 !== 0) {
      return false;
    } else if (input % 4 === 0) {
      return true;
    } else {
      return false;
    }
}




$(document).ready(function() {
    $('.leapForm').submit(function(event){
      var input = parseInt($("#leapInput").val());
      // alert(input);
      var result = leap(input);
      // alert(result);
      console.log(result);
      event.preventDefault();
    });
});
