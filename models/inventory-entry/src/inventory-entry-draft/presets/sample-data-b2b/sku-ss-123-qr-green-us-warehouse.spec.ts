import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuSs123QrGreenUsWarehouse preset`, () => {
  it(`should return a skuSs123QrGreenUsWarehouse preset when built for rest`, () => {
    const skuSs123QrGreenUsWarehousePreset = InventoryEntryDraftRest.presets
      .skuSs123QrGreenUsWarehouse()
      .build();
    expect(skuSs123QrGreenUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuSs123QrGreenUsWarehouse preset when built for graphql`, () => {
    const skuSs123QrGreenUsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuSs123QrGreenUsWarehouse()
      .build();
    expect(skuSs123QrGreenUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuSs123QrGreenUsWarehouse preset when built for legacy rest`, () => {
    const skuSs123QrGreenUsWarehousePreset = InventoryEntryDraft.presets
      .skuSs123QrGreenUsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuSs123QrGreenUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuSs123QrGreenUsWarehouse preset when built for legacy graphql`, () => {
    const skuSs123QrGreenUsWarehousePreset = InventoryEntryDraft.presets
      .skuSs123QrGreenUsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuSs123QrGreenUsWarehousePreset).toMatchInlineSnapshot();
  });
});
