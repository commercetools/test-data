import type { TProductDraft } from '../../../types';
import artDecoCoffeTable from './art-deco-coffe-table';
import productDraft from './art-deco-coffe-table.spec.json';

describe(`with artDecoCoffeTable preset`, () => {
  it(`should return a artDecoCoffeTable preset`, () => {
    const artDecoCoffeTablePreset = artDecoCoffeTable().build<TProductDraft>();
    expect(artDecoCoffeTablePreset).toMatchObject(productDraft.rest);
  });

  it(`should return a artDecoCoffeTable preset when built for graphql`, () => {
    const artDecoCoffeTablePresetGraphql =
      artDecoCoffeTable().buildGraphql<TProductDraft>();
    expect(artDecoCoffeTablePresetGraphql).toMatchObject(productDraft.graphql);
  });
});
