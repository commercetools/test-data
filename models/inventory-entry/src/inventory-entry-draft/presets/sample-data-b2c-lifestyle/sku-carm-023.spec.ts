import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuCarm023 preset`, () => {
  it(`should return a skuCarm023 preset when built for rest`, () => {
    const skuCarm023Preset = InventoryEntryDraftRest.presets
      .skuCarm023()
      .build();
    expect(skuCarm023Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuCarm023 preset when built for graphql`, () => {
    const skuCarm023Preset = InventoryEntryDraftGraphql.presets
      .skuCarm023()
      .build();
    expect(skuCarm023Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuCarm023 preset when built for legacy rest`, () => {
    const skuCarm023Preset = InventoryEntryDraft.presets
      .skuCarm023()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuCarm023Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuCarm023 preset when built for legacy graphql`, () => {
    const skuCarm023Preset = InventoryEntryDraft.presets
      .skuCarm023()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuCarm023Preset).toMatchInlineSnapshot();
  });
});
