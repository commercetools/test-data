import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuSs123QrBlueEuWarehouse preset`, () => {
  it(`should return a skuSs123QrBlueEuWarehouse preset when built for rest`, () => {
    const skuSs123QrBlueEuWarehousePreset = InventoryEntryDraftRest.presets
      .skuSs123QrBlueEuWarehouse()
      .build();
    expect(skuSs123QrBlueEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuSs123QrBlueEuWarehouse preset when built for graphql`, () => {
    const skuSs123QrBlueEuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuSs123QrBlueEuWarehouse()
      .build();
    expect(skuSs123QrBlueEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuSs123QrBlueEuWarehouse preset when built for legacy rest`, () => {
    const skuSs123QrBlueEuWarehousePreset = InventoryEntryDraft.presets
      .skuSs123QrBlueEuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuSs123QrBlueEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuSs123QrBlueEuWarehouse preset when built for legacy graphql`, () => {
    const skuSs123QrBlueEuWarehousePreset = InventoryEntryDraft.presets
      .skuSs123QrBlueEuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuSs123QrBlueEuWarehousePreset).toMatchInlineSnapshot();
  });
});
