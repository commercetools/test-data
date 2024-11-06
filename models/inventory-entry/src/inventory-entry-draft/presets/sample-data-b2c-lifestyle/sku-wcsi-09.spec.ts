import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuWcsi09 preset`, () => {
  it(`should return a skuWcsi09 preset when built for rest`, () => {
    const skuWcsi09Preset = InventoryEntryDraftRest.presets.skuWcsi09().build();
    expect(skuWcsi09Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuWcsi09 preset when built for graphql`, () => {
    const skuWcsi09Preset = InventoryEntryDraftGraphql.presets
      .skuWcsi09()
      .build();
    expect(skuWcsi09Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuWcsi09 preset when built for legacy rest`, () => {
    const skuWcsi09Preset = InventoryEntryDraft.presets
      .skuWcsi09()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuWcsi09Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuWcsi09 preset when built for legacy graphql`, () => {
    const skuWcsi09Preset = InventoryEntryDraft.presets
      .skuWcsi09()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuWcsi09Preset).toMatchInlineSnapshot();
  });
});
