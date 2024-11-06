import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuCbm03 preset`, () => {
  it(`should return a skuCbm03 preset when built for rest`, () => {
    const skuCbm03Preset = InventoryEntryDraftRest.presets.skuCbm03().build();
    expect(skuCbm03Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuCbm03 preset when built for graphql`, () => {
    const skuCbm03Preset = InventoryEntryDraftGraphql.presets
      .skuCbm03()
      .build();
    expect(skuCbm03Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuCbm03 preset when built for legacy rest`, () => {
    const skuCbm03Preset = InventoryEntryDraft.presets
      .skuCbm03()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuCbm03Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuCbm03 preset when built for legacy graphql`, () => {
    const skuCbm03Preset = InventoryEntryDraft.presets
      .skuCbm03()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuCbm03Preset).toMatchInlineSnapshot();
  });
});
