import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuWw567YzBlueDefaultWarehouse preset`, () => {
  it(`should return a skuWw567YzBlueDefaultWarehouse preset when built for rest`, () => {
    const skuWw567YzBlueDefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuWw567YzBlueDefaultWarehouse()
      .build();
    expect(skuWw567YzBlueDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuWw567YzBlueDefaultWarehouse preset when built for graphql`, () => {
    const skuWw567YzBlueDefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuWw567YzBlueDefaultWarehouse()
        .build();
    expect(skuWw567YzBlueDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuWw567YzBlueDefaultWarehouse preset when built for legacy rest`, () => {
    const skuWw567YzBlueDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuWw567YzBlueDefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuWw567YzBlueDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuWw567YzBlueDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuWw567YzBlueDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuWw567YzBlueDefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuWw567YzBlueDefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
