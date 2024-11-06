import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuStm09 preset`, () => {
  it(`should return a skuStm09 preset when built for rest`, () => {
    const skuStm09Preset = InventoryEntryDraftRest.presets.skuStm09().build();
    expect(skuStm09Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuStm09 preset when built for graphql`, () => {
    const skuStm09Preset = InventoryEntryDraftGraphql.presets
      .skuStm09()
      .build();
    expect(skuStm09Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuStm09 preset when built for legacy rest`, () => {
    const skuStm09Preset = InventoryEntryDraft.presets
      .skuStm09()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuStm09Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuStm09 preset when built for legacy graphql`, () => {
    const skuStm09Preset = InventoryEntryDraft.presets
      .skuStm09()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuStm09Preset).toMatchInlineSnapshot();
  });
});
