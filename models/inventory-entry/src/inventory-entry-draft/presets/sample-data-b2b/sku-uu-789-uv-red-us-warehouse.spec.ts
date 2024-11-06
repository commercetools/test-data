import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuUu789UvRedUsWarehouse preset`, () => {
  it(`should return a skuUu789UvRedUsWarehouse preset when built for rest`, () => {
    const skuUu789UvRedUsWarehousePreset = InventoryEntryDraftRest.presets
      .skuUu789UvRedUsWarehouse()
      .build();
    expect(skuUu789UvRedUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuUu789UvRedUsWarehouse preset when built for graphql`, () => {
    const skuUu789UvRedUsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuUu789UvRedUsWarehouse()
      .build();
    expect(skuUu789UvRedUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuUu789UvRedUsWarehouse preset when built for legacy rest`, () => {
    const skuUu789UvRedUsWarehousePreset = InventoryEntryDraft.presets
      .skuUu789UvRedUsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuUu789UvRedUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuUu789UvRedUsWarehouse preset when built for legacy graphql`, () => {
    const skuUu789UvRedUsWarehousePreset = InventoryEntryDraft.presets
      .skuUu789UvRedUsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuUu789UvRedUsWarehousePreset).toMatchInlineSnapshot();
  });
});
