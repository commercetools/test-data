import { TStoreDraft } from '../../types';
import empty from './empty';

it('should set all specified fields to undefined', () => {
  const emptyStoreDraft = empty().build<TStoreDraft>();
  expect(emptyStoreDraft).toMatchObject({
    key: expect.any(String),
    name: undefined,
    languages: undefined,
    countries: undefined,
    distributionChannels: undefined,
    supplyChannels: undefined,
    productSelections: undefined,
    custom: undefined,
  });
});
