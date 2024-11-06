import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuCc789Uv2015UsWarehouse preset`, () => {
  it(`should return a skuCc789Uv2015UsWarehouse preset when built for rest`, () => {
    const skuCc789Uv2015UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuCc789Uv2015UsWarehouse()
      .build();
    expect(skuCc789Uv2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuCc789Uv2015UsWarehouse preset when built for graphql`, () => {
    const skuCc789Uv2015UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuCc789Uv2015UsWarehouse()
      .build();
    expect(skuCc789Uv2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuCc789Uv2015UsWarehouse preset when built for legacy rest`, () => {
    const skuCc789Uv2015UsWarehousePreset = InventoryEntryDraft.presets
      .skuCc789Uv2015UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuCc789Uv2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuCc789Uv2015UsWarehouse preset when built for legacy graphql`, () => {
    const skuCc789Uv2015UsWarehousePreset = InventoryEntryDraft.presets
      .skuCc789Uv2015UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuCc789Uv2015UsWarehousePreset).toMatchInlineSnapshot();
  });
});
