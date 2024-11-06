import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuDdd890OpRedUsWarehouse preset`, () => {
  it(`should return a skuDdd890OpRedUsWarehouse preset when built for rest`, () => {
    const skuDdd890OpRedUsWarehousePreset = InventoryEntryDraftRest.presets
      .skuDdd890OpRedUsWarehouse()
      .build();
    expect(skuDdd890OpRedUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuDdd890OpRedUsWarehouse preset when built for graphql`, () => {
    const skuDdd890OpRedUsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuDdd890OpRedUsWarehouse()
      .build();
    expect(skuDdd890OpRedUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuDdd890OpRedUsWarehouse preset when built for legacy rest`, () => {
    const skuDdd890OpRedUsWarehousePreset = InventoryEntryDraft.presets
      .skuDdd890OpRedUsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuDdd890OpRedUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuDdd890OpRedUsWarehouse preset when built for legacy graphql`, () => {
    const skuDdd890OpRedUsWarehousePreset = InventoryEntryDraft.presets
      .skuDdd890OpRedUsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuDdd890OpRedUsWarehousePreset).toMatchInlineSnapshot();
  });
});
