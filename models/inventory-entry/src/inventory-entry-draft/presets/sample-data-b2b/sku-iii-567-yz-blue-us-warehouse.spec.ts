import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuIii567YzBlueUsWarehouse preset`, () => {
  it(`should return a skuIii567YzBlueUsWarehouse preset when built for rest`, () => {
    const skuIii567YzBlueUsWarehousePreset = InventoryEntryDraftRest.presets
      .skuIii567YzBlueUsWarehouse()
      .build();
    expect(skuIii567YzBlueUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuIii567YzBlueUsWarehouse preset when built for graphql`, () => {
    const skuIii567YzBlueUsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuIii567YzBlueUsWarehouse()
      .build();
    expect(skuIii567YzBlueUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuIii567YzBlueUsWarehouse preset when built for legacy rest`, () => {
    const skuIii567YzBlueUsWarehousePreset = InventoryEntryDraft.presets
      .skuIii567YzBlueUsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuIii567YzBlueUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuIii567YzBlueUsWarehouse preset when built for legacy graphql`, () => {
    const skuIii567YzBlueUsWarehousePreset = InventoryEntryDraft.presets
      .skuIii567YzBlueUsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuIii567YzBlueUsWarehousePreset).toMatchInlineSnapshot();
  });
});
