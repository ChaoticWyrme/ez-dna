function process(event) {
  var mDNA = document.getElementById('mainstr'); // main strand
  var cDNA = document.getElementById('complstr'); // complimentary strand
  var mRNA = document.getElementById('mrna'); // mRNA field; codons
  var tRNA = document.getElementById('trna'); // anti-codons
  var amino = document.getElementById('amino'); // amino acids not yet implemented.
  if(cDNA.value==''&&mRNA.value==''&&tRNA.value='') { //if mDNA is the only filled field
    
  } else if(mDNA.value==''&&mRNA.value==''&&tRNA.value='') {
    
  } else if(mDNA.value==''&&cDNA.value==''&&tRNA.value='') {
    
  } else if(mDNA.value==''&&cDNA.value==''&&mRNA.value=='') {
    
  } else {
    
  }
  event.preventDefault();
}

function DNAtRNA(dna) { // converts DNA to RNA

}

function basePair(strand) { // base pairs strand

}

function RNAtAmino(rna) { // turns RNA into amino acid chain.

}

function findAmino(codon) {
  if(typeof codon == 'string' && codon.length == 3) {
    
  }
}

function AminoToProtein() { // turns amino acid chain into protein. Probably not going to happen

}

function init() {
  var submit = document.getElementById('dnaSubmit');
  submit.addEventListener('click', process, false);
}

window.addEventListener('load', init, false);
