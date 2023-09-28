import type { TProductDraft } from '../../../types';
import rumiChair from './rumi-chair';
import productDraft from './rumi-chair.spec.json';

describe(`with rumiChair preset`, () => {
  it(`should return a rumiChair preset`, () => {
    const rumiChairPreset = rumiChair().build<TProductDraft>();
    expect(rumiChairPreset).toMatchObject(productDraft.rest);
  });

  it(`should return a rumiChair preset when built for graphql`, () => {
    const rumiChairPresetGraphql = rumiChair().buildGraphql<TProductDraft>();
    expect(rumiChairPresetGraphql).toMatchObject(productDraft.graphql);
  });
});
