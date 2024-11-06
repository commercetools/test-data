import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuE567Yz2019EuWarehouse preset`, () => {
  it(`should return a skuE567Yz2019EuWarehouse preset when built for rest`, () => {
    const skuE567Yz2019EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuE567Yz2019EuWarehouse()
      .build();
    expect(skuE567Yz2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuE567Yz2019EuWarehouse preset when built for graphql`, () => {
    const skuE567Yz2019EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuE567Yz2019EuWarehouse()
      .build();
    expect(skuE567Yz2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuE567Yz2019EuWarehouse preset when built for legacy rest`, () => {
    const skuE567Yz2019EuWarehousePreset = InventoryEntryDraft.presets
      .skuE567Yz2019EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuE567Yz2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuE567Yz2019EuWarehouse preset when built for legacy graphql`, () => {
    const skuE567Yz2019EuWarehousePreset = InventoryEntryDraft.presets
      .skuE567Yz2019EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuE567Yz2019EuWarehousePreset).toMatchInlineSnapshot();
  });
});
