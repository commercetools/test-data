import type { TProductDraft } from '../../../types';
import artDecoCoffeTable from './art-deco-coffe-table';
import productDraft from './art-deco-coffe-table.spec.json';

describe(`with artDecoCoffeTable preset`, () => {
  it(`should return a artDecoCoffeTable preset`, () => {
    const artDecoCoffeTablePreset = artDecoCoffeTable().build<TProductDraft>();
    expect(artDecoCoffeTablePreset).toMatchObject(productDraft.rest);
  });
});
