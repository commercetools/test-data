import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const v456St20233 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('v456-st-2023-3')
    .sku('v456-st-2023')
    .value(MoneyDraft.random().currencyCode('USD').centAmount(3850000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default v456St20233;
