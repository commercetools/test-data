import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuGrcg01 preset`, () => {
  it(`should return a skuGrcg01 preset when built for rest`, () => {
    const skuGrcg01Preset = InventoryEntryDraftRest.presets.skuGrcg01().build();
    expect(skuGrcg01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuGrcg01 preset when built for graphql`, () => {
    const skuGrcg01Preset = InventoryEntryDraftGraphql.presets
      .skuGrcg01()
      .build();
    expect(skuGrcg01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuGrcg01 preset when built for legacy rest`, () => {
    const skuGrcg01Preset = InventoryEntryDraft.presets
      .skuGrcg01()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuGrcg01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuGrcg01 preset when built for legacy graphql`, () => {
    const skuGrcg01Preset = InventoryEntryDraft.presets
      .skuGrcg01()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuGrcg01Preset).toMatchInlineSnapshot();
  });
});
