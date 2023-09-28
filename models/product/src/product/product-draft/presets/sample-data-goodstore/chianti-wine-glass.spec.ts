import type { TProductDraft } from '../../../types';
import chiantiWineGlass from './chianti-wine-glass';
import productDraft from './chianti-wine-glass.spec.json';

describe(`with chiantiWineGlass preset`, () => {
  it(`should return a chiantiWineGlass preset`, () => {
    const chiantiWineGlassPreset = chiantiWineGlass().build<TProductDraft>();
    expect(chiantiWineGlassPreset).toMatchObject(productDraft.rest);
  });

  it(`should return a chiantiWineGlass preset when built for graphql`, () => {
    const chiantiWineGlassPresetGraphql =
      chiantiWineGlass().buildGraphql<TProductDraft>();
    expect(chiantiWineGlassPresetGraphql).toMatchObject(productDraft.graphql);
  });
});
