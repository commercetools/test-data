import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuEee123QrBlueDefaultWarehouse preset`, () => {
  it(`should return a skuEee123QrBlueDefaultWarehouse preset when built for rest`, () => {
    const skuEee123QrBlueDefaultWarehousePreset =
      InventoryEntryDraftRest.presets.skuEee123QrBlueDefaultWarehouse().build();
    expect(skuEee123QrBlueDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuEee123QrBlueDefaultWarehouse preset when built for graphql`, () => {
    const skuEee123QrBlueDefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuEee123QrBlueDefaultWarehouse()
        .build();
    expect(skuEee123QrBlueDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuEee123QrBlueDefaultWarehouse preset when built for legacy rest`, () => {
    const skuEee123QrBlueDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuEee123QrBlueDefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuEee123QrBlueDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuEee123QrBlueDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuEee123QrBlueDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuEee123QrBlueDefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuEee123QrBlueDefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
