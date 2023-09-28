import type { TProductDraft } from '../../../types';
import doubleSidedShotGlass from './double-sided-shot-glass';
import productDraft from './double-sided-shot-glass.spec.json';

describe(`with doubleSidedShotGlass preset`, () => {
  it(`should return a doubleSidedShotGlass preset`, () => {
    const doubleSidedShotGlassPreset =
      doubleSidedShotGlass().build<TProductDraft>();
    expect(doubleSidedShotGlassPreset).toMatchObject(productDraft.rest);
  });

  it(`should return a doubleSidedShotGlass preset when built for graphql`, () => {
    const doubleSidedShotGlassPresetGraphql =
      doubleSidedShotGlass().buildGraphql<TProductDraft>();
    expect(doubleSidedShotGlassPresetGraphql).toMatchObject(
      productDraft.graphql
    );
  });
});
