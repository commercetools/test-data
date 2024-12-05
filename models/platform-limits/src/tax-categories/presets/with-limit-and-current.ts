import * as LimitWithCurrent from '../../limit-with-current';
import TaxCategoriesPlatformLimits from '../builder';

const withLimitAndCurrent = () =>
  TaxCategoriesPlatformLimits().total(LimitWithCurrent.random());

export default withLimitAndCurrent;
