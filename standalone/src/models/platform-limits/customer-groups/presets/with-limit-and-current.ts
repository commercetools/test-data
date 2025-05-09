import * as LimitWithCurrent from '../../limit-with-current';
import CustomerGroupsPlatformLimits from '../builder';

const withLimitAndCurrent = () =>
  CustomerGroupsPlatformLimits().total(LimitWithCurrent.random());

export default withLimitAndCurrent;
