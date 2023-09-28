import type { TProductDraft } from '../../../types';
import sunnaiGlassBowl from './sunnai-glass-bowl';
import productDraft from './sunnai-glass-bowl.spec.json';

describe(`with sunnaiGlassBowl preset`, () => {
  it(`should return a sunnaiGlassBowl preset`, () => {
    const sunnaiGlassBowlPreset = sunnaiGlassBowl().build<TProductDraft>();
    expect(sunnaiGlassBowlPreset).toMatchObject(productDraft);
  });
});
