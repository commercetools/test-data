import type { TProductDraft } from '../../../types';
import ii789Uv from './ii-789-uv';

describe(`with ii789Uv preset`, () => {
  it(`should return a ii789Uv preset`, () => {
    const ii789UvPreset = ii789Uv().build<TProductDraft>();
    expect(ii789UvPreset).toMatchInlineSnapshot();
  });

  it(`should return a ii789Uv preset when built for graphql`, () => {
    const ii789UvPresetGraphql = ii789Uv().buildGraphql<TProductDraft>();
    expect(ii789UvPresetGraphql).toMatchInlineSnapshot();
  });
});
