import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuCcc567YzBlueDefaultWarehouse preset`, () => {
  it(`should return a skuCcc567YzBlueDefaultWarehouse preset when built for rest`, () => {
    const skuCcc567YzBlueDefaultWarehousePreset =
      InventoryEntryDraftRest.presets.skuCcc567YzBlueDefaultWarehouse().build();
    expect(skuCcc567YzBlueDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuCcc567YzBlueDefaultWarehouse preset when built for graphql`, () => {
    const skuCcc567YzBlueDefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuCcc567YzBlueDefaultWarehouse()
        .build();
    expect(skuCcc567YzBlueDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuCcc567YzBlueDefaultWarehouse preset when built for legacy rest`, () => {
    const skuCcc567YzBlueDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuCcc567YzBlueDefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuCcc567YzBlueDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuCcc567YzBlueDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuCcc567YzBlueDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuCcc567YzBlueDefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuCcc567YzBlueDefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
