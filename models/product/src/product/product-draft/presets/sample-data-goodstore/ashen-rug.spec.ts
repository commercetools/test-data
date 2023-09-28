import type { TProductDraft } from '../../../types';
import ashenRug from './ashen-rug';
import productDraft from './ashen-rug.spec.json';

describe(`with ashenRug preset`, () => {
  it(`should return a ashenRug preset`, () => {
    const ashenRugPreset = ashenRug().build<TProductDraft>();
    expect(ashenRugPreset).toMatchObject(productDraft.rest);
  });

  it(`should return a ashenRug preset when built for graphql`, () => {
    const ashenRugPresetGraphql = ashenRug().buildGraphql<TProductDraft>();
    expect(ashenRugPresetGraphql).toMatchObject(productDraft.graphql);
  });
});
