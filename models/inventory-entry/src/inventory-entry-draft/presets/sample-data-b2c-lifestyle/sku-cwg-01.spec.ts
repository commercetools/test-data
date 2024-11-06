import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuCwg01 preset`, () => {
  it(`should return a skuCwg01 preset when built for rest`, () => {
    const skuCwg01Preset = InventoryEntryDraftRest.presets.skuCwg01().build();
    expect(skuCwg01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuCwg01 preset when built for graphql`, () => {
    const skuCwg01Preset = InventoryEntryDraftGraphql.presets
      .skuCwg01()
      .build();
    expect(skuCwg01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuCwg01 preset when built for legacy rest`, () => {
    const skuCwg01Preset = InventoryEntryDraft.presets
      .skuCwg01()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuCwg01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuCwg01 preset when built for legacy graphql`, () => {
    const skuCwg01Preset = InventoryEntryDraft.presets
      .skuCwg01()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuCwg01Preset).toMatchInlineSnapshot();
  });
});
