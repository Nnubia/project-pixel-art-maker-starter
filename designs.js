// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

// Your code goes here!

var colorPicker=$('#colorPicker').val();
var inputHeight=$('#inputHeight').val();
var inputWeight=$('#inputWeight').val();

$('#submit').click(makeGrid);
  
  function makeGrid(e){
  $('#pixelCanvas tr').remove();
  var inputHeight=$('#inputHeight').val();
  var inputWeight=$('#inputWeight').val();
  for (i = 0; i < inputHeight; i++) {
  $('#pixelCanvas').append('<tr></tr>');
  }
    
  for (i = 0; i < inputWeight; i++) {
  $('#pixelCanvas tr:first ').append("<td class='TableHeading'></td>");
  $('#pixelCanvas tr:not(:first)').each(function(){
  $(this).append("<td></td>");});
     }
  e.preventDefault();
}
  
$('#pixelCanvas').on('mouseenter', 'td', function(){
  var colorPicker=$('#colorPicker').val();
  $(this).css('background', colorPicker);
});
  
}
