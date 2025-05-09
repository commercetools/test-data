import type { TProductTypeDraft } from '../../../types';
import withNoAttributes from './with-no-attributes';

describe('Product type with no attributes', () => {
  it('should return a product type with attributes undefined', () => {
    const category = withNoAttributes().build<TProductTypeDraft>();

    expect(category).toEqual(
      expect.objectContaining({
        attributes: undefined,
      })
    );
  });
});
