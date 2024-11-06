import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuDdd890OpBlueDefaultWarehouse preset`, () => {
  it(`should return a skuDdd890OpBlueDefaultWarehouse preset when built for rest`, () => {
    const skuDdd890OpBlueDefaultWarehousePreset =
      InventoryEntryDraftRest.presets.skuDdd890OpBlueDefaultWarehouse().build();
    expect(skuDdd890OpBlueDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuDdd890OpBlueDefaultWarehouse preset when built for graphql`, () => {
    const skuDdd890OpBlueDefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuDdd890OpBlueDefaultWarehouse()
        .build();
    expect(skuDdd890OpBlueDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuDdd890OpBlueDefaultWarehouse preset when built for legacy rest`, () => {
    const skuDdd890OpBlueDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuDdd890OpBlueDefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuDdd890OpBlueDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuDdd890OpBlueDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuDdd890OpBlueDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuDdd890OpBlueDefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuDdd890OpBlueDefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
