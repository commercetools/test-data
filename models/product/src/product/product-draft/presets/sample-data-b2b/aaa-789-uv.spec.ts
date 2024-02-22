import type { TProductDraft } from '../../../types';
import aaa789Uv from './aaa-789-uv';

describe(`with aaa789Uv preset`, () => {
  it(`should return a aaa789Uv preset`, () => {
    const aaa789UvPreset = aaa789Uv().build<TProductDraft>();
    expect(aaa789UvPreset).toMatchInlineSnapshot();
  });

  it(`should return a aaa789Uv preset when built for graphql`, () => {
    const aaa789UvPresetGraphql = aaa789Uv().buildGraphql<TProductDraft>();
    expect(aaa789UvPresetGraphql).toMatchInlineSnapshot();
  });
});
