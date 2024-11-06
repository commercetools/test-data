import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuUu789UvBlueUsWarehouse preset`, () => {
  it(`should return a skuUu789UvBlueUsWarehouse preset when built for rest`, () => {
    const skuUu789UvBlueUsWarehousePreset = InventoryEntryDraftRest.presets
      .skuUu789UvBlueUsWarehouse()
      .build();
    expect(skuUu789UvBlueUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuUu789UvBlueUsWarehouse preset when built for graphql`, () => {
    const skuUu789UvBlueUsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuUu789UvBlueUsWarehouse()
      .build();
    expect(skuUu789UvBlueUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuUu789UvBlueUsWarehouse preset when built for legacy rest`, () => {
    const skuUu789UvBlueUsWarehousePreset = InventoryEntryDraft.presets
      .skuUu789UvBlueUsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuUu789UvBlueUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuUu789UvBlueUsWarehouse preset when built for legacy graphql`, () => {
    const skuUu789UvBlueUsWarehousePreset = InventoryEntryDraft.presets
      .skuUu789UvBlueUsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuUu789UvBlueUsWarehousePreset).toMatchInlineSnapshot();
  });
});
