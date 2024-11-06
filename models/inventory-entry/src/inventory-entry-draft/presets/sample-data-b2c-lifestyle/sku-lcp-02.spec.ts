import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuLcp02 preset`, () => {
  it(`should return a skuLcp02 preset when built for rest`, () => {
    const skuLcp02Preset = InventoryEntryDraftRest.presets.skuLcp02().build();
    expect(skuLcp02Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuLcp02 preset when built for graphql`, () => {
    const skuLcp02Preset = InventoryEntryDraftGraphql.presets
      .skuLcp02()
      .build();
    expect(skuLcp02Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuLcp02 preset when built for legacy rest`, () => {
    const skuLcp02Preset = InventoryEntryDraft.presets
      .skuLcp02()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuLcp02Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuLcp02 preset when built for legacy graphql`, () => {
    const skuLcp02Preset = InventoryEntryDraft.presets
      .skuLcp02()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuLcp02Preset).toMatchInlineSnapshot();
  });
});
