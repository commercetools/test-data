import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuAlternatorDefaultWarehouse preset`, () => {
  it(`should return a skuAlternatorDefaultWarehouse preset when built for rest`, () => {
    const skuAlternatorDefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuAlternatorDefaultWarehouse()
      .build();
    expect(skuAlternatorDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuAlternatorDefaultWarehouse preset when built for graphql`, () => {
    const skuAlternatorDefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuAlternatorDefaultWarehouse()
        .build();
    expect(skuAlternatorDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuAlternatorDefaultWarehouse preset when built for legacy rest`, () => {
    const skuAlternatorDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuAlternatorDefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuAlternatorDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuAlternatorDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuAlternatorDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuAlternatorDefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuAlternatorDefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
