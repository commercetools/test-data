import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuCcc567YzBlueUsWarehouse preset`, () => {
  it(`should return a skuCcc567YzBlueUsWarehouse preset when built for rest`, () => {
    const skuCcc567YzBlueUsWarehousePreset = InventoryEntryDraftRest.presets
      .skuCcc567YzBlueUsWarehouse()
      .build();
    expect(skuCcc567YzBlueUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuCcc567YzBlueUsWarehouse preset when built for graphql`, () => {
    const skuCcc567YzBlueUsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuCcc567YzBlueUsWarehouse()
      .build();
    expect(skuCcc567YzBlueUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuCcc567YzBlueUsWarehouse preset when built for legacy rest`, () => {
    const skuCcc567YzBlueUsWarehousePreset = InventoryEntryDraft.presets
      .skuCcc567YzBlueUsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuCcc567YzBlueUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuCcc567YzBlueUsWarehouse preset when built for legacy graphql`, () => {
    const skuCcc567YzBlueUsWarehousePreset = InventoryEntryDraft.presets
      .skuCcc567YzBlueUsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuCcc567YzBlueUsWarehousePreset).toMatchInlineSnapshot();
  });
});
