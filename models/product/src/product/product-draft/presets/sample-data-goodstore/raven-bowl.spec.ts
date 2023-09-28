import type { TProductDraft } from '../../../types';
import ravenBowl from './raven-bowl';
import productDraft from './raven-bowl.spec.json';

describe(`with ravenBowl preset`, () => {
  it(`should return a ravenBowl preset`, () => {
    const ravenBowlPreset = ravenBowl().build<TProductDraft>();
    expect(ravenBowlPreset).toMatchObject(productDraft.rest);
  });

  it(`should return a ravenBowl preset when built for graphql`, () => {
    const ravenBowlPresetGraphql = ravenBowl().buildGraphql<TProductDraft>();
    expect(ravenBowlPresetGraphql).toMatchObject(productDraft.graphql);
  });
});
