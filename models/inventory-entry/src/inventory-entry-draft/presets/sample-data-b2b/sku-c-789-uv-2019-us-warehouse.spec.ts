import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuC789Uv2019UsWarehouse preset`, () => {
  it(`should return a skuC789Uv2019UsWarehouse preset when built for rest`, () => {
    const skuC789Uv2019UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuC789Uv2019UsWarehouse()
      .build();
    expect(skuC789Uv2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuC789Uv2019UsWarehouse preset when built for graphql`, () => {
    const skuC789Uv2019UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuC789Uv2019UsWarehouse()
      .build();
    expect(skuC789Uv2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuC789Uv2019UsWarehouse preset when built for legacy rest`, () => {
    const skuC789Uv2019UsWarehousePreset = InventoryEntryDraft.presets
      .skuC789Uv2019UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuC789Uv2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuC789Uv2019UsWarehouse preset when built for legacy graphql`, () => {
    const skuC789Uv2019UsWarehousePreset = InventoryEntryDraft.presets
      .skuC789Uv2019UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuC789Uv2019UsWarehousePreset).toMatchInlineSnapshot();
  });
});
