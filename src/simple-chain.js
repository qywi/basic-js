const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  addLink(value) {
    if (value === undefined) {
      this.chain.push('(  )');
    } else {
      this.chain.push(`( ${value} )`);
    }
    return this;
  },

  removeLink(position) {
    if (typeof position !== 'number' || position <= 0 || position > this.chain.length || !Number.isInteger(position)) {
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1); // remove the link at the 0-based index
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  getLength() {
    return this.chain.length;
  },

  finishChain() {
    const result = this.chain.join('~~');
    this.chain = []; // reset the chain after finishing
    return result;
  }
};

module.exports = {
  chainMaker
};
