import { TTaxRateDraft } from '../../types';
import empty from './empty';

it(`should set all specified fields to undefined`, () => {
  const emptyTaxRateDraft = empty().build<TTaxRateDraft>();
  expect(emptyTaxRateDraft).toMatchObject({
    amount: undefined,
    state: undefined,
    subRates: undefined,
  });
});
