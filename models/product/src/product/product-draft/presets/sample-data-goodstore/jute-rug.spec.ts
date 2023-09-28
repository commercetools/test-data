import type { TProductDraft } from '../../../types';
import juteRug from './jute-rug';
import productDraft from './jute-rug.spec.json';

describe(`with juteRug preset`, () => {
  it(`should return a juteRug preset`, () => {
    const juteRugPreset = juteRug().build<TProductDraft>();
    expect(juteRugPreset).toMatchObject(productDraft.rest);
  });

  it(`should return a juteRug preset when built for graphql`, () => {
    const juteRugPresetGraphql = juteRug().buildGraphql<TProductDraft>();
    expect(juteRugPresetGraphql).toMatchObject(productDraft.graphql);
  });
});
