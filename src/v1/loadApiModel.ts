//
// Copyright (c) 2021-present Ganbaro Digital Ltd
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions
// are met:
//
//   * Re-distributions of source code must retain the above copyright
//     notice, this list of conditions and the following disclaimer.
//
//   * Redistributions in binary form must reproduce the above copyright
//     notice, this list of conditions and the following disclaimer in
//     the documentation and/or other materials provided with the
//     distribution.
//
//   * Neither the names of the copyright holders nor the names of his
//     contributors may be used to endorse or promote products derived
//     from this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS
// FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
// COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
// INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
// BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
// LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
// CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
// LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN
// ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.
//

import { ApiModel } from "@microsoft/api-extractor-model";
import { AnyAppError } from "@safelytyped/core-types";
import { Filepath } from "@safelytyped/filepath";
import fs from "fs";
import { InvalidDirectoryPathError } from "./Errors";
import { InvalidApiModelPathError } from "./Errors/InvalidApiModelPathError";
import { openDir } from "./openDir";

/**
 * `onOpenDirectoryError()` is called whenever we cannot open the folder
 * where we hope to find our API model
 *
 * @param e - the error that has occurred
 */
function onOpenDirectoryError(e: AnyAppError): never {
    // do we know what this is?
    if (!(e instanceof InvalidDirectoryPathError)) {
        throw e;
    }

    // translate the error
    throw new InvalidApiModelPathError({
        public: {
            givenPath: e.details.extra.public.givenPath,
        }
    });
}

export function loadApiModel(modelPath: Filepath): ApiModel {
    // our return value
    const retval = new ApiModel();

    // what's inside the folder?
    const dir = openDir(modelPath, { onError: onOpenDirectoryError });
    let dirent: fs.Dirent | null;

    dirent = dir.readSync();
    while (dirent != null) {
        if (dirent.name.match(/.api.json$/i)) {
            const apiFilePath = modelPath.join(dirent.name);
            // tslint:disable-next-line: no-console
            console.log("Loading model file " + apiFilePath);
            retval.loadPackage(apiFilePath.valueOf());
        }

        dirent = dir.readSync();
    }

    // we've finished reading from the directory
    dir.closeSync();

    // all done
    return retval;
}