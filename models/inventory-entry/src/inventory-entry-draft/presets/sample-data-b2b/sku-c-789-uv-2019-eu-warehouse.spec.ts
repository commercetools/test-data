import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuC789Uv2019EuWarehouse preset`, () => {
  it(`should return a skuC789Uv2019EuWarehouse preset when built for rest`, () => {
    const skuC789Uv2019EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuC789Uv2019EuWarehouse()
      .build();
    expect(skuC789Uv2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuC789Uv2019EuWarehouse preset when built for graphql`, () => {
    const skuC789Uv2019EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuC789Uv2019EuWarehouse()
      .build();
    expect(skuC789Uv2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuC789Uv2019EuWarehouse preset when built for legacy rest`, () => {
    const skuC789Uv2019EuWarehousePreset = InventoryEntryDraft.presets
      .skuC789Uv2019EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuC789Uv2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuC789Uv2019EuWarehouse preset when built for legacy graphql`, () => {
    const skuC789Uv2019EuWarehousePreset = InventoryEntryDraft.presets
      .skuC789Uv2019EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuC789Uv2019EuWarehousePreset).toMatchInlineSnapshot();
  });
});
