import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuSs123QrGreenDefaultWarehouse preset`, () => {
  it(`should return a skuSs123QrGreenDefaultWarehouse preset when built for rest`, () => {
    const skuSs123QrGreenDefaultWarehousePreset =
      InventoryEntryDraftRest.presets.skuSs123QrGreenDefaultWarehouse().build();
    expect(skuSs123QrGreenDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuSs123QrGreenDefaultWarehouse preset when built for graphql`, () => {
    const skuSs123QrGreenDefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuSs123QrGreenDefaultWarehouse()
        .build();
    expect(skuSs123QrGreenDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuSs123QrGreenDefaultWarehouse preset when built for legacy rest`, () => {
    const skuSs123QrGreenDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuSs123QrGreenDefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuSs123QrGreenDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuSs123QrGreenDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuSs123QrGreenDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuSs123QrGreenDefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuSs123QrGreenDefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
