import type { TProductDraft } from '../../../types';
import rusticOvenCasserole from './rustic-oven-casserole';
import productDraft from './rustic-oven-casserole.spec.json';

describe(`with rusticOvenCasserole preset`, () => {
  it(`should return a rusticOvenCasserole preset`, () => {
    const rusticOvenCasserolePreset =
      rusticOvenCasserole().build<TProductDraft>();
    expect(rusticOvenCasserolePreset).toMatchObject(productDraft.rest);
  });

  it(`should return a rusticOvenCasserole preset when built for graphql`, () => {
    const rusticOvenCasserolePresetGraphql =
      rusticOvenCasserole().buildGraphql<TProductDraft>();
    expect(rusticOvenCasserolePresetGraphql).toMatchObject(
      productDraft.graphql
    );
  });
});
