import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuFarm05 preset`, () => {
  it(`should return a skuFarm05 preset when built for rest`, () => {
    const skuFarm05Preset = InventoryEntryDraftRest.presets.skuFarm05().build();
    expect(skuFarm05Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuFarm05 preset when built for graphql`, () => {
    const skuFarm05Preset = InventoryEntryDraftGraphql.presets
      .skuFarm05()
      .build();
    expect(skuFarm05Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuFarm05 preset when built for legacy rest`, () => {
    const skuFarm05Preset = InventoryEntryDraft.presets
      .skuFarm05()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuFarm05Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuFarm05 preset when built for legacy graphql`, () => {
    const skuFarm05Preset = InventoryEntryDraft.presets
      .skuFarm05()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuFarm05Preset).toMatchInlineSnapshot();
  });
});
