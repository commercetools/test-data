import * as LimitWithCurrent from '../../limit-with-current';
import CustomersPlatformLimits from '../builder';

const withLimitAndCurrent = () =>
  CustomersPlatformLimits().total(LimitWithCurrent.random());

export default withLimitAndCurrent;
