import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import meadowRug02 from './meadow-rug-02';

describe(`with meadowRug02 preset`, () => {
  it(`should return a meadowRug02 preset`, () => {
    const meadowRug02Preset = meadowRug02().build<TProductVariantDraft>();
    expect(meadowRug02Preset).toMatchInlineSnapshot(``);
  });

  it(`should return a meadowRug02 preset when built for graphql`, () => {
    const meadowRug02PresetGraphql =
      meadowRug02().buildGraphql<TProductVariantDraftGraphql>();
    expect(meadowRug02PresetGraphql).toMatchInlineSnapshot(``);
  });
});
