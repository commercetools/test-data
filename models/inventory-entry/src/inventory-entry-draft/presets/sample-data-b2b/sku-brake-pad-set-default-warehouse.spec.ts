import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuBrakePadSetDefaultWarehouse preset`, () => {
  it(`should return a skuBrakePadSetDefaultWarehouse preset when built for rest`, () => {
    const skuBrakePadSetDefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuBrakePadSetDefaultWarehouse()
      .build();
    expect(skuBrakePadSetDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuBrakePadSetDefaultWarehouse preset when built for graphql`, () => {
    const skuBrakePadSetDefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuBrakePadSetDefaultWarehouse()
        .build();
    expect(skuBrakePadSetDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuBrakePadSetDefaultWarehouse preset when built for legacy rest`, () => {
    const skuBrakePadSetDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuBrakePadSetDefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuBrakePadSetDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuBrakePadSetDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuBrakePadSetDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuBrakePadSetDefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuBrakePadSetDefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
