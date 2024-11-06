import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuZ890Op2019EuWarehouse preset`, () => {
  it(`should return a skuZ890Op2019EuWarehouse preset when built for rest`, () => {
    const skuZ890Op2019EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuZ890Op2019EuWarehouse()
      .build();
    expect(skuZ890Op2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuZ890Op2019EuWarehouse preset when built for graphql`, () => {
    const skuZ890Op2019EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuZ890Op2019EuWarehouse()
      .build();
    expect(skuZ890Op2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuZ890Op2019EuWarehouse preset when built for legacy rest`, () => {
    const skuZ890Op2019EuWarehousePreset = InventoryEntryDraft.presets
      .skuZ890Op2019EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuZ890Op2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuZ890Op2019EuWarehouse preset when built for legacy graphql`, () => {
    const skuZ890Op2019EuWarehousePreset = InventoryEntryDraft.presets
      .skuZ890Op2019EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuZ890Op2019EuWarehousePreset).toMatchInlineSnapshot();
  });
});
