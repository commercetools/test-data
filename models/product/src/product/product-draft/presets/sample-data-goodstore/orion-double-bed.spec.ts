import type { TProductDraft } from '../../../types';
import orionDoubleBed from './orion-double-bed';
import productDraft from './orion-double-bed.spec.json';

describe(`with orionDoubleBed preset`, () => {
  it(`should return a orionDoubleBed preset`, () => {
    const orionDoubleBedPreset = orionDoubleBed().build<TProductDraft>();
    expect(orionDoubleBedPreset).toMatchObject(productDraft.rest);
  });

  it(`should return a orionDoubleBed preset when built for graphql`, () => {
    const orionDoubleBedPresetGraphql =
      orionDoubleBed().buildGraphql<TProductDraft>();
    expect(orionDoubleBedPresetGraphql).toMatchObject(productDraft.graphql);
  });
});
