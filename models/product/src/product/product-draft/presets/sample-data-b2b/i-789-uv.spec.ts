import type { TProductDraft } from '../../../types';
import i789Uv from './i-789-uv';

describe(`with i789Uv preset`, () => {
  it(`should return a i789Uv preset`, () => {
    const i789UvPreset = i789Uv().build<TProductDraft>();
    expect(i789UvPreset).toMatchInlineSnapshot();
  });

  it(`should return a i789Uv preset when built for graphql`, () => {
    const i789UvPresetGraphql = i789Uv().buildGraphql<TProductDraft>();
    expect(i789UvPresetGraphql).toMatchInlineSnapshot();
  });
});
