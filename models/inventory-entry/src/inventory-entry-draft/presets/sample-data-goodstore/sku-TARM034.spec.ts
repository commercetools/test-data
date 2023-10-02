
import { TInventoryEntryDraft, TInventoryEntryDraftGraphql } from '../../../types';
import skuTARM034 from './sku-TARM034';

describe('With skuTARM034 preset', () => {
    it('should return skuTARM034 preset', () => {
        const skuTARM034Preset = skuTARM034().build<TInventoryEntryDraft>();
        expect(skuTARM034Preset).toMatchInlineSnapshot(``);
    });

    it('should return skuTARM034 preset when built for GraphQL', () => {
        const skuTARM034PresetGraphql = skuTARM034().buildGraphql<TInventoryEntryDraftGraphql>();
        expect(skuTARM034PresetGraphql).toMatchInlineSnapshot(``);
    });
});


