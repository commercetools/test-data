
import { TInventoryEntryDraft, TInventoryEntryDraftGraphql } from '../../../types';
import skuNTSS03 from './sku-NTSS03';

describe('With skuNTSS03 preset', () => {
    it('should return skuNTSS03 preset', () => {
        const skuNTSS03Preset = skuNTSS03().build<TInventoryEntryDraft>();
        expect(skuNTSS03Preset).toMatchInlineSnapshot(``);
    });

    it('should return skuNTSS03 preset when built for GraphQL', () => {
        const skuNTSS03PresetGraphql = skuNTSS03().buildGraphql<TInventoryEntryDraftGraphql>();
        expect(skuNTSS03PresetGraphql).toMatchInlineSnapshot(``);
    });
});


