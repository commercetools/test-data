import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuK567Yz2019EuWarehouse preset`, () => {
  it(`should return a skuK567Yz2019EuWarehouse preset when built for rest`, () => {
    const skuK567Yz2019EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuK567Yz2019EuWarehouse()
      .build();
    expect(skuK567Yz2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuK567Yz2019EuWarehouse preset when built for graphql`, () => {
    const skuK567Yz2019EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuK567Yz2019EuWarehouse()
      .build();
    expect(skuK567Yz2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuK567Yz2019EuWarehouse preset when built for legacy rest`, () => {
    const skuK567Yz2019EuWarehousePreset = InventoryEntryDraft.presets
      .skuK567Yz2019EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuK567Yz2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuK567Yz2019EuWarehouse preset when built for legacy graphql`, () => {
    const skuK567Yz2019EuWarehousePreset = InventoryEntryDraft.presets
      .skuK567Yz2019EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuK567Yz2019EuWarehousePreset).toMatchInlineSnapshot();
  });
});
