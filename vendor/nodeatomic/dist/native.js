import protocol from './generated/proto.cjs';
import { descriptorSha256 } from './generated/runtime-contract.js';
import { loadAddon } from './runtime/loader.mjs';
/** Codecs/types generated from the installed addon, not a separate schema. */
export const proto = protocol.atomic;
let native;
/** Invoke a supported local service method without sockets or subprocesses. */
export async function call(method, request) {
    if (typeof method !== 'string' || !(request instanceof Uint8Array)) {
        throw new TypeError('call requires a method string and protobuf request bytes');
    }
    // Importing codecs/the public API does not require an Atomic installation.
    // Cache only a successfully validated runtime; a failed attempt can be retried
    // after explicit configuration, without hiding the original failure.
    native ??= loadAddon({ expectedDescriptorSha256: descriptorSha256 });
    return native.call(method, Buffer.from(request));
}
