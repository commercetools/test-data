import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuYy123QrGreenDefaultWarehouse preset`, () => {
  it(`should return a skuYy123QrGreenDefaultWarehouse preset when built for rest`, () => {
    const skuYy123QrGreenDefaultWarehousePreset =
      InventoryEntryDraftRest.presets.skuYy123QrGreenDefaultWarehouse().build();
    expect(skuYy123QrGreenDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuYy123QrGreenDefaultWarehouse preset when built for graphql`, () => {
    const skuYy123QrGreenDefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuYy123QrGreenDefaultWarehouse()
        .build();
    expect(skuYy123QrGreenDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuYy123QrGreenDefaultWarehouse preset when built for legacy rest`, () => {
    const skuYy123QrGreenDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuYy123QrGreenDefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuYy123QrGreenDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuYy123QrGreenDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuYy123QrGreenDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuYy123QrGreenDefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuYy123QrGreenDefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
