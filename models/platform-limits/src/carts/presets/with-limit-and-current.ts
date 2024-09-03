import * as LimitWithCurrent from '../../limit-with-current';
import CartsPlatformLimits from '../builder';

const withLimitAndCurrent = () =>
  CartsPlatformLimits().total(LimitWithCurrent.random());

export default withLimitAndCurrent;
