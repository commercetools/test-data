import type { TProductDraft } from '../../../types';
import turnerVelvetArmchair from './turner-velvet-armchair';
import productDraft from './turner-velvet-armchair.spec.json';

describe(`with turnerVelvetArmchair preset`, () => {
  it(`should return a turnerVelvetArmchair preset`, () => {
    const turnerVelvetArmchairPreset =
      turnerVelvetArmchair().build<TProductDraft>();
    expect(turnerVelvetArmchairPreset).toMatchObject(productDraft.rest);
  });
});
