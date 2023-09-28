import type { TProductDraft } from '../../../types';
import naturaRug from './natura-rug';
import productDraft from './natura-rug.spec.json';

describe(`with naturaRug preset`, () => {
  it(`should return a naturaRug preset`, () => {
    const naturaRugPreset = naturaRug().build<TProductDraft>();
    expect(naturaRugPreset).toMatchObject(productDraft.rest);
  });
});
