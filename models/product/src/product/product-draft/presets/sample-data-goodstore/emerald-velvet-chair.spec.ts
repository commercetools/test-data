import type { TProductDraft } from '../../../types';
import emeraldVelvetChair from './emerald-velvet-chair';
import productDraft from './emerald-velvet-chair.spec.json';

describe(`with emeraldVelvetChair preset`, () => {
  it(`should return a emeraldVelvetChair preset`, () => {
    const emeraldVelvetChairPreset =
      emeraldVelvetChair().build<TProductDraft>();
    expect(emeraldVelvetChairPreset).toMatchObject(productDraft.rest);
  });

  it(`should return a emeraldVelvetChair preset when built for graphql`, () => {
    const emeraldVelvetChairPresetGraphql =
      emeraldVelvetChair().buildGraphql<TProductDraft>();
    expect(emeraldVelvetChairPresetGraphql).toMatchObject(productDraft.graphql);
  });
});
