import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuGgg789UvBlueUsWarehouse preset`, () => {
  it(`should return a skuGgg789UvBlueUsWarehouse preset when built for rest`, () => {
    const skuGgg789UvBlueUsWarehousePreset = InventoryEntryDraftRest.presets
      .skuGgg789UvBlueUsWarehouse()
      .build();
    expect(skuGgg789UvBlueUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuGgg789UvBlueUsWarehouse preset when built for graphql`, () => {
    const skuGgg789UvBlueUsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuGgg789UvBlueUsWarehouse()
      .build();
    expect(skuGgg789UvBlueUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuGgg789UvBlueUsWarehouse preset when built for legacy rest`, () => {
    const skuGgg789UvBlueUsWarehousePreset = InventoryEntryDraft.presets
      .skuGgg789UvBlueUsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuGgg789UvBlueUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuGgg789UvBlueUsWarehouse preset when built for legacy graphql`, () => {
    const skuGgg789UvBlueUsWarehousePreset = InventoryEntryDraft.presets
      .skuGgg789UvBlueUsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuGgg789UvBlueUsWarehousePreset).toMatchInlineSnapshot();
  });
});
