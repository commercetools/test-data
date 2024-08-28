import LimitWithCurrent from '../builder';

const withWarningExceeded = () => LimitWithCurrent().limit(10).current(8);

export default withWarningExceeded;
