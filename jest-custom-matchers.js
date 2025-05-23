class StringFromArray {
  constructor(allowed) {
    this.allowed = allowed;
  }

  asymmetricMatch(value) {
    return typeof value === 'string' && this.allowed.includes(value);
  }

  getExpectedType() {
    return 'string';
  }
}

// Attach it to Jest's global expect object
expect.stringFromArray = function (allowed) {
  return new StringFromArray(allowed);
};
