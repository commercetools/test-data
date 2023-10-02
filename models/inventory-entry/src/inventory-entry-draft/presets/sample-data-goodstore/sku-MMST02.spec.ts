
import { TInventoryEntryDraft, TInventoryEntryDraftGraphql } from '../../../types';
import skuMMST02 from './sku-MMST02';

describe('With skuMMST02 preset', () => {
    it('should return skuMMST02 preset', () => {
        const skuMMST02Preset = skuMMST02().build<TInventoryEntryDraft>();
        expect(skuMMST02Preset).toMatchInlineSnapshot(``);
    });

    it('should return skuMMST02 preset when built for GraphQL', () => {
        const skuMMST02PresetGraphql = skuMMST02().buildGraphql<TInventoryEntryDraftGraphql>();
        expect(skuMMST02PresetGraphql).toMatchInlineSnapshot(``);
    });
});


