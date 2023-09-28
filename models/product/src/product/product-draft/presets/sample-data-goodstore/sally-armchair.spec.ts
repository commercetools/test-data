import type { TProductDraft } from '../../../types';
import sallyArmchair from './sally-armchair';
import productDraft from './sally-armchair.spec.json';

describe(`with sallyArmchair preset`, () => {
  it(`should return a sallyArmchair preset`, () => {
    const sallyArmchairPreset = sallyArmchair().build<TProductDraft>();
    expect(sallyArmchairPreset).toMatchObject(productDraft.rest);
  });

  it(`should return a sallyArmchair preset when built for graphql`, () => {
    const sallyArmchairPresetGraphql =
      sallyArmchair().buildGraphql<TProductDraft>();
    expect(sallyArmchairPresetGraphql).toMatchObject(productDraft.graphql);
  });
});
