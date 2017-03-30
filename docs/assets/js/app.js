"use strict";
function process(event) {
  var mDNA = document.getElementById('mainstr'); // main strand
  var cDNA = document.getElementById('complstr'); // complimentary strand
  var mRNA = document.getElementById('mrna'); // mRNA field; codons
  var tRNA = document.getElementById('trna'); // anti-codons
  var amino = document.getElementById('amino'); // amino acids not yet implemented.
  let filled = (mDNA.value != '')+(cDNA.value != '')+(mRNA.value != '')+(tRNA.value != ''); // # of fields with more than an empty string
  if(filled = 1) { // one field filled
    if(mDNA.value != '') {
      let dna = mDNA.value;
      let bp = basePair(dna);
      let rna = DNAtRNA(bp);
      cDNA.value = bp;
      mRNA.value = rna;
      tRNA.value = DNAtRNA(dna);
      amino.value = RNAtAmino(rna);
    }
  } else if(filled < 1) { // zero fields filled
    
  } else { // more than two fields filled
    
  }
  event.preventDefault();
}

function DNAtRNA(dna) { // converts DNA to RNA
  return dna.replace(/t/g,"u").replace(/t/g,"U");
}

function basePair(strand) { // base pairs strand
  // need to check if rna or dna with str.find()
  return "";

function RNAtAmino(rna) { // turns RNA into amino acid chain.
  return "";
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
