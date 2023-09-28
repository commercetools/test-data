import type { TProductDraft } from '../../../types';
import rusticBowl from './rustic-bowl';
import productDraft from './rustic-bowl.spec.json';

describe(`with rusticBowl preset`, () => {
  it(`should return a rusticBowl preset`, () => {
    const rusticBowlPreset = rusticBowl().build<TProductDraft>();
    expect(rusticBowlPreset).toMatchObject(productDraft.rest);
  });

  it(`should return a rusticBowl preset when built for graphql`, () => {
    const rusticBowlPresetGraphql = rusticBowl().buildGraphql<TProductDraft>();
    expect(rusticBowlPresetGraphql).toMatchObject(productDraft.graphql);
  });
});
