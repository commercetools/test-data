import type { TProductDraft } from '../../../types';
import tt456St from './tt-456-st';

describe(`with tt456St preset`, () => {
  it(`should return a tt456St preset`, () => {
    const tt456StPreset = tt456St().build<TProductDraft>();
    expect(tt456StPreset).toMatchInlineSnapshot();
  });

  it(`should return a tt456St preset when built for graphql`, () => {
    const tt456StPresetGraphql = tt456St().buildGraphql<TProductDraft>();
    expect(tt456StPresetGraphql).toMatchInlineSnapshot();
  });
});
