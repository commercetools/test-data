import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuMcp01 preset`, () => {
  it(`should return a skuMcp01 preset when built for rest`, () => {
    const skuMcp01Preset = InventoryEntryDraftRest.presets.skuMcp01().build();
    expect(skuMcp01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuMcp01 preset when built for graphql`, () => {
    const skuMcp01Preset = InventoryEntryDraftGraphql.presets
      .skuMcp01()
      .build();
    expect(skuMcp01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuMcp01 preset when built for legacy rest`, () => {
    const skuMcp01Preset = InventoryEntryDraft.presets
      .skuMcp01()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuMcp01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuMcp01 preset when built for legacy graphql`, () => {
    const skuMcp01Preset = InventoryEntryDraft.presets
      .skuMcp01()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuMcp01Preset).toMatchInlineSnapshot();
  });
});
