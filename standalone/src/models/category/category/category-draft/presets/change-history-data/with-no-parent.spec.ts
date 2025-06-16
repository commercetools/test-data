import type { TCategoryDraft } from '../../../types';
import { compatPreset } from './with-no-parent';

describe('Category with no parent', () => {
  it('should return a category containing no parent value', () => {
    const category = compatPreset().build<TCategoryDraft>();

    expect(category).toEqual(
      expect.objectContaining({
        parent: undefined,
      })
    );
  });
});
