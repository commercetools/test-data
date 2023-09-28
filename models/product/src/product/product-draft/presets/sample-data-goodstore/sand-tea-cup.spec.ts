import type { TProductDraft } from '../../../types';
import sandTeaCup from './sand-tea-cup';
import productDraft from './sand-tea-cup.spec.json';

describe(`with sandTeaCup preset`, () => {
  it(`should return a sandTeaCup preset`, () => {
    const sandTeaCupPreset = sandTeaCup().build<TProductDraft>();
    expect(sandTeaCupPreset).toMatchObject(productDraft.rest);
  });

  it(`should return a sandTeaCup preset when built for graphql`, () => {
    const sandTeaCupPresetGraphql = sandTeaCup().buildGraphql<TProductDraft>();
    expect(sandTeaCupPresetGraphql).toMatchObject(productDraft.graphql);
  });
});
