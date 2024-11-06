import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuDweg09 preset`, () => {
  it(`should return a skuDweg09 preset when built for rest`, () => {
    const skuDweg09Preset = InventoryEntryDraftRest.presets.skuDweg09().build();
    expect(skuDweg09Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuDweg09 preset when built for graphql`, () => {
    const skuDweg09Preset = InventoryEntryDraftGraphql.presets
      .skuDweg09()
      .build();
    expect(skuDweg09Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuDweg09 preset when built for legacy rest`, () => {
    const skuDweg09Preset = InventoryEntryDraft.presets
      .skuDweg09()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuDweg09Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuDweg09 preset when built for legacy graphql`, () => {
    const skuDweg09Preset = InventoryEntryDraft.presets
      .skuDweg09()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuDweg09Preset).toMatchInlineSnapshot();
  });
});
