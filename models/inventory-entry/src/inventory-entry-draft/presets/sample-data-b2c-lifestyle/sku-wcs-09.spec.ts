import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuWcs09 preset`, () => {
  it(`should return a skuWcs09 preset when built for rest`, () => {
    const skuWcs09Preset = InventoryEntryDraftRest.presets.skuWcs09().build();
    expect(skuWcs09Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuWcs09 preset when built for graphql`, () => {
    const skuWcs09Preset = InventoryEntryDraftGraphql.presets
      .skuWcs09()
      .build();
    expect(skuWcs09Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuWcs09 preset when built for legacy rest`, () => {
    const skuWcs09Preset = InventoryEntryDraft.presets
      .skuWcs09()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuWcs09Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuWcs09 preset when built for legacy graphql`, () => {
    const skuWcs09Preset = InventoryEntryDraft.presets
      .skuWcs09()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuWcs09Preset).toMatchInlineSnapshot();
  });
});
