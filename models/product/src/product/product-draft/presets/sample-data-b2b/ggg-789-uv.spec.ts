import type { TProductDraft } from '../../../types';
import ggg789Uv from './ggg-789-uv';

describe(`with ggg789Uv preset`, () => {
  it(`should return a ggg789Uv preset`, () => {
    const ggg789UvPreset = ggg789Uv().build<TProductDraft>();
    expect(ggg789UvPreset).toMatchInlineSnapshot();
  });

  it(`should return a ggg789Uv preset when built for graphql`, () => {
    const ggg789UvPresetGraphql = ggg789Uv().buildGraphql<TProductDraft>();
    expect(ggg789UvPresetGraphql).toMatchInlineSnapshot();
  });
});
