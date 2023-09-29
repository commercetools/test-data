import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import naturaRug01 from './natura-rug-01';

describe(`with naturaRug01 preset`, () => {
  it(`should return a naturaRug01 preset`, () => {
    const naturaRug01Preset = naturaRug01().build<TProductVariantDraft>();
    expect(naturaRug01Preset).toMatchInlineSnapshot(``);
  });

  it(`should return a naturaRug01 preset when built for graphql`, () => {
    const naturaRug01PresetGraphql =
      naturaRug01().buildGraphql<TProductVariantDraftGraphql>();
    expect(naturaRug01PresetGraphql).toMatchInlineSnapshot(``);
  });
});
