import type { TProductDraft } from '../../../types';
import orionDoubleBed from './orion-double-bed';
import productDraft from './orion-double-bed.spec.json';

describe(`with orionDoubleBed preset`, () => {
  it(`should return a orionDoubleBed preset`, () => {
    const orionDoubleBedPreset = orionDoubleBed().build<TProductDraft>();
    expect(orionDoubleBedPreset).toMatchObject(productDraft.rest);
  });
});
