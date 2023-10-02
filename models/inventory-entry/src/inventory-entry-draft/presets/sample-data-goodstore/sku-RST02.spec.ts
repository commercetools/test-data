
import { TInventoryEntryDraft, TInventoryEntryDraftGraphql } from '../../../types';
import skuRST02 from './sku-RST02';

describe('With skuRST02 preset', () => {
    it('should return skuRST02 preset', () => {
        const skuRST02Preset = skuRST02().build<TInventoryEntryDraft>();
        expect(skuRST02Preset).toMatchInlineSnapshot(``);
    });

    it('should return skuRST02 preset when built for GraphQL', () => {
        const skuRST02PresetGraphql = skuRST02().buildGraphql<TInventoryEntryDraftGraphql>();
        expect(skuRST02PresetGraphql).toMatchInlineSnapshot(``);
    });
});


