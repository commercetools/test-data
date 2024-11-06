import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuAaa789UvRedUsWarehouse preset`, () => {
  it(`should return a skuAaa789UvRedUsWarehouse preset when built for rest`, () => {
    const skuAaa789UvRedUsWarehousePreset = InventoryEntryDraftRest.presets
      .skuAaa789UvRedUsWarehouse()
      .build();
    expect(skuAaa789UvRedUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuAaa789UvRedUsWarehouse preset when built for graphql`, () => {
    const skuAaa789UvRedUsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuAaa789UvRedUsWarehouse()
      .build();
    expect(skuAaa789UvRedUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuAaa789UvRedUsWarehouse preset when built for legacy rest`, () => {
    const skuAaa789UvRedUsWarehousePreset = InventoryEntryDraft.presets
      .skuAaa789UvRedUsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuAaa789UvRedUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuAaa789UvRedUsWarehouse preset when built for legacy graphql`, () => {
    const skuAaa789UvRedUsWarehousePreset = InventoryEntryDraft.presets
      .skuAaa789UvRedUsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuAaa789UvRedUsWarehousePreset).toMatchInlineSnapshot();
  });
});
