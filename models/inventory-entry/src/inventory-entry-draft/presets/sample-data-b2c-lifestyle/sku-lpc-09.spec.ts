import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuLpc09 preset`, () => {
  it(`should return a skuLpc09 preset when built for rest`, () => {
    const skuLpc09Preset = InventoryEntryDraftRest.presets.skuLpc09().build();
    expect(skuLpc09Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuLpc09 preset when built for graphql`, () => {
    const skuLpc09Preset = InventoryEntryDraftGraphql.presets
      .skuLpc09()
      .build();
    expect(skuLpc09Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuLpc09 preset when built for legacy rest`, () => {
    const skuLpc09Preset = InventoryEntryDraft.presets
      .skuLpc09()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuLpc09Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuLpc09 preset when built for legacy graphql`, () => {
    const skuLpc09Preset = InventoryEntryDraft.presets
      .skuLpc09()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuLpc09Preset).toMatchInlineSnapshot();
  });
});
