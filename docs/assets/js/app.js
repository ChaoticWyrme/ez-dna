function process(event) {
  var mDNA = document.getElementById('mainstr'); // main strand
  var cDNA = document.getElementById('complstr'); // complimentary strand
  var mRNA = document.getElementById('mrna'); // mRNA field; codons
  var tRNA = document.getElementById('trna'); // anti-codons
  var amino = document.getElementById('amino'); // amino acids not yet implemented.
  
  event.preventDefault();
}

function DNAtRNA() { // converts DNA to RNA

}

function basePair() { // base pairs strand

}

function RNAtAmino() { // turns RNA into amino acid chain.

}

function AminoToProtein() { // turns amino acid chain into protein

}

function init() {
  var submit = document.getElementById('dnaSubmit');
  submit.addEventListener('click', process, false);
}

window.addEventListener('load', init, false);
