import type { TBuilder } from '@/core';
import { TMcSettingsDashboardView } from '@/graphql-types';

// There's not REST model as this entity only exists in the MC Settings GraphQL API

export type TDashboardViewGraphql = TMcSettingsDashboardView;

export type TCreateDashboardViewBuilder = () => TBuilder<TDashboardViewGraphql>;
