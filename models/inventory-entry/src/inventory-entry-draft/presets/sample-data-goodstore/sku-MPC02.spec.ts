
import { TInventoryEntryDraft, TInventoryEntryDraftGraphql } from '../../../types';
import skuMPC02 from './sku-MPC02';

describe('With skuMPC02 preset', () => {
    it('should return skuMPC02 preset', () => {
        const skuMPC02Preset = skuMPC02().build<TInventoryEntryDraft>();
        expect(skuMPC02Preset).toMatchInlineSnapshot(``);
    });

    it('should return skuMPC02 preset when built for GraphQL', () => {
        const skuMPC02PresetGraphql = skuMPC02().buildGraphql<TInventoryEntryDraftGraphql>();
        expect(skuMPC02PresetGraphql).toMatchInlineSnapshot(``);
    });
});


