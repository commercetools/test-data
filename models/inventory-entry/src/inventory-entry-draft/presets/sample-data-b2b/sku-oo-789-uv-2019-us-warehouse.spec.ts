import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuOo789Uv2019UsWarehouse preset`, () => {
  it(`should return a skuOo789Uv2019UsWarehouse preset when built for rest`, () => {
    const skuOo789Uv2019UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuOo789Uv2019UsWarehouse()
      .build();
    expect(skuOo789Uv2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuOo789Uv2019UsWarehouse preset when built for graphql`, () => {
    const skuOo789Uv2019UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuOo789Uv2019UsWarehouse()
      .build();
    expect(skuOo789Uv2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuOo789Uv2019UsWarehouse preset when built for legacy rest`, () => {
    const skuOo789Uv2019UsWarehousePreset = InventoryEntryDraft.presets
      .skuOo789Uv2019UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuOo789Uv2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuOo789Uv2019UsWarehouse preset when built for legacy graphql`, () => {
    const skuOo789Uv2019UsWarehousePreset = InventoryEntryDraft.presets
      .skuOo789Uv2019UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuOo789Uv2019UsWarehousePreset).toMatchInlineSnapshot();
  });
});
