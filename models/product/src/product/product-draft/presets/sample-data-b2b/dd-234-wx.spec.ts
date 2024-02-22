import type { TProductDraft } from '../../../types';
import dd234Wx from './dd-234-wx';

describe(`with dd234Wx preset`, () => {
  it(`should return a dd234Wx preset`, () => {
    const dd234WxPreset = dd234Wx().build<TProductDraft>();
    expect(dd234WxPreset).toMatchInlineSnapshot();
  });

  it(`should return a dd234Wx preset when built for graphql`, () => {
    const dd234WxPresetGraphql = dd234Wx().buildGraphql<TProductDraft>();
    expect(dd234WxPresetGraphql).toMatchInlineSnapshot();
  });
});
