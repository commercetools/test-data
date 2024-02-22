import type { TProductDraft } from '../../../types';
import s567Uv from './s-567-uv';

describe(`with s567Uv preset`, () => {
  it(`should return a s567Uv preset`, () => {
    const s567UvPreset = s567Uv().build<TProductDraft>();
    expect(s567UvPreset).toMatchInlineSnapshot();
  });

  it(`should return a s567Uv preset when built for graphql`, () => {
    const s567UvPresetGraphql = s567Uv().buildGraphql<TProductDraft>();
    expect(s567UvPresetGraphql).toMatchInlineSnapshot();
  });
});
