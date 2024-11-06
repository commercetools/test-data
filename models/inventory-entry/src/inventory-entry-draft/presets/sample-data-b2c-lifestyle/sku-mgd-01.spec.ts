import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuMgd01 preset`, () => {
  it(`should return a skuMgd01 preset when built for rest`, () => {
    const skuMgd01Preset = InventoryEntryDraftRest.presets.skuMgd01().build();
    expect(skuMgd01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuMgd01 preset when built for graphql`, () => {
    const skuMgd01Preset = InventoryEntryDraftGraphql.presets
      .skuMgd01()
      .build();
    expect(skuMgd01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuMgd01 preset when built for legacy rest`, () => {
    const skuMgd01Preset = InventoryEntryDraft.presets
      .skuMgd01()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuMgd01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuMgd01 preset when built for legacy graphql`, () => {
    const skuMgd01Preset = InventoryEntryDraft.presets
      .skuMgd01()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuMgd01Preset).toMatchInlineSnapshot();
  });
});
