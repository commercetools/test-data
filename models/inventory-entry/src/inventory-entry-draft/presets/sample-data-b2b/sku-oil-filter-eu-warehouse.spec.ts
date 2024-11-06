import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuOilFilterEuWarehouse preset`, () => {
  it(`should return a skuOilFilterEuWarehouse preset when built for rest`, () => {
    const skuOilFilterEuWarehousePreset = InventoryEntryDraftRest.presets
      .skuOilFilterEuWarehouse()
      .build();
    expect(skuOilFilterEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuOilFilterEuWarehouse preset when built for graphql`, () => {
    const skuOilFilterEuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuOilFilterEuWarehouse()
      .build();
    expect(skuOilFilterEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuOilFilterEuWarehouse preset when built for legacy rest`, () => {
    const skuOilFilterEuWarehousePreset = InventoryEntryDraft.presets
      .skuOilFilterEuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuOilFilterEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuOilFilterEuWarehouse preset when built for legacy graphql`, () => {
    const skuOilFilterEuWarehousePreset = InventoryEntryDraft.presets
      .skuOilFilterEuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuOilFilterEuWarehousePreset).toMatchInlineSnapshot();
  });
});
