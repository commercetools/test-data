import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuGgg789UvRedUsWarehouse preset`, () => {
  it(`should return a skuGgg789UvRedUsWarehouse preset when built for rest`, () => {
    const skuGgg789UvRedUsWarehousePreset = InventoryEntryDraftRest.presets
      .skuGgg789UvRedUsWarehouse()
      .build();
    expect(skuGgg789UvRedUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuGgg789UvRedUsWarehouse preset when built for graphql`, () => {
    const skuGgg789UvRedUsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuGgg789UvRedUsWarehouse()
      .build();
    expect(skuGgg789UvRedUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuGgg789UvRedUsWarehouse preset when built for legacy rest`, () => {
    const skuGgg789UvRedUsWarehousePreset = InventoryEntryDraft.presets
      .skuGgg789UvRedUsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuGgg789UvRedUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuGgg789UvRedUsWarehouse preset when built for legacy graphql`, () => {
    const skuGgg789UvRedUsWarehousePreset = InventoryEntryDraft.presets
      .skuGgg789UvRedUsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuGgg789UvRedUsWarehousePreset).toMatchInlineSnapshot();
  });
});
