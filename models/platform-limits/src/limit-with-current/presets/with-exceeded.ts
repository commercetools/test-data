import LimitWithCurrent from '../builder';

const withExceeded = () => LimitWithCurrent().limit(10).current(10);

export default withExceeded;
