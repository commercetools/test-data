import * as Money from '@commercetools-test-data/money';
import PriceDraft from '../builder';

const minimal = () => PriceDraft().value(Money.presets.withCurrency('USD'));

export default minimal;
