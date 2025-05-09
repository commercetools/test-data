import { TPriceDraft } from '../../types';
import withValue from './with-value';

describe('withValue preset', () => {
  it('should return a price draft preset', () => {
    const priceDraft = withValue({ currency: 'LOL' }).build<TPriceDraft>();

    expect(priceDraft.value.currencyCode).toMatchInlineSnapshot(`"LOL"`);
  });
});
