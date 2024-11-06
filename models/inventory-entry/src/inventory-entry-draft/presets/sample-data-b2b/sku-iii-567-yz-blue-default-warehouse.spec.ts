import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuIii567YzBlueDefaultWarehouse preset`, () => {
  it(`should return a skuIii567YzBlueDefaultWarehouse preset when built for rest`, () => {
    const skuIii567YzBlueDefaultWarehousePreset =
      InventoryEntryDraftRest.presets.skuIii567YzBlueDefaultWarehouse().build();
    expect(skuIii567YzBlueDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuIii567YzBlueDefaultWarehouse preset when built for graphql`, () => {
    const skuIii567YzBlueDefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuIii567YzBlueDefaultWarehouse()
        .build();
    expect(skuIii567YzBlueDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuIii567YzBlueDefaultWarehouse preset when built for legacy rest`, () => {
    const skuIii567YzBlueDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuIii567YzBlueDefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuIii567YzBlueDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuIii567YzBlueDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuIii567YzBlueDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuIii567YzBlueDefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuIii567YzBlueDefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
