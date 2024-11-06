import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuMmst01 preset`, () => {
  it(`should return a skuMmst01 preset when built for rest`, () => {
    const skuMmst01Preset = InventoryEntryDraftRest.presets.skuMmst01().build();
    expect(skuMmst01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuMmst01 preset when built for graphql`, () => {
    const skuMmst01Preset = InventoryEntryDraftGraphql.presets
      .skuMmst01()
      .build();
    expect(skuMmst01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuMmst01 preset when built for legacy rest`, () => {
    const skuMmst01Preset = InventoryEntryDraft.presets
      .skuMmst01()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuMmst01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuMmst01 preset when built for legacy graphql`, () => {
    const skuMmst01Preset = InventoryEntryDraft.presets
      .skuMmst01()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuMmst01Preset).toMatchInlineSnapshot();
  });
});
