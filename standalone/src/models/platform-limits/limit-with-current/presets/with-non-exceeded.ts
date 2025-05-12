import LimitWithCurrent from '../builder';

const withNonExceeded = () => LimitWithCurrent().limit(10).current(2);

export default withNonExceeded;
