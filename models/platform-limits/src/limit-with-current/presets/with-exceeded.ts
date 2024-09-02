import LimitWithCurrent from '../builder';

// The current value as >= 100% of the limit is considered as exceeded.
const withExceeded = () => LimitWithCurrent().limit(10).current(10);

export default withExceeded;
