import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuYy123QrBlueEuWarehouse preset`, () => {
  it(`should return a skuYy123QrBlueEuWarehouse preset when built for rest`, () => {
    const skuYy123QrBlueEuWarehousePreset = InventoryEntryDraftRest.presets
      .skuYy123QrBlueEuWarehouse()
      .build();
    expect(skuYy123QrBlueEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuYy123QrBlueEuWarehouse preset when built for graphql`, () => {
    const skuYy123QrBlueEuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuYy123QrBlueEuWarehouse()
      .build();
    expect(skuYy123QrBlueEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuYy123QrBlueEuWarehouse preset when built for legacy rest`, () => {
    const skuYy123QrBlueEuWarehousePreset = InventoryEntryDraft.presets
      .skuYy123QrBlueEuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuYy123QrBlueEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuYy123QrBlueEuWarehouse preset when built for legacy graphql`, () => {
    const skuYy123QrBlueEuWarehousePreset = InventoryEntryDraft.presets
      .skuYy123QrBlueEuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuYy123QrBlueEuWarehousePreset).toMatchInlineSnapshot();
  });
});
