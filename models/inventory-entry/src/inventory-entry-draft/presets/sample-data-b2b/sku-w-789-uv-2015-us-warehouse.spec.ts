import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuW789Uv2015UsWarehouse preset`, () => {
  it(`should return a skuW789Uv2015UsWarehouse preset when built for rest`, () => {
    const skuW789Uv2015UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuW789Uv2015UsWarehouse()
      .build();
    expect(skuW789Uv2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuW789Uv2015UsWarehouse preset when built for graphql`, () => {
    const skuW789Uv2015UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuW789Uv2015UsWarehouse()
      .build();
    expect(skuW789Uv2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuW789Uv2015UsWarehouse preset when built for legacy rest`, () => {
    const skuW789Uv2015UsWarehousePreset = InventoryEntryDraft.presets
      .skuW789Uv2015UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuW789Uv2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuW789Uv2015UsWarehouse preset when built for legacy graphql`, () => {
    const skuW789Uv2015UsWarehousePreset = InventoryEntryDraft.presets
      .skuW789Uv2015UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuW789Uv2015UsWarehousePreset).toMatchInlineSnapshot();
  });
});
