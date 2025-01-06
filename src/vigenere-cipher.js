const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');

    message = message.toUpperCase();
    key = key.toUpperCase();

    let encryptedMessage = '';
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      const char = message[i];
      
      if (char >= 'A' && char <= 'Z') {
        const shift = key[keyIndex % key.length].charCodeAt(0) - 'A'.charCodeAt(0);
        const encryptedChar = String.fromCharCode((char.charCodeAt(0) - 'A'.charCodeAt(0) + shift) % 26 + 'A'.charCodeAt(0));
        encryptedMessage += encryptedChar;

        keyIndex++;
      } else {
        encryptedMessage += char;
      }
    }

    return this.isDirect ? encryptedMessage : encryptedMessage.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error('Incorrect arguments!');

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    let message = '';
    let keyIndex = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {
      const char = encryptedMessage[i];
      
      if (char >= 'A' && char <= 'Z') {
        const shift = key[keyIndex % key.length].charCodeAt(0) - 'A'.charCodeAt(0);
        const decryptedChar = String.fromCharCode((char.charCodeAt(0) - 'A'.charCodeAt(0) - shift + 26) % 26 + 'A'.charCodeAt(0));
        message += decryptedChar;

        keyIndex++;
      } else {
        message += char;
      }
    }

    return this.isDirect ? message : message.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
