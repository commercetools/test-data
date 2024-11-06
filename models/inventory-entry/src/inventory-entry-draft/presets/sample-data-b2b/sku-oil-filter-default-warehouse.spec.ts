import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuOilFilterDefaultWarehouse preset`, () => {
  it(`should return a skuOilFilterDefaultWarehouse preset when built for rest`, () => {
    const skuOilFilterDefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuOilFilterDefaultWarehouse()
      .build();
    expect(skuOilFilterDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuOilFilterDefaultWarehouse preset when built for graphql`, () => {
    const skuOilFilterDefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets.skuOilFilterDefaultWarehouse().build();
    expect(skuOilFilterDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuOilFilterDefaultWarehouse preset when built for legacy rest`, () => {
    const skuOilFilterDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuOilFilterDefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuOilFilterDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuOilFilterDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuOilFilterDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuOilFilterDefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuOilFilterDefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
