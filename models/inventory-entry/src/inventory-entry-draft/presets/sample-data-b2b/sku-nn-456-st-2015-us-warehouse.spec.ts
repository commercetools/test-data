import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuNn456St2015UsWarehouse preset`, () => {
  it(`should return a skuNn456St2015UsWarehouse preset when built for rest`, () => {
    const skuNn456St2015UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuNn456St2015UsWarehouse()
      .build();
    expect(skuNn456St2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuNn456St2015UsWarehouse preset when built for graphql`, () => {
    const skuNn456St2015UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuNn456St2015UsWarehouse()
      .build();
    expect(skuNn456St2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuNn456St2015UsWarehouse preset when built for legacy rest`, () => {
    const skuNn456St2015UsWarehousePreset = InventoryEntryDraft.presets
      .skuNn456St2015UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuNn456St2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuNn456St2015UsWarehouse preset when built for legacy graphql`, () => {
    const skuNn456St2015UsWarehousePreset = InventoryEntryDraft.presets
      .skuNn456St2015UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuNn456St2015UsWarehousePreset).toMatchInlineSnapshot();
  });
});
