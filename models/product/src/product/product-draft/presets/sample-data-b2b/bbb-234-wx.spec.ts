import type { TProductDraft } from '../../../types';
import bbb234Wx from './bbb-234-wx';

describe(`with bbb234Wx preset`, () => {
  it(`should return a bbb234Wx preset`, () => {
    const bbb234WxPreset = bbb234Wx().build<TProductDraft>();
    expect(bbb234WxPreset).toMatchInlineSnapshot();
  });

  it(`should return a bbb234Wx preset when built for graphql`, () => {
    const bbb234WxPresetGraphql = bbb234Wx().buildGraphql<TProductDraft>();
    expect(bbb234WxPresetGraphql).toMatchInlineSnapshot();
  });
});
