import type { TProductDraft } from '../../../types';
import ashenRug from './ashen-rug';
import productDraft from './ashen-rug.spec.json';

describe(`with ashenRug preset`, () => {
  it(`should return a ashenRug preset`, () => {
    const ashenRugPreset = ashenRug().build<TProductDraft>();
    expect(ashenRugPreset).toMatchObject(productDraft.rest);
  });
});
