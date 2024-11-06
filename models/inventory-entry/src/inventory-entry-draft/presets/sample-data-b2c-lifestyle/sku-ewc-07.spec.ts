import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuEwc07 preset`, () => {
  it(`should return a skuEwc07 preset when built for rest`, () => {
    const skuEwc07Preset = InventoryEntryDraftRest.presets.skuEwc07().build();
    expect(skuEwc07Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuEwc07 preset when built for graphql`, () => {
    const skuEwc07Preset = InventoryEntryDraftGraphql.presets
      .skuEwc07()
      .build();
    expect(skuEwc07Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuEwc07 preset when built for legacy rest`, () => {
    const skuEwc07Preset = InventoryEntryDraft.presets
      .skuEwc07()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuEwc07Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuEwc07 preset when built for legacy graphql`, () => {
    const skuEwc07Preset = InventoryEntryDraft.presets
      .skuEwc07()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuEwc07Preset).toMatchInlineSnapshot();
  });
});
