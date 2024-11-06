import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuDdd890OpBlueUsWarehouse preset`, () => {
  it(`should return a skuDdd890OpBlueUsWarehouse preset when built for rest`, () => {
    const skuDdd890OpBlueUsWarehousePreset = InventoryEntryDraftRest.presets
      .skuDdd890OpBlueUsWarehouse()
      .build();
    expect(skuDdd890OpBlueUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuDdd890OpBlueUsWarehouse preset when built for graphql`, () => {
    const skuDdd890OpBlueUsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuDdd890OpBlueUsWarehouse()
      .build();
    expect(skuDdd890OpBlueUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuDdd890OpBlueUsWarehouse preset when built for legacy rest`, () => {
    const skuDdd890OpBlueUsWarehousePreset = InventoryEntryDraft.presets
      .skuDdd890OpBlueUsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuDdd890OpBlueUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuDdd890OpBlueUsWarehouse preset when built for legacy graphql`, () => {
    const skuDdd890OpBlueUsWarehousePreset = InventoryEntryDraft.presets
      .skuDdd890OpBlueUsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuDdd890OpBlueUsWarehousePreset).toMatchInlineSnapshot();
  });
});
