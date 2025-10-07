import { fake, Generator } from '@/core';
import { KeyReferenceDraft } from '@/models/commons';
import { ShippingRateDraft } from '../../shipping-rate/shipping-rate-draft';
import { TZoneRateDraft } from '../types';

// https://docs.commercetools.com/api/projects/shippingMethods#zoneratedraft

const generator = Generator<TZoneRateDraft>({
  fields: {
    zone: fake(() => KeyReferenceDraft.presets.zone()),
    shippingRates: fake(() => [ShippingRateDraft.random()]),
  },
});

export default generator;
