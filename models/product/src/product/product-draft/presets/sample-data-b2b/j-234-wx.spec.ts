import type { TProductDraft } from '../../../types';
import j234Wx from './j-234-wx';

describe(`with j234Wx preset`, () => {
  it(`should return a j234Wx preset`, () => {
    const j234WxPreset = j234Wx().build<TProductDraft>();
    expect(j234WxPreset).toMatchInlineSnapshot();
  });

  it(`should return a j234Wx preset when built for graphql`, () => {
    const j234WxPresetGraphql = j234Wx().buildGraphql<TProductDraft>();
    expect(j234WxPresetGraphql).toMatchInlineSnapshot();
  });
});
