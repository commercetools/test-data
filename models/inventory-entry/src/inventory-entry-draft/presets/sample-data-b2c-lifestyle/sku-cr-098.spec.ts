import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuCr098 preset`, () => {
  it(`should return a skuCr098 preset when built for rest`, () => {
    const skuCr098Preset = InventoryEntryDraftRest.presets.skuCr098().build();
    expect(skuCr098Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuCr098 preset when built for graphql`, () => {
    const skuCr098Preset = InventoryEntryDraftGraphql.presets
      .skuCr098()
      .build();
    expect(skuCr098Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuCr098 preset when built for legacy rest`, () => {
    const skuCr098Preset = InventoryEntryDraft.presets
      .skuCr098()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuCr098Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuCr098 preset when built for legacy graphql`, () => {
    const skuCr098Preset = InventoryEntryDraft.presets
      .skuCr098()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuCr098Preset).toMatchInlineSnapshot();
  });
});
