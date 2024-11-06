import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuSs123QrRedEuWarehouse preset`, () => {
  it(`should return a skuSs123QrRedEuWarehouse preset when built for rest`, () => {
    const skuSs123QrRedEuWarehousePreset = InventoryEntryDraftRest.presets
      .skuSs123QrRedEuWarehouse()
      .build();
    expect(skuSs123QrRedEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuSs123QrRedEuWarehouse preset when built for graphql`, () => {
    const skuSs123QrRedEuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuSs123QrRedEuWarehouse()
      .build();
    expect(skuSs123QrRedEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuSs123QrRedEuWarehouse preset when built for legacy rest`, () => {
    const skuSs123QrRedEuWarehousePreset = InventoryEntryDraft.presets
      .skuSs123QrRedEuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuSs123QrRedEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuSs123QrRedEuWarehouse preset when built for legacy graphql`, () => {
    const skuSs123QrRedEuWarehousePreset = InventoryEntryDraft.presets
      .skuSs123QrRedEuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuSs123QrRedEuWarehousePreset).toMatchInlineSnapshot();
  });
});
