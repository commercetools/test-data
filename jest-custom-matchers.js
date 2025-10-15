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

const compareAgainstToday = (dateString) => {
  return dateString
    .split('T')[0]
    .localeCompare(new Date().toISOString().split('T')[0]);
};
class DateBeforeToday {
  asymmetricMatch(actual) {
    const stringDate = actual instanceof Date ? actual.toISOString() : actual;

    return compareAgainstToday(stringDate) < 0;
  }

  toString() {
    return 'DateBeforeToday';
  }

  toAsymmetricMatcher() {
    return 'expect.dateBeforeToday()';
  }

  getExpectedType() {
    return 'date or string(ISO date)';
  }
}
expect.dateBeforeToday = () => new DateBeforeToday();
class DateAfterToday {
  asymmetricMatch(actual) {
    const stringDate = actual instanceof Date ? actual.toISOString() : actual;

    return compareAgainstToday(stringDate) > 0;
  }

  toString() {
    return 'DateAfterToday';
  }

  toAsymmetricMatcher() {
    return 'expect.dateAfterToday()';
  }

  getExpectedType() {
    return 'date or string(ISO date)';
  }
}
expect.dateAfterToday = () => new DateAfterToday();
