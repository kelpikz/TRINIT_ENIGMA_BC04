import CryptoJs from 'crypto-js';

export const encryptFile = (file, password) => {
    const fileReader = new FileReader();
    
    fileReader.readAsArrayBuffer(file);
    return new Promise((resolve, reject) => {
        fileReader.onload = () => {
            console.log(fileReader);
            var wordArray = CryptoJs.lib.WordArray.create(fileReader.result); 
            const encrypted = CryptoJs.AES.encrypt(wordArray, password).toString();
            resolve(encrypted);
        };
        fileReader.onerror = (error) => {
            reject(error);
        };
    });
    
};

function convertWordArrayToUint8Array(wordArray) {
    var arrayOfWords = wordArray.hasOwnProperty("words") ? wordArray.words : [];
    var length = wordArray.hasOwnProperty("sigBytes") ? wordArray.sigBytes : arrayOfWords.length * 4;
    var uInt8Array = new Uint8Array(length), index=0, word, i;
    for (i=0; i<length; i++) {
        word = arrayOfWords[i];
        uInt8Array[index++] = word >> 24;
        uInt8Array[index++] = (word >> 16) & 0xff;
        uInt8Array[index++] = (word >> 8) & 0xff;
        uInt8Array[index++] = word & 0xff;
    }
    return uInt8Array;
}

export const decryptFile = (file, password) => {
    const fileReader = new FileReader();
    fileReader.readAsArrayBuffer(file);
    return new Promise((resolve, reject) => {
        fileReader.onload = () => {
            const decrypted = CryptoJs.AES.decrypt(fileReader.result, password);
            var typedArray = convertWordArrayToUint8Array(decrypted);               
            resolve(typedArray);
        }
        fileReader.onerror = (error) => {
            reject(error);
        }
    });
}
