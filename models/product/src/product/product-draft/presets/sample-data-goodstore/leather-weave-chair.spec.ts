import type { TProductDraft } from '../../../types';
import leatherWeaveChair from './leather-weave-chair';
import productDraft from './leather-weave-chair.spec.json';

describe(`with leatherWeaveChair preset`, () => {
  it(`should return a leatherWeaveChair preset`, () => {
    const leatherWeaveChairPreset = leatherWeaveChair().build<TProductDraft>();
    expect(leatherWeaveChairPreset).toMatchObject(productDraft.rest);
  });

  it(`should return a leatherWeaveChair preset when built for graphql`, () => {
    const leatherWeaveChairPresetGraphql =
      leatherWeaveChair().buildGraphql<TProductDraft>();
    expect(leatherWeaveChairPresetGraphql).toMatchObject(productDraft.graphql);
  });
});
