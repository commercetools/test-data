# 1. Documentation: Record architecture decisions

Date: 02.08.2024

## Status

Accepted

## Context & Assumptions

- Documentation is a hard problem in software
- Documentation is best if it follows a simple and well defined repeatable
  structure to ease the burden of the developer to reinvent the best style of
  documentation for this application
- Documentation is best located next to the code as opposed to in some external
  service (eg. Confluence) in order to survive the frequent switches in version
  control or documentation systems that occur naturally in organizations
- Code Documentation should be high-level about the general design of the
  software system. People who inherit your software should be offered some
  glimpse into your decision process and the assumptions at the time. This is
  especially true if any unusual choices have been made, if you suspect that one
  could be surprised by a choice you made, document it.
- Code is communication, make sure you are understood in the best way possible.

## Decision

We will use Architecture Decision Records, as described by Michael Nygard in
this article:
http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions

## Consequences

- See Michael Nygard's article, linked above.
- Format is:
  - **Title**: short present tense imperative phrase, less than 50 characters,
    like a git commit message.
  - **Status**: proposed, accepted, rejected, deprecated, superseded, etc.
  - **Context**: what is the issue that we're seeing that is motivating this
    decision or change.
  - **Decision**: what is the change that we're actually proposing or doing.
  - **Consequences**: what becomes easier or more difficult to do because of
    this change.
- You can use a cli-tool for help: https://github.com/npryce/adr-tools
