
import { TInventoryEntryDraft, TInventoryEntryDraftGraphql } from '../../../types';
import skuCCG02 from './sku-CCG02';

describe('With skuCCG02 preset', () => {
    it('should return skuCCG02 preset', () => {
        const skuCCG02Preset = skuCCG02().build<TInventoryEntryDraft>();
        expect(skuCCG02Preset).toMatchInlineSnapshot(``);
    });

    it('should return skuCCG02 preset when built for GraphQL', () => {
        const skuCCG02PresetGraphql = skuCCG02().buildGraphql<TInventoryEntryDraftGraphql>();
        expect(skuCCG02PresetGraphql).toMatchInlineSnapshot(``);
    });
});


