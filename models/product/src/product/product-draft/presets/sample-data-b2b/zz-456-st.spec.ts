import type { TProductDraft } from '../../../types';
import zz456St from './zz-456-st';

describe(`with zz456St preset`, () => {
  it(`should return a zz456St preset`, () => {
    const zz456StPreset = zz456St().build<TProductDraft>();
    expect(zz456StPreset).toMatchInlineSnapshot();
  });

  it(`should return a zz456St preset when built for graphql`, () => {
    const zz456StPresetGraphql = zz456St().buildGraphql<TProductDraft>();
    expect(zz456StPresetGraphql).toMatchInlineSnapshot();
  });
});
