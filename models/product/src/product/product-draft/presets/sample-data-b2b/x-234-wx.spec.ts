import type { TProductDraft } from '../../../types';
import x234Wx from './x-234-wx';

describe(`with x234Wx preset`, () => {
  it(`should return a x234Wx preset`, () => {
    const x234WxPreset = x234Wx().build<TProductDraft>();
    expect(x234WxPreset).toMatchInlineSnapshot();
  });

  it(`should return a x234Wx preset when built for graphql`, () => {
    const x234WxPresetGraphql = x234Wx().buildGraphql<TProductDraft>();
    expect(x234WxPresetGraphql).toMatchInlineSnapshot();
  });
});
