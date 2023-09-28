import type { TProductDraft } from '../../../types';
import modernGoldCoffeeTable from './modern-gold-coffee-table';
import productDraft from './modern-gold-coffee-table.spec.json';

describe(`with modernGoldCoffeeTable preset`, () => {
  it(`should return a modernGoldCoffeeTable preset`, () => {
    const modernGoldCoffeeTablePreset =
      modernGoldCoffeeTable().build<TProductDraft>();
    expect(modernGoldCoffeeTablePreset).toMatchObject(productDraft.rest);
  });

  it(`should return a modernGoldCoffeeTable preset when built for graphql`, () => {
    const modernGoldCoffeeTablePresetGraphql =
      modernGoldCoffeeTable().buildGraphql<TProductDraft>();
    expect(modernGoldCoffeeTablePresetGraphql).toMatchObject(
      productDraft.graphql
    );
  });
});
