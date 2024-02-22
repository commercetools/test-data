import type { TProductDraft } from '../../../types';
import vv234Wx from './vv-234-wx';

describe(`with vv234Wx preset`, () => {
  it(`should return a vv234Wx preset`, () => {
    const vv234WxPreset = vv234Wx().build<TProductDraft>();
    expect(vv234WxPreset).toMatchInlineSnapshot();
  });

  it(`should return a vv234Wx preset when built for graphql`, () => {
    const vv234WxPresetGraphql = vv234Wx().buildGraphql<TProductDraft>();
    expect(vv234WxPresetGraphql).toMatchInlineSnapshot();
  });
});
