// document.addEventListener("DOMContentLoaded", function(){
  
// });

document.getElementById('input_url').addEventListener('click',function(e){
  document.getElementById('input_label').classList.add('active')
});
document.getElementById('input_url').addEventListener('focusout',function(e){
  document.getElementById('input_label').classList.remove('active')
});

// document.addEventListener('click',function(e){
//   document.getElementById('input_label').classList.remove('active')
// })