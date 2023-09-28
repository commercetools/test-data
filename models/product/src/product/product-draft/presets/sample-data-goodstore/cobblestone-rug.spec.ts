import type { TProductDraft } from '../../../types';
import cobblestoneRug from './cobblestone-rug';
import productDraft from './cobblestone-rug.spec.json';

describe(`with cobblestoneRug preset`, () => {
  it(`should return a cobblestoneRug preset`, () => {
    const cobblestoneRugPreset = cobblestoneRug().build<TProductDraft>();
    expect(cobblestoneRugPreset).toMatchObject(productDraft.rest);
  });

  it(`should return a cobblestoneRug preset when built for graphql`, () => {
    const cobblestoneRugPresetGraphql =
      cobblestoneRug().buildGraphql<TProductDraft>();
    expect(cobblestoneRugPresetGraphql).toMatchObject(productDraft.graphql);
  });
});
