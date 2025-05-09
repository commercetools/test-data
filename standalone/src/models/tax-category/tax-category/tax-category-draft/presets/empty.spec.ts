import { TTaxCategoryDraft } from '../../types';
import empty from './empty';

it(`should set all specified fields to undefined`, () => {
  const emptyTaxCategoryDraft = empty().build<TTaxCategoryDraft>();
  expect(emptyTaxCategoryDraft).toMatchObject({
    description: undefined,
    key: undefined,
    rates: undefined,
  });
});
