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
    const toISOString =
      typeof actual === 'string'
        ? actual
        : actual instanceof Date
          ? actual.toISOString()
          : null;
    if (!toISOString) return false;

    const dayCompare = compareAgainstToday(toISOString);
    if (dayCompare < 0) return true; //  before today
    if (dayCompare > 0) return false; // after today
    return toISOString.localeCompare(new Date().toISOString()) < 0;
  }

  toString() {
    return 'DateBeforeToday';
  }

  toAsymmetricMatcher() {
    return 'expect.dateBeforeToday()';
  }

  getExpectedType() {
    return 'date';
  }
}
expect.dateBeforeToday = () => new DateBeforeToday();
class DateAfterToday {
  asymmetricMatch(actual) {
    const toISOString =
      typeof actual === 'string'
        ? actual
        : actual instanceof Date
          ? actual.toISOString()
          : null;
    if (!toISOString) return false;

    const dayCompare = compareAgainstToday(toISOString);
    if (dayCompare > 0) return true; //  after today
    if (dayCompare < 0) return false; // before today
    return toISOString.localeCompare(new Date().toISOString()) > 0;
  }

  toString() {
    return 'DateAfterToday';
  }

  toAsymmetricMatcher() {
    return 'expect.dateAfterToday()';
  }

  getExpectedType() {
    return 'date';
  }
}
expect.dateAfterToday = () => new DateAfterToday();
