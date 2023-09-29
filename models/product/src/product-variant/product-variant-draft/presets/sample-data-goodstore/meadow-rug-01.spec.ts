import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import meadowRug01 from './meadow-rug-01';

describe(`with meadowRug01 preset`, () => {
  it(`should return a meadowRug01 preset`, () => {
    const meadowRug01Preset = meadowRug01().build<TProductVariantDraft>();
    expect(meadowRug01Preset).toMatchInlineSnapshot(``);
  });

  it(`should return a meadowRug01 preset when built for graphql`, () => {
    const meadowRug01PresetGraphql =
      meadowRug01().buildGraphql<TProductVariantDraftGraphql>();
    expect(meadowRug01PresetGraphql).toMatchInlineSnapshot(``);
  });
});
