import { Money } from '@commercetools-test-data/commons';
import StandalonePriceDraft from '../builder';

const minimal = () =>
  StandalonePriceDraft().value(Money.presets.withCurrency('EUR'));

export default minimal;
