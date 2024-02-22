import type { TProductDraft } from '../../../types';
import d234Wx from './d-234-wx';

describe(`with d234Wx preset`, () => {
  it(`should return a d234Wx preset`, () => {
    const d234WxPreset = d234Wx().build<TProductDraft>();
    expect(d234WxPreset).toMatchInlineSnapshot();
  });

  it(`should return a d234Wx preset when built for graphql`, () => {
    const d234WxPresetGraphql = d234Wx().buildGraphql<TProductDraft>();
    expect(d234WxPresetGraphql).toMatchInlineSnapshot();
  });
});
