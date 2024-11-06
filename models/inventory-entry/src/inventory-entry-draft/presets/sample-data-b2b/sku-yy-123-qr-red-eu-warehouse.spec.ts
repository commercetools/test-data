import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuYy123QrRedEuWarehouse preset`, () => {
  it(`should return a skuYy123QrRedEuWarehouse preset when built for rest`, () => {
    const skuYy123QrRedEuWarehousePreset = InventoryEntryDraftRest.presets
      .skuYy123QrRedEuWarehouse()
      .build();
    expect(skuYy123QrRedEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuYy123QrRedEuWarehouse preset when built for graphql`, () => {
    const skuYy123QrRedEuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuYy123QrRedEuWarehouse()
      .build();
    expect(skuYy123QrRedEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuYy123QrRedEuWarehouse preset when built for legacy rest`, () => {
    const skuYy123QrRedEuWarehousePreset = InventoryEntryDraft.presets
      .skuYy123QrRedEuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuYy123QrRedEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuYy123QrRedEuWarehouse preset when built for legacy graphql`, () => {
    const skuYy123QrRedEuWarehousePreset = InventoryEntryDraft.presets
      .skuYy123QrRedEuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuYy123QrRedEuWarehousePreset).toMatchInlineSnapshot();
  });
});
