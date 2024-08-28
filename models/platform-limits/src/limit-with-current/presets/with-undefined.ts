import LimitWithCurrent from '../builder';

const withUndefined = () => LimitWithCurrent().limit(null).current(2);

export default withUndefined;
