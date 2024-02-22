import type { TProductDraft } from '../../../types';
import ee567Yz from './ee-567-yz';

describe(`with ee567Yz preset`, () => {
  it(`should return a ee567Yz preset`, () => {
    const ee567YzPreset = ee567Yz().build<TProductDraft>();
    expect(ee567YzPreset).toMatchInlineSnapshot();
  });

  it(`should return a ee567Yz preset when built for graphql`, () => {
    const ee567YzPresetGraphql = ee567Yz().buildGraphql<TProductDraft>();
    expect(ee567YzPresetGraphql).toMatchInlineSnapshot();
  });
});
