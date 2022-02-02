import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$('#submission').submit(function(event) {
  event.preventDefault();
  const haiku = $('#haiku').val().split(/\n/);
  console.log(haiku); 
  $('#output').text(haiku);
});


// Syllable Counter Function
//take a sentence and return number of syllables

//if(haiku.lenght !=3){
//   return failure clause
// }

//syllableCounter(haiku[0]+""+haiku[1]+""+haiku[2]) !=17 fail

