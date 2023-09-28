import type { TProductDraft } from '../../../types';
import walnutCounterStool from './walnut-counter-stool';
import productDraft from './walnut-counter-stool.spec.json';

describe(`with walnutCounterStool preset`, () => {
  it(`should return a walnutCounterStool preset`, () => {
    const walnutCounterStoolPreset =
      walnutCounterStool().build<TProductDraft>();
    expect(walnutCounterStoolPreset).toMatchObject(productDraft.rest);
  });
});
