import StandalonePrice from '../builder';
import * as Money from '../../../commons/src/money';

const minimal = () =>
  StandalonePrice().value(Money.presets.withCurrency('EUR'));

export default minimal;
