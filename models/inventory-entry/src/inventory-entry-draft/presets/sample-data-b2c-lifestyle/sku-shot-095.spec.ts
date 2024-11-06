import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuShot095 preset`, () => {
  it(`should return a skuShot095 preset when built for rest`, () => {
    const skuShot095Preset = InventoryEntryDraftRest.presets
      .skuShot095()
      .build();
    expect(skuShot095Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuShot095 preset when built for graphql`, () => {
    const skuShot095Preset = InventoryEntryDraftGraphql.presets
      .skuShot095()
      .build();
    expect(skuShot095Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuShot095 preset when built for legacy rest`, () => {
    const skuShot095Preset = InventoryEntryDraft.presets
      .skuShot095()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuShot095Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuShot095 preset when built for legacy graphql`, () => {
    const skuShot095Preset = InventoryEntryDraft.presets
      .skuShot095()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuShot095Preset).toMatchInlineSnapshot();
  });
});
