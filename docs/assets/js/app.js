"use strict";
const aminoMap = {
  "a":{
    "a":{
      "a":"Lysine",
      "u":"Asparagine",
      "c":"Asparagine",
      "g":"Lysine"
    },
    "u":{
      "a":"Isoleucine",
      "u":"Isoleucine",
      "c":"Isoleucine",
      "g":"START" // this is also Methionine
    },
    "c":{
      "a":"Threonine", 
      "u":"Threonine",
      "c":"Threonine",
      "g":"Threonine"
    },
    "g":{
      "a":"Arginine",
      "u":"Serine",
      "c":"Serine",
      "g":"Arginine"
        }
  },
  "u":{
    "a":{
      "a":"STOP",
      "u":"Tyrosine",
      "c":"Tyrosine",
      "g":"STOP"
    },
    "u":{
      "a":"Leucine",
      "u":"Phenylalanine",
      "c":"Phenylalanine",
      "g":"Leucine"
    },
    "c":{
      "a":"Serine",
      "u":"Serine",
      "c":"Serine",
      "g":"Serine"
    },
    "g":{
      "a":"STOP",
      "u":"Cysteine",
      "c":"Cysteine",
      "g":"Tryptophan"
    }
  },
  "c":{
    "a":{
      "a":"Glutamine",
      "u":"Histidine",
      "c":"Histidine",
      "g":"Glutamine"
    },
    "u":{
      "a":"Leucine",
      "u":"Leucine",
      "c":"Leucine",
      "g":"Leucine"
    },
    "c":{
      "a":"Proline",
      "u":"Proline",
      "c":"Proline",
      "g":"Proline"
    },
    "g":{
      "a":"Arginine",
      "u":"Arginine",
      "c":"Arginine",
      "g":"Arginine"
    }
  },
  "g":{
    "a":{
      "a":"Glutamic Acid",
      "u":"Aspartic Acid",
      "c":"Aspartic Acid",
      "g":"Glutamic Acid"
        },
    "u":{
      "a":"Valine",
      "u":"Valine",
      "c":"Valine",
      "g":"Valine"
        },
    "c":{
      "a":"Alanine",
      "u":"Alanine",
      "c":"Alanine",
      "g":"Alanine"
    },
    "g":{
      "a":"Glycine",
      "u":"Glycine",
      "c":"Glycine",
      "g":"Glycine"
    }
  },
};

function process(event) {
  var mDNA = document.getElementById("mainstr").value; // main strand
  var cDNA = document.getElementById("complstr").value; // complimentary strand
  var mRNA = document.getElementById("mrna").value; // mRNA field; codons
  var tRNA = document.getElementById("trna").value; // anti-codons
  var amino = document.getElementById("amino"); // amino acids not yet implemented.
  let filled = (mDNA != "")+(cDNA != "")+(mRNA != "")+(tRNA != ""); // # of fields with more than an empty string
  if(filled == 1) { // one field filled
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

function RNAtAmino(rna,strict) { // turns RNA into amino acid chain.
  if(strict) {
    
  } else {
    
  }
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
