# Branching Model

## What Is Our Convention?

This library uses the [Gitflow](http://datasift.github.io/gitflow/) model for managing branches in our Git repository:

Branch | Purpose
-------|--------
`master` | latest tagged release
`develop` | completed features and fixes waiting for final testing and release
`feature/XXX` | work in progress, to be merged into `develop` when completed
`release/XXX` | a release that is undergoing final testing, to be merged into `master` and `develop` when completed
`hotfix/XXX` | emergency bug fixes in progress, to be merged into `master` and released when completed

* Create a new feature branch for each bug fix or new feature.
* Always merge from `develop` into your feature branch right before you create your pull request.
* Create a pull request before merging each feature branch into `develop`.
* Assign the pull request to a milestone in GitHub.
* Always delete the feature branch once the pull request is accepted.
* __Never commit directly to `master`.__

## Rationale

Gitflow makes it easy for multiple people to work on the same code base at the same time. It isolates work-in-progress, and provides a single source of truth for accepted-work.

It also provides a clear history / audit trail through the list of merged pull requests.