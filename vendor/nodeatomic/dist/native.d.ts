import protocol from './generated/proto.cjs';
/** Codecs/types generated from the installed addon, not a separate schema. */
export declare const proto: typeof protocol.atomic;
/** Invoke a supported local service method without sockets or subprocesses. */
export declare function call(method: string, request: Uint8Array): Promise<Uint8Array>;
