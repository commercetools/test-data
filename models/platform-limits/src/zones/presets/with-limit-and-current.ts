import * as LimitWithCurrent from '../../limit-with-current';
import ZonesPlatformLimits from '../builder';

const withLimitAndCurrent = () =>
  ZonesPlatformLimits().total(LimitWithCurrent.random());

export default withLimitAndCurrent;
