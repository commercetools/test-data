import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuEee123QrRedDefaultWarehouse preset`, () => {
  it(`should return a skuEee123QrRedDefaultWarehouse preset when built for rest`, () => {
    const skuEee123QrRedDefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuEee123QrRedDefaultWarehouse()
      .build();
    expect(skuEee123QrRedDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuEee123QrRedDefaultWarehouse preset when built for graphql`, () => {
    const skuEee123QrRedDefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuEee123QrRedDefaultWarehouse()
        .build();
    expect(skuEee123QrRedDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuEee123QrRedDefaultWarehouse preset when built for legacy rest`, () => {
    const skuEee123QrRedDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuEee123QrRedDefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuEee123QrRedDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuEee123QrRedDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuEee123QrRedDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuEee123QrRedDefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuEee123QrRedDefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
