import type { TProductDraft } from '../../../types';
import w789Uv from './w-789-uv';

describe(`with w789Uv preset`, () => {
  it(`should return a w789Uv preset`, () => {
    const w789UvPreset = w789Uv().build<TProductDraft>();
    expect(w789UvPreset).toMatchInlineSnapshot();
  });

  it(`should return a w789Uv preset when built for graphql`, () => {
    const w789UvPresetGraphql = w789Uv().buildGraphql<TProductDraft>();
    expect(w789UvPresetGraphql).toMatchInlineSnapshot();
  });
});
