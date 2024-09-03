import * as LimitWithCurrent from '../../limit-with-current';
import ProductDiscountsPlatformLimits from '../builder';

const withLimitAndCurrent = () =>
  ProductDiscountsPlatformLimits().totalActive(LimitWithCurrent.random());

export default withLimitAndCurrent;
