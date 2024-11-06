import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuMwt01 preset`, () => {
  it(`should return a skuMwt01 preset when built for rest`, () => {
    const skuMwt01Preset = InventoryEntryDraftRest.presets.skuMwt01().build();
    expect(skuMwt01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuMwt01 preset when built for graphql`, () => {
    const skuMwt01Preset = InventoryEntryDraftGraphql.presets
      .skuMwt01()
      .build();
    expect(skuMwt01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuMwt01 preset when built for legacy rest`, () => {
    const skuMwt01Preset = InventoryEntryDraft.presets
      .skuMwt01()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuMwt01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuMwt01 preset when built for legacy graphql`, () => {
    const skuMwt01Preset = InventoryEntryDraft.presets
      .skuMwt01()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuMwt01Preset).toMatchInlineSnapshot();
  });
});
