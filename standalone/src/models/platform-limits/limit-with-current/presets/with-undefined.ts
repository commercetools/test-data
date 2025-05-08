import LimitWithCurrent from '../builder';

const withUndefined = () => LimitWithCurrent().limit(undefined).current(2);

export default withUndefined;
