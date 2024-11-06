import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuNn456St2019UsWarehouse preset`, () => {
  it(`should return a skuNn456St2019UsWarehouse preset when built for rest`, () => {
    const skuNn456St2019UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuNn456St2019UsWarehouse()
      .build();
    expect(skuNn456St2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuNn456St2019UsWarehouse preset when built for graphql`, () => {
    const skuNn456St2019UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuNn456St2019UsWarehouse()
      .build();
    expect(skuNn456St2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuNn456St2019UsWarehouse preset when built for legacy rest`, () => {
    const skuNn456St2019UsWarehousePreset = InventoryEntryDraft.presets
      .skuNn456St2019UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuNn456St2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuNn456St2019UsWarehouse preset when built for legacy graphql`, () => {
    const skuNn456St2019UsWarehousePreset = InventoryEntryDraft.presets
      .skuNn456St2019UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuNn456St2019UsWarehousePreset).toMatchInlineSnapshot();
  });
});
