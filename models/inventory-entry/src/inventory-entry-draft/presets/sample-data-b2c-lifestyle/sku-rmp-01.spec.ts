import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuRmp01 preset`, () => {
  it(`should return a skuRmp01 preset when built for rest`, () => {
    const skuRmp01Preset = InventoryEntryDraftRest.presets.skuRmp01().build();
    expect(skuRmp01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuRmp01 preset when built for graphql`, () => {
    const skuRmp01Preset = InventoryEntryDraftGraphql.presets
      .skuRmp01()
      .build();
    expect(skuRmp01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuRmp01 preset when built for legacy rest`, () => {
    const skuRmp01Preset = InventoryEntryDraft.presets
      .skuRmp01()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuRmp01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuRmp01 preset when built for legacy graphql`, () => {
    const skuRmp01Preset = InventoryEntryDraft.presets
      .skuRmp01()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuRmp01Preset).toMatchInlineSnapshot();
  });
});
