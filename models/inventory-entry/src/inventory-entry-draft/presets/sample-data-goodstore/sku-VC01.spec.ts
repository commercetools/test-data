
import { TInventoryEntryDraft, TInventoryEntryDraftGraphql } from '../../../types';
import skuVC01 from './sku-VC01';

describe('With skuVC01 preset', () => {
    it('should return skuVC01 preset', () => {
        const skuVC01Preset = skuVC01().build<TInventoryEntryDraft>();
        expect(skuVC01Preset).toMatchInlineSnapshot(``);
    });

    it('should return skuVC01 preset when built for GraphQL', () => {
        const skuVC01PresetGraphql = skuVC01().buildGraphql<TInventoryEntryDraftGraphql>();
        expect(skuVC01PresetGraphql).toMatchInlineSnapshot(``);
    });
});


