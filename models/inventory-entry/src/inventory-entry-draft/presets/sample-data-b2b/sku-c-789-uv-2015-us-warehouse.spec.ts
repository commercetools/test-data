import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuC789Uv2015UsWarehouse preset`, () => {
  it(`should return a skuC789Uv2015UsWarehouse preset when built for rest`, () => {
    const skuC789Uv2015UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuC789Uv2015UsWarehouse()
      .build();
    expect(skuC789Uv2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuC789Uv2015UsWarehouse preset when built for graphql`, () => {
    const skuC789Uv2015UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuC789Uv2015UsWarehouse()
      .build();
    expect(skuC789Uv2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuC789Uv2015UsWarehouse preset when built for legacy rest`, () => {
    const skuC789Uv2015UsWarehousePreset = InventoryEntryDraft.presets
      .skuC789Uv2015UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuC789Uv2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuC789Uv2015UsWarehouse preset when built for legacy graphql`, () => {
    const skuC789Uv2015UsWarehousePreset = InventoryEntryDraft.presets
      .skuC789Uv2015UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuC789Uv2015UsWarehousePreset).toMatchInlineSnapshot();
  });
});
