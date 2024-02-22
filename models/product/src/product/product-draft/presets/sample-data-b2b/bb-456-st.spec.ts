import type { TProductDraft } from '../../../types';
import bb456St from './bb-456-st';

describe(`with bb456St preset`, () => {
  it(`should return a bb456St preset`, () => {
    const bb456StPreset = bb456St().build<TProductDraft>();
    expect(bb456StPreset).toMatchInlineSnapshot();
  });

  it(`should return a bb456St preset when built for graphql`, () => {
    const bb456StPresetGraphql = bb456St().buildGraphql<TProductDraft>();
    expect(bb456StPresetGraphql).toMatchInlineSnapshot();
  });
});
