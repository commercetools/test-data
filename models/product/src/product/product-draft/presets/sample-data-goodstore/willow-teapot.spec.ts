import type { TProductDraft } from '../../../types';
import willowTeapot from './willow-teapot';

describe(`with willowTeapot preset`, () => {
  it(`should return a willowTeapot preset`, () => {
    const willowTeapotPreset = willowTeapot().build<TProductDraft>();
    expect(willowTeapotPreset).toMatchInlineSnapshot(``);
  });

  it(`should return a willowTeapot preset when built for graphql`, () => {
    const willowTeapotPresetGraphql =
      willowTeapot().buildGraphql<TProductDraft>();
    expect(willowTeapotPresetGraphql).toMatchInlineSnapshot(``);
  });
});
