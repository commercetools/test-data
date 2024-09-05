import * as LimitWithCurrent from '../../limit-with-current';
import ShippingMethodsPlatformLimits from '../builder';

const withLimitAndCurrent = () =>
  ShippingMethodsPlatformLimits().total(LimitWithCurrent.random());

export default withLimitAndCurrent;
