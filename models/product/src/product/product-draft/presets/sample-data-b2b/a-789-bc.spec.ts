import type { TProductDraft } from '../../../types';
import a789Bc from './a-789-bc';

describe(`with a789Bc preset`, () => {
  it(`should return a a789Bc preset`, () => {
    const a789BcPreset = a789Bc().build<TProductDraft>();
    expect(a789BcPreset).toMatchInlineSnapshot();
  });

  it(`should return a a789Bc preset when built for graphql`, () => {
    const a789BcPresetGraphql = a789Bc().buildGraphql<TProductDraft>();
    expect(a789BcPresetGraphql).toMatchInlineSnapshot();
  });
});
