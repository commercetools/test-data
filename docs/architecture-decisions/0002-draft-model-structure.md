# 2. Exclude `__typename` from Draft GraphQL Models

Date: 02.08.2024

## Status

Accepted

## Context & Assumptions

We've found that including `__typename` in our draft GraphQL models complicates both testing and API interactions due to backend incompatibilities and added data manipulation steps. While `__typename` is a part of the GraphQL schema and useful for client-side caching and introspection, its presence in input types, especially in draft models used for testing or as variables in mutations, can lead to issues. Given that these models primarily serve for input in mutations and queries, their structure should be optimized for functionality over strict schema adherence.

## Decision

To address these challenges and streamline the use of draft models in GraphQL operations, we decide to:

- **Exclude `__typename` from Draft Models**: Draft GraphQL models should be designed to exclude the `__typename` field. This approach aligns draft models more closely with their primary function as representations of input types for mutations and queries.
- **Introduce Draft Representations for Common Types**: For shared types like `Reference`, `KeyReference`, and `LocalizedString`, which previously included `__typename` and were used across both base and draft models, we introduce corresponding draft versions (e.g., `ReferenceDraft`, `KeyReferenceDraft`) that exclude `__typename`. This ensures consistency across draft models and eliminates the need for workarounds when constructing input data.
- **Adjust Development Practices**: Teams will need to review and adjust their use of draft models to ensure compatibility with the new approach.

## Consequences

- **Simplified Test Data Creation**: By excluding `__typename`, creating and manipulating draft models for testing becomes more straightforward, with fewer manipulations required.
- **Increased API Compatibility**: Draft models without `__typename` can be directly used as variables in GraphQL operations without causing errors related to unexpected fields, leading to better integration and fewer runtime issues.
- **Potential Refactoring Required**: Existing tests and development code that rely on the presence of `__typename` directly in draft models will need to be reviewed and potentially refactored to align with the updated approach.
- **Clarity in Model Usage**: The distinction between draft models and base models becomes clearer, with draft models strictly serving as utilitarian representations for input data, enhancing maintainability and understanding of their intended use.

By focusing on the practical use of draft models in GraphQL workflows, this decision aims to enhance efficiency and reduce complexities associated with test data management.
