import type { TProductDraft } from '../../../types';
import pp234Wx from './pp-234-wx';

describe(`with pp234Wx preset`, () => {
  it(`should return a pp234Wx preset`, () => {
    const pp234WxPreset = pp234Wx().build<TProductDraft>();
    expect(pp234WxPreset).toMatchInlineSnapshot();
  });

  it(`should return a pp234Wx preset when built for graphql`, () => {
    const pp234WxPresetGraphql = pp234Wx().buildGraphql<TProductDraft>();
    expect(pp234WxPresetGraphql).toMatchInlineSnapshot();
  });
});
