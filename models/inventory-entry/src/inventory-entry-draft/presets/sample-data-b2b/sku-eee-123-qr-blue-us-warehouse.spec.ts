import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuEee123QrBlueUsWarehouse preset`, () => {
  it(`should return a skuEee123QrBlueUsWarehouse preset when built for rest`, () => {
    const skuEee123QrBlueUsWarehousePreset = InventoryEntryDraftRest.presets
      .skuEee123QrBlueUsWarehouse()
      .build();
    expect(skuEee123QrBlueUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuEee123QrBlueUsWarehouse preset when built for graphql`, () => {
    const skuEee123QrBlueUsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuEee123QrBlueUsWarehouse()
      .build();
    expect(skuEee123QrBlueUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuEee123QrBlueUsWarehouse preset when built for legacy rest`, () => {
    const skuEee123QrBlueUsWarehousePreset = InventoryEntryDraft.presets
      .skuEee123QrBlueUsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuEee123QrBlueUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuEee123QrBlueUsWarehouse preset when built for legacy graphql`, () => {
    const skuEee123QrBlueUsWarehousePreset = InventoryEntryDraft.presets
      .skuEee123QrBlueUsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuEee123QrBlueUsWarehousePreset).toMatchInlineSnapshot();
  });
});
