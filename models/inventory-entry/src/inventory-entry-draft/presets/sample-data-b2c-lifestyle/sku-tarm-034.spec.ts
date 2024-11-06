import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuTarm034 preset`, () => {
  it(`should return a skuTarm034 preset when built for rest`, () => {
    const skuTarm034Preset = InventoryEntryDraftRest.presets
      .skuTarm034()
      .build();
    expect(skuTarm034Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuTarm034 preset when built for graphql`, () => {
    const skuTarm034Preset = InventoryEntryDraftGraphql.presets
      .skuTarm034()
      .build();
    expect(skuTarm034Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuTarm034 preset when built for legacy rest`, () => {
    const skuTarm034Preset = InventoryEntryDraft.presets
      .skuTarm034()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuTarm034Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuTarm034 preset when built for legacy graphql`, () => {
    const skuTarm034Preset = InventoryEntryDraft.presets
      .skuTarm034()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuTarm034Preset).toMatchInlineSnapshot();
  });
});
