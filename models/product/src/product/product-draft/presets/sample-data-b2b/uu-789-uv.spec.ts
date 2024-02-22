import type { TProductDraft } from '../../../types';
import uu789Uv from './uu-789-uv';

describe(`with uu789Uv preset`, () => {
  it(`should return a uu789Uv preset`, () => {
    const uu789UvPreset = uu789Uv().build<TProductDraft>();
    expect(uu789UvPreset).toMatchInlineSnapshot();
  });

  it(`should return a uu789Uv preset when built for graphql`, () => {
    const uu789UvPresetGraphql = uu789Uv().buildGraphql<TProductDraft>();
    expect(uu789UvPresetGraphql).toMatchInlineSnapshot();
  });
});
