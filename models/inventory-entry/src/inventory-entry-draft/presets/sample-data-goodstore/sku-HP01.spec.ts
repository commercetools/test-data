
import { TInventoryEntryDraft, TInventoryEntryDraftGraphql } from '../../../types';
import skuHP01 from './sku-HP01';

describe('With skuHP01 preset', () => {
    it('should return skuHP01 preset', () => {
        const skuHP01Preset = skuHP01().build<TInventoryEntryDraft>();
        expect(skuHP01Preset).toMatchInlineSnapshot(``);
    });

    it('should return skuHP01 preset when built for GraphQL', () => {
        const skuHP01PresetGraphql = skuHP01().buildGraphql<TInventoryEntryDraftGraphql>();
        expect(skuHP01PresetGraphql).toMatchInlineSnapshot(``);
    });
});


