import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuCcg01 preset`, () => {
  it(`should return a skuCcg01 preset when built for rest`, () => {
    const skuCcg01Preset = InventoryEntryDraftRest.presets.skuCcg01().build();
    expect(skuCcg01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuCcg01 preset when built for graphql`, () => {
    const skuCcg01Preset = InventoryEntryDraftGraphql.presets
      .skuCcg01()
      .build();
    expect(skuCcg01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuCcg01 preset when built for legacy rest`, () => {
    const skuCcg01Preset = InventoryEntryDraft.presets
      .skuCcg01()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuCcg01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuCcg01 preset when built for legacy graphql`, () => {
    const skuCcg01Preset = InventoryEntryDraft.presets
      .skuCcg01()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuCcg01Preset).toMatchInlineSnapshot();
  });
});
