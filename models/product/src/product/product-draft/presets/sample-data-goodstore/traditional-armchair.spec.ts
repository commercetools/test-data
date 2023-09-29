import type { TProductDraft } from '../../../types';
import traditionalArmchair from './traditional-armchair';

describe(`with traditionalArmchair preset`, () => {
  it(`should return a traditionalArmchair preset`, () => {
    const traditionalArmchairPreset =
      traditionalArmchair().build<TProductDraft>();
    expect(traditionalArmchairPreset).toMatchInlineSnapshot(``);
  });

  it(`should return a traditionalArmchair preset when built for graphql`, () => {
    const traditionalArmchairPresetGraphql =
      traditionalArmchair().buildGraphql<TProductDraft>();
    expect(traditionalArmchairPresetGraphql).toMatchInlineSnapshot(``);
  });
});
