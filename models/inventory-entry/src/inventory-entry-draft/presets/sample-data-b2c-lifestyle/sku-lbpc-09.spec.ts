import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuLbpc09 preset`, () => {
  it(`should return a skuLbpc09 preset when built for rest`, () => {
    const skuLbpc09Preset = InventoryEntryDraftRest.presets.skuLbpc09().build();
    expect(skuLbpc09Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuLbpc09 preset when built for graphql`, () => {
    const skuLbpc09Preset = InventoryEntryDraftGraphql.presets
      .skuLbpc09()
      .build();
    expect(skuLbpc09Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuLbpc09 preset when built for legacy rest`, () => {
    const skuLbpc09Preset = InventoryEntryDraft.presets
      .skuLbpc09()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuLbpc09Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuLbpc09 preset when built for legacy graphql`, () => {
    const skuLbpc09Preset = InventoryEntryDraft.presets
      .skuLbpc09()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuLbpc09Preset).toMatchInlineSnapshot();
  });
});
