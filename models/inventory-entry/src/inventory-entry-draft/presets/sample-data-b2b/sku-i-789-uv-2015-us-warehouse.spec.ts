import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuI789Uv2015UsWarehouse preset`, () => {
  it(`should return a skuI789Uv2015UsWarehouse preset when built for rest`, () => {
    const skuI789Uv2015UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuI789Uv2015UsWarehouse()
      .build();
    expect(skuI789Uv2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuI789Uv2015UsWarehouse preset when built for graphql`, () => {
    const skuI789Uv2015UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuI789Uv2015UsWarehouse()
      .build();
    expect(skuI789Uv2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuI789Uv2015UsWarehouse preset when built for legacy rest`, () => {
    const skuI789Uv2015UsWarehousePreset = InventoryEntryDraft.presets
      .skuI789Uv2015UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuI789Uv2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuI789Uv2015UsWarehouse preset when built for legacy graphql`, () => {
    const skuI789Uv2015UsWarehousePreset = InventoryEntryDraft.presets
      .skuI789Uv2015UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuI789Uv2015UsWarehousePreset).toMatchInlineSnapshot();
  });
});
