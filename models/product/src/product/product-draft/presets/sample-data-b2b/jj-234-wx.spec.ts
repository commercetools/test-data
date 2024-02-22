import type { TProductDraft } from '../../../types';
import jj234Wx from './jj-234-wx';

describe(`with jj234Wx preset`, () => {
  it(`should return a jj234Wx preset`, () => {
    const jj234WxPreset = jj234Wx().build<TProductDraft>();
    expect(jj234WxPreset).toMatchInlineSnapshot();
  });

  it(`should return a jj234Wx preset when built for graphql`, () => {
    const jj234WxPresetGraphql = jj234Wx().buildGraphql<TProductDraft>();
    expect(jj234WxPresetGraphql).toMatchInlineSnapshot();
  });
});
