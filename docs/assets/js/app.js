"use strict";
const aminoMap = {
  "a":{
    "a":{},
    "u":{},
    "c":{},
    "g":{}
  },
  "u":{
    "a":{},
    "u":{},
    "c":{},
    "g":{}
  },
  "c":{
    "a":{},
    "u":{},
    "c":{},
    "g":{}
  },
  "g":{
    "a":{},
    "u":{},
    "c":{},
    "g":{}
  },
}

function process(event) {
  var mDNA = document.getElementById("mainstr").value; // main strand
  var cDNA = document.getElementById("complstr").value; // complimentary strand
  var mRNA = document.getElementById("mrna").value; // mRNA field; codons
  var tRNA = document.getElementById("trna").value; // anti-codons
  var amino = document.getElementById("amino"); // amino acids not yet implemented.
  let filled = (mDNA != "")+(cDNA != "")+(mRNA != "")+(tRNA != ""); // # of fields with more than an empty string
  if(filled = 1) { // one field filled
    if(mDNA != "") {
      let dna = mDNA;
      let bp = basePair(dna);
      let rna = DNAtRNA(bp);
      cDNA = bp;
      mRNA = rna;
      tRNA = DNAtRNA(dna);
      amino.innerText = RNAtAmino(rna);
    }
  } else if(filled < 1) { // zero fields filled
    
  } else { // more than two fields filled
    
  }
  event.preventDefault();
}

function DNAtRNA(dna) { // converts DNA to RNA
  return dna.replace(/t/gi,"U");
}

function basePair(strand) { // base pairs strand
  // need to check if rna or dna with str.find()
  if(/u/i.test(strand) && !/t/i.test(strand)) {
    return strand.toLowerCase().replace(/u/g,"A").replace(/a/g,"U").replace(/c/g,"G").replace(/g/g,"C");
  } else if(/t/i.test(strand) && !/u/i.test(strand)) {
    return strand.toLowerCase().replace(/t/g,"A").replace(/a/g,"T").replace(/c/g,"G").replace(/g/g,"C");
  } else {
    throw new StrandError("both DNA and RNA");
  }
}

function RNAtAmino(rna) { // turns RNA into amino acid chain.
  return "";
}

function findAmino(codon) {
  if(typeof codon == "string" && codon.length == 3) {
    
  }
}

function AminoToProtein() { // turns amino acid chain into protein. Probably not going to happen

}

function StrandError(message) {
  this.name = "StrandError";
  if(message) {
    this.message = message;
  } else this.message = "Invalid DNA/RNA strand";
}

function init() {
  var submit = document.getElementById("dnaSubmit");
  submit.addEventListener("click", process, false);
}

window.addEventListener('load', init, false);
