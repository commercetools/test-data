import type { TProductDraft } from '../../../types';
import rusticBowl from './rustic-bowl';
import productDraft from './rustic-bowl.spec.json';

describe(`with rusticBowl preset`, () => {
  it(`should return a rusticBowl preset`, () => {
    const rusticBowlPreset = rusticBowl().build<TProductDraft>();
    expect(rusticBowlPreset).toMatchObject(productDraft.rest);
  });
});
