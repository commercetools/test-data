import type { TProductDraft } from '../../../types';
import hhh234Wx from './hhh-234-wx';

describe(`with hhh234Wx preset`, () => {
  it(`should return a hhh234Wx preset`, () => {
    const hhh234WxPreset = hhh234Wx().build<TProductDraft>();
    expect(hhh234WxPreset).toMatchInlineSnapshot();
  });

  it(`should return a hhh234Wx preset when built for graphql`, () => {
    const hhh234WxPresetGraphql = hhh234Wx().buildGraphql<TProductDraft>();
    expect(hhh234WxPresetGraphql).toMatchInlineSnapshot();
  });
});
