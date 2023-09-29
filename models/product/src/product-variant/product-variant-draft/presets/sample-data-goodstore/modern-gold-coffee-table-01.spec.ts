import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import modernGoldCoffeeTable01 from './modern-gold-coffee-table-01';

describe(`with modernGoldCoffeeTable01 preset`, () => {
  it(`should return a modernGoldCoffeeTable01 preset`, () => {
    const modernGoldCoffeeTable01Preset =
      modernGoldCoffeeTable01().build<TProductVariantDraft>();
    expect(modernGoldCoffeeTable01Preset).toMatchInlineSnapshot(``);
  });

  it(`should return a modernGoldCoffeeTable01 preset when built for graphql`, () => {
    const modernGoldCoffeeTable01PresetGraphql =
      modernGoldCoffeeTable01().buildGraphql<TProductVariantDraftGraphql>();
    expect(modernGoldCoffeeTable01PresetGraphql).toMatchInlineSnapshot(``);
  });
});
