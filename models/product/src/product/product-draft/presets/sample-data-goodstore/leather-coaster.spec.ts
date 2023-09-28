import type { TProductDraft } from '../../../types';
import leatherCoaster from './leather-coaster';
import productDraft from './leather-coaster.spec.json';

describe(`with leatherCoaster preset`, () => {
  it(`should return a leatherCoaster preset`, () => {
    const leatherCoasterPreset = leatherCoaster().build<TProductDraft>();
    expect(leatherCoasterPreset).toMatchObject(productDraft.rest);
  });

  it(`should return a leatherCoaster preset when built for graphql`, () => {
    const leatherCoasterPresetGraphql =
      leatherCoaster().buildGraphql<TProductDraft>();
    expect(leatherCoasterPresetGraphql).toMatchObject(productDraft.graphql);
  });
});
