import type { TProductDraft } from '../../../types';
import meadowRug from './meadow-rug';
import productDraft from './meadow-rug.spec.json';

describe(`with meadowRug preset`, () => {
  it(`should return a meadowRug preset`, () => {
    const meadowRugPreset = meadowRug().build<TProductDraft>();
    expect(meadowRugPreset).toMatchObject(productDraft.rest);
  });
});
