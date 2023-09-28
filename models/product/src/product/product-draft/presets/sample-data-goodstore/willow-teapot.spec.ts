import type { TProductDraft } from '../../../types';
import willowTeapot from './willow-teapot';
import productDraft from './willow-teapot.spec.json';

describe(`with willowTeapot preset`, () => {
  it(`should return a willowTeapot preset`, () => {
    const willowTeapotPreset = willowTeapot().build<TProductDraft>();
    expect(willowTeapotPreset).toMatchObject(productDraft.rest);
  });

  it(`should return a willowTeapot preset when built for graphql`, () => {
    const willowTeapotPresetGraphql =
      willowTeapot().buildGraphql<TProductDraft>();
    expect(willowTeapotPresetGraphql).toMatchObject(productDraft.graphql);
  });
});
