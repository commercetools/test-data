import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuOo789Uv2015UsWarehouse preset`, () => {
  it(`should return a skuOo789Uv2015UsWarehouse preset when built for rest`, () => {
    const skuOo789Uv2015UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuOo789Uv2015UsWarehouse()
      .build();
    expect(skuOo789Uv2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuOo789Uv2015UsWarehouse preset when built for graphql`, () => {
    const skuOo789Uv2015UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuOo789Uv2015UsWarehouse()
      .build();
    expect(skuOo789Uv2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuOo789Uv2015UsWarehouse preset when built for legacy rest`, () => {
    const skuOo789Uv2015UsWarehousePreset = InventoryEntryDraft.presets
      .skuOo789Uv2015UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuOo789Uv2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuOo789Uv2015UsWarehouse preset when built for legacy graphql`, () => {
    const skuOo789Uv2015UsWarehousePreset = InventoryEntryDraft.presets
      .skuOo789Uv2015UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuOo789Uv2015UsWarehousePreset).toMatchInlineSnapshot();
  });
});
