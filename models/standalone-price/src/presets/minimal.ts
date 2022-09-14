import { Money } from '@commercetools-test-data/commons';
import StandalonePrice from '../builder';

const minimal = () =>
  StandalonePrice().value(Money.presets.withCurrency('EUR'));

export default minimal;
