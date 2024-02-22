import type { TProductDraft } from '../../../types';
import v456St from './v-456-st';

describe(`with v456St preset`, () => {
  it(`should return a v456St preset`, () => {
    const v456StPreset = v456St().build<TProductDraft>();
    expect(v456StPreset).toMatchInlineSnapshot();
  });

  it(`should return a v456St preset when built for graphql`, () => {
    const v456StPresetGraphql = v456St().buildGraphql<TProductDraft>();
    expect(v456StPresetGraphql).toMatchInlineSnapshot();
  });
});
