import type { TProductDraft } from '../../../types';
import traditionalArmchair from './traditional-armchair';
import productDraft from './traditional-armchair.spec.json';

describe(`with traditionalArmchair preset`, () => {
  it(`should return a traditionalArmchair preset`, () => {
    const traditionalArmchairPreset =
      traditionalArmchair().build<TProductDraft>();
    expect(traditionalArmchairPreset).toMatchObject(productDraft.rest);
  });

  it(`should return a traditionalArmchair preset when built for graphql`, () => {
    const traditionalArmchairPresetGraphql =
      traditionalArmchair().buildGraphql<TProductDraft>();
    expect(traditionalArmchairPresetGraphql).toMatchObject(
      productDraft.graphql
    );
  });
});
