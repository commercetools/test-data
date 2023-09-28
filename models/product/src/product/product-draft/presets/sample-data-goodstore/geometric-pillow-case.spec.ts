import type { TProductDraft } from '../../../types';
import geometricPillowCase from './geometric-pillow-case';
import productDraft from './geometric-pillow-case.spec.json';

describe(`with geometricPillowCase preset`, () => {
  it(`should return a geometricPillowCase preset`, () => {
    const geometricPillowCasePreset =
      geometricPillowCase().build<TProductDraft>();
    expect(geometricPillowCasePreset).toMatchObject(productDraft.rest);
  });

  it(`should return a geometricPillowCase preset when built for graphql`, () => {
    const geometricPillowCasePresetGraphql =
      geometricPillowCase().buildGraphql<TProductDraft>();
    expect(geometricPillowCasePresetGraphql).toMatchObject(
      productDraft.graphql
    );
  });
});
