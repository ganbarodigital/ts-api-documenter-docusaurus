# Unit Test Tools

## Testing Tools

### Guidance

This library uses `mocha` and `chai` for unit tests, and `nyc` / Istanbul for code coverage metrics. See [NPM Scripts](./NPM-Scripts.md) for instructions on how to run these.

## Code Coverage

### Guidance

* All code merged into the `develop` branch must have (at least) 100% code coverage.
* Hotfixes (by their nature) are emergency releases. Emergency releases are normally time-sensitive. You must try to get 100% code coverage if time allows. If you can't, you must fill in the missing unit tests after the hotfix has been released.
