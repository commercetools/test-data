import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuEee123QrBlueEuWarehouse preset`, () => {
  it(`should return a skuEee123QrBlueEuWarehouse preset when built for rest`, () => {
    const skuEee123QrBlueEuWarehousePreset = InventoryEntryDraftRest.presets
      .skuEee123QrBlueEuWarehouse()
      .build();
    expect(skuEee123QrBlueEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuEee123QrBlueEuWarehouse preset when built for graphql`, () => {
    const skuEee123QrBlueEuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuEee123QrBlueEuWarehouse()
      .build();
    expect(skuEee123QrBlueEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuEee123QrBlueEuWarehouse preset when built for legacy rest`, () => {
    const skuEee123QrBlueEuWarehousePreset = InventoryEntryDraft.presets
      .skuEee123QrBlueEuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuEee123QrBlueEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuEee123QrBlueEuWarehouse preset when built for legacy graphql`, () => {
    const skuEee123QrBlueEuWarehousePreset = InventoryEntryDraft.presets
      .skuEee123QrBlueEuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuEee123QrBlueEuWarehousePreset).toMatchInlineSnapshot();
  });
});
