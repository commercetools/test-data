
import { TInventoryEntryDraft, TInventoryEntryDraftGraphql } from '../../../types';
import skuCBM03 from './sku-CBM03';

describe('With skuCBM03 preset', () => {
    it('should return skuCBM03 preset', () => {
        const skuCBM03Preset = skuCBM03().build<TInventoryEntryDraft>();
        expect(skuCBM03Preset).toMatchInlineSnapshot(``);
    });

    it('should return skuCBM03 preset when built for GraphQL', () => {
        const skuCBM03PresetGraphql = skuCBM03().buildGraphql<TInventoryEntryDraftGraphql>();
        expect(skuCBM03PresetGraphql).toMatchInlineSnapshot(``);
    });
});


