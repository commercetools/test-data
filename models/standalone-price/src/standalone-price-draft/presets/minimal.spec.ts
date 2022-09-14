import minimal from './minimal';
import { TStandalonePriceDraft } from '../../types';

describe('with standalone price draft currency value', () => {
  it('should have standalone price currency value', () => {
    const standalonePriceDraft = minimal().build<TStandalonePriceDraft>();

    expect(standalonePriceDraft).toEqual(
      expect.objectContaining({
        value: expect.objectContaining({
          currencyCode: 'EUR',
        }),
      })
    );
  });
});
