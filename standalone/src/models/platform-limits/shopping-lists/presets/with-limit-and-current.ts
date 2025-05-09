import * as Limit from '../../limit';
import * as LimitWithCurrent from '../../limit-with-current';
import ShoppingListsPlatformLimits from '../builder';

const withLimitAndCurrent = () =>
  ShoppingListsPlatformLimits()
    .total(LimitWithCurrent.random())
    .lineItems(Limit.random())
    .textLineItems(Limit.random());

export default withLimitAndCurrent;
