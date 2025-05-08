import type { TCategoryDraft } from '../../../types';
import withNoParent from './with-no-parent';

describe('Category with no parent', () => {
  it('should return a category containing no parent value', () => {
    const category = withNoParent().build<TCategoryDraft>();

    expect(category).toEqual(
      expect.objectContaining({
        parent: undefined,
      })
    );
  });
});
