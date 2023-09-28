import type { TProductDraft } from '../../../types';
import rattanLoungeChair from './rattan-lounge-chair';
import productDraft from './rattan-lounge-chair.spec.json';

describe(`with rattanLoungeChair preset`, () => {
  it(`should return a rattanLoungeChair preset`, () => {
    const rattanLoungeChairPreset = rattanLoungeChair().build<TProductDraft>();
    expect(rattanLoungeChairPreset).toMatchObject(productDraft.rest);
  });

  it(`should return a rattanLoungeChair preset when built for graphql`, () => {
    const rattanLoungeChairPresetGraphql =
      rattanLoungeChair().buildGraphql<TProductDraft>();
    expect(rattanLoungeChairPresetGraphql).toMatchObject(productDraft.graphql);
  });
});
