import * as Limit from '../../limit';
import * as LimitWithCurrent from '../../limit-with-current';
import CustomersPlatformLimits from '../builder';

const withLimitAndCurrent = () =>
  CustomersPlatformLimits()
    .total(LimitWithCurrent.random())
    .maxGroupsPerCustomer(Limit.random());

export default withLimitAndCurrent;
