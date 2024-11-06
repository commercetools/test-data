import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuYy123QrBlueUsWarehouse preset`, () => {
  it(`should return a skuYy123QrBlueUsWarehouse preset when built for rest`, () => {
    const skuYy123QrBlueUsWarehousePreset = InventoryEntryDraftRest.presets
      .skuYy123QrBlueUsWarehouse()
      .build();
    expect(skuYy123QrBlueUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuYy123QrBlueUsWarehouse preset when built for graphql`, () => {
    const skuYy123QrBlueUsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuYy123QrBlueUsWarehouse()
      .build();
    expect(skuYy123QrBlueUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuYy123QrBlueUsWarehouse preset when built for legacy rest`, () => {
    const skuYy123QrBlueUsWarehousePreset = InventoryEntryDraft.presets
      .skuYy123QrBlueUsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuYy123QrBlueUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuYy123QrBlueUsWarehouse preset when built for legacy graphql`, () => {
    const skuYy123QrBlueUsWarehousePreset = InventoryEntryDraft.presets
      .skuYy123QrBlueUsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuYy123QrBlueUsWarehousePreset).toMatchInlineSnapshot();
  });
});
