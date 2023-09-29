import type { TProductDraft } from '../../../types';
import artDecoCoffeeTable from './art-deco-coffee-table';
import productDraft from './art-deco-coffee-table.spec.json';

describe(`with artDecoCoffeeTable preset`, () => {
  it(`should return a artDecoCoffeeTable preset`, () => {
    const artDecoCoffeeTablePreset =
      artDecoCoffeeTable().build<TProductDraft>();
    expect(artDecoCoffeeTablePreset).toMatchObject(productDraft.rest);
  });

  it(`should return a artDecoCoffeeTable preset when built for graphql`, () => {
    const artDecoCoffeeTablePresetGraphql =
      artDecoCoffeeTable().buildGraphql<TProductDraft>();
    expect(artDecoCoffeeTablePresetGraphql).toMatchObject(productDraft.graphql);
  });
});
