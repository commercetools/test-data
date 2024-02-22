import type { TProductDraft } from '../../../types';
import c789Uv from './c-789-uv';

describe(`with c789Uv preset`, () => {
  it(`should return a c789Uv preset`, () => {
    const c789UvPreset = c789Uv().build<TProductDraft>();
    expect(c789UvPreset).toMatchInlineSnapshot();
  });

  it(`should return a c789Uv preset when built for graphql`, () => {
    const c789UvPresetGraphql = c789Uv().buildGraphql<TProductDraft>();
    expect(c789UvPresetGraphql).toMatchInlineSnapshot();
  });
});
