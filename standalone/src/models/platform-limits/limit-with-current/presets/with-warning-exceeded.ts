import LimitWithCurrent from '../builder';

// The current value as >= 80% of the limit is considered as warning for exceeded.
const withWarningExceeded = () => LimitWithCurrent().limit(10).current(8);

export default withWarningExceeded;
