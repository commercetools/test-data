import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuAdpc09 preset`, () => {
  it(`should return a skuAdpc09 preset when built for rest`, () => {
    const skuAdpc09Preset = InventoryEntryDraftRest.presets.skuAdpc09().build();
    expect(skuAdpc09Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuAdpc09 preset when built for graphql`, () => {
    const skuAdpc09Preset = InventoryEntryDraftGraphql.presets
      .skuAdpc09()
      .build();
    expect(skuAdpc09Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuAdpc09 preset when built for legacy rest`, () => {
    const skuAdpc09Preset = InventoryEntryDraft.presets
      .skuAdpc09()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuAdpc09Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuAdpc09 preset when built for legacy graphql`, () => {
    const skuAdpc09Preset = InventoryEntryDraft.presets
      .skuAdpc09()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuAdpc09Preset).toMatchInlineSnapshot();
  });
});
