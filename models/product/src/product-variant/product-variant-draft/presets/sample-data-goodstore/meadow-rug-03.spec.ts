import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import meadowRug03 from './meadow-rug-03';

describe(`with meadowRug03 preset`, () => {
  it(`should return a meadowRug03 preset`, () => {
    const meadowRug03Preset = meadowRug03().build<TProductVariantDraft>();
    expect(meadowRug03Preset).toMatchInlineSnapshot(``);
  });

  it(`should return a meadowRug03 preset when built for graphql`, () => {
    const meadowRug03PresetGraphql =
      meadowRug03().buildGraphql<TProductVariantDraftGraphql>();
    expect(meadowRug03PresetGraphql).toMatchInlineSnapshot(``);
  });
});
