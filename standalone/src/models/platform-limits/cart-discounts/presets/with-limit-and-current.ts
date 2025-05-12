import * as LimitWithCurrent from '../../limit-with-current';
import CartDiscountsPlatformLimits from '../builder';

const withLimitAndCurrent = () =>
  CartDiscountsPlatformLimits().totalActiveWithoutDiscountCodes(
    LimitWithCurrent.random()
  );

export default withLimitAndCurrent;
