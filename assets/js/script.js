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
  var allowedSites = [
    "https:‎//asan.shaparak.ir",
    "https:‎//bpm.shaparak.ir",
    "https:‎//pec.shaparak.ir",
    "https:‎//pecco.shaparak.ir",
    "https:‎//sep.shaparak.ir",
    "https:‎//pep.shaparak.ir",
    "https:‎//pna.shaparak.ir",
    "https:‎//sadad.shaparak.ir",
    "https:‎//ikc.shaparak.ir",
    "https:‎//fcp.shaparak.ir",
    "https:‎//mabna.shaparak.ir",
    "https:‎//ecd.shaparak.ir",
    "https:‎//sayan.shaparak.ir",
  ];

  var userInput = document.getElementById("input_url").nodeValue.trim();
});

document.getElementById("paste").addEventListener("click", function (e) {
  var myInput = document.getElementById("input_url");
  navigator.clipboard.readText().then((clipText) => {
    console.log(clipText);
    myInput.value = clipText;
    console.log(myInput.value.trim().length);
    if (myInput.value.trim().length > 0) {
      document.getElementById("input_label").classList.add("active");
      document.querySelector(".input-group").classList.add("active");
      myInput.focus();
    }
  });
});
