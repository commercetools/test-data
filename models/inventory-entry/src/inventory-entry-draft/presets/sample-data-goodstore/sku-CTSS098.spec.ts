
import { TInventoryEntryDraft, TInventoryEntryDraftGraphql } from '../../../types';
import skuCTSS098 from './sku-CTSS098';

describe('With skuCTSS098 preset', () => {
    it('should return skuCTSS098 preset', () => {
        const skuCTSS098Preset = skuCTSS098().build<TInventoryEntryDraft>();
        expect(skuCTSS098Preset).toMatchInlineSnapshot(``);
    });

    it('should return skuCTSS098 preset when built for GraphQL', () => {
        const skuCTSS098PresetGraphql = skuCTSS098().buildGraphql<TInventoryEntryDraftGraphql>();
        expect(skuCTSS098PresetGraphql).toMatchInlineSnapshot(``);
    });
});


