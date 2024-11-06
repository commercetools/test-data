import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuSs123QrBlueUsWarehouse preset`, () => {
  it(`should return a skuSs123QrBlueUsWarehouse preset when built for rest`, () => {
    const skuSs123QrBlueUsWarehousePreset = InventoryEntryDraftRest.presets
      .skuSs123QrBlueUsWarehouse()
      .build();
    expect(skuSs123QrBlueUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuSs123QrBlueUsWarehouse preset when built for graphql`, () => {
    const skuSs123QrBlueUsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuSs123QrBlueUsWarehouse()
      .build();
    expect(skuSs123QrBlueUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuSs123QrBlueUsWarehouse preset when built for legacy rest`, () => {
    const skuSs123QrBlueUsWarehousePreset = InventoryEntryDraft.presets
      .skuSs123QrBlueUsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuSs123QrBlueUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuSs123QrBlueUsWarehouse preset when built for legacy graphql`, () => {
    const skuSs123QrBlueUsWarehousePreset = InventoryEntryDraft.presets
      .skuSs123QrBlueUsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuSs123QrBlueUsWarehousePreset).toMatchInlineSnapshot();
  });
});
