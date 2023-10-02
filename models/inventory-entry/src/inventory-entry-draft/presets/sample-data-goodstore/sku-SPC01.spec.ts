
import { TInventoryEntryDraft, TInventoryEntryDraftGraphql } from '../../../types';
import skuSPC01 from './sku-SPC01';

describe('With skuSPC01 preset', () => {
    it('should return skuSPC01 preset', () => {
        const skuSPC01Preset = skuSPC01().build<TInventoryEntryDraft>();
        expect(skuSPC01Preset).toMatchInlineSnapshot(``);
    });

    it('should return skuSPC01 preset when built for GraphQL', () => {
        const skuSPC01PresetGraphql = skuSPC01().buildGraphql<TInventoryEntryDraftGraphql>();
        expect(skuSPC01PresetGraphql).toMatchInlineSnapshot(``);
    });
});


