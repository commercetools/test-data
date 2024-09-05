import * as Limit from '../../limit';
import * as LimitWithCurrent from '../../limit-with-current';
import StoresPlatformLimits from '../builder';

const withLimitAndCurrent = () =>
  StoresPlatformLimits()
    .total(LimitWithCurrent.random())
    .inventorySupplyChannels(Limit.random())
    .productDistributionChannels(Limit.random());

export default withLimitAndCurrent;
