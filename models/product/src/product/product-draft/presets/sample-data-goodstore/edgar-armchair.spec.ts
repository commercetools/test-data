import type { TProductDraft } from '../../../types';
import edgarArmchair from './edgar-armchair';
import productDraft from './edgar-armchair.spec.json';

describe(`with edgarArmchair preset`, () => {
  it(`should return a edgarArmchair preset`, () => {
    const edgarArmchairPreset = edgarArmchair().build<TProductDraft>();
    expect(edgarArmchairPreset).toMatchObject(productDraft.rest);
  });

  it(`should return a edgarArmchair preset when built for graphql`, () => {
    const edgarArmchairPresetGraphql =
      edgarArmchair().buildGraphql<TProductDraft>();
    expect(edgarArmchairPresetGraphql).toMatchObject(productDraft.graphql);
  });
});
