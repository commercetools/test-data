import type { TProductDraft } from '../../../types';
import modernGoldCoffeeTable from './modern-gold-coffee-table';
import productDraft from './modern-gold-coffee-table.spec.json';

describe(`with modernGoldCoffeeTable preset`, () => {
  it(`should return a modernGoldCoffeeTable preset`, () => {
    const modernGoldCoffeeTablePreset =
      modernGoldCoffeeTable().build<TProductDraft>();
    expect(modernGoldCoffeeTablePreset).toMatchObject(productDraft.rest);
  });
});
