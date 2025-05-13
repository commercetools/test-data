import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const b456St20232 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('b456-st-2023-2')
    .sku('b456-st-2023')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(1149501))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default b456St20232;
