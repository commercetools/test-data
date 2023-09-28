import type { TProductDraft } from '../../../types';
import ariaRug from './aria-rug';
import productDraft from './aria-rug.spec.json';

describe(`with ariaRug preset`, () => {
  it(`should return a ariaRug preset`, () => {
    const ariaRugPreset = ariaRug().build<TProductDraft>();
    expect(ariaRugPreset).toMatchObject(productDraft.rest);
  });

  it(`should return a ariaRug preset when built for graphql`, () => {
    const ariaRugPresetGraphql = ariaRug().buildGraphql<TProductDraft>();
    expect(ariaRugPresetGraphql).toMatchObject(productDraft.graphql);
  });
});
