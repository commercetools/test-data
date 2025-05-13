import { KeyReferenceDraft, MoneyDraft } from '@/models/commons';
import { TStandalonePriceDraftBuilder } from '../../../types';
import * as StandalonePriceDraft from '../../index';

const uu789UvBlue2 = (): TStandalonePriceDraftBuilder =>
  StandalonePriceDraft.presets
    .empty()
    .key('uu789-uv-blue-2')
    .sku('uu789-uv-blue')
    .value(MoneyDraft.random().currencyCode('EUR').centAmount(2750000))
    .channel(KeyReferenceDraft.presets.channel().key('default-channel'))
    .active(true);

export default uu789UvBlue2;
