import type { TProductDraft } from '../../../types';
import hh456St from './hh-456-st';

describe(`with hh456St preset`, () => {
  it(`should return a hh456St preset`, () => {
    const hh456StPreset = hh456St().build<TProductDraft>();
    expect(hh456StPreset).toMatchInlineSnapshot();
  });

  it(`should return a hh456St preset when built for graphql`, () => {
    const hh456StPresetGraphql = hh456St().buildGraphql<TProductDraft>();
    expect(hh456StPresetGraphql).toMatchInlineSnapshot();
  });
});
