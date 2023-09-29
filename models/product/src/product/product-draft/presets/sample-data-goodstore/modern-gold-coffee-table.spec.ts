import type { TProductDraft } from '../../../types';
import modernGoldCoffeeTable from './modern-gold-coffee-table';

describe(`with modernGoldCoffeeTable preset`, () => {
  it(`should return a modernGoldCoffeeTable preset`, () => {
    const modernGoldCoffeeTablePreset =
      modernGoldCoffeeTable().build<TProductDraft>();
    expect(modernGoldCoffeeTablePreset).toMatchInlineSnapshot(``);
  });

  it(`should return a modernGoldCoffeeTable preset when built for graphql`, () => {
    const modernGoldCoffeeTablePresetGraphql =
      modernGoldCoffeeTable().buildGraphql<TProductDraft>();
    expect(modernGoldCoffeeTablePresetGraphql).toMatchInlineSnapshot(``);
  });
});
