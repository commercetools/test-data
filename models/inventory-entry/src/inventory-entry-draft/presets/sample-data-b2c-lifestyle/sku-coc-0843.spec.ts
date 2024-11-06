import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuCoc0843 preset`, () => {
  it(`should return a skuCoc0843 preset when built for rest`, () => {
    const skuCoc0843Preset = InventoryEntryDraftRest.presets
      .skuCoc0843()
      .build();
    expect(skuCoc0843Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuCoc0843 preset when built for graphql`, () => {
    const skuCoc0843Preset = InventoryEntryDraftGraphql.presets
      .skuCoc0843()
      .build();
    expect(skuCoc0843Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuCoc0843 preset when built for legacy rest`, () => {
    const skuCoc0843Preset = InventoryEntryDraft.presets
      .skuCoc0843()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuCoc0843Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuCoc0843 preset when built for legacy graphql`, () => {
    const skuCoc0843Preset = InventoryEntryDraft.presets
      .skuCoc0843()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuCoc0843Preset).toMatchInlineSnapshot();
  });
});
