import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuJjj890OpBlueDefaultWarehouse preset`, () => {
  it(`should return a skuJjj890OpBlueDefaultWarehouse preset when built for rest`, () => {
    const skuJjj890OpBlueDefaultWarehousePreset =
      InventoryEntryDraftRest.presets.skuJjj890OpBlueDefaultWarehouse().build();
    expect(skuJjj890OpBlueDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuJjj890OpBlueDefaultWarehouse preset when built for graphql`, () => {
    const skuJjj890OpBlueDefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuJjj890OpBlueDefaultWarehouse()
        .build();
    expect(skuJjj890OpBlueDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuJjj890OpBlueDefaultWarehouse preset when built for legacy rest`, () => {
    const skuJjj890OpBlueDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuJjj890OpBlueDefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuJjj890OpBlueDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuJjj890OpBlueDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuJjj890OpBlueDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuJjj890OpBlueDefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuJjj890OpBlueDefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
