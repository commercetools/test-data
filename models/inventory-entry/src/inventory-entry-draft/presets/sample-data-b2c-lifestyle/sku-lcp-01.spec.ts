import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuLcp01 preset`, () => {
  it(`should return a skuLcp01 preset when built for rest`, () => {
    const skuLcp01Preset = InventoryEntryDraftRest.presets.skuLcp01().build();
    expect(skuLcp01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuLcp01 preset when built for graphql`, () => {
    const skuLcp01Preset = InventoryEntryDraftGraphql.presets
      .skuLcp01()
      .build();
    expect(skuLcp01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuLcp01 preset when built for legacy rest`, () => {
    const skuLcp01Preset = InventoryEntryDraft.presets
      .skuLcp01()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuLcp01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuLcp01 preset when built for legacy graphql`, () => {
    const skuLcp01Preset = InventoryEntryDraft.presets
      .skuLcp01()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuLcp01Preset).toMatchInlineSnapshot();
  });
});
