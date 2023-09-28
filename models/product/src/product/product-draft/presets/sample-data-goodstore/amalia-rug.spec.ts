import type { TProductDraft } from '../../../types';
import amaliaRug from './amalia-rug';
import productDraft from './amalia-rug.spec.json';

describe(`with amaliaRug preset`, () => {
  it(`should return a amaliaRug preset`, () => {
    const amaliaRugPreset = amaliaRug().build<TProductDraft>();
    expect(amaliaRugPreset).toMatchObject(productDraft.rest);
  });

  it(`should return a amaliaRug preset when built for graphql`, () => {
    const amaliaRugPresetGraphql = amaliaRug().buildGraphql<TProductDraft>();
    expect(amaliaRugPresetGraphql).toMatchObject(productDraft.graphql);
  });
});
