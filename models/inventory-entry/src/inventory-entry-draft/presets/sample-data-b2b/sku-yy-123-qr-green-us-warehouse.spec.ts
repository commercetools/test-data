import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuYy123QrGreenUsWarehouse preset`, () => {
  it(`should return a skuYy123QrGreenUsWarehouse preset when built for rest`, () => {
    const skuYy123QrGreenUsWarehousePreset = InventoryEntryDraftRest.presets
      .skuYy123QrGreenUsWarehouse()
      .build();
    expect(skuYy123QrGreenUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuYy123QrGreenUsWarehouse preset when built for graphql`, () => {
    const skuYy123QrGreenUsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuYy123QrGreenUsWarehouse()
      .build();
    expect(skuYy123QrGreenUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuYy123QrGreenUsWarehouse preset when built for legacy rest`, () => {
    const skuYy123QrGreenUsWarehousePreset = InventoryEntryDraft.presets
      .skuYy123QrGreenUsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuYy123QrGreenUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuYy123QrGreenUsWarehouse preset when built for legacy graphql`, () => {
    const skuYy123QrGreenUsWarehousePreset = InventoryEntryDraft.presets
      .skuYy123QrGreenUsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuYy123QrGreenUsWarehousePreset).toMatchInlineSnapshot();
  });
});
