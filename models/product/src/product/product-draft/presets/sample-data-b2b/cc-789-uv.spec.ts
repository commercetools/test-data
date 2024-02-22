import type { TProductDraft } from '../../../types';
import cc789Uv from './cc-789-uv';

describe(`with cc789Uv preset`, () => {
  it(`should return a cc789Uv preset`, () => {
    const cc789UvPreset = cc789Uv().build<TProductDraft>();
    expect(cc789UvPreset).toMatchInlineSnapshot();
  });

  it(`should return a cc789Uv preset when built for graphql`, () => {
    const cc789UvPresetGraphql = cc789Uv().buildGraphql<TProductDraft>();
    expect(cc789UvPresetGraphql).toMatchInlineSnapshot();
  });
});
