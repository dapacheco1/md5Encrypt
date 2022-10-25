import md5 from "blueimp-md5";
import './style.css';

class objEncriptions {
  #original;
  #md5Enc;
  constructor({
    original,
    md5Enc
  }){
    this.#original = original;
    this.#md5Enc = md5Enc;
  }

  get original(){
    return this.#original;
  }

  get md5Enc(){
    return this.#md5Enc;
  }

  set original(value){
    this.original = value;
  }

  set md5Enc(value){
    this.#md5Enc = value;
  }
};


const txtEncrypt = document.getElementsByName('txtEncrypt')[0];
const txtDecrypt = document.getElementsByName('txtDecrypt')[0];
const encryptBtn = document.querySelector('.encryptBtn');
const decryptBtn = document.querySelector('.decryptBtn');
const listarEnc = document.querySelector('.listarEnc');

const saveEnc = document.querySelector('.saveEnc');
const buscar = document.querySelector('.buscar');
const eliminar = document.querySelector('.eliminar');

let encriptions = [];
let tempEnc = new objEncriptions({
  original:null,
  md5Enc:null,
});

decryptBtn.addEventListener('click',()=>{
  let find = encriptions.filter(item=>item.md5Enc == txtEncrypt.value);
  if(find.length==0){
    console.log(tempEnc.original);
  }
  console.log(find);
});


buscar.addEventListener('click',()=>{
  let find = encriptions.filter(item=>item.original == txtEncrypt.value);
  console.log(find);
});

eliminar.addEventListener('click',()=>{
  let findex = encriptions.findIndex(item=>item.original == txtEncrypt.value);
  if(findex!=-1){
    encriptions.splice(findex,1);
  }
});

listarEnc.addEventListener('click',()=>{
  console.log(encriptions);
});

saveEnc.addEventListener('click',()=>{
  if(tempEnc.original!=null){
    _verifyRepeated();
  }
});

encryptBtn.addEventListener('click',()=>{
  if(txtEncrypt.value.length>0){
    let ecp = md5(txtEncrypt.value);

    tempEnc = new objEncriptions({
      original:txtEncrypt.value,
      md5Enc:ecp,
    });

    txtDecrypt.value = tempEnc.md5Enc;
  }
});

function _verifyRepeated(valueStr){
  let findex = encriptions.findIndex(item=>item.original == valueStr);
  if(findex==-1){
    encriptions.push(tempEnc);
  }
}