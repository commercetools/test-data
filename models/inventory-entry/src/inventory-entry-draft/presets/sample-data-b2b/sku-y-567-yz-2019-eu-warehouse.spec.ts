import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuY567Yz2019EuWarehouse preset`, () => {
  it(`should return a skuY567Yz2019EuWarehouse preset when built for rest`, () => {
    const skuY567Yz2019EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuY567Yz2019EuWarehouse()
      .build();
    expect(skuY567Yz2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuY567Yz2019EuWarehouse preset when built for graphql`, () => {
    const skuY567Yz2019EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuY567Yz2019EuWarehouse()
      .build();
    expect(skuY567Yz2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuY567Yz2019EuWarehouse preset when built for legacy rest`, () => {
    const skuY567Yz2019EuWarehousePreset = InventoryEntryDraft.presets
      .skuY567Yz2019EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuY567Yz2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuY567Yz2019EuWarehouse preset when built for legacy graphql`, () => {
    const skuY567Yz2019EuWarehousePreset = InventoryEntryDraft.presets
      .skuY567Yz2019EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuY567Yz2019EuWarehousePreset).toMatchInlineSnapshot();
  });
});
