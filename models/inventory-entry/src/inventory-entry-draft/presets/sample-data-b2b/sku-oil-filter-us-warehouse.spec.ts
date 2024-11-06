import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuOilFilterUsWarehouse preset`, () => {
  it(`should return a skuOilFilterUsWarehouse preset when built for rest`, () => {
    const skuOilFilterUsWarehousePreset = InventoryEntryDraftRest.presets
      .skuOilFilterUsWarehouse()
      .build();
    expect(skuOilFilterUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuOilFilterUsWarehouse preset when built for graphql`, () => {
    const skuOilFilterUsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuOilFilterUsWarehouse()
      .build();
    expect(skuOilFilterUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuOilFilterUsWarehouse preset when built for legacy rest`, () => {
    const skuOilFilterUsWarehousePreset = InventoryEntryDraft.presets
      .skuOilFilterUsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuOilFilterUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuOilFilterUsWarehouse preset when built for legacy graphql`, () => {
    const skuOilFilterUsWarehousePreset = InventoryEntryDraft.presets
      .skuOilFilterUsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuOilFilterUsWarehousePreset).toMatchInlineSnapshot();
  });
});
