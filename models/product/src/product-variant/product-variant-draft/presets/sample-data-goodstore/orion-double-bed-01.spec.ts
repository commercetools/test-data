import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import orionDoubleBed01 from './orion-double-bed-01';

describe(`with orionDoubleBed01 preset`, () => {
  it(`should return a orionDoubleBed01 preset`, () => {
    const orionDoubleBed01Preset =
      orionDoubleBed01().build<TProductVariantDraft>();
    expect(orionDoubleBed01Preset).toMatchInlineSnapshot(``);
  });

  it(`should return a orionDoubleBed01 preset when built for graphql`, () => {
    const orionDoubleBed01PresetGraphql =
      orionDoubleBed01().buildGraphql<TProductVariantDraftGraphql>();
    expect(orionDoubleBed01PresetGraphql).toMatchInlineSnapshot(``);
  });
});
