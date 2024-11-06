import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuLl890Op2019EuWarehouse preset`, () => {
  it(`should return a skuLl890Op2019EuWarehouse preset when built for rest`, () => {
    const skuLl890Op2019EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuLl890Op2019EuWarehouse()
      .build();
    expect(skuLl890Op2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuLl890Op2019EuWarehouse preset when built for graphql`, () => {
    const skuLl890Op2019EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuLl890Op2019EuWarehouse()
      .build();
    expect(skuLl890Op2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuLl890Op2019EuWarehouse preset when built for legacy rest`, () => {
    const skuLl890Op2019EuWarehousePreset = InventoryEntryDraft.presets
      .skuLl890Op2019EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuLl890Op2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuLl890Op2019EuWarehouse preset when built for legacy graphql`, () => {
    const skuLl890Op2019EuWarehousePreset = InventoryEntryDraft.presets
      .skuLl890Op2019EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuLl890Op2019EuWarehousePreset).toMatchInlineSnapshot();
  });
});
