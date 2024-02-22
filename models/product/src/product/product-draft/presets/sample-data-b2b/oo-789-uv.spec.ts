import type { TProductDraft } from '../../../types';
import oo789Uv from './oo-789-uv';

describe(`with oo789Uv preset`, () => {
  it(`should return a oo789Uv preset`, () => {
    const oo789UvPreset = oo789Uv().build<TProductDraft>();
    expect(oo789UvPreset).toMatchInlineSnapshot();
  });

  it(`should return a oo789Uv preset when built for graphql`, () => {
    const oo789UvPresetGraphql = oo789Uv().buildGraphql<TProductDraft>();
    expect(oo789UvPresetGraphql).toMatchInlineSnapshot();
  });
});
