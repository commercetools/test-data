import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuLpc011 preset`, () => {
  it(`should return a skuLpc011 preset when built for rest`, () => {
    const skuLpc011Preset = InventoryEntryDraftRest.presets.skuLpc011().build();
    expect(skuLpc011Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuLpc011 preset when built for graphql`, () => {
    const skuLpc011Preset = InventoryEntryDraftGraphql.presets
      .skuLpc011()
      .build();
    expect(skuLpc011Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuLpc011 preset when built for legacy rest`, () => {
    const skuLpc011Preset = InventoryEntryDraft.presets
      .skuLpc011()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuLpc011Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuLpc011 preset when built for legacy graphql`, () => {
    const skuLpc011Preset = InventoryEntryDraft.presets
      .skuLpc011()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuLpc011Preset).toMatchInlineSnapshot();
  });
});
