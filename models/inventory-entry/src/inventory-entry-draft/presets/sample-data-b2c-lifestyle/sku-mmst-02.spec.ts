import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuMmst02 preset`, () => {
  it(`should return a skuMmst02 preset when built for rest`, () => {
    const skuMmst02Preset = InventoryEntryDraftRest.presets.skuMmst02().build();
    expect(skuMmst02Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuMmst02 preset when built for graphql`, () => {
    const skuMmst02Preset = InventoryEntryDraftGraphql.presets
      .skuMmst02()
      .build();
    expect(skuMmst02Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuMmst02 preset when built for legacy rest`, () => {
    const skuMmst02Preset = InventoryEntryDraft.presets
      .skuMmst02()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuMmst02Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuMmst02 preset when built for legacy graphql`, () => {
    const skuMmst02Preset = InventoryEntryDraft.presets
      .skuMmst02()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuMmst02Preset).toMatchInlineSnapshot();
  });
});
