import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuEee123QrGreenDefaultWarehouse preset`, () => {
  it(`should return a skuEee123QrGreenDefaultWarehouse preset when built for rest`, () => {
    const skuEee123QrGreenDefaultWarehousePreset =
      InventoryEntryDraftRest.presets
        .skuEee123QrGreenDefaultWarehouse()
        .build();
    expect(skuEee123QrGreenDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuEee123QrGreenDefaultWarehouse preset when built for graphql`, () => {
    const skuEee123QrGreenDefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuEee123QrGreenDefaultWarehouse()
        .build();
    expect(skuEee123QrGreenDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuEee123QrGreenDefaultWarehouse preset when built for legacy rest`, () => {
    const skuEee123QrGreenDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuEee123QrGreenDefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuEee123QrGreenDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuEee123QrGreenDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuEee123QrGreenDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuEee123QrGreenDefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuEee123QrGreenDefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
