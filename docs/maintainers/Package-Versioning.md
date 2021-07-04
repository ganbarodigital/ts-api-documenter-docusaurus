# Package Versioning

## Guidance

This library follows [semantic versioning](https://semver.org).

The guiding principle is that a user should be able to upgrade from `v1.0.0` to the latest `v1.x.x` release without having to change their own code.

__Anything that breaks this promise is a backwards-compatibility break__ - even if the SemVer website says otherwise.

## Rationale

Any future release may include emergency fixes, such as a security fix. For the good of the Internet, it's important that any user can get those fixes with the least amount of effort possible.
