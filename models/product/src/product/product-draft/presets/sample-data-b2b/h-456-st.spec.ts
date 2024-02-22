import type { TProductDraft } from '../../../types';
import h456St from './h-456-st';

describe(`with h456St preset`, () => {
  it(`should return a h456St preset`, () => {
    const h456StPreset = h456St().build<TProductDraft>();
    expect(h456StPreset).toMatchInlineSnapshot();
  });

  it(`should return a h456St preset when built for graphql`, () => {
    const h456StPresetGraphql = h456St().buildGraphql<TProductDraft>();
    expect(h456StPresetGraphql).toMatchInlineSnapshot();
  });
});
