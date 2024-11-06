import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuCjb01 preset`, () => {
  it(`should return a skuCjb01 preset when built for rest`, () => {
    const skuCjb01Preset = InventoryEntryDraftRest.presets.skuCjb01().build();
    expect(skuCjb01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuCjb01 preset when built for graphql`, () => {
    const skuCjb01Preset = InventoryEntryDraftGraphql.presets
      .skuCjb01()
      .build();
    expect(skuCjb01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuCjb01 preset when built for legacy rest`, () => {
    const skuCjb01Preset = InventoryEntryDraft.presets
      .skuCjb01()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuCjb01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuCjb01 preset when built for legacy graphql`, () => {
    const skuCjb01Preset = InventoryEntryDraft.presets
      .skuCjb01()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuCjb01Preset).toMatchInlineSnapshot();
  });
});
