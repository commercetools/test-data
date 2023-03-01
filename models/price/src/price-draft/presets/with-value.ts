import * as Money from '@commercetools-test-data/money';
import PriceDraft from '../builder';

const withValue = ({ currency = 'EUR' } = {}) =>
  PriceDraft().value(Money.presets.withCurrency(currency));

export default withValue;
