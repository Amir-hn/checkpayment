document.getElementById("input_url").addEventListener("click", function (e) {
  document.getElementById("input_label").classList.add("active");
  document.querySelector(".input-group").classList.add("active");
});
document.getElementById("input_url").addEventListener("focusout", function (e) {
  if (document.getElementById("input_url").value.trim().length == 0)
    document.getElementById("input_label").classList.remove("active");
  //console.log(document.getElementById('input_url').value);
  document.querySelector(".input-group").classList.remove("active");
});

document.getElementById("check_url").addEventListener("click", function (e) {
  document.querySelector('.message').classList.remove('show','error');
  var allowedSites = [
    "asan.shaparak.ir",
    "bpm.shaparak.ir",
    "pec.shaparak.ir",
    "pecco.shaparak.ir",
    "sep.shaparak.ir",
    "pep.shaparak.ir",
    "pna.shaparak.ir",
    "sadad.shaparak.ir",
    "ikc.shaparak.ir",
    "fcp.shaparak.ir",
    "mabna.shaparak.ir",
    "ecd.shaparak.ir",
    "sayan.shaparak.ir",
  ];

  var userInput = document.getElementById("input_url").value.trim();

  if(userInput.length==0){
    showError("چیزی وارد نکردی که!");
    return;
  }

  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))'+ // ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ //port
            '(\\?[;&amp;a-z\\d%_.~+=-]*)?'+ // query string
            '(\\#[-a-z\\d_]*)?$','i');
  
  var matches = pattern.exec(userInput);

  if(matches==null){
    showError('مطمئنی آدرست و درست نوشتی؟؟!');
    return;
  }

console.log(matches[1]);
console.log(matches[1]==undefined);

  if(matches[1]!=undefined && matches[1]!=null && matches[1]){
    matches[1] = matches[1].replace('://','')
    if(matches[1]!='https')
    {
      showError('فیشینگه فرار کن!');
      return;
    }
  }else{
    showError('میگما https نزاشتی که!!');
    return;
  }

  console.log(matches)

  if(!allowedSites.indexOf(matches[2])>0){
    showError('رفتی تو فیشینگا که!');
    return;
  }



  var el = document.querySelector('.message');
  el.innerHTML = "";

  el.textContent = 'امنه میتونی خریدت و تکمیل کنی';
  el.appendChild
  el.classList.add('show','accept');
  var img = document.createElement('img');
  img.src = './assets/img/tick.svg';
  img.alt="tick"
  el.appendChild(img);
});

function showError(text){
  var el = document.querySelector('.message');
  el.innerHTML = "";
  el.textContent = text;
  el.appendChild
  el.classList.add('show','error');
  var img = document.createElement('img');
  img.src = './assets/img/error.svg';
  img.alt="error"
  el.appendChild(img);
}

document.getElementById("paste").addEventListener("click", function (e) {
  var myInput = document.getElementById("input_url");
  navigator.clipboard.readText().then((clipText) => {
  
    myInput.value = clipText;
  
    if (myInput.value.trim().length > 0) {
      document.getElementById("input_label").classList.add("active");
      document.querySelector(".input-group").classList.add("active");
      myInput.focus();
    }
  });
});
