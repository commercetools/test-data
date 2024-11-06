import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuEee123QrRedEuWarehouse preset`, () => {
  it(`should return a skuEee123QrRedEuWarehouse preset when built for rest`, () => {
    const skuEee123QrRedEuWarehousePreset = InventoryEntryDraftRest.presets
      .skuEee123QrRedEuWarehouse()
      .build();
    expect(skuEee123QrRedEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuEee123QrRedEuWarehouse preset when built for graphql`, () => {
    const skuEee123QrRedEuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuEee123QrRedEuWarehouse()
      .build();
    expect(skuEee123QrRedEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuEee123QrRedEuWarehouse preset when built for legacy rest`, () => {
    const skuEee123QrRedEuWarehousePreset = InventoryEntryDraft.presets
      .skuEee123QrRedEuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuEee123QrRedEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuEee123QrRedEuWarehouse preset when built for legacy graphql`, () => {
    const skuEee123QrRedEuWarehousePreset = InventoryEntryDraft.presets
      .skuEee123QrRedEuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuEee123QrRedEuWarehousePreset).toMatchInlineSnapshot();
  });
});
