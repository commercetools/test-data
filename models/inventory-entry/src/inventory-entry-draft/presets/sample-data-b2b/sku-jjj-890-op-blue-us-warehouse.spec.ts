import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuJjj890OpBlueUsWarehouse preset`, () => {
  it(`should return a skuJjj890OpBlueUsWarehouse preset when built for rest`, () => {
    const skuJjj890OpBlueUsWarehousePreset = InventoryEntryDraftRest.presets
      .skuJjj890OpBlueUsWarehouse()
      .build();
    expect(skuJjj890OpBlueUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuJjj890OpBlueUsWarehouse preset when built for graphql`, () => {
    const skuJjj890OpBlueUsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuJjj890OpBlueUsWarehouse()
      .build();
    expect(skuJjj890OpBlueUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuJjj890OpBlueUsWarehouse preset when built for legacy rest`, () => {
    const skuJjj890OpBlueUsWarehousePreset = InventoryEntryDraft.presets
      .skuJjj890OpBlueUsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuJjj890OpBlueUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuJjj890OpBlueUsWarehouse preset when built for legacy graphql`, () => {
    const skuJjj890OpBlueUsWarehousePreset = InventoryEntryDraft.presets
      .skuJjj890OpBlueUsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuJjj890OpBlueUsWarehousePreset).toMatchInlineSnapshot();
  });
});
