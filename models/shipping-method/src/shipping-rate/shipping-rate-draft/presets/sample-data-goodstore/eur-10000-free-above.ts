import { CentPrecisionMoney } from '@commercetools-test-data/commons';
import { ShippingRateDraft } from '../../..';

const eur10000FreeAbove = () =>
  ShippingRateDraft.presets
    .empty()
    .price(CentPrecisionMoney.random().currencyCode('EUR').centAmount(10000))
    .freeAbove(CentPrecisionMoney.random().currencyCode('EUR').centAmount(0))
    .tiers([]);

export default eur10000FreeAbove;
