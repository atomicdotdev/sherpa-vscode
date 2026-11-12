import * as $protobuf from "protobufjs";
import Long = require("long");

/** Namespace atomic. */
export namespace atomic {

    /**
     * Properties of a ResolveRepositoryRequest.
     * @deprecated Use atomic.ResolveRepositoryRequest.$Properties instead.
     */
    interface IResolveRepositoryRequest extends atomic.ResolveRepositoryRequest.$Properties {
    }

    /** Represents a ResolveRepositoryRequest. */
    class ResolveRepositoryRequest {

        /**
         * Constructs a new ResolveRepositoryRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.ResolveRepositoryRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ResolveRepositoryRequest path. */
        path: string;

        /**
         * Creates a new ResolveRepositoryRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResolveRepositoryRequest instance
         */
        static create(properties: atomic.ResolveRepositoryRequest.$Shape): atomic.ResolveRepositoryRequest & atomic.ResolveRepositoryRequest.$Shape;
        static create(properties?: atomic.ResolveRepositoryRequest.$Properties): atomic.ResolveRepositoryRequest;

        /**
         * Encodes the specified ResolveRepositoryRequest message. Does not implicitly {@link atomic.ResolveRepositoryRequest.verify|verify} messages.
         * @param message ResolveRepositoryRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.ResolveRepositoryRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResolveRepositoryRequest message, length delimited. Does not implicitly {@link atomic.ResolveRepositoryRequest.verify|verify} messages.
         * @param message ResolveRepositoryRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.ResolveRepositoryRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResolveRepositoryRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.ResolveRepositoryRequest & atomic.ResolveRepositoryRequest.$Shape} ResolveRepositoryRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.ResolveRepositoryRequest & atomic.ResolveRepositoryRequest.$Shape;

        /**
         * Decodes a ResolveRepositoryRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.ResolveRepositoryRequest & atomic.ResolveRepositoryRequest.$Shape} ResolveRepositoryRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.ResolveRepositoryRequest & atomic.ResolveRepositoryRequest.$Shape;

        /**
         * Verifies a ResolveRepositoryRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResolveRepositoryRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResolveRepositoryRequest
         */
        static fromObject(object: { [k: string]: any }): atomic.ResolveRepositoryRequest;

        /**
         * Creates a plain object from a ResolveRepositoryRequest message. Also converts values to other types if specified.
         * @param message ResolveRepositoryRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.ResolveRepositoryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResolveRepositoryRequest to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ResolveRepositoryRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ResolveRepositoryRequest {

        /** Properties of a ResolveRepositoryRequest. */
        interface $Properties {

            /** ResolveRepositoryRequest path */
            path?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ResolveRepositoryRequest. */
        type $Shape = atomic.ResolveRepositoryRequest.$Properties;
    }

    /**
     * Properties of a ResolveRepositoryResponse.
     * @deprecated Use atomic.ResolveRepositoryResponse.$Properties instead.
     */
    interface IResolveRepositoryResponse extends atomic.ResolveRepositoryResponse.$Properties {
    }

    /** Represents a ResolveRepositoryResponse. */
    class ResolveRepositoryResponse {

        /**
         * Constructs a new ResolveRepositoryResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.ResolveRepositoryResponse.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ResolveRepositoryResponse repository. */
        repository?: (atomic.RepositoryRef.$Properties|null);

        /** ResolveRepositoryResponse workspace. */
        workspace?: (atomic.WorkspaceInfo.$Properties|null);

        /**
         * Creates a new ResolveRepositoryResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResolveRepositoryResponse instance
         */
        static create(properties: atomic.ResolveRepositoryResponse.$Shape): atomic.ResolveRepositoryResponse & atomic.ResolveRepositoryResponse.$Shape;
        static create(properties?: atomic.ResolveRepositoryResponse.$Properties): atomic.ResolveRepositoryResponse;

        /**
         * Encodes the specified ResolveRepositoryResponse message. Does not implicitly {@link atomic.ResolveRepositoryResponse.verify|verify} messages.
         * @param message ResolveRepositoryResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.ResolveRepositoryResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResolveRepositoryResponse message, length delimited. Does not implicitly {@link atomic.ResolveRepositoryResponse.verify|verify} messages.
         * @param message ResolveRepositoryResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.ResolveRepositoryResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResolveRepositoryResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.ResolveRepositoryResponse & atomic.ResolveRepositoryResponse.$Shape} ResolveRepositoryResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.ResolveRepositoryResponse & atomic.ResolveRepositoryResponse.$Shape;

        /**
         * Decodes a ResolveRepositoryResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.ResolveRepositoryResponse & atomic.ResolveRepositoryResponse.$Shape} ResolveRepositoryResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.ResolveRepositoryResponse & atomic.ResolveRepositoryResponse.$Shape;

        /**
         * Verifies a ResolveRepositoryResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResolveRepositoryResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResolveRepositoryResponse
         */
        static fromObject(object: { [k: string]: any }): atomic.ResolveRepositoryResponse;

        /**
         * Creates a plain object from a ResolveRepositoryResponse message. Also converts values to other types if specified.
         * @param message ResolveRepositoryResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.ResolveRepositoryResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResolveRepositoryResponse to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ResolveRepositoryResponse
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ResolveRepositoryResponse {

        /** Properties of a ResolveRepositoryResponse. */
        interface $Properties {

            /** ResolveRepositoryResponse repository */
            repository?: (atomic.RepositoryRef.$Properties|null);

            /** ResolveRepositoryResponse workspace */
            workspace?: (atomic.WorkspaceInfo.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ResolveRepositoryResponse. */
        type $Shape = atomic.ResolveRepositoryResponse.$Properties;
    }

    /**
     * Properties of a RepositoryRef.
     * @deprecated Use atomic.RepositoryRef.$Properties instead.
     */
    interface IRepositoryRef extends atomic.RepositoryRef.$Properties {
    }

    /** Represents a RepositoryRef. */
    class RepositoryRef {

        /**
         * Constructs a new RepositoryRef.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.RepositoryRef.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** RepositoryRef authority. */
        authority: string;

        /** RepositoryRef repositoryId. */
        repositoryId: Uint8Array;

        /** RepositoryRef workspaceId. */
        workspaceId?: (string|null);

        /**
         * Creates a new RepositoryRef instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RepositoryRef instance
         */
        static create(properties: atomic.RepositoryRef.$Shape): atomic.RepositoryRef & atomic.RepositoryRef.$Shape;
        static create(properties?: atomic.RepositoryRef.$Properties): atomic.RepositoryRef;

        /**
         * Encodes the specified RepositoryRef message. Does not implicitly {@link atomic.RepositoryRef.verify|verify} messages.
         * @param message RepositoryRef message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.RepositoryRef.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RepositoryRef message, length delimited. Does not implicitly {@link atomic.RepositoryRef.verify|verify} messages.
         * @param message RepositoryRef message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.RepositoryRef.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RepositoryRef message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.RepositoryRef & atomic.RepositoryRef.$Shape} RepositoryRef
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.RepositoryRef & atomic.RepositoryRef.$Shape;

        /**
         * Decodes a RepositoryRef message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.RepositoryRef & atomic.RepositoryRef.$Shape} RepositoryRef
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.RepositoryRef & atomic.RepositoryRef.$Shape;

        /**
         * Verifies a RepositoryRef message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RepositoryRef message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RepositoryRef
         */
        static fromObject(object: { [k: string]: any }): atomic.RepositoryRef;

        /**
         * Creates a plain object from a RepositoryRef message. Also converts values to other types if specified.
         * @param message RepositoryRef
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.RepositoryRef, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RepositoryRef to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for RepositoryRef
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace RepositoryRef {

        /** Properties of a RepositoryRef. */
        interface $Properties {

            /** RepositoryRef authority */
            authority?: (string|null);

            /** RepositoryRef repositoryId */
            repositoryId?: (Uint8Array|null);

            /** RepositoryRef workspaceId */
            workspaceId?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a RepositoryRef. */
        type $Shape = atomic.RepositoryRef.$Properties;
    }

    /**
     * Properties of a WorkspaceInfo.
     * @deprecated Use atomic.WorkspaceInfo.$Properties instead.
     */
    interface IWorkspaceInfo extends atomic.WorkspaceInfo.$Properties {
    }

    /** Represents a WorkspaceInfo. */
    class WorkspaceInfo {

        /**
         * Constructs a new WorkspaceInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.WorkspaceInfo.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** WorkspaceInfo workspaceId. */
        workspaceId: string;

        /** WorkspaceInfo rootPath. */
        rootPath: string;

        /** WorkspaceInfo relativeCwd. */
        relativeCwd: string;

        /** WorkspaceInfo currentView. */
        currentView?: (atomic.ViewRef.$Properties|null);

        /**
         * Creates a new WorkspaceInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WorkspaceInfo instance
         */
        static create(properties: atomic.WorkspaceInfo.$Shape): atomic.WorkspaceInfo & atomic.WorkspaceInfo.$Shape;
        static create(properties?: atomic.WorkspaceInfo.$Properties): atomic.WorkspaceInfo;

        /**
         * Encodes the specified WorkspaceInfo message. Does not implicitly {@link atomic.WorkspaceInfo.verify|verify} messages.
         * @param message WorkspaceInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.WorkspaceInfo.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WorkspaceInfo message, length delimited. Does not implicitly {@link atomic.WorkspaceInfo.verify|verify} messages.
         * @param message WorkspaceInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.WorkspaceInfo.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WorkspaceInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.WorkspaceInfo & atomic.WorkspaceInfo.$Shape} WorkspaceInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.WorkspaceInfo & atomic.WorkspaceInfo.$Shape;

        /**
         * Decodes a WorkspaceInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.WorkspaceInfo & atomic.WorkspaceInfo.$Shape} WorkspaceInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.WorkspaceInfo & atomic.WorkspaceInfo.$Shape;

        /**
         * Verifies a WorkspaceInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WorkspaceInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WorkspaceInfo
         */
        static fromObject(object: { [k: string]: any }): atomic.WorkspaceInfo;

        /**
         * Creates a plain object from a WorkspaceInfo message. Also converts values to other types if specified.
         * @param message WorkspaceInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.WorkspaceInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WorkspaceInfo to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for WorkspaceInfo
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace WorkspaceInfo {

        /** Properties of a WorkspaceInfo. */
        interface $Properties {

            /** WorkspaceInfo workspaceId */
            workspaceId?: (string|null);

            /** WorkspaceInfo rootPath */
            rootPath?: (string|null);

            /** WorkspaceInfo relativeCwd */
            relativeCwd?: (string|null);

            /** WorkspaceInfo currentView */
            currentView?: (atomic.ViewRef.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a WorkspaceInfo. */
        type $Shape = atomic.WorkspaceInfo.$Properties;
    }

    /**
     * Properties of a ViewRef.
     * @deprecated Use atomic.ViewRef.$Properties instead.
     */
    interface IViewRef extends atomic.ViewRef.$Properties {
    }

    /** Represents a ViewRef. */
    class ViewRef {

        /**
         * Constructs a new ViewRef.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.ViewRef.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ViewRef viewId. */
        viewId: Uint8Array;

        /** ViewRef name. */
        name?: (string|null);

        /**
         * Creates a new ViewRef instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ViewRef instance
         */
        static create(properties: atomic.ViewRef.$Shape): atomic.ViewRef & atomic.ViewRef.$Shape;
        static create(properties?: atomic.ViewRef.$Properties): atomic.ViewRef;

        /**
         * Encodes the specified ViewRef message. Does not implicitly {@link atomic.ViewRef.verify|verify} messages.
         * @param message ViewRef message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.ViewRef.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ViewRef message, length delimited. Does not implicitly {@link atomic.ViewRef.verify|verify} messages.
         * @param message ViewRef message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.ViewRef.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ViewRef message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.ViewRef & atomic.ViewRef.$Shape} ViewRef
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.ViewRef & atomic.ViewRef.$Shape;

        /**
         * Decodes a ViewRef message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.ViewRef & atomic.ViewRef.$Shape} ViewRef
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.ViewRef & atomic.ViewRef.$Shape;

        /**
         * Verifies a ViewRef message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ViewRef message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ViewRef
         */
        static fromObject(object: { [k: string]: any }): atomic.ViewRef;

        /**
         * Creates a plain object from a ViewRef message. Also converts values to other types if specified.
         * @param message ViewRef
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.ViewRef, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ViewRef to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ViewRef
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ViewRef {

        /** Properties of a ViewRef. */
        interface $Properties {

            /** ViewRef viewId */
            viewId?: (Uint8Array|null);

            /** ViewRef name */
            name?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ViewRef. */
        type $Shape = atomic.ViewRef.$Properties;
    }

    /**
     * Properties of a StatusRequest.
     * @deprecated Use atomic.StatusRequest.$Properties instead.
     */
    interface IStatusRequest extends atomic.StatusRequest.$Properties {
    }

    /** Represents a StatusRequest. */
    class StatusRequest {

        /**
         * Constructs a new StatusRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.StatusRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** StatusRequest repository. */
        repository?: (atomic.RepositoryRef.$Properties|null);

        /** StatusRequest options. */
        options?: (atomic.StatusOptions.$Properties|null);

        /**
         * Creates a new StatusRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StatusRequest instance
         */
        static create(properties: atomic.StatusRequest.$Shape): atomic.StatusRequest & atomic.StatusRequest.$Shape;
        static create(properties?: atomic.StatusRequest.$Properties): atomic.StatusRequest;

        /**
         * Encodes the specified StatusRequest message. Does not implicitly {@link atomic.StatusRequest.verify|verify} messages.
         * @param message StatusRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.StatusRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StatusRequest message, length delimited. Does not implicitly {@link atomic.StatusRequest.verify|verify} messages.
         * @param message StatusRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.StatusRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StatusRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.StatusRequest & atomic.StatusRequest.$Shape} StatusRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.StatusRequest & atomic.StatusRequest.$Shape;

        /**
         * Decodes a StatusRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.StatusRequest & atomic.StatusRequest.$Shape} StatusRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.StatusRequest & atomic.StatusRequest.$Shape;

        /**
         * Verifies a StatusRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StatusRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StatusRequest
         */
        static fromObject(object: { [k: string]: any }): atomic.StatusRequest;

        /**
         * Creates a plain object from a StatusRequest message. Also converts values to other types if specified.
         * @param message StatusRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.StatusRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StatusRequest to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for StatusRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace StatusRequest {

        /** Properties of a StatusRequest. */
        interface $Properties {

            /** StatusRequest repository */
            repository?: (atomic.RepositoryRef.$Properties|null);

            /** StatusRequest options */
            options?: (atomic.StatusOptions.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a StatusRequest. */
        type $Shape = atomic.StatusRequest.$Properties;
    }

    /**
     * Properties of a StatusOptions.
     * @deprecated Use atomic.StatusOptions.$Properties instead.
     */
    interface IStatusOptions extends atomic.StatusOptions.$Properties {
    }

    /** Represents a StatusOptions. */
    class StatusOptions {

        /**
         * Constructs a new StatusOptions.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.StatusOptions.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** StatusOptions includeUntracked. */
        includeUntracked?: (boolean|null);

        /** StatusOptions includeIgnored. */
        includeIgnored?: (boolean|null);

        /** StatusOptions respectIgnoreFiles. */
        respectIgnoreFiles?: (boolean|null);

        /** StatusOptions hashContents. */
        hashContents?: (boolean|null);

        /** StatusOptions pathFilters. */
        pathFilters: string[];

        /**
         * Creates a new StatusOptions instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StatusOptions instance
         */
        static create(properties: atomic.StatusOptions.$Shape): atomic.StatusOptions & atomic.StatusOptions.$Shape;
        static create(properties?: atomic.StatusOptions.$Properties): atomic.StatusOptions;

        /**
         * Encodes the specified StatusOptions message. Does not implicitly {@link atomic.StatusOptions.verify|verify} messages.
         * @param message StatusOptions message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.StatusOptions.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StatusOptions message, length delimited. Does not implicitly {@link atomic.StatusOptions.verify|verify} messages.
         * @param message StatusOptions message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.StatusOptions.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StatusOptions message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.StatusOptions & atomic.StatusOptions.$Shape} StatusOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.StatusOptions & atomic.StatusOptions.$Shape;

        /**
         * Decodes a StatusOptions message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.StatusOptions & atomic.StatusOptions.$Shape} StatusOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.StatusOptions & atomic.StatusOptions.$Shape;

        /**
         * Verifies a StatusOptions message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StatusOptions message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StatusOptions
         */
        static fromObject(object: { [k: string]: any }): atomic.StatusOptions;

        /**
         * Creates a plain object from a StatusOptions message. Also converts values to other types if specified.
         * @param message StatusOptions
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.StatusOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StatusOptions to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for StatusOptions
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace StatusOptions {

        /** Properties of a StatusOptions. */
        interface $Properties {

            /** StatusOptions includeUntracked */
            includeUntracked?: (boolean|null);

            /** StatusOptions includeIgnored */
            includeIgnored?: (boolean|null);

            /** StatusOptions respectIgnoreFiles */
            respectIgnoreFiles?: (boolean|null);

            /** StatusOptions hashContents */
            hashContents?: (boolean|null);

            /** StatusOptions pathFilters */
            pathFilters?: (string[]|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a StatusOptions. */
        type $Shape = atomic.StatusOptions.$Properties;
    }

    /**
     * Properties of a StatusResponse.
     * @deprecated Use atomic.StatusResponse.$Properties instead.
     */
    interface IStatusResponse extends atomic.StatusResponse.$Properties {
    }

    /** Represents a StatusResponse. */
    class StatusResponse {

        /**
         * Constructs a new StatusResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.StatusResponse.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** StatusResponse view. */
        view: string;

        /** StatusResponse viewMerkle. */
        viewMerkle?: (atomic.Hash.$Properties|null);

        /** StatusResponse files. */
        files: atomic.FileStatusEntry.$Properties[];

        /** StatusResponse modifiedCount. */
        modifiedCount: number;

        /** StatusResponse deletedCount. */
        deletedCount: number;

        /** StatusResponse untrackedCount. */
        untrackedCount: number;

        /** StatusResponse addedCount. */
        addedCount: number;

        /** StatusResponse conflictedCount. */
        conflictedCount: number;

        /** StatusResponse staleIndexCount. */
        staleIndexCount: number;

        /** StatusResponse snapshot. */
        snapshot?: (atomic.ViewSnapshot.$Properties|null);

        /** StatusResponse needsReindex. */
        needsReindex: boolean;

        /**
         * Creates a new StatusResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StatusResponse instance
         */
        static create(properties: atomic.StatusResponse.$Shape): atomic.StatusResponse & atomic.StatusResponse.$Shape;
        static create(properties?: atomic.StatusResponse.$Properties): atomic.StatusResponse;

        /**
         * Encodes the specified StatusResponse message. Does not implicitly {@link atomic.StatusResponse.verify|verify} messages.
         * @param message StatusResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.StatusResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StatusResponse message, length delimited. Does not implicitly {@link atomic.StatusResponse.verify|verify} messages.
         * @param message StatusResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.StatusResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StatusResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.StatusResponse & atomic.StatusResponse.$Shape} StatusResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.StatusResponse & atomic.StatusResponse.$Shape;

        /**
         * Decodes a StatusResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.StatusResponse & atomic.StatusResponse.$Shape} StatusResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.StatusResponse & atomic.StatusResponse.$Shape;

        /**
         * Verifies a StatusResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StatusResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StatusResponse
         */
        static fromObject(object: { [k: string]: any }): atomic.StatusResponse;

        /**
         * Creates a plain object from a StatusResponse message. Also converts values to other types if specified.
         * @param message StatusResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.StatusResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StatusResponse to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for StatusResponse
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace StatusResponse {

        /** Properties of a StatusResponse. */
        interface $Properties {

            /** StatusResponse view */
            view?: (string|null);

            /** StatusResponse viewMerkle */
            viewMerkle?: (atomic.Hash.$Properties|null);

            /** StatusResponse files */
            files?: (atomic.FileStatusEntry.$Properties[]|null);

            /** StatusResponse modifiedCount */
            modifiedCount?: (number|null);

            /** StatusResponse deletedCount */
            deletedCount?: (number|null);

            /** StatusResponse untrackedCount */
            untrackedCount?: (number|null);

            /** StatusResponse addedCount */
            addedCount?: (number|null);

            /** StatusResponse conflictedCount */
            conflictedCount?: (number|null);

            /** StatusResponse staleIndexCount */
            staleIndexCount?: (number|null);

            /** StatusResponse snapshot */
            snapshot?: (atomic.ViewSnapshot.$Properties|null);

            /** StatusResponse needsReindex */
            needsReindex?: (boolean|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a StatusResponse. */
        type $Shape = atomic.StatusResponse.$Properties;
    }

    /**
     * Properties of a Hash.
     * @deprecated Use atomic.Hash.$Properties instead.
     */
    interface IHash extends atomic.Hash.$Properties {
    }

    /** Represents a Hash. */
    class Hash {

        /**
         * Constructs a new Hash.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.Hash.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** Hash value. */
        value: Uint8Array;

        /** Hash algorithm. */
        algorithm: atomic.HashAlgorithm;

        /**
         * Creates a new Hash instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Hash instance
         */
        static create(properties: atomic.Hash.$Shape): atomic.Hash & atomic.Hash.$Shape;
        static create(properties?: atomic.Hash.$Properties): atomic.Hash;

        /**
         * Encodes the specified Hash message. Does not implicitly {@link atomic.Hash.verify|verify} messages.
         * @param message Hash message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.Hash.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Hash message, length delimited. Does not implicitly {@link atomic.Hash.verify|verify} messages.
         * @param message Hash message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.Hash.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Hash message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.Hash & atomic.Hash.$Shape} Hash
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.Hash & atomic.Hash.$Shape;

        /**
         * Decodes a Hash message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.Hash & atomic.Hash.$Shape} Hash
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.Hash & atomic.Hash.$Shape;

        /**
         * Verifies a Hash message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Hash message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Hash
         */
        static fromObject(object: { [k: string]: any }): atomic.Hash;

        /**
         * Creates a plain object from a Hash message. Also converts values to other types if specified.
         * @param message Hash
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.Hash, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Hash to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for Hash
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace Hash {

        /** Properties of a Hash. */
        interface $Properties {

            /** Hash value */
            value?: (Uint8Array|null);

            /** Hash algorithm */
            algorithm?: (atomic.HashAlgorithm|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a Hash. */
        type $Shape = atomic.Hash.$Properties;
    }

    /** HashAlgorithm enum. */
    enum HashAlgorithm {

        /** HASH_ALGORITHM_UNSPECIFIED value */
        HASH_ALGORITHM_UNSPECIFIED = 0,

        /** HASH_ALGORITHM_BLAKE3 value */
        HASH_ALGORITHM_BLAKE3 = 1
    }

    /**
     * Properties of a FileStatusEntry.
     * @deprecated Use atomic.FileStatusEntry.$Properties instead.
     */
    interface IFileStatusEntry extends atomic.FileStatusEntry.$Properties {
    }

    /** Represents a FileStatusEntry. */
    class FileStatusEntry {

        /**
         * Constructs a new FileStatusEntry.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.FileStatusEntry.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** FileStatusEntry path. */
        path: string;

        /** FileStatusEntry status. */
        status: atomic.FileStatus;

        /** FileStatusEntry inode. */
        inode?: (number|Long|null);

        /** FileStatusEntry recordedHash. */
        recordedHash?: (atomic.Hash.$Properties|null);

        /** FileStatusEntry currentHash. */
        currentHash?: (atomic.Hash.$Properties|null);

        /** FileStatusEntry details. */
        details?: (string|null);

        /**
         * Creates a new FileStatusEntry instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FileStatusEntry instance
         */
        static create(properties: atomic.FileStatusEntry.$Shape): atomic.FileStatusEntry & atomic.FileStatusEntry.$Shape;
        static create(properties?: atomic.FileStatusEntry.$Properties): atomic.FileStatusEntry;

        /**
         * Encodes the specified FileStatusEntry message. Does not implicitly {@link atomic.FileStatusEntry.verify|verify} messages.
         * @param message FileStatusEntry message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.FileStatusEntry.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FileStatusEntry message, length delimited. Does not implicitly {@link atomic.FileStatusEntry.verify|verify} messages.
         * @param message FileStatusEntry message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.FileStatusEntry.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FileStatusEntry message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.FileStatusEntry & atomic.FileStatusEntry.$Shape} FileStatusEntry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.FileStatusEntry & atomic.FileStatusEntry.$Shape;

        /**
         * Decodes a FileStatusEntry message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.FileStatusEntry & atomic.FileStatusEntry.$Shape} FileStatusEntry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.FileStatusEntry & atomic.FileStatusEntry.$Shape;

        /**
         * Verifies a FileStatusEntry message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FileStatusEntry message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FileStatusEntry
         */
        static fromObject(object: { [k: string]: any }): atomic.FileStatusEntry;

        /**
         * Creates a plain object from a FileStatusEntry message. Also converts values to other types if specified.
         * @param message FileStatusEntry
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.FileStatusEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FileStatusEntry to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for FileStatusEntry
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace FileStatusEntry {

        /** Properties of a FileStatusEntry. */
        interface $Properties {

            /** FileStatusEntry path */
            path?: (string|null);

            /** FileStatusEntry status */
            status?: (atomic.FileStatus|null);

            /** FileStatusEntry inode */
            inode?: (number|Long|null);

            /** FileStatusEntry recordedHash */
            recordedHash?: (atomic.Hash.$Properties|null);

            /** FileStatusEntry currentHash */
            currentHash?: (atomic.Hash.$Properties|null);

            /** FileStatusEntry details */
            details?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a FileStatusEntry. */
        type $Shape = atomic.FileStatusEntry.$Properties;
    }

    /** FileStatus enum. */
    enum FileStatus {

        /** FILE_STATUS_UNSPECIFIED value */
        FILE_STATUS_UNSPECIFIED = 0,

        /** FILE_STATUS_MODIFIED value */
        FILE_STATUS_MODIFIED = 1,

        /** FILE_STATUS_DELETED value */
        FILE_STATUS_DELETED = 2,

        /** FILE_STATUS_UNTRACKED value */
        FILE_STATUS_UNTRACKED = 3,

        /** FILE_STATUS_ADDED value */
        FILE_STATUS_ADDED = 4,

        /** FILE_STATUS_CONFLICTED value */
        FILE_STATUS_CONFLICTED = 5,

        /** FILE_STATUS_PENDING_UNTRACK value */
        FILE_STATUS_PENDING_UNTRACK = 6
    }

    /**
     * Properties of a ViewSnapshot.
     * @deprecated Use atomic.ViewSnapshot.$Properties instead.
     */
    interface IViewSnapshot extends atomic.ViewSnapshot.$Properties {
    }

    /** Represents a ViewSnapshot. */
    class ViewSnapshot {

        /**
         * Constructs a new ViewSnapshot.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.ViewSnapshot.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ViewSnapshot view. */
        view?: (atomic.ViewRef.$Properties|null);

        /** ViewSnapshot effectiveState. */
        effectiveState?: (atomic.Hash.$Properties|null);

        /** ViewSnapshot ownMerkle. */
        ownMerkle?: (atomic.Hash.$Properties|null);

        /**
         * Creates a new ViewSnapshot instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ViewSnapshot instance
         */
        static create(properties: atomic.ViewSnapshot.$Shape): atomic.ViewSnapshot & atomic.ViewSnapshot.$Shape;
        static create(properties?: atomic.ViewSnapshot.$Properties): atomic.ViewSnapshot;

        /**
         * Encodes the specified ViewSnapshot message. Does not implicitly {@link atomic.ViewSnapshot.verify|verify} messages.
         * @param message ViewSnapshot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.ViewSnapshot.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ViewSnapshot message, length delimited. Does not implicitly {@link atomic.ViewSnapshot.verify|verify} messages.
         * @param message ViewSnapshot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.ViewSnapshot.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ViewSnapshot message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.ViewSnapshot & atomic.ViewSnapshot.$Shape} ViewSnapshot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.ViewSnapshot & atomic.ViewSnapshot.$Shape;

        /**
         * Decodes a ViewSnapshot message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.ViewSnapshot & atomic.ViewSnapshot.$Shape} ViewSnapshot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.ViewSnapshot & atomic.ViewSnapshot.$Shape;

        /**
         * Verifies a ViewSnapshot message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ViewSnapshot message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ViewSnapshot
         */
        static fromObject(object: { [k: string]: any }): atomic.ViewSnapshot;

        /**
         * Creates a plain object from a ViewSnapshot message. Also converts values to other types if specified.
         * @param message ViewSnapshot
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.ViewSnapshot, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ViewSnapshot to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ViewSnapshot
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ViewSnapshot {

        /** Properties of a ViewSnapshot. */
        interface $Properties {

            /** ViewSnapshot view */
            view?: (atomic.ViewRef.$Properties|null);

            /** ViewSnapshot effectiveState */
            effectiveState?: (atomic.Hash.$Properties|null);

            /** ViewSnapshot ownMerkle */
            ownMerkle?: (atomic.Hash.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ViewSnapshot. */
        type $Shape = atomic.ViewSnapshot.$Properties;
    }

    /**
     * Properties of an AddFilesRequest.
     * @deprecated Use atomic.AddFilesRequest.$Properties instead.
     */
    interface IAddFilesRequest extends atomic.AddFilesRequest.$Properties {
    }

    /** Represents an AddFilesRequest. */
    class AddFilesRequest {

        /**
         * Constructs a new AddFilesRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.AddFilesRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** AddFilesRequest repository. */
        repository?: (atomic.RepositoryRef.$Properties|null);

        /** AddFilesRequest meta. */
        meta?: (atomic.RequestMeta.$Properties|null);

        /** AddFilesRequest paths. */
        paths: string[];

        /** AddFilesRequest expected. */
        expected?: (atomic.ExpectedState.$Properties|null);

        /** AddFilesRequest dryRun. */
        dryRun: boolean;

        /** AddFilesRequest force. */
        force: boolean;

        /** AddFilesRequest directory. */
        directory: boolean;

        /** AddFilesRequest noRecursive. */
        noRecursive: boolean;

        /**
         * Creates a new AddFilesRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AddFilesRequest instance
         */
        static create(properties: atomic.AddFilesRequest.$Shape): atomic.AddFilesRequest & atomic.AddFilesRequest.$Shape;
        static create(properties?: atomic.AddFilesRequest.$Properties): atomic.AddFilesRequest;

        /**
         * Encodes the specified AddFilesRequest message. Does not implicitly {@link atomic.AddFilesRequest.verify|verify} messages.
         * @param message AddFilesRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.AddFilesRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AddFilesRequest message, length delimited. Does not implicitly {@link atomic.AddFilesRequest.verify|verify} messages.
         * @param message AddFilesRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.AddFilesRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AddFilesRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.AddFilesRequest & atomic.AddFilesRequest.$Shape} AddFilesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.AddFilesRequest & atomic.AddFilesRequest.$Shape;

        /**
         * Decodes an AddFilesRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.AddFilesRequest & atomic.AddFilesRequest.$Shape} AddFilesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.AddFilesRequest & atomic.AddFilesRequest.$Shape;

        /**
         * Verifies an AddFilesRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AddFilesRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AddFilesRequest
         */
        static fromObject(object: { [k: string]: any }): atomic.AddFilesRequest;

        /**
         * Creates a plain object from an AddFilesRequest message. Also converts values to other types if specified.
         * @param message AddFilesRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.AddFilesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AddFilesRequest to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for AddFilesRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace AddFilesRequest {

        /** Properties of an AddFilesRequest. */
        interface $Properties {

            /** AddFilesRequest repository */
            repository?: (atomic.RepositoryRef.$Properties|null);

            /** AddFilesRequest meta */
            meta?: (atomic.RequestMeta.$Properties|null);

            /** AddFilesRequest paths */
            paths?: (string[]|null);

            /** AddFilesRequest expected */
            expected?: (atomic.ExpectedState.$Properties|null);

            /** AddFilesRequest dryRun */
            dryRun?: (boolean|null);

            /** AddFilesRequest force */
            force?: (boolean|null);

            /** AddFilesRequest directory */
            directory?: (boolean|null);

            /** AddFilesRequest noRecursive */
            noRecursive?: (boolean|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of an AddFilesRequest. */
        type $Shape = {
          repository?: atomic.RepositoryRef.$Shape|null;
          meta?: atomic.RequestMeta.$Shape|null;
          paths?: string[]|null;
          expected?: atomic.ExpectedState.$Shape|null;
          dryRun?: boolean|null;
          force?: boolean|null;
          directory?: boolean|null;
          noRecursive?: boolean|null;
          $unknowns?: Uint8Array[];
        };
    }

    /**
     * Properties of a RequestMeta.
     * @deprecated Use atomic.RequestMeta.$Properties instead.
     */
    interface IRequestMeta extends atomic.RequestMeta.$Properties {
    }

    /** Represents a RequestMeta. */
    class RequestMeta {

        /**
         * Constructs a new RequestMeta.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.RequestMeta.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** RequestMeta requestId. */
        requestId: string;

        /** RequestMeta observedAt. */
        observedAt?: (google.protobuf.Timestamp.$Properties|null);

        /**
         * Creates a new RequestMeta instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestMeta instance
         */
        static create(properties: atomic.RequestMeta.$Shape): atomic.RequestMeta & atomic.RequestMeta.$Shape;
        static create(properties?: atomic.RequestMeta.$Properties): atomic.RequestMeta;

        /**
         * Encodes the specified RequestMeta message. Does not implicitly {@link atomic.RequestMeta.verify|verify} messages.
         * @param message RequestMeta message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.RequestMeta.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestMeta message, length delimited. Does not implicitly {@link atomic.RequestMeta.verify|verify} messages.
         * @param message RequestMeta message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.RequestMeta.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestMeta message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.RequestMeta & atomic.RequestMeta.$Shape} RequestMeta
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.RequestMeta & atomic.RequestMeta.$Shape;

        /**
         * Decodes a RequestMeta message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.RequestMeta & atomic.RequestMeta.$Shape} RequestMeta
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.RequestMeta & atomic.RequestMeta.$Shape;

        /**
         * Verifies a RequestMeta message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestMeta message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestMeta
         */
        static fromObject(object: { [k: string]: any }): atomic.RequestMeta;

        /**
         * Creates a plain object from a RequestMeta message. Also converts values to other types if specified.
         * @param message RequestMeta
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.RequestMeta, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestMeta to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for RequestMeta
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace RequestMeta {

        /** Properties of a RequestMeta. */
        interface $Properties {

            /** RequestMeta requestId */
            requestId?: (string|null);

            /** RequestMeta observedAt */
            observedAt?: (google.protobuf.Timestamp.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a RequestMeta. */
        type $Shape = atomic.RequestMeta.$Properties;
    }

    /**
     * Properties of an ExpectedState.
     * @deprecated Use atomic.ExpectedState.$Properties instead.
     */
    interface IExpectedState extends atomic.ExpectedState.$Properties {
    }

    /** Represents an ExpectedState. */
    class ExpectedState {

        /**
         * Constructs a new ExpectedState.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.ExpectedState.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ExpectedState generation. */
        generation?: (number|Long|null);

        /** ExpectedState merkleRoot. */
        merkleRoot?: (atomic.Hash.$Properties|null);

        /** ExpectedState sequence. */
        sequence?: (number|Long|null);

        /** ExpectedState viewSnapshot. */
        viewSnapshot?: (atomic.ViewSnapshot.$Properties|null);

        /** ExpectedState kind. */
        kind?: ("generation"|"merkleRoot"|"sequence"|"viewSnapshot");

        /**
         * Creates a new ExpectedState instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ExpectedState instance
         */
        static create(properties: atomic.ExpectedState.$Shape): atomic.ExpectedState & atomic.ExpectedState.$Shape;
        static create(properties?: atomic.ExpectedState.$Properties): atomic.ExpectedState;

        /**
         * Encodes the specified ExpectedState message. Does not implicitly {@link atomic.ExpectedState.verify|verify} messages.
         * @param message ExpectedState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.ExpectedState.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ExpectedState message, length delimited. Does not implicitly {@link atomic.ExpectedState.verify|verify} messages.
         * @param message ExpectedState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.ExpectedState.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ExpectedState message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.ExpectedState & atomic.ExpectedState.$Shape} ExpectedState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.ExpectedState & atomic.ExpectedState.$Shape;

        /**
         * Decodes an ExpectedState message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.ExpectedState & atomic.ExpectedState.$Shape} ExpectedState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.ExpectedState & atomic.ExpectedState.$Shape;

        /**
         * Verifies an ExpectedState message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ExpectedState message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ExpectedState
         */
        static fromObject(object: { [k: string]: any }): atomic.ExpectedState;

        /**
         * Creates a plain object from an ExpectedState message. Also converts values to other types if specified.
         * @param message ExpectedState
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.ExpectedState, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ExpectedState to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ExpectedState
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ExpectedState {

        /** Properties of an ExpectedState. */
        interface $Properties {

            /** ExpectedState generation */
            generation?: (number|Long|null);

            /** ExpectedState merkleRoot */
            merkleRoot?: (atomic.Hash.$Properties|null);

            /** ExpectedState sequence */
            sequence?: (number|Long|null);

            /** ExpectedState viewSnapshot */
            viewSnapshot?: (atomic.ViewSnapshot.$Properties|null);

            /** ExpectedState kind */
            kind?: ("generation"|"merkleRoot"|"sequence"|"viewSnapshot");

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Narrowed shape of an ExpectedState. */
        type $Shape = {
          generation?: number|Long|null;
          merkleRoot?: atomic.Hash.$Shape|null;
          sequence?: number|Long|null;
          viewSnapshot?: atomic.ViewSnapshot.$Shape|null;
          $unknowns?: Uint8Array[];
        } & (
          ({ kind?: undefined; generation?: null; merkleRoot?: null; sequence?: null; viewSnapshot?: null }|{ kind?: "generation"; generation: number|Long; merkleRoot?: null; sequence?: null; viewSnapshot?: null }|{ kind?: "merkleRoot"; generation?: null; merkleRoot: atomic.Hash.$Shape; sequence?: null; viewSnapshot?: null }|{ kind?: "sequence"; generation?: null; merkleRoot?: null; sequence: number|Long; viewSnapshot?: null }|{ kind?: "viewSnapshot"; generation?: null; merkleRoot?: null; sequence?: null; viewSnapshot: atomic.ViewSnapshot.$Shape })
        );
    }

    /**
     * Properties of an AddFilesResponse.
     * @deprecated Use atomic.AddFilesResponse.$Properties instead.
     */
    interface IAddFilesResponse extends atomic.AddFilesResponse.$Properties {
    }

    /** Represents an AddFilesResponse. */
    class AddFilesResponse {

        /**
         * Constructs a new AddFilesResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.AddFilesResponse.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** AddFilesResponse tracked. */
        tracked: number;

        /** AddFilesResponse wouldAdd. */
        wouldAdd: string[];

        /** AddFilesResponse skippedTracked. */
        skippedTracked: string[];

        /** AddFilesResponse skippedIgnored. */
        skippedIgnored: string[];

        /** AddFilesResponse failedPaths. */
        failedPaths: string[];

        /** AddFilesResponse dryRun. */
        dryRun: boolean;

        /** AddFilesResponse meta. */
        meta?: (atomic.ResponseMeta.$Properties|null);

        /**
         * Creates a new AddFilesResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AddFilesResponse instance
         */
        static create(properties: atomic.AddFilesResponse.$Shape): atomic.AddFilesResponse & atomic.AddFilesResponse.$Shape;
        static create(properties?: atomic.AddFilesResponse.$Properties): atomic.AddFilesResponse;

        /**
         * Encodes the specified AddFilesResponse message. Does not implicitly {@link atomic.AddFilesResponse.verify|verify} messages.
         * @param message AddFilesResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.AddFilesResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AddFilesResponse message, length delimited. Does not implicitly {@link atomic.AddFilesResponse.verify|verify} messages.
         * @param message AddFilesResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.AddFilesResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AddFilesResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.AddFilesResponse & atomic.AddFilesResponse.$Shape} AddFilesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.AddFilesResponse & atomic.AddFilesResponse.$Shape;

        /**
         * Decodes an AddFilesResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.AddFilesResponse & atomic.AddFilesResponse.$Shape} AddFilesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.AddFilesResponse & atomic.AddFilesResponse.$Shape;

        /**
         * Verifies an AddFilesResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AddFilesResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AddFilesResponse
         */
        static fromObject(object: { [k: string]: any }): atomic.AddFilesResponse;

        /**
         * Creates a plain object from an AddFilesResponse message. Also converts values to other types if specified.
         * @param message AddFilesResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.AddFilesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AddFilesResponse to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for AddFilesResponse
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace AddFilesResponse {

        /** Properties of an AddFilesResponse. */
        interface $Properties {

            /** AddFilesResponse tracked */
            tracked?: (number|null);

            /** AddFilesResponse wouldAdd */
            wouldAdd?: (string[]|null);

            /** AddFilesResponse skippedTracked */
            skippedTracked?: (string[]|null);

            /** AddFilesResponse skippedIgnored */
            skippedIgnored?: (string[]|null);

            /** AddFilesResponse failedPaths */
            failedPaths?: (string[]|null);

            /** AddFilesResponse dryRun */
            dryRun?: (boolean|null);

            /** AddFilesResponse meta */
            meta?: (atomic.ResponseMeta.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of an AddFilesResponse. */
        type $Shape = atomic.AddFilesResponse.$Properties;
    }

    /**
     * Properties of a ResponseMeta.
     * @deprecated Use atomic.ResponseMeta.$Properties instead.
     */
    interface IResponseMeta extends atomic.ResponseMeta.$Properties {
    }

    /** Represents a ResponseMeta. */
    class ResponseMeta {

        /**
         * Constructs a new ResponseMeta.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.ResponseMeta.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ResponseMeta requestId. */
        requestId: string;

        /** ResponseMeta replayed. */
        replayed: boolean;

        /** ResponseMeta snapshot. */
        snapshot?: (atomic.ViewSnapshot.$Properties|null);

        /**
         * Creates a new ResponseMeta instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseMeta instance
         */
        static create(properties: atomic.ResponseMeta.$Shape): atomic.ResponseMeta & atomic.ResponseMeta.$Shape;
        static create(properties?: atomic.ResponseMeta.$Properties): atomic.ResponseMeta;

        /**
         * Encodes the specified ResponseMeta message. Does not implicitly {@link atomic.ResponseMeta.verify|verify} messages.
         * @param message ResponseMeta message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.ResponseMeta.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseMeta message, length delimited. Does not implicitly {@link atomic.ResponseMeta.verify|verify} messages.
         * @param message ResponseMeta message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.ResponseMeta.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseMeta message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.ResponseMeta & atomic.ResponseMeta.$Shape} ResponseMeta
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.ResponseMeta & atomic.ResponseMeta.$Shape;

        /**
         * Decodes a ResponseMeta message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.ResponseMeta & atomic.ResponseMeta.$Shape} ResponseMeta
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.ResponseMeta & atomic.ResponseMeta.$Shape;

        /**
         * Verifies a ResponseMeta message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseMeta message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseMeta
         */
        static fromObject(object: { [k: string]: any }): atomic.ResponseMeta;

        /**
         * Creates a plain object from a ResponseMeta message. Also converts values to other types if specified.
         * @param message ResponseMeta
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.ResponseMeta, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseMeta to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ResponseMeta
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ResponseMeta {

        /** Properties of a ResponseMeta. */
        interface $Properties {

            /** ResponseMeta requestId */
            requestId?: (string|null);

            /** ResponseMeta replayed */
            replayed?: (boolean|null);

            /** ResponseMeta snapshot */
            snapshot?: (atomic.ViewSnapshot.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ResponseMeta. */
        type $Shape = atomic.ResponseMeta.$Properties;
    }

    /**
     * Properties of a RecordRequest.
     * @deprecated Use atomic.RecordRequest.$Properties instead.
     */
    interface IRecordRequest extends atomic.RecordRequest.$Properties {
    }

    /** Represents a RecordRequest. */
    class RecordRequest {

        /**
         * Constructs a new RecordRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.RecordRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** RecordRequest repository. */
        repository?: (atomic.RepositoryRef.$Properties|null);

        /** RecordRequest meta. */
        meta?: (atomic.RequestMeta.$Properties|null);

        /** RecordRequest message. */
        message: string;

        /** RecordRequest paths. */
        paths: string[];

        /** RecordRequest expected. */
        expected?: (atomic.ExpectedState.$Properties|null);

        /** RecordRequest author. */
        author?: (atomic.Author.$Properties|null);

        /** RecordRequest identityName. */
        identityName?: (string|null);

        /** RecordRequest aiAuthorship. */
        aiAuthorship?: (atomic.RecordAiAuthorship.$Properties|null);

        /** RecordRequest skipBinary. */
        skipBinary?: (boolean|null);

        /** RecordRequest maxFileSize. */
        maxFileSize?: (number|Long|null);

        /**
         * Creates a new RecordRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RecordRequest instance
         */
        static create(properties: atomic.RecordRequest.$Shape): atomic.RecordRequest & atomic.RecordRequest.$Shape;
        static create(properties?: atomic.RecordRequest.$Properties): atomic.RecordRequest;

        /**
         * Encodes the specified RecordRequest message. Does not implicitly {@link atomic.RecordRequest.verify|verify} messages.
         * @param message RecordRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.RecordRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RecordRequest message, length delimited. Does not implicitly {@link atomic.RecordRequest.verify|verify} messages.
         * @param message RecordRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.RecordRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RecordRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.RecordRequest & atomic.RecordRequest.$Shape} RecordRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.RecordRequest & atomic.RecordRequest.$Shape;

        /**
         * Decodes a RecordRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.RecordRequest & atomic.RecordRequest.$Shape} RecordRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.RecordRequest & atomic.RecordRequest.$Shape;

        /**
         * Verifies a RecordRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RecordRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RecordRequest
         */
        static fromObject(object: { [k: string]: any }): atomic.RecordRequest;

        /**
         * Creates a plain object from a RecordRequest message. Also converts values to other types if specified.
         * @param message RecordRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.RecordRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RecordRequest to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for RecordRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace RecordRequest {

        /** Properties of a RecordRequest. */
        interface $Properties {

            /** RecordRequest repository */
            repository?: (atomic.RepositoryRef.$Properties|null);

            /** RecordRequest meta */
            meta?: (atomic.RequestMeta.$Properties|null);

            /** RecordRequest message */
            message?: (string|null);

            /** RecordRequest paths */
            paths?: (string[]|null);

            /** RecordRequest expected */
            expected?: (atomic.ExpectedState.$Properties|null);

            /** RecordRequest author */
            author?: (atomic.Author.$Properties|null);

            /** RecordRequest identityName */
            identityName?: (string|null);

            /** RecordRequest aiAuthorship */
            aiAuthorship?: (atomic.RecordAiAuthorship.$Properties|null);

            /** RecordRequest skipBinary */
            skipBinary?: (boolean|null);

            /** RecordRequest maxFileSize */
            maxFileSize?: (number|Long|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a RecordRequest. */
        type $Shape = {
          repository?: atomic.RepositoryRef.$Shape|null;
          meta?: atomic.RequestMeta.$Shape|null;
          message?: string|null;
          paths?: string[]|null;
          expected?: atomic.ExpectedState.$Shape|null;
          author?: atomic.Author.$Shape|null;
          identityName?: string|null;
          aiAuthorship?: atomic.RecordAiAuthorship.$Shape|null;
          skipBinary?: boolean|null;
          maxFileSize?: number|Long|null;
          $unknowns?: Uint8Array[];
        };
    }

    /**
     * Properties of an Author.
     * @deprecated Use atomic.Author.$Properties instead.
     */
    interface IAuthor extends atomic.Author.$Properties {
    }

    /** Represents an Author. */
    class Author {

        /**
         * Constructs a new Author.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.Author.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** Author name. */
        name: string;

        /** Author email. */
        email?: (string|null);

        /**
         * Creates a new Author instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Author instance
         */
        static create(properties: atomic.Author.$Shape): atomic.Author & atomic.Author.$Shape;
        static create(properties?: atomic.Author.$Properties): atomic.Author;

        /**
         * Encodes the specified Author message. Does not implicitly {@link atomic.Author.verify|verify} messages.
         * @param message Author message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.Author.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Author message, length delimited. Does not implicitly {@link atomic.Author.verify|verify} messages.
         * @param message Author message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.Author.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Author message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.Author & atomic.Author.$Shape} Author
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.Author & atomic.Author.$Shape;

        /**
         * Decodes an Author message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.Author & atomic.Author.$Shape} Author
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.Author & atomic.Author.$Shape;

        /**
         * Verifies an Author message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Author message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Author
         */
        static fromObject(object: { [k: string]: any }): atomic.Author;

        /**
         * Creates a plain object from an Author message. Also converts values to other types if specified.
         * @param message Author
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.Author, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Author to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for Author
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace Author {

        /** Properties of an Author. */
        interface $Properties {

            /** Author name */
            name?: (string|null);

            /** Author email */
            email?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of an Author. */
        type $Shape = atomic.Author.$Properties;
    }

    /**
     * Properties of a RecordAiAuthorship.
     * @deprecated Use atomic.RecordAiAuthorship.$Properties instead.
     */
    interface IRecordAiAuthorship extends atomic.RecordAiAuthorship.$Properties {
    }

    /** Represents a RecordAiAuthorship. */
    class RecordAiAuthorship {

        /**
         * Constructs a new RecordAiAuthorship.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.RecordAiAuthorship.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** RecordAiAuthorship provider. */
        provider: string;

        /** RecordAiAuthorship model. */
        model: string;

        /** RecordAiAuthorship tool. */
        tool?: (string|null);

        /** RecordAiAuthorship suggestionType. */
        suggestionType?: (string|null);

        /** RecordAiAuthorship inputTokens. */
        inputTokens?: (number|Long|null);

        /** RecordAiAuthorship outputTokens. */
        outputTokens?: (number|Long|null);

        /** RecordAiAuthorship requestId. */
        requestId?: (string|null);

        /** RecordAiAuthorship sessionId. */
        sessionId?: (string|null);

        /**
         * Creates a new RecordAiAuthorship instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RecordAiAuthorship instance
         */
        static create(properties: atomic.RecordAiAuthorship.$Shape): atomic.RecordAiAuthorship & atomic.RecordAiAuthorship.$Shape;
        static create(properties?: atomic.RecordAiAuthorship.$Properties): atomic.RecordAiAuthorship;

        /**
         * Encodes the specified RecordAiAuthorship message. Does not implicitly {@link atomic.RecordAiAuthorship.verify|verify} messages.
         * @param message RecordAiAuthorship message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.RecordAiAuthorship.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RecordAiAuthorship message, length delimited. Does not implicitly {@link atomic.RecordAiAuthorship.verify|verify} messages.
         * @param message RecordAiAuthorship message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.RecordAiAuthorship.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RecordAiAuthorship message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.RecordAiAuthorship & atomic.RecordAiAuthorship.$Shape} RecordAiAuthorship
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.RecordAiAuthorship & atomic.RecordAiAuthorship.$Shape;

        /**
         * Decodes a RecordAiAuthorship message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.RecordAiAuthorship & atomic.RecordAiAuthorship.$Shape} RecordAiAuthorship
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.RecordAiAuthorship & atomic.RecordAiAuthorship.$Shape;

        /**
         * Verifies a RecordAiAuthorship message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RecordAiAuthorship message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RecordAiAuthorship
         */
        static fromObject(object: { [k: string]: any }): atomic.RecordAiAuthorship;

        /**
         * Creates a plain object from a RecordAiAuthorship message. Also converts values to other types if specified.
         * @param message RecordAiAuthorship
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.RecordAiAuthorship, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RecordAiAuthorship to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for RecordAiAuthorship
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace RecordAiAuthorship {

        /** Properties of a RecordAiAuthorship. */
        interface $Properties {

            /** RecordAiAuthorship provider */
            provider?: (string|null);

            /** RecordAiAuthorship model */
            model?: (string|null);

            /** RecordAiAuthorship tool */
            tool?: (string|null);

            /** RecordAiAuthorship suggestionType */
            suggestionType?: (string|null);

            /** RecordAiAuthorship inputTokens */
            inputTokens?: (number|Long|null);

            /** RecordAiAuthorship outputTokens */
            outputTokens?: (number|Long|null);

            /** RecordAiAuthorship requestId */
            requestId?: (string|null);

            /** RecordAiAuthorship sessionId */
            sessionId?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a RecordAiAuthorship. */
        type $Shape = atomic.RecordAiAuthorship.$Properties;
    }

    /**
     * Properties of a RecordResponse.
     * @deprecated Use atomic.RecordResponse.$Properties instead.
     */
    interface IRecordResponse extends atomic.RecordResponse.$Properties {
    }

    /** Represents a RecordResponse. */
    class RecordResponse {

        /**
         * Constructs a new RecordResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.RecordResponse.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** RecordResponse change. */
        change?: (atomic.ChangeInfo.$Properties|null);

        /** RecordResponse viewMerkle. */
        viewMerkle?: (atomic.Hash.$Properties|null);

        /** RecordResponse view. */
        view?: (string|null);

        /** RecordResponse statistics. */
        statistics?: (atomic.RecordStatistics.$Properties|null);

        /** RecordResponse recordedPaths. */
        recordedPaths: string[];

        /** RecordResponse skippedPaths. */
        skippedPaths: string[];

        /** RecordResponse fileErrors. */
        fileErrors: atomic.RecordFileError.$Properties[];

        /** RecordResponse meta. */
        meta?: (atomic.ResponseMeta.$Properties|null);

        /**
         * Creates a new RecordResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RecordResponse instance
         */
        static create(properties: atomic.RecordResponse.$Shape): atomic.RecordResponse & atomic.RecordResponse.$Shape;
        static create(properties?: atomic.RecordResponse.$Properties): atomic.RecordResponse;

        /**
         * Encodes the specified RecordResponse message. Does not implicitly {@link atomic.RecordResponse.verify|verify} messages.
         * @param message RecordResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.RecordResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RecordResponse message, length delimited. Does not implicitly {@link atomic.RecordResponse.verify|verify} messages.
         * @param message RecordResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.RecordResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RecordResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.RecordResponse & atomic.RecordResponse.$Shape} RecordResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.RecordResponse & atomic.RecordResponse.$Shape;

        /**
         * Decodes a RecordResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.RecordResponse & atomic.RecordResponse.$Shape} RecordResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.RecordResponse & atomic.RecordResponse.$Shape;

        /**
         * Verifies a RecordResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RecordResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RecordResponse
         */
        static fromObject(object: { [k: string]: any }): atomic.RecordResponse;

        /**
         * Creates a plain object from a RecordResponse message. Also converts values to other types if specified.
         * @param message RecordResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.RecordResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RecordResponse to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for RecordResponse
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace RecordResponse {

        /** Properties of a RecordResponse. */
        interface $Properties {

            /** RecordResponse change */
            change?: (atomic.ChangeInfo.$Properties|null);

            /** RecordResponse viewMerkle */
            viewMerkle?: (atomic.Hash.$Properties|null);

            /** RecordResponse view */
            view?: (string|null);

            /** RecordResponse statistics */
            statistics?: (atomic.RecordStatistics.$Properties|null);

            /** RecordResponse recordedPaths */
            recordedPaths?: (string[]|null);

            /** RecordResponse skippedPaths */
            skippedPaths?: (string[]|null);

            /** RecordResponse fileErrors */
            fileErrors?: (atomic.RecordFileError.$Properties[]|null);

            /** RecordResponse meta */
            meta?: (atomic.ResponseMeta.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a RecordResponse. */
        type $Shape = atomic.RecordResponse.$Properties;
    }

    /**
     * Properties of a ChangeInfo.
     * @deprecated Use atomic.ChangeInfo.$Properties instead.
     */
    interface IChangeInfo extends atomic.ChangeInfo.$Properties {
    }

    /** Represents a ChangeInfo. */
    class ChangeInfo {

        /**
         * Constructs a new ChangeInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.ChangeInfo.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ChangeInfo hash. */
        hash?: (atomic.Hash.$Properties|null);

        /** ChangeInfo message. */
        message?: (string|null);

        /** ChangeInfo description. */
        description?: (string|null);

        /** ChangeInfo authors. */
        authors: atomic.Author.$Properties[];

        /** ChangeInfo recordedAt. */
        recordedAt?: (google.protobuf.Timestamp.$Properties|null);

        /** ChangeInfo dependencies. */
        dependencies: atomic.Hash.$Properties[];

        /** ChangeInfo graphSectionCount. */
        graphSectionCount: number;

        /** ChangeInfo semanticSectionCount. */
        semanticSectionCount: number;

        /** ChangeInfo contentChunkCount. */
        contentChunkCount: number;

        /** ChangeInfo hasProvenance. */
        hasProvenance: boolean;

        /** ChangeInfo hasUnhashed. */
        hasUnhashed: boolean;

        /** ChangeInfo hasSignature. */
        hasSignature: boolean;

        /**
         * Creates a new ChangeInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChangeInfo instance
         */
        static create(properties: atomic.ChangeInfo.$Shape): atomic.ChangeInfo & atomic.ChangeInfo.$Shape;
        static create(properties?: atomic.ChangeInfo.$Properties): atomic.ChangeInfo;

        /**
         * Encodes the specified ChangeInfo message. Does not implicitly {@link atomic.ChangeInfo.verify|verify} messages.
         * @param message ChangeInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.ChangeInfo.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChangeInfo message, length delimited. Does not implicitly {@link atomic.ChangeInfo.verify|verify} messages.
         * @param message ChangeInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.ChangeInfo.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChangeInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.ChangeInfo & atomic.ChangeInfo.$Shape} ChangeInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.ChangeInfo & atomic.ChangeInfo.$Shape;

        /**
         * Decodes a ChangeInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.ChangeInfo & atomic.ChangeInfo.$Shape} ChangeInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.ChangeInfo & atomic.ChangeInfo.$Shape;

        /**
         * Verifies a ChangeInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChangeInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChangeInfo
         */
        static fromObject(object: { [k: string]: any }): atomic.ChangeInfo;

        /**
         * Creates a plain object from a ChangeInfo message. Also converts values to other types if specified.
         * @param message ChangeInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.ChangeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChangeInfo to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ChangeInfo
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ChangeInfo {

        /** Properties of a ChangeInfo. */
        interface $Properties {

            /** ChangeInfo hash */
            hash?: (atomic.Hash.$Properties|null);

            /** ChangeInfo message */
            message?: (string|null);

            /** ChangeInfo description */
            description?: (string|null);

            /** ChangeInfo authors */
            authors?: (atomic.Author.$Properties[]|null);

            /** ChangeInfo recordedAt */
            recordedAt?: (google.protobuf.Timestamp.$Properties|null);

            /** ChangeInfo dependencies */
            dependencies?: (atomic.Hash.$Properties[]|null);

            /** ChangeInfo graphSectionCount */
            graphSectionCount?: (number|null);

            /** ChangeInfo semanticSectionCount */
            semanticSectionCount?: (number|null);

            /** ChangeInfo contentChunkCount */
            contentChunkCount?: (number|null);

            /** ChangeInfo hasProvenance */
            hasProvenance?: (boolean|null);

            /** ChangeInfo hasUnhashed */
            hasUnhashed?: (boolean|null);

            /** ChangeInfo hasSignature */
            hasSignature?: (boolean|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ChangeInfo. */
        type $Shape = atomic.ChangeInfo.$Properties;
    }

    /**
     * Properties of a RecordStatistics.
     * @deprecated Use atomic.RecordStatistics.$Properties instead.
     */
    interface IRecordStatistics extends atomic.RecordStatistics.$Properties {
    }

    /** Represents a RecordStatistics. */
    class RecordStatistics {

        /**
         * Constructs a new RecordStatistics.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.RecordStatistics.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** RecordStatistics filesRecorded. */
        filesRecorded: (number|Long);

        /** RecordStatistics directoriesRecorded. */
        directoriesRecorded: (number|Long);

        /** RecordStatistics hunksCreated. */
        hunksCreated: (number|Long);

        /** RecordStatistics verticesAdded. */
        verticesAdded: (number|Long);

        /** RecordStatistics edgesModified. */
        edgesModified: (number|Long);

        /** RecordStatistics contentBytes. */
        contentBytes: (number|Long);

        /** RecordStatistics linesAdded. */
        linesAdded: (number|Long);

        /** RecordStatistics linesDeleted. */
        linesDeleted: (number|Long);

        /** RecordStatistics linesModified. */
        linesModified: (number|Long);

        /** RecordStatistics tokensAdded. */
        tokensAdded: (number|Long);

        /** RecordStatistics tokensDeleted. */
        tokensDeleted: (number|Long);

        /** RecordStatistics tokensReplaced. */
        tokensReplaced: (number|Long);

        /**
         * Creates a new RecordStatistics instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RecordStatistics instance
         */
        static create(properties: atomic.RecordStatistics.$Shape): atomic.RecordStatistics & atomic.RecordStatistics.$Shape;
        static create(properties?: atomic.RecordStatistics.$Properties): atomic.RecordStatistics;

        /**
         * Encodes the specified RecordStatistics message. Does not implicitly {@link atomic.RecordStatistics.verify|verify} messages.
         * @param message RecordStatistics message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.RecordStatistics.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RecordStatistics message, length delimited. Does not implicitly {@link atomic.RecordStatistics.verify|verify} messages.
         * @param message RecordStatistics message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.RecordStatistics.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RecordStatistics message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.RecordStatistics & atomic.RecordStatistics.$Shape} RecordStatistics
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.RecordStatistics & atomic.RecordStatistics.$Shape;

        /**
         * Decodes a RecordStatistics message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.RecordStatistics & atomic.RecordStatistics.$Shape} RecordStatistics
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.RecordStatistics & atomic.RecordStatistics.$Shape;

        /**
         * Verifies a RecordStatistics message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RecordStatistics message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RecordStatistics
         */
        static fromObject(object: { [k: string]: any }): atomic.RecordStatistics;

        /**
         * Creates a plain object from a RecordStatistics message. Also converts values to other types if specified.
         * @param message RecordStatistics
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.RecordStatistics, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RecordStatistics to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for RecordStatistics
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace RecordStatistics {

        /** Properties of a RecordStatistics. */
        interface $Properties {

            /** RecordStatistics filesRecorded */
            filesRecorded?: (number|Long|null);

            /** RecordStatistics directoriesRecorded */
            directoriesRecorded?: (number|Long|null);

            /** RecordStatistics hunksCreated */
            hunksCreated?: (number|Long|null);

            /** RecordStatistics verticesAdded */
            verticesAdded?: (number|Long|null);

            /** RecordStatistics edgesModified */
            edgesModified?: (number|Long|null);

            /** RecordStatistics contentBytes */
            contentBytes?: (number|Long|null);

            /** RecordStatistics linesAdded */
            linesAdded?: (number|Long|null);

            /** RecordStatistics linesDeleted */
            linesDeleted?: (number|Long|null);

            /** RecordStatistics linesModified */
            linesModified?: (number|Long|null);

            /** RecordStatistics tokensAdded */
            tokensAdded?: (number|Long|null);

            /** RecordStatistics tokensDeleted */
            tokensDeleted?: (number|Long|null);

            /** RecordStatistics tokensReplaced */
            tokensReplaced?: (number|Long|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a RecordStatistics. */
        type $Shape = atomic.RecordStatistics.$Properties;
    }

    /**
     * Properties of a RecordFileError.
     * @deprecated Use atomic.RecordFileError.$Properties instead.
     */
    interface IRecordFileError extends atomic.RecordFileError.$Properties {
    }

    /** Represents a RecordFileError. */
    class RecordFileError {

        /**
         * Constructs a new RecordFileError.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.RecordFileError.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** RecordFileError path. */
        path: string;

        /** RecordFileError message. */
        message: string;

        /**
         * Creates a new RecordFileError instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RecordFileError instance
         */
        static create(properties: atomic.RecordFileError.$Shape): atomic.RecordFileError & atomic.RecordFileError.$Shape;
        static create(properties?: atomic.RecordFileError.$Properties): atomic.RecordFileError;

        /**
         * Encodes the specified RecordFileError message. Does not implicitly {@link atomic.RecordFileError.verify|verify} messages.
         * @param message RecordFileError message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.RecordFileError.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RecordFileError message, length delimited. Does not implicitly {@link atomic.RecordFileError.verify|verify} messages.
         * @param message RecordFileError message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.RecordFileError.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RecordFileError message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.RecordFileError & atomic.RecordFileError.$Shape} RecordFileError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.RecordFileError & atomic.RecordFileError.$Shape;

        /**
         * Decodes a RecordFileError message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.RecordFileError & atomic.RecordFileError.$Shape} RecordFileError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.RecordFileError & atomic.RecordFileError.$Shape;

        /**
         * Verifies a RecordFileError message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RecordFileError message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RecordFileError
         */
        static fromObject(object: { [k: string]: any }): atomic.RecordFileError;

        /**
         * Creates a plain object from a RecordFileError message. Also converts values to other types if specified.
         * @param message RecordFileError
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.RecordFileError, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RecordFileError to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for RecordFileError
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace RecordFileError {

        /** Properties of a RecordFileError. */
        interface $Properties {

            /** RecordFileError path */
            path?: (string|null);

            /** RecordFileError message */
            message?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a RecordFileError. */
        type $Shape = atomic.RecordFileError.$Properties;
    }

    /**
     * Properties of a LogRequest.
     * @deprecated Use atomic.LogRequest.$Properties instead.
     */
    interface ILogRequest extends atomic.LogRequest.$Properties {
    }

    /** Represents a LogRequest. */
    class LogRequest {

        /**
         * Constructs a new LogRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.LogRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** LogRequest repository. */
        repository?: (atomic.RepositoryRef.$Properties|null);

        /** LogRequest allViews. */
        allViews: boolean;

        /** LogRequest view. */
        view?: (string|null);

        /** LogRequest cursor. */
        cursor?: (atomic.PageCursor.$Properties|null);

        /** LogRequest budget. */
        budget?: (atomic.PageBudget.$Properties|null);

        /** LogRequest pathFilter. */
        pathFilter: string[];

        /** LogRequest tagsOnly. */
        tagsOnly: boolean;

        /**
         * Creates a new LogRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LogRequest instance
         */
        static create(properties: atomic.LogRequest.$Shape): atomic.LogRequest & atomic.LogRequest.$Shape;
        static create(properties?: atomic.LogRequest.$Properties): atomic.LogRequest;

        /**
         * Encodes the specified LogRequest message. Does not implicitly {@link atomic.LogRequest.verify|verify} messages.
         * @param message LogRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.LogRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LogRequest message, length delimited. Does not implicitly {@link atomic.LogRequest.verify|verify} messages.
         * @param message LogRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.LogRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LogRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.LogRequest & atomic.LogRequest.$Shape} LogRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.LogRequest & atomic.LogRequest.$Shape;

        /**
         * Decodes a LogRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.LogRequest & atomic.LogRequest.$Shape} LogRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.LogRequest & atomic.LogRequest.$Shape;

        /**
         * Verifies a LogRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LogRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LogRequest
         */
        static fromObject(object: { [k: string]: any }): atomic.LogRequest;

        /**
         * Creates a plain object from a LogRequest message. Also converts values to other types if specified.
         * @param message LogRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.LogRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LogRequest to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for LogRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace LogRequest {

        /** Properties of a LogRequest. */
        interface $Properties {

            /** LogRequest repository */
            repository?: (atomic.RepositoryRef.$Properties|null);

            /** LogRequest allViews */
            allViews?: (boolean|null);

            /** LogRequest view */
            view?: (string|null);

            /** LogRequest cursor */
            cursor?: (atomic.PageCursor.$Properties|null);

            /** LogRequest budget */
            budget?: (atomic.PageBudget.$Properties|null);

            /** LogRequest pathFilter */
            pathFilter?: (string[]|null);

            /** LogRequest tagsOnly */
            tagsOnly?: (boolean|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a LogRequest. */
        type $Shape = atomic.LogRequest.$Properties;
    }

    /**
     * Properties of a PageCursor.
     * @deprecated Use atomic.PageCursor.$Properties instead.
     */
    interface IPageCursor extends atomic.PageCursor.$Properties {
    }

    /** Represents a PageCursor. */
    class PageCursor {

        /**
         * Constructs a new PageCursor.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.PageCursor.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** PageCursor seq. */
        seq: (number|Long);

        /** PageCursor offset. */
        offset: (number|Long);

        /**
         * Creates a new PageCursor instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PageCursor instance
         */
        static create(properties: atomic.PageCursor.$Shape): atomic.PageCursor & atomic.PageCursor.$Shape;
        static create(properties?: atomic.PageCursor.$Properties): atomic.PageCursor;

        /**
         * Encodes the specified PageCursor message. Does not implicitly {@link atomic.PageCursor.verify|verify} messages.
         * @param message PageCursor message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.PageCursor.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PageCursor message, length delimited. Does not implicitly {@link atomic.PageCursor.verify|verify} messages.
         * @param message PageCursor message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.PageCursor.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PageCursor message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.PageCursor & atomic.PageCursor.$Shape} PageCursor
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.PageCursor & atomic.PageCursor.$Shape;

        /**
         * Decodes a PageCursor message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.PageCursor & atomic.PageCursor.$Shape} PageCursor
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.PageCursor & atomic.PageCursor.$Shape;

        /**
         * Verifies a PageCursor message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PageCursor message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PageCursor
         */
        static fromObject(object: { [k: string]: any }): atomic.PageCursor;

        /**
         * Creates a plain object from a PageCursor message. Also converts values to other types if specified.
         * @param message PageCursor
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.PageCursor, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PageCursor to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for PageCursor
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace PageCursor {

        /** Properties of a PageCursor. */
        interface $Properties {

            /** PageCursor seq */
            seq?: (number|Long|null);

            /** PageCursor offset */
            offset?: (number|Long|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a PageCursor. */
        type $Shape = atomic.PageCursor.$Properties;
    }

    /**
     * Properties of a PageBudget.
     * @deprecated Use atomic.PageBudget.$Properties instead.
     */
    interface IPageBudget extends atomic.PageBudget.$Properties {
    }

    /** Represents a PageBudget. */
    class PageBudget {

        /**
         * Constructs a new PageBudget.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.PageBudget.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** PageBudget maxItems. */
        maxItems?: (number|null);

        /** PageBudget maxBytes. */
        maxBytes?: (number|null);

        /**
         * Creates a new PageBudget instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PageBudget instance
         */
        static create(properties: atomic.PageBudget.$Shape): atomic.PageBudget & atomic.PageBudget.$Shape;
        static create(properties?: atomic.PageBudget.$Properties): atomic.PageBudget;

        /**
         * Encodes the specified PageBudget message. Does not implicitly {@link atomic.PageBudget.verify|verify} messages.
         * @param message PageBudget message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.PageBudget.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PageBudget message, length delimited. Does not implicitly {@link atomic.PageBudget.verify|verify} messages.
         * @param message PageBudget message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.PageBudget.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PageBudget message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.PageBudget & atomic.PageBudget.$Shape} PageBudget
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.PageBudget & atomic.PageBudget.$Shape;

        /**
         * Decodes a PageBudget message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.PageBudget & atomic.PageBudget.$Shape} PageBudget
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.PageBudget & atomic.PageBudget.$Shape;

        /**
         * Verifies a PageBudget message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PageBudget message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PageBudget
         */
        static fromObject(object: { [k: string]: any }): atomic.PageBudget;

        /**
         * Creates a plain object from a PageBudget message. Also converts values to other types if specified.
         * @param message PageBudget
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.PageBudget, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PageBudget to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for PageBudget
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace PageBudget {

        /** Properties of a PageBudget. */
        interface $Properties {

            /** PageBudget maxItems */
            maxItems?: (number|null);

            /** PageBudget maxBytes */
            maxBytes?: (number|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a PageBudget. */
        type $Shape = atomic.PageBudget.$Properties;
    }

    /**
     * Properties of a LogResponse.
     * @deprecated Use atomic.LogResponse.$Properties instead.
     */
    interface ILogResponse extends atomic.LogResponse.$Properties {
    }

    /** Represents a LogResponse. */
    class LogResponse {

        /**
         * Constructs a new LogResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.LogResponse.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** LogResponse entries. */
        entries: atomic.ChangeLogEntry.$Properties[];

        /** LogResponse nextCursor. */
        nextCursor?: (atomic.PageCursor.$Properties|null);

        /**
         * Creates a new LogResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LogResponse instance
         */
        static create(properties: atomic.LogResponse.$Shape): atomic.LogResponse & atomic.LogResponse.$Shape;
        static create(properties?: atomic.LogResponse.$Properties): atomic.LogResponse;

        /**
         * Encodes the specified LogResponse message. Does not implicitly {@link atomic.LogResponse.verify|verify} messages.
         * @param message LogResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.LogResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LogResponse message, length delimited. Does not implicitly {@link atomic.LogResponse.verify|verify} messages.
         * @param message LogResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.LogResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LogResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.LogResponse & atomic.LogResponse.$Shape} LogResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.LogResponse & atomic.LogResponse.$Shape;

        /**
         * Decodes a LogResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.LogResponse & atomic.LogResponse.$Shape} LogResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.LogResponse & atomic.LogResponse.$Shape;

        /**
         * Verifies a LogResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LogResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LogResponse
         */
        static fromObject(object: { [k: string]: any }): atomic.LogResponse;

        /**
         * Creates a plain object from a LogResponse message. Also converts values to other types if specified.
         * @param message LogResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.LogResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LogResponse to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for LogResponse
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace LogResponse {

        /** Properties of a LogResponse. */
        interface $Properties {

            /** LogResponse entries */
            entries?: (atomic.ChangeLogEntry.$Properties[]|null);

            /** LogResponse nextCursor */
            nextCursor?: (atomic.PageCursor.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a LogResponse. */
        type $Shape = atomic.LogResponse.$Properties;
    }

    /**
     * Properties of a ChangeLogEntry.
     * @deprecated Use atomic.ChangeLogEntry.$Properties instead.
     */
    interface IChangeLogEntry extends atomic.ChangeLogEntry.$Properties {
    }

    /** Represents a ChangeLogEntry. */
    class ChangeLogEntry {

        /**
         * Constructs a new ChangeLogEntry.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.ChangeLogEntry.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ChangeLogEntry hash. */
        hash?: (atomic.Hash.$Properties|null);

        /** ChangeLogEntry sequence. */
        sequence: (number|Long);

        /** ChangeLogEntry state. */
        state?: (atomic.Hash.$Properties|null);

        /** ChangeLogEntry message. */
        message?: (string|null);

        /** ChangeLogEntry description. */
        description?: (string|null);

        /** ChangeLogEntry authors. */
        authors: atomic.Author.$Properties[];

        /** ChangeLogEntry recordedAt. */
        recordedAt?: (google.protobuf.Timestamp.$Properties|null);

        /** ChangeLogEntry dependencies. */
        dependencies: atomic.Hash.$Properties[];

        /** ChangeLogEntry view. */
        view?: (string|null);

        /** ChangeLogEntry isTagged. */
        isTagged: boolean;

        /**
         * Creates a new ChangeLogEntry instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChangeLogEntry instance
         */
        static create(properties: atomic.ChangeLogEntry.$Shape): atomic.ChangeLogEntry & atomic.ChangeLogEntry.$Shape;
        static create(properties?: atomic.ChangeLogEntry.$Properties): atomic.ChangeLogEntry;

        /**
         * Encodes the specified ChangeLogEntry message. Does not implicitly {@link atomic.ChangeLogEntry.verify|verify} messages.
         * @param message ChangeLogEntry message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.ChangeLogEntry.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChangeLogEntry message, length delimited. Does not implicitly {@link atomic.ChangeLogEntry.verify|verify} messages.
         * @param message ChangeLogEntry message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.ChangeLogEntry.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChangeLogEntry message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.ChangeLogEntry & atomic.ChangeLogEntry.$Shape} ChangeLogEntry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.ChangeLogEntry & atomic.ChangeLogEntry.$Shape;

        /**
         * Decodes a ChangeLogEntry message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.ChangeLogEntry & atomic.ChangeLogEntry.$Shape} ChangeLogEntry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.ChangeLogEntry & atomic.ChangeLogEntry.$Shape;

        /**
         * Verifies a ChangeLogEntry message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChangeLogEntry message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChangeLogEntry
         */
        static fromObject(object: { [k: string]: any }): atomic.ChangeLogEntry;

        /**
         * Creates a plain object from a ChangeLogEntry message. Also converts values to other types if specified.
         * @param message ChangeLogEntry
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.ChangeLogEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChangeLogEntry to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ChangeLogEntry
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ChangeLogEntry {

        /** Properties of a ChangeLogEntry. */
        interface $Properties {

            /** ChangeLogEntry hash */
            hash?: (atomic.Hash.$Properties|null);

            /** ChangeLogEntry sequence */
            sequence?: (number|Long|null);

            /** ChangeLogEntry state */
            state?: (atomic.Hash.$Properties|null);

            /** ChangeLogEntry message */
            message?: (string|null);

            /** ChangeLogEntry description */
            description?: (string|null);

            /** ChangeLogEntry authors */
            authors?: (atomic.Author.$Properties[]|null);

            /** ChangeLogEntry recordedAt */
            recordedAt?: (google.protobuf.Timestamp.$Properties|null);

            /** ChangeLogEntry dependencies */
            dependencies?: (atomic.Hash.$Properties[]|null);

            /** ChangeLogEntry view */
            view?: (string|null);

            /** ChangeLogEntry isTagged */
            isTagged?: (boolean|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ChangeLogEntry. */
        type $Shape = atomic.ChangeLogEntry.$Properties;
    }

    /**
     * Properties of a GetChangeRequest.
     * @deprecated Use atomic.GetChangeRequest.$Properties instead.
     */
    interface IGetChangeRequest extends atomic.GetChangeRequest.$Properties {
    }

    /** Represents a GetChangeRequest. */
    class GetChangeRequest {

        /**
         * Constructs a new GetChangeRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.GetChangeRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** GetChangeRequest repository. */
        repository?: (atomic.RepositoryRef.$Properties|null);

        /** GetChangeRequest ref. */
        ref?: (atomic.ChangeRef.$Properties|null);

        /** GetChangeRequest includes. */
        includes?: (atomic.ChangeIncludes.$Properties|null);

        /** GetChangeRequest view. */
        view?: (atomic.ViewRef.$Properties|null);

        /** GetChangeRequest includeFileContents. */
        includeFileContents: boolean;

        /**
         * Creates a new GetChangeRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetChangeRequest instance
         */
        static create(properties: atomic.GetChangeRequest.$Shape): atomic.GetChangeRequest & atomic.GetChangeRequest.$Shape;
        static create(properties?: atomic.GetChangeRequest.$Properties): atomic.GetChangeRequest;

        /**
         * Encodes the specified GetChangeRequest message. Does not implicitly {@link atomic.GetChangeRequest.verify|verify} messages.
         * @param message GetChangeRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.GetChangeRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetChangeRequest message, length delimited. Does not implicitly {@link atomic.GetChangeRequest.verify|verify} messages.
         * @param message GetChangeRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.GetChangeRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetChangeRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.GetChangeRequest & atomic.GetChangeRequest.$Shape} GetChangeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.GetChangeRequest & atomic.GetChangeRequest.$Shape;

        /**
         * Decodes a GetChangeRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.GetChangeRequest & atomic.GetChangeRequest.$Shape} GetChangeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.GetChangeRequest & atomic.GetChangeRequest.$Shape;

        /**
         * Verifies a GetChangeRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetChangeRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetChangeRequest
         */
        static fromObject(object: { [k: string]: any }): atomic.GetChangeRequest;

        /**
         * Creates a plain object from a GetChangeRequest message. Also converts values to other types if specified.
         * @param message GetChangeRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.GetChangeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetChangeRequest to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for GetChangeRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace GetChangeRequest {

        /** Properties of a GetChangeRequest. */
        interface $Properties {

            /** GetChangeRequest repository */
            repository?: (atomic.RepositoryRef.$Properties|null);

            /** GetChangeRequest ref */
            ref?: (atomic.ChangeRef.$Properties|null);

            /** GetChangeRequest includes */
            includes?: (atomic.ChangeIncludes.$Properties|null);

            /** GetChangeRequest view */
            view?: (atomic.ViewRef.$Properties|null);

            /** GetChangeRequest includeFileContents */
            includeFileContents?: (boolean|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a GetChangeRequest. */
        type $Shape = {
          repository?: atomic.RepositoryRef.$Shape|null;
          ref?: atomic.ChangeRef.$Shape|null;
          includes?: atomic.ChangeIncludes.$Shape|null;
          view?: atomic.ViewRef.$Shape|null;
          includeFileContents?: boolean|null;
          $unknowns?: Uint8Array[];
        };
    }

    /**
     * Properties of a ChangeRef.
     * @deprecated Use atomic.ChangeRef.$Properties instead.
     */
    interface IChangeRef extends atomic.ChangeRef.$Properties {
    }

    /** Represents a ChangeRef. */
    class ChangeRef {

        /**
         * Constructs a new ChangeRef.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.ChangeRef.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ChangeRef hash. */
        hash?: (atomic.Hash.$Properties|null);

        /** ChangeRef sequence. */
        sequence?: (number|Long|null);

        /** ChangeRef prefix. */
        prefix?: (string|null);

        /** ChangeRef kind. */
        kind?: ("hash"|"sequence"|"prefix");

        /**
         * Creates a new ChangeRef instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChangeRef instance
         */
        static create(properties: atomic.ChangeRef.$Shape): atomic.ChangeRef & atomic.ChangeRef.$Shape;
        static create(properties?: atomic.ChangeRef.$Properties): atomic.ChangeRef;

        /**
         * Encodes the specified ChangeRef message. Does not implicitly {@link atomic.ChangeRef.verify|verify} messages.
         * @param message ChangeRef message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.ChangeRef.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChangeRef message, length delimited. Does not implicitly {@link atomic.ChangeRef.verify|verify} messages.
         * @param message ChangeRef message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.ChangeRef.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChangeRef message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.ChangeRef & atomic.ChangeRef.$Shape} ChangeRef
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.ChangeRef & atomic.ChangeRef.$Shape;

        /**
         * Decodes a ChangeRef message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.ChangeRef & atomic.ChangeRef.$Shape} ChangeRef
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.ChangeRef & atomic.ChangeRef.$Shape;

        /**
         * Verifies a ChangeRef message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChangeRef message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChangeRef
         */
        static fromObject(object: { [k: string]: any }): atomic.ChangeRef;

        /**
         * Creates a plain object from a ChangeRef message. Also converts values to other types if specified.
         * @param message ChangeRef
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.ChangeRef, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChangeRef to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ChangeRef
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ChangeRef {

        /** Properties of a ChangeRef. */
        interface $Properties {

            /** ChangeRef hash */
            hash?: (atomic.Hash.$Properties|null);

            /** ChangeRef sequence */
            sequence?: (number|Long|null);

            /** ChangeRef prefix */
            prefix?: (string|null);

            /** ChangeRef kind */
            kind?: ("hash"|"sequence"|"prefix");

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Narrowed shape of a ChangeRef. */
        type $Shape = {
          hash?: atomic.Hash.$Shape|null;
          sequence?: number|Long|null;
          prefix?: string|null;
          $unknowns?: Uint8Array[];
        } & (
          ({ kind?: undefined; hash?: null; sequence?: null; prefix?: null }|{ kind?: "hash"; hash: atomic.Hash.$Shape; sequence?: null; prefix?: null }|{ kind?: "sequence"; hash?: null; sequence: number|Long; prefix?: null }|{ kind?: "prefix"; hash?: null; sequence?: null; prefix: string })
        );
    }

    /**
     * Properties of a ChangeIncludes.
     * @deprecated Use atomic.ChangeIncludes.$Properties instead.
     */
    interface IChangeIncludes extends atomic.ChangeIncludes.$Properties {
    }

    /** Represents a ChangeIncludes. */
    class ChangeIncludes {

        /**
         * Constructs a new ChangeIncludes.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.ChangeIncludes.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ChangeIncludes metadata. */
        metadata: boolean;

        /** ChangeIncludes graphSection. */
        graphSection: boolean;

        /** ChangeIncludes semanticSection. */
        semanticSection: boolean;

        /** ChangeIncludes signatures. */
        signatures: boolean;

        /** ChangeIncludes contentChunks. */
        contentChunks: boolean;

        /** ChangeIncludes blastRadius. */
        blastRadius: boolean;

        /**
         * Creates a new ChangeIncludes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChangeIncludes instance
         */
        static create(properties: atomic.ChangeIncludes.$Shape): atomic.ChangeIncludes & atomic.ChangeIncludes.$Shape;
        static create(properties?: atomic.ChangeIncludes.$Properties): atomic.ChangeIncludes;

        /**
         * Encodes the specified ChangeIncludes message. Does not implicitly {@link atomic.ChangeIncludes.verify|verify} messages.
         * @param message ChangeIncludes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.ChangeIncludes.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChangeIncludes message, length delimited. Does not implicitly {@link atomic.ChangeIncludes.verify|verify} messages.
         * @param message ChangeIncludes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.ChangeIncludes.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChangeIncludes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.ChangeIncludes & atomic.ChangeIncludes.$Shape} ChangeIncludes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.ChangeIncludes & atomic.ChangeIncludes.$Shape;

        /**
         * Decodes a ChangeIncludes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.ChangeIncludes & atomic.ChangeIncludes.$Shape} ChangeIncludes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.ChangeIncludes & atomic.ChangeIncludes.$Shape;

        /**
         * Verifies a ChangeIncludes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChangeIncludes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChangeIncludes
         */
        static fromObject(object: { [k: string]: any }): atomic.ChangeIncludes;

        /**
         * Creates a plain object from a ChangeIncludes message. Also converts values to other types if specified.
         * @param message ChangeIncludes
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.ChangeIncludes, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChangeIncludes to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ChangeIncludes
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ChangeIncludes {

        /** Properties of a ChangeIncludes. */
        interface $Properties {

            /** ChangeIncludes metadata */
            metadata?: (boolean|null);

            /** ChangeIncludes graphSection */
            graphSection?: (boolean|null);

            /** ChangeIncludes semanticSection */
            semanticSection?: (boolean|null);

            /** ChangeIncludes signatures */
            signatures?: (boolean|null);

            /** ChangeIncludes contentChunks */
            contentChunks?: (boolean|null);

            /** ChangeIncludes blastRadius */
            blastRadius?: (boolean|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ChangeIncludes. */
        type $Shape = atomic.ChangeIncludes.$Properties;
    }

    /**
     * Properties of a GetChangeResponse.
     * @deprecated Use atomic.GetChangeResponse.$Properties instead.
     */
    interface IGetChangeResponse extends atomic.GetChangeResponse.$Properties {
    }

    /** Represents a GetChangeResponse. */
    class GetChangeResponse {

        /**
         * Constructs a new GetChangeResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.GetChangeResponse.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** GetChangeResponse change. */
        change?: (atomic.ChangeInfo.$Properties|null);

        /** GetChangeResponse graphSection. */
        graphSection?: (atomic.VersionedBytes.$Properties|null);

        /** GetChangeResponse semanticSection. */
        semanticSection?: (atomic.VersionedBytes.$Properties|null);

        /** GetChangeResponse signatures. */
        signatures: atomic.ChangeSignature.$Properties[];

        /** GetChangeResponse contentChunks. */
        contentChunks?: (Uint8Array|null);

        /** GetChangeResponse changeBundle. */
        changeBundle?: (atomic.VersionedBytes.$Properties|null);

        /** GetChangeResponse provenanceLedger. */
        provenanceLedger: atomic.VersionedBytes.$Properties[];

        /** GetChangeResponse sequence. */
        sequence?: (number|Long|null);

        /** GetChangeResponse fileContents. */
        fileContents: atomic.ChangeFileContent.$Properties[];

        /** GetChangeResponse provenanceLedgerHashes. */
        provenanceLedgerHashes: atomic.Hash.$Properties[];

        /** GetChangeResponse metadata. */
        metadata?: (atomic.ChangeMetadata.$Properties|null);

        /** GetChangeResponse blastRadius. */
        blastRadius?: (atomic.ChangeBlastRadius.$Properties|null);

        /** GetChangeResponse intentContext. */
        intentContext?: (atomic.ChangeIntentContext.$Properties|null);

        /**
         * Creates a new GetChangeResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetChangeResponse instance
         */
        static create(properties: atomic.GetChangeResponse.$Shape): atomic.GetChangeResponse & atomic.GetChangeResponse.$Shape;
        static create(properties?: atomic.GetChangeResponse.$Properties): atomic.GetChangeResponse;

        /**
         * Encodes the specified GetChangeResponse message. Does not implicitly {@link atomic.GetChangeResponse.verify|verify} messages.
         * @param message GetChangeResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.GetChangeResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetChangeResponse message, length delimited. Does not implicitly {@link atomic.GetChangeResponse.verify|verify} messages.
         * @param message GetChangeResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.GetChangeResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetChangeResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.GetChangeResponse & atomic.GetChangeResponse.$Shape} GetChangeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.GetChangeResponse & atomic.GetChangeResponse.$Shape;

        /**
         * Decodes a GetChangeResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.GetChangeResponse & atomic.GetChangeResponse.$Shape} GetChangeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.GetChangeResponse & atomic.GetChangeResponse.$Shape;

        /**
         * Verifies a GetChangeResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetChangeResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetChangeResponse
         */
        static fromObject(object: { [k: string]: any }): atomic.GetChangeResponse;

        /**
         * Creates a plain object from a GetChangeResponse message. Also converts values to other types if specified.
         * @param message GetChangeResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.GetChangeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetChangeResponse to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for GetChangeResponse
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace GetChangeResponse {

        /** Properties of a GetChangeResponse. */
        interface $Properties {

            /** GetChangeResponse change */
            change?: (atomic.ChangeInfo.$Properties|null);

            /** GetChangeResponse graphSection */
            graphSection?: (atomic.VersionedBytes.$Properties|null);

            /** GetChangeResponse semanticSection */
            semanticSection?: (atomic.VersionedBytes.$Properties|null);

            /** GetChangeResponse signatures */
            signatures?: (atomic.ChangeSignature.$Properties[]|null);

            /** GetChangeResponse contentChunks */
            contentChunks?: (Uint8Array|null);

            /** GetChangeResponse changeBundle */
            changeBundle?: (atomic.VersionedBytes.$Properties|null);

            /** GetChangeResponse provenanceLedger */
            provenanceLedger?: (atomic.VersionedBytes.$Properties[]|null);

            /** GetChangeResponse sequence */
            sequence?: (number|Long|null);

            /** GetChangeResponse fileContents */
            fileContents?: (atomic.ChangeFileContent.$Properties[]|null);

            /** GetChangeResponse provenanceLedgerHashes */
            provenanceLedgerHashes?: (atomic.Hash.$Properties[]|null);

            /** GetChangeResponse metadata */
            metadata?: (atomic.ChangeMetadata.$Properties|null);

            /** GetChangeResponse blastRadius */
            blastRadius?: (atomic.ChangeBlastRadius.$Properties|null);

            /** GetChangeResponse intentContext */
            intentContext?: (atomic.ChangeIntentContext.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a GetChangeResponse. */
        type $Shape = atomic.GetChangeResponse.$Properties;
    }

    /**
     * Properties of a VersionedBytes.
     * @deprecated Use atomic.VersionedBytes.$Properties instead.
     */
    interface IVersionedBytes extends atomic.VersionedBytes.$Properties {
    }

    /** Represents a VersionedBytes. */
    class VersionedBytes {

        /**
         * Constructs a new VersionedBytes.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.VersionedBytes.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** VersionedBytes schema. */
        schema: string;

        /** VersionedBytes payload. */
        payload: Uint8Array;

        /**
         * Creates a new VersionedBytes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VersionedBytes instance
         */
        static create(properties: atomic.VersionedBytes.$Shape): atomic.VersionedBytes & atomic.VersionedBytes.$Shape;
        static create(properties?: atomic.VersionedBytes.$Properties): atomic.VersionedBytes;

        /**
         * Encodes the specified VersionedBytes message. Does not implicitly {@link atomic.VersionedBytes.verify|verify} messages.
         * @param message VersionedBytes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.VersionedBytes.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VersionedBytes message, length delimited. Does not implicitly {@link atomic.VersionedBytes.verify|verify} messages.
         * @param message VersionedBytes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.VersionedBytes.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VersionedBytes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.VersionedBytes & atomic.VersionedBytes.$Shape} VersionedBytes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.VersionedBytes & atomic.VersionedBytes.$Shape;

        /**
         * Decodes a VersionedBytes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.VersionedBytes & atomic.VersionedBytes.$Shape} VersionedBytes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.VersionedBytes & atomic.VersionedBytes.$Shape;

        /**
         * Verifies a VersionedBytes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VersionedBytes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VersionedBytes
         */
        static fromObject(object: { [k: string]: any }): atomic.VersionedBytes;

        /**
         * Creates a plain object from a VersionedBytes message. Also converts values to other types if specified.
         * @param message VersionedBytes
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.VersionedBytes, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VersionedBytes to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for VersionedBytes
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace VersionedBytes {

        /** Properties of a VersionedBytes. */
        interface $Properties {

            /** VersionedBytes schema */
            schema?: (string|null);

            /** VersionedBytes payload */
            payload?: (Uint8Array|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a VersionedBytes. */
        type $Shape = atomic.VersionedBytes.$Properties;
    }

    /**
     * Properties of a ChangeSignature.
     * @deprecated Use atomic.ChangeSignature.$Properties instead.
     */
    interface IChangeSignature extends atomic.ChangeSignature.$Properties {
    }

    /** Represents a ChangeSignature. */
    class ChangeSignature {

        /**
         * Constructs a new ChangeSignature.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.ChangeSignature.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ChangeSignature identityDid. */
        identityDid: string;

        /** ChangeSignature signature. */
        signature: Uint8Array;

        /** ChangeSignature signedAt. */
        signedAt?: (google.protobuf.Timestamp.$Properties|null);

        /**
         * Creates a new ChangeSignature instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChangeSignature instance
         */
        static create(properties: atomic.ChangeSignature.$Shape): atomic.ChangeSignature & atomic.ChangeSignature.$Shape;
        static create(properties?: atomic.ChangeSignature.$Properties): atomic.ChangeSignature;

        /**
         * Encodes the specified ChangeSignature message. Does not implicitly {@link atomic.ChangeSignature.verify|verify} messages.
         * @param message ChangeSignature message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.ChangeSignature.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChangeSignature message, length delimited. Does not implicitly {@link atomic.ChangeSignature.verify|verify} messages.
         * @param message ChangeSignature message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.ChangeSignature.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChangeSignature message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.ChangeSignature & atomic.ChangeSignature.$Shape} ChangeSignature
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.ChangeSignature & atomic.ChangeSignature.$Shape;

        /**
         * Decodes a ChangeSignature message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.ChangeSignature & atomic.ChangeSignature.$Shape} ChangeSignature
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.ChangeSignature & atomic.ChangeSignature.$Shape;

        /**
         * Verifies a ChangeSignature message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChangeSignature message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChangeSignature
         */
        static fromObject(object: { [k: string]: any }): atomic.ChangeSignature;

        /**
         * Creates a plain object from a ChangeSignature message. Also converts values to other types if specified.
         * @param message ChangeSignature
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.ChangeSignature, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChangeSignature to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ChangeSignature
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ChangeSignature {

        /** Properties of a ChangeSignature. */
        interface $Properties {

            /** ChangeSignature identityDid */
            identityDid?: (string|null);

            /** ChangeSignature signature */
            signature?: (Uint8Array|null);

            /** ChangeSignature signedAt */
            signedAt?: (google.protobuf.Timestamp.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ChangeSignature. */
        type $Shape = atomic.ChangeSignature.$Properties;
    }

    /**
     * Properties of a ChangeFileContent.
     * @deprecated Use atomic.ChangeFileContent.$Properties instead.
     */
    interface IChangeFileContent extends atomic.ChangeFileContent.$Properties {
    }

    /** Represents a ChangeFileContent. */
    class ChangeFileContent {

        /**
         * Constructs a new ChangeFileContent.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.ChangeFileContent.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ChangeFileContent path. */
        path: string;

        /** ChangeFileContent before. */
        before?: (Uint8Array|null);

        /** ChangeFileContent after. */
        after?: (Uint8Array|null);

        /** ChangeFileContent beforeExists. */
        beforeExists?: (boolean|null);

        /** ChangeFileContent afterExists. */
        afterExists?: (boolean|null);

        /** ChangeFileContent isDirectory. */
        isDirectory: boolean;

        /**
         * Creates a new ChangeFileContent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChangeFileContent instance
         */
        static create(properties: atomic.ChangeFileContent.$Shape): atomic.ChangeFileContent & atomic.ChangeFileContent.$Shape;
        static create(properties?: atomic.ChangeFileContent.$Properties): atomic.ChangeFileContent;

        /**
         * Encodes the specified ChangeFileContent message. Does not implicitly {@link atomic.ChangeFileContent.verify|verify} messages.
         * @param message ChangeFileContent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.ChangeFileContent.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChangeFileContent message, length delimited. Does not implicitly {@link atomic.ChangeFileContent.verify|verify} messages.
         * @param message ChangeFileContent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.ChangeFileContent.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChangeFileContent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.ChangeFileContent & atomic.ChangeFileContent.$Shape} ChangeFileContent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.ChangeFileContent & atomic.ChangeFileContent.$Shape;

        /**
         * Decodes a ChangeFileContent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.ChangeFileContent & atomic.ChangeFileContent.$Shape} ChangeFileContent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.ChangeFileContent & atomic.ChangeFileContent.$Shape;

        /**
         * Verifies a ChangeFileContent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChangeFileContent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChangeFileContent
         */
        static fromObject(object: { [k: string]: any }): atomic.ChangeFileContent;

        /**
         * Creates a plain object from a ChangeFileContent message. Also converts values to other types if specified.
         * @param message ChangeFileContent
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.ChangeFileContent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChangeFileContent to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ChangeFileContent
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ChangeFileContent {

        /** Properties of a ChangeFileContent. */
        interface $Properties {

            /** ChangeFileContent path */
            path?: (string|null);

            /** ChangeFileContent before */
            before?: (Uint8Array|null);

            /** ChangeFileContent after */
            after?: (Uint8Array|null);

            /** ChangeFileContent beforeExists */
            beforeExists?: (boolean|null);

            /** ChangeFileContent afterExists */
            afterExists?: (boolean|null);

            /** ChangeFileContent isDirectory */
            isDirectory?: (boolean|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ChangeFileContent. */
        type $Shape = atomic.ChangeFileContent.$Properties;
    }

    /**
     * Properties of a ChangeMetadata.
     * @deprecated Use atomic.ChangeMetadata.$Properties instead.
     */
    interface IChangeMetadata extends atomic.ChangeMetadata.$Properties {
    }

    /** Represents a ChangeMetadata. */
    class ChangeMetadata {

        /**
         * Constructs a new ChangeMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.ChangeMetadata.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ChangeMetadata schemaVersion. */
        schemaVersion: number;

        /** ChangeMetadata changeHash. */
        changeHash?: (atomic.Hash.$Properties|null);

        /** ChangeMetadata usage. */
        usage: atomic.ChangeAIUsage.$Properties[];

        /** ChangeMetadata affectedPaths. */
        affectedPaths: string[];

        /** ChangeMetadata warnings. */
        warnings: string[];

        /** ChangeMetadata graphSummary. */
        graphSummary?: (atomic.ChangeGraphSummary.$Properties|null);

        /**
         * Creates a new ChangeMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChangeMetadata instance
         */
        static create(properties: atomic.ChangeMetadata.$Shape): atomic.ChangeMetadata & atomic.ChangeMetadata.$Shape;
        static create(properties?: atomic.ChangeMetadata.$Properties): atomic.ChangeMetadata;

        /**
         * Encodes the specified ChangeMetadata message. Does not implicitly {@link atomic.ChangeMetadata.verify|verify} messages.
         * @param message ChangeMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.ChangeMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChangeMetadata message, length delimited. Does not implicitly {@link atomic.ChangeMetadata.verify|verify} messages.
         * @param message ChangeMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.ChangeMetadata.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChangeMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.ChangeMetadata & atomic.ChangeMetadata.$Shape} ChangeMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.ChangeMetadata & atomic.ChangeMetadata.$Shape;

        /**
         * Decodes a ChangeMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.ChangeMetadata & atomic.ChangeMetadata.$Shape} ChangeMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.ChangeMetadata & atomic.ChangeMetadata.$Shape;

        /**
         * Verifies a ChangeMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChangeMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChangeMetadata
         */
        static fromObject(object: { [k: string]: any }): atomic.ChangeMetadata;

        /**
         * Creates a plain object from a ChangeMetadata message. Also converts values to other types if specified.
         * @param message ChangeMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.ChangeMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChangeMetadata to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ChangeMetadata
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ChangeMetadata {

        /** Properties of a ChangeMetadata. */
        interface $Properties {

            /** ChangeMetadata schemaVersion */
            schemaVersion?: (number|null);

            /** ChangeMetadata changeHash */
            changeHash?: (atomic.Hash.$Properties|null);

            /** ChangeMetadata usage */
            usage?: (atomic.ChangeAIUsage.$Properties[]|null);

            /** ChangeMetadata affectedPaths */
            affectedPaths?: (string[]|null);

            /** ChangeMetadata warnings */
            warnings?: (string[]|null);

            /** ChangeMetadata graphSummary */
            graphSummary?: (atomic.ChangeGraphSummary.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ChangeMetadata. */
        type $Shape = atomic.ChangeMetadata.$Properties;
    }

    /**
     * Properties of a ChangeAIUsage.
     * @deprecated Use atomic.ChangeAIUsage.$Properties instead.
     */
    interface IChangeAIUsage extends atomic.ChangeAIUsage.$Properties {
    }

    /** Represents a ChangeAIUsage. */
    class ChangeAIUsage {

        /**
         * Constructs a new ChangeAIUsage.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.ChangeAIUsage.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ChangeAIUsage recordIndex. */
        recordIndex: number;

        /** ChangeAIUsage vendor. */
        vendor: string;

        /** ChangeAIUsage model. */
        model: string;

        /** ChangeAIUsage modelVersion. */
        modelVersion?: (string|null);

        /** ChangeAIUsage tool. */
        tool: string;

        /** ChangeAIUsage requestId. */
        requestId?: (string|null);

        /** ChangeAIUsage sessionId. */
        sessionId?: (string|null);

        /** ChangeAIUsage sessionSlug. */
        sessionSlug?: (string|null);

        /** ChangeAIUsage stepCount. */
        stepCount?: (number|null);

        /** ChangeAIUsage tokens. */
        tokens?: (atomic.ChangeTokenUsage.$Properties|null);

        /** ChangeAIUsage costMicroUsd. */
        costMicroUsd?: (number|Long|null);

        /**
         * Creates a new ChangeAIUsage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChangeAIUsage instance
         */
        static create(properties: atomic.ChangeAIUsage.$Shape): atomic.ChangeAIUsage & atomic.ChangeAIUsage.$Shape;
        static create(properties?: atomic.ChangeAIUsage.$Properties): atomic.ChangeAIUsage;

        /**
         * Encodes the specified ChangeAIUsage message. Does not implicitly {@link atomic.ChangeAIUsage.verify|verify} messages.
         * @param message ChangeAIUsage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.ChangeAIUsage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChangeAIUsage message, length delimited. Does not implicitly {@link atomic.ChangeAIUsage.verify|verify} messages.
         * @param message ChangeAIUsage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.ChangeAIUsage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChangeAIUsage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.ChangeAIUsage & atomic.ChangeAIUsage.$Shape} ChangeAIUsage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.ChangeAIUsage & atomic.ChangeAIUsage.$Shape;

        /**
         * Decodes a ChangeAIUsage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.ChangeAIUsage & atomic.ChangeAIUsage.$Shape} ChangeAIUsage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.ChangeAIUsage & atomic.ChangeAIUsage.$Shape;

        /**
         * Verifies a ChangeAIUsage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChangeAIUsage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChangeAIUsage
         */
        static fromObject(object: { [k: string]: any }): atomic.ChangeAIUsage;

        /**
         * Creates a plain object from a ChangeAIUsage message. Also converts values to other types if specified.
         * @param message ChangeAIUsage
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.ChangeAIUsage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChangeAIUsage to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ChangeAIUsage
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ChangeAIUsage {

        /** Properties of a ChangeAIUsage. */
        interface $Properties {

            /** ChangeAIUsage recordIndex */
            recordIndex?: (number|null);

            /** ChangeAIUsage vendor */
            vendor?: (string|null);

            /** ChangeAIUsage model */
            model?: (string|null);

            /** ChangeAIUsage modelVersion */
            modelVersion?: (string|null);

            /** ChangeAIUsage tool */
            tool?: (string|null);

            /** ChangeAIUsage requestId */
            requestId?: (string|null);

            /** ChangeAIUsage sessionId */
            sessionId?: (string|null);

            /** ChangeAIUsage sessionSlug */
            sessionSlug?: (string|null);

            /** ChangeAIUsage stepCount */
            stepCount?: (number|null);

            /** ChangeAIUsage tokens */
            tokens?: (atomic.ChangeTokenUsage.$Properties|null);

            /** ChangeAIUsage costMicroUsd */
            costMicroUsd?: (number|Long|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ChangeAIUsage. */
        type $Shape = atomic.ChangeAIUsage.$Properties;
    }

    /**
     * Properties of a ChangeTokenUsage.
     * @deprecated Use atomic.ChangeTokenUsage.$Properties instead.
     */
    interface IChangeTokenUsage extends atomic.ChangeTokenUsage.$Properties {
    }

    /** Represents a ChangeTokenUsage. */
    class ChangeTokenUsage {

        /**
         * Constructs a new ChangeTokenUsage.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.ChangeTokenUsage.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ChangeTokenUsage inputTokens. */
        inputTokens: (number|Long);

        /** ChangeTokenUsage outputTokens. */
        outputTokens: (number|Long);

        /** ChangeTokenUsage totalTokens. */
        totalTokens: (number|Long);

        /** ChangeTokenUsage cacheReadTokens. */
        cacheReadTokens: (number|Long);

        /** ChangeTokenUsage cacheWriteTokens. */
        cacheWriteTokens: (number|Long);

        /** ChangeTokenUsage reasoningTokens. */
        reasoningTokens: (number|Long);

        /**
         * Creates a new ChangeTokenUsage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChangeTokenUsage instance
         */
        static create(properties: atomic.ChangeTokenUsage.$Shape): atomic.ChangeTokenUsage & atomic.ChangeTokenUsage.$Shape;
        static create(properties?: atomic.ChangeTokenUsage.$Properties): atomic.ChangeTokenUsage;

        /**
         * Encodes the specified ChangeTokenUsage message. Does not implicitly {@link atomic.ChangeTokenUsage.verify|verify} messages.
         * @param message ChangeTokenUsage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.ChangeTokenUsage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChangeTokenUsage message, length delimited. Does not implicitly {@link atomic.ChangeTokenUsage.verify|verify} messages.
         * @param message ChangeTokenUsage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.ChangeTokenUsage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChangeTokenUsage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.ChangeTokenUsage & atomic.ChangeTokenUsage.$Shape} ChangeTokenUsage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.ChangeTokenUsage & atomic.ChangeTokenUsage.$Shape;

        /**
         * Decodes a ChangeTokenUsage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.ChangeTokenUsage & atomic.ChangeTokenUsage.$Shape} ChangeTokenUsage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.ChangeTokenUsage & atomic.ChangeTokenUsage.$Shape;

        /**
         * Verifies a ChangeTokenUsage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChangeTokenUsage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChangeTokenUsage
         */
        static fromObject(object: { [k: string]: any }): atomic.ChangeTokenUsage;

        /**
         * Creates a plain object from a ChangeTokenUsage message. Also converts values to other types if specified.
         * @param message ChangeTokenUsage
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.ChangeTokenUsage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChangeTokenUsage to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ChangeTokenUsage
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ChangeTokenUsage {

        /** Properties of a ChangeTokenUsage. */
        interface $Properties {

            /** ChangeTokenUsage inputTokens */
            inputTokens?: (number|Long|null);

            /** ChangeTokenUsage outputTokens */
            outputTokens?: (number|Long|null);

            /** ChangeTokenUsage totalTokens */
            totalTokens?: (number|Long|null);

            /** ChangeTokenUsage cacheReadTokens */
            cacheReadTokens?: (number|Long|null);

            /** ChangeTokenUsage cacheWriteTokens */
            cacheWriteTokens?: (number|Long|null);

            /** ChangeTokenUsage reasoningTokens */
            reasoningTokens?: (number|Long|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ChangeTokenUsage. */
        type $Shape = atomic.ChangeTokenUsage.$Properties;
    }

    /**
     * Properties of a ChangeGraphSummary.
     * @deprecated Use atomic.ChangeGraphSummary.$Properties instead.
     */
    interface IChangeGraphSummary extends atomic.ChangeGraphSummary.$Properties {
    }

    /** Represents a ChangeGraphSummary. */
    class ChangeGraphSummary {

        /**
         * Constructs a new ChangeGraphSummary.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.ChangeGraphSummary.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ChangeGraphSummary verticesAdded. */
        verticesAdded: (number|Long);

        /** ChangeGraphSummary edgesChanged. */
        edgesChanged: (number|Long);

        /** ChangeGraphSummary contentBytes. */
        contentBytes: (number|Long);

        /** ChangeGraphSummary filesChanged. */
        filesChanged: (number|Long);

        /** ChangeGraphSummary files. */
        files: atomic.ChangeFileSummary.$Properties[];

        /**
         * Creates a new ChangeGraphSummary instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChangeGraphSummary instance
         */
        static create(properties: atomic.ChangeGraphSummary.$Shape): atomic.ChangeGraphSummary & atomic.ChangeGraphSummary.$Shape;
        static create(properties?: atomic.ChangeGraphSummary.$Properties): atomic.ChangeGraphSummary;

        /**
         * Encodes the specified ChangeGraphSummary message. Does not implicitly {@link atomic.ChangeGraphSummary.verify|verify} messages.
         * @param message ChangeGraphSummary message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.ChangeGraphSummary.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChangeGraphSummary message, length delimited. Does not implicitly {@link atomic.ChangeGraphSummary.verify|verify} messages.
         * @param message ChangeGraphSummary message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.ChangeGraphSummary.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChangeGraphSummary message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.ChangeGraphSummary & atomic.ChangeGraphSummary.$Shape} ChangeGraphSummary
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.ChangeGraphSummary & atomic.ChangeGraphSummary.$Shape;

        /**
         * Decodes a ChangeGraphSummary message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.ChangeGraphSummary & atomic.ChangeGraphSummary.$Shape} ChangeGraphSummary
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.ChangeGraphSummary & atomic.ChangeGraphSummary.$Shape;

        /**
         * Verifies a ChangeGraphSummary message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChangeGraphSummary message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChangeGraphSummary
         */
        static fromObject(object: { [k: string]: any }): atomic.ChangeGraphSummary;

        /**
         * Creates a plain object from a ChangeGraphSummary message. Also converts values to other types if specified.
         * @param message ChangeGraphSummary
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.ChangeGraphSummary, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChangeGraphSummary to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ChangeGraphSummary
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ChangeGraphSummary {

        /** Properties of a ChangeGraphSummary. */
        interface $Properties {

            /** ChangeGraphSummary verticesAdded */
            verticesAdded?: (number|Long|null);

            /** ChangeGraphSummary edgesChanged */
            edgesChanged?: (number|Long|null);

            /** ChangeGraphSummary contentBytes */
            contentBytes?: (number|Long|null);

            /** ChangeGraphSummary filesChanged */
            filesChanged?: (number|Long|null);

            /** ChangeGraphSummary files */
            files?: (atomic.ChangeFileSummary.$Properties[]|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ChangeGraphSummary. */
        type $Shape = atomic.ChangeGraphSummary.$Properties;
    }

    /**
     * Properties of a ChangeFileSummary.
     * @deprecated Use atomic.ChangeFileSummary.$Properties instead.
     */
    interface IChangeFileSummary extends atomic.ChangeFileSummary.$Properties {
    }

    /** Represents a ChangeFileSummary. */
    class ChangeFileSummary {

        /**
         * Constructs a new ChangeFileSummary.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.ChangeFileSummary.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ChangeFileSummary symbol. */
        symbol: string;

        /** ChangeFileSummary path. */
        path: string;

        /** ChangeFileSummary info. */
        info: string;

        /**
         * Creates a new ChangeFileSummary instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChangeFileSummary instance
         */
        static create(properties: atomic.ChangeFileSummary.$Shape): atomic.ChangeFileSummary & atomic.ChangeFileSummary.$Shape;
        static create(properties?: atomic.ChangeFileSummary.$Properties): atomic.ChangeFileSummary;

        /**
         * Encodes the specified ChangeFileSummary message. Does not implicitly {@link atomic.ChangeFileSummary.verify|verify} messages.
         * @param message ChangeFileSummary message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.ChangeFileSummary.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChangeFileSummary message, length delimited. Does not implicitly {@link atomic.ChangeFileSummary.verify|verify} messages.
         * @param message ChangeFileSummary message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.ChangeFileSummary.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChangeFileSummary message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.ChangeFileSummary & atomic.ChangeFileSummary.$Shape} ChangeFileSummary
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.ChangeFileSummary & atomic.ChangeFileSummary.$Shape;

        /**
         * Decodes a ChangeFileSummary message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.ChangeFileSummary & atomic.ChangeFileSummary.$Shape} ChangeFileSummary
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.ChangeFileSummary & atomic.ChangeFileSummary.$Shape;

        /**
         * Verifies a ChangeFileSummary message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChangeFileSummary message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChangeFileSummary
         */
        static fromObject(object: { [k: string]: any }): atomic.ChangeFileSummary;

        /**
         * Creates a plain object from a ChangeFileSummary message. Also converts values to other types if specified.
         * @param message ChangeFileSummary
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.ChangeFileSummary, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChangeFileSummary to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ChangeFileSummary
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ChangeFileSummary {

        /** Properties of a ChangeFileSummary. */
        interface $Properties {

            /** ChangeFileSummary symbol */
            symbol?: (string|null);

            /** ChangeFileSummary path */
            path?: (string|null);

            /** ChangeFileSummary info */
            info?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ChangeFileSummary. */
        type $Shape = atomic.ChangeFileSummary.$Properties;
    }

    /**
     * Properties of a ChangeBlastRadius.
     * @deprecated Use atomic.ChangeBlastRadius.$Properties instead.
     */
    interface IChangeBlastRadius extends atomic.ChangeBlastRadius.$Properties {
    }

    /** Represents a ChangeBlastRadius. */
    class ChangeBlastRadius {

        /**
         * Constructs a new ChangeBlastRadius.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.ChangeBlastRadius.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ChangeBlastRadius changeHash. */
        changeHash?: (atomic.Hash.$Properties|null);

        /** ChangeBlastRadius mode. */
        mode: string;

        /** ChangeBlastRadius files. */
        files: atomic.ChangeImpactFile.$Properties[];

        /** ChangeBlastRadius edges. */
        edges: atomic.ChangeImpactEdge.$Properties[];

        /** ChangeBlastRadius warnings. */
        warnings: string[];

        /** ChangeBlastRadius context. */
        context: string;

        /**
         * Creates a new ChangeBlastRadius instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChangeBlastRadius instance
         */
        static create(properties: atomic.ChangeBlastRadius.$Shape): atomic.ChangeBlastRadius & atomic.ChangeBlastRadius.$Shape;
        static create(properties?: atomic.ChangeBlastRadius.$Properties): atomic.ChangeBlastRadius;

        /**
         * Encodes the specified ChangeBlastRadius message. Does not implicitly {@link atomic.ChangeBlastRadius.verify|verify} messages.
         * @param message ChangeBlastRadius message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.ChangeBlastRadius.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChangeBlastRadius message, length delimited. Does not implicitly {@link atomic.ChangeBlastRadius.verify|verify} messages.
         * @param message ChangeBlastRadius message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.ChangeBlastRadius.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChangeBlastRadius message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.ChangeBlastRadius & atomic.ChangeBlastRadius.$Shape} ChangeBlastRadius
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.ChangeBlastRadius & atomic.ChangeBlastRadius.$Shape;

        /**
         * Decodes a ChangeBlastRadius message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.ChangeBlastRadius & atomic.ChangeBlastRadius.$Shape} ChangeBlastRadius
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.ChangeBlastRadius & atomic.ChangeBlastRadius.$Shape;

        /**
         * Verifies a ChangeBlastRadius message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChangeBlastRadius message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChangeBlastRadius
         */
        static fromObject(object: { [k: string]: any }): atomic.ChangeBlastRadius;

        /**
         * Creates a plain object from a ChangeBlastRadius message. Also converts values to other types if specified.
         * @param message ChangeBlastRadius
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.ChangeBlastRadius, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChangeBlastRadius to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ChangeBlastRadius
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ChangeBlastRadius {

        /** Properties of a ChangeBlastRadius. */
        interface $Properties {

            /** ChangeBlastRadius changeHash */
            changeHash?: (atomic.Hash.$Properties|null);

            /** ChangeBlastRadius mode */
            mode?: (string|null);

            /** ChangeBlastRadius files */
            files?: (atomic.ChangeImpactFile.$Properties[]|null);

            /** ChangeBlastRadius edges */
            edges?: (atomic.ChangeImpactEdge.$Properties[]|null);

            /** ChangeBlastRadius warnings */
            warnings?: (string[]|null);

            /** ChangeBlastRadius context */
            context?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ChangeBlastRadius. */
        type $Shape = atomic.ChangeBlastRadius.$Properties;
    }

    /**
     * Properties of a ChangeImpactFile.
     * @deprecated Use atomic.ChangeImpactFile.$Properties instead.
     */
    interface IChangeImpactFile extends atomic.ChangeImpactFile.$Properties {
    }

    /** Represents a ChangeImpactFile. */
    class ChangeImpactFile {

        /**
         * Constructs a new ChangeImpactFile.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.ChangeImpactFile.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ChangeImpactFile path. */
        path: string;

        /** ChangeImpactFile hop. */
        hop: number;

        /**
         * Creates a new ChangeImpactFile instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChangeImpactFile instance
         */
        static create(properties: atomic.ChangeImpactFile.$Shape): atomic.ChangeImpactFile & atomic.ChangeImpactFile.$Shape;
        static create(properties?: atomic.ChangeImpactFile.$Properties): atomic.ChangeImpactFile;

        /**
         * Encodes the specified ChangeImpactFile message. Does not implicitly {@link atomic.ChangeImpactFile.verify|verify} messages.
         * @param message ChangeImpactFile message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.ChangeImpactFile.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChangeImpactFile message, length delimited. Does not implicitly {@link atomic.ChangeImpactFile.verify|verify} messages.
         * @param message ChangeImpactFile message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.ChangeImpactFile.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChangeImpactFile message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.ChangeImpactFile & atomic.ChangeImpactFile.$Shape} ChangeImpactFile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.ChangeImpactFile & atomic.ChangeImpactFile.$Shape;

        /**
         * Decodes a ChangeImpactFile message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.ChangeImpactFile & atomic.ChangeImpactFile.$Shape} ChangeImpactFile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.ChangeImpactFile & atomic.ChangeImpactFile.$Shape;

        /**
         * Verifies a ChangeImpactFile message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChangeImpactFile message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChangeImpactFile
         */
        static fromObject(object: { [k: string]: any }): atomic.ChangeImpactFile;

        /**
         * Creates a plain object from a ChangeImpactFile message. Also converts values to other types if specified.
         * @param message ChangeImpactFile
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.ChangeImpactFile, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChangeImpactFile to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ChangeImpactFile
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ChangeImpactFile {

        /** Properties of a ChangeImpactFile. */
        interface $Properties {

            /** ChangeImpactFile path */
            path?: (string|null);

            /** ChangeImpactFile hop */
            hop?: (number|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ChangeImpactFile. */
        type $Shape = atomic.ChangeImpactFile.$Properties;
    }

    /**
     * Properties of a ChangeImpactEdge.
     * @deprecated Use atomic.ChangeImpactEdge.$Properties instead.
     */
    interface IChangeImpactEdge extends atomic.ChangeImpactEdge.$Properties {
    }

    /** Represents a ChangeImpactEdge. */
    class ChangeImpactEdge {

        /**
         * Constructs a new ChangeImpactEdge.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.ChangeImpactEdge.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ChangeImpactEdge fromPath. */
        fromPath: string;

        /** ChangeImpactEdge toPath. */
        toPath: string;

        /** ChangeImpactEdge relation. */
        relation: string;

        /**
         * Creates a new ChangeImpactEdge instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChangeImpactEdge instance
         */
        static create(properties: atomic.ChangeImpactEdge.$Shape): atomic.ChangeImpactEdge & atomic.ChangeImpactEdge.$Shape;
        static create(properties?: atomic.ChangeImpactEdge.$Properties): atomic.ChangeImpactEdge;

        /**
         * Encodes the specified ChangeImpactEdge message. Does not implicitly {@link atomic.ChangeImpactEdge.verify|verify} messages.
         * @param message ChangeImpactEdge message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.ChangeImpactEdge.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChangeImpactEdge message, length delimited. Does not implicitly {@link atomic.ChangeImpactEdge.verify|verify} messages.
         * @param message ChangeImpactEdge message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.ChangeImpactEdge.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChangeImpactEdge message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.ChangeImpactEdge & atomic.ChangeImpactEdge.$Shape} ChangeImpactEdge
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.ChangeImpactEdge & atomic.ChangeImpactEdge.$Shape;

        /**
         * Decodes a ChangeImpactEdge message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.ChangeImpactEdge & atomic.ChangeImpactEdge.$Shape} ChangeImpactEdge
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.ChangeImpactEdge & atomic.ChangeImpactEdge.$Shape;

        /**
         * Verifies a ChangeImpactEdge message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChangeImpactEdge message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChangeImpactEdge
         */
        static fromObject(object: { [k: string]: any }): atomic.ChangeImpactEdge;

        /**
         * Creates a plain object from a ChangeImpactEdge message. Also converts values to other types if specified.
         * @param message ChangeImpactEdge
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.ChangeImpactEdge, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChangeImpactEdge to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ChangeImpactEdge
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ChangeImpactEdge {

        /** Properties of a ChangeImpactEdge. */
        interface $Properties {

            /** ChangeImpactEdge fromPath */
            fromPath?: (string|null);

            /** ChangeImpactEdge toPath */
            toPath?: (string|null);

            /** ChangeImpactEdge relation */
            relation?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ChangeImpactEdge. */
        type $Shape = atomic.ChangeImpactEdge.$Properties;
    }

    /**
     * Properties of a ChangeIntentContext.
     * @deprecated Use atomic.ChangeIntentContext.$Properties instead.
     */
    interface IChangeIntentContext extends atomic.ChangeIntentContext.$Properties {
    }

    /** Represents a ChangeIntentContext. */
    class ChangeIntentContext {

        /**
         * Constructs a new ChangeIntentContext.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.ChangeIntentContext.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ChangeIntentContext schemaVersion. */
        schemaVersion: number;

        /** ChangeIntentContext changeHash. */
        changeHash?: (atomic.Hash.$Properties|null);

        /** ChangeIntentContext planId. */
        planId?: (string|null);

        /** ChangeIntentContext status. */
        status: string;

        /** ChangeIntentContext plans. */
        plans: atomic.ChangePlanBinding.$Properties[];

        /** ChangeIntentContext associatedIntents. */
        associatedIntents: atomic.ChangeIntentAssociation.$Properties[];

        /** ChangeIntentContext warnings. */
        warnings: string[];

        /** ChangeIntentContext validationStatus. */
        validationStatus: string;

        /** ChangeIntentContext context. */
        context: string;

        /**
         * Creates a new ChangeIntentContext instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChangeIntentContext instance
         */
        static create(properties: atomic.ChangeIntentContext.$Shape): atomic.ChangeIntentContext & atomic.ChangeIntentContext.$Shape;
        static create(properties?: atomic.ChangeIntentContext.$Properties): atomic.ChangeIntentContext;

        /**
         * Encodes the specified ChangeIntentContext message. Does not implicitly {@link atomic.ChangeIntentContext.verify|verify} messages.
         * @param message ChangeIntentContext message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.ChangeIntentContext.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChangeIntentContext message, length delimited. Does not implicitly {@link atomic.ChangeIntentContext.verify|verify} messages.
         * @param message ChangeIntentContext message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.ChangeIntentContext.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChangeIntentContext message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.ChangeIntentContext & atomic.ChangeIntentContext.$Shape} ChangeIntentContext
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.ChangeIntentContext & atomic.ChangeIntentContext.$Shape;

        /**
         * Decodes a ChangeIntentContext message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.ChangeIntentContext & atomic.ChangeIntentContext.$Shape} ChangeIntentContext
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.ChangeIntentContext & atomic.ChangeIntentContext.$Shape;

        /**
         * Verifies a ChangeIntentContext message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChangeIntentContext message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChangeIntentContext
         */
        static fromObject(object: { [k: string]: any }): atomic.ChangeIntentContext;

        /**
         * Creates a plain object from a ChangeIntentContext message. Also converts values to other types if specified.
         * @param message ChangeIntentContext
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.ChangeIntentContext, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChangeIntentContext to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ChangeIntentContext
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ChangeIntentContext {

        /** Properties of a ChangeIntentContext. */
        interface $Properties {

            /** ChangeIntentContext schemaVersion */
            schemaVersion?: (number|null);

            /** ChangeIntentContext changeHash */
            changeHash?: (atomic.Hash.$Properties|null);

            /** ChangeIntentContext planId */
            planId?: (string|null);

            /** ChangeIntentContext status */
            status?: (string|null);

            /** ChangeIntentContext plans */
            plans?: (atomic.ChangePlanBinding.$Properties[]|null);

            /** ChangeIntentContext associatedIntents */
            associatedIntents?: (atomic.ChangeIntentAssociation.$Properties[]|null);

            /** ChangeIntentContext warnings */
            warnings?: (string[]|null);

            /** ChangeIntentContext validationStatus */
            validationStatus?: (string|null);

            /** ChangeIntentContext context */
            context?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ChangeIntentContext. */
        type $Shape = atomic.ChangeIntentContext.$Properties;
    }

    /**
     * Properties of a ChangePlanBinding.
     * @deprecated Use atomic.ChangePlanBinding.$Properties instead.
     */
    interface IChangePlanBinding extends atomic.ChangePlanBinding.$Properties {
    }

    /** Represents a ChangePlanBinding. */
    class ChangePlanBinding {

        /**
         * Constructs a new ChangePlanBinding.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.ChangePlanBinding.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ChangePlanBinding planId. */
        planId: string;

        /** ChangePlanBinding source. */
        source: string;

        /** ChangePlanBinding sessionId. */
        sessionId: string;

        /** ChangePlanBinding provenanceHash. */
        provenanceHash?: (atomic.Hash.$Properties|null);

        /** ChangePlanBinding turnNumber. */
        turnNumber?: (number|null);

        /** ChangePlanBinding intent. */
        intent?: (atomic.ChangeIntentIdentity.$Properties|null);

        /**
         * Creates a new ChangePlanBinding instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChangePlanBinding instance
         */
        static create(properties: atomic.ChangePlanBinding.$Shape): atomic.ChangePlanBinding & atomic.ChangePlanBinding.$Shape;
        static create(properties?: atomic.ChangePlanBinding.$Properties): atomic.ChangePlanBinding;

        /**
         * Encodes the specified ChangePlanBinding message. Does not implicitly {@link atomic.ChangePlanBinding.verify|verify} messages.
         * @param message ChangePlanBinding message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.ChangePlanBinding.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChangePlanBinding message, length delimited. Does not implicitly {@link atomic.ChangePlanBinding.verify|verify} messages.
         * @param message ChangePlanBinding message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.ChangePlanBinding.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChangePlanBinding message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.ChangePlanBinding & atomic.ChangePlanBinding.$Shape} ChangePlanBinding
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.ChangePlanBinding & atomic.ChangePlanBinding.$Shape;

        /**
         * Decodes a ChangePlanBinding message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.ChangePlanBinding & atomic.ChangePlanBinding.$Shape} ChangePlanBinding
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.ChangePlanBinding & atomic.ChangePlanBinding.$Shape;

        /**
         * Verifies a ChangePlanBinding message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChangePlanBinding message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChangePlanBinding
         */
        static fromObject(object: { [k: string]: any }): atomic.ChangePlanBinding;

        /**
         * Creates a plain object from a ChangePlanBinding message. Also converts values to other types if specified.
         * @param message ChangePlanBinding
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.ChangePlanBinding, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChangePlanBinding to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ChangePlanBinding
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ChangePlanBinding {

        /** Properties of a ChangePlanBinding. */
        interface $Properties {

            /** ChangePlanBinding planId */
            planId?: (string|null);

            /** ChangePlanBinding source */
            source?: (string|null);

            /** ChangePlanBinding sessionId */
            sessionId?: (string|null);

            /** ChangePlanBinding provenanceHash */
            provenanceHash?: (atomic.Hash.$Properties|null);

            /** ChangePlanBinding turnNumber */
            turnNumber?: (number|null);

            /** ChangePlanBinding intent */
            intent?: (atomic.ChangeIntentIdentity.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ChangePlanBinding. */
        type $Shape = atomic.ChangePlanBinding.$Properties;
    }

    /**
     * Properties of a ChangeIntentIdentity.
     * @deprecated Use atomic.ChangeIntentIdentity.$Properties instead.
     */
    interface IChangeIntentIdentity extends atomic.ChangeIntentIdentity.$Properties {
    }

    /** Represents a ChangeIntentIdentity. */
    class ChangeIntentIdentity {

        /**
         * Constructs a new ChangeIntentIdentity.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.ChangeIntentIdentity.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ChangeIntentIdentity id. */
        id: string;

        /** ChangeIntentIdentity uid. */
        uid: string;

        /** ChangeIntentIdentity title. */
        title: string;

        /** ChangeIntentIdentity path. */
        path: string;

        /**
         * Creates a new ChangeIntentIdentity instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChangeIntentIdentity instance
         */
        static create(properties: atomic.ChangeIntentIdentity.$Shape): atomic.ChangeIntentIdentity & atomic.ChangeIntentIdentity.$Shape;
        static create(properties?: atomic.ChangeIntentIdentity.$Properties): atomic.ChangeIntentIdentity;

        /**
         * Encodes the specified ChangeIntentIdentity message. Does not implicitly {@link atomic.ChangeIntentIdentity.verify|verify} messages.
         * @param message ChangeIntentIdentity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.ChangeIntentIdentity.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChangeIntentIdentity message, length delimited. Does not implicitly {@link atomic.ChangeIntentIdentity.verify|verify} messages.
         * @param message ChangeIntentIdentity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.ChangeIntentIdentity.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChangeIntentIdentity message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.ChangeIntentIdentity & atomic.ChangeIntentIdentity.$Shape} ChangeIntentIdentity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.ChangeIntentIdentity & atomic.ChangeIntentIdentity.$Shape;

        /**
         * Decodes a ChangeIntentIdentity message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.ChangeIntentIdentity & atomic.ChangeIntentIdentity.$Shape} ChangeIntentIdentity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.ChangeIntentIdentity & atomic.ChangeIntentIdentity.$Shape;

        /**
         * Verifies a ChangeIntentIdentity message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChangeIntentIdentity message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChangeIntentIdentity
         */
        static fromObject(object: { [k: string]: any }): atomic.ChangeIntentIdentity;

        /**
         * Creates a plain object from a ChangeIntentIdentity message. Also converts values to other types if specified.
         * @param message ChangeIntentIdentity
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.ChangeIntentIdentity, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChangeIntentIdentity to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ChangeIntentIdentity
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ChangeIntentIdentity {

        /** Properties of a ChangeIntentIdentity. */
        interface $Properties {

            /** ChangeIntentIdentity id */
            id?: (string|null);

            /** ChangeIntentIdentity uid */
            uid?: (string|null);

            /** ChangeIntentIdentity title */
            title?: (string|null);

            /** ChangeIntentIdentity path */
            path?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ChangeIntentIdentity. */
        type $Shape = atomic.ChangeIntentIdentity.$Properties;
    }

    /**
     * Properties of a ChangeIntentAssociation.
     * @deprecated Use atomic.ChangeIntentAssociation.$Properties instead.
     */
    interface IChangeIntentAssociation extends atomic.ChangeIntentAssociation.$Properties {
    }

    /** Represents a ChangeIntentAssociation. */
    class ChangeIntentAssociation {

        /**
         * Constructs a new ChangeIntentAssociation.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.ChangeIntentAssociation.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ChangeIntentAssociation path. */
        path: string;

        /** ChangeIntentAssociation intent. */
        intent?: (atomic.ChangeIntentIdentity.$Properties|null);

        /** ChangeIntentAssociation commitmentNodeIds. */
        commitmentNodeIds: string[];

        /** ChangeIntentAssociation patchNodeIds. */
        patchNodeIds: string[];

        /** ChangeIntentAssociation provenanceHashes. */
        provenanceHashes: atomic.Hash.$Properties[];

        /**
         * Creates a new ChangeIntentAssociation instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChangeIntentAssociation instance
         */
        static create(properties: atomic.ChangeIntentAssociation.$Shape): atomic.ChangeIntentAssociation & atomic.ChangeIntentAssociation.$Shape;
        static create(properties?: atomic.ChangeIntentAssociation.$Properties): atomic.ChangeIntentAssociation;

        /**
         * Encodes the specified ChangeIntentAssociation message. Does not implicitly {@link atomic.ChangeIntentAssociation.verify|verify} messages.
         * @param message ChangeIntentAssociation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.ChangeIntentAssociation.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChangeIntentAssociation message, length delimited. Does not implicitly {@link atomic.ChangeIntentAssociation.verify|verify} messages.
         * @param message ChangeIntentAssociation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.ChangeIntentAssociation.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChangeIntentAssociation message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.ChangeIntentAssociation & atomic.ChangeIntentAssociation.$Shape} ChangeIntentAssociation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.ChangeIntentAssociation & atomic.ChangeIntentAssociation.$Shape;

        /**
         * Decodes a ChangeIntentAssociation message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.ChangeIntentAssociation & atomic.ChangeIntentAssociation.$Shape} ChangeIntentAssociation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.ChangeIntentAssociation & atomic.ChangeIntentAssociation.$Shape;

        /**
         * Verifies a ChangeIntentAssociation message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChangeIntentAssociation message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChangeIntentAssociation
         */
        static fromObject(object: { [k: string]: any }): atomic.ChangeIntentAssociation;

        /**
         * Creates a plain object from a ChangeIntentAssociation message. Also converts values to other types if specified.
         * @param message ChangeIntentAssociation
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.ChangeIntentAssociation, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChangeIntentAssociation to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ChangeIntentAssociation
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ChangeIntentAssociation {

        /** Properties of a ChangeIntentAssociation. */
        interface $Properties {

            /** ChangeIntentAssociation path */
            path?: (string|null);

            /** ChangeIntentAssociation intent */
            intent?: (atomic.ChangeIntentIdentity.$Properties|null);

            /** ChangeIntentAssociation commitmentNodeIds */
            commitmentNodeIds?: (string[]|null);

            /** ChangeIntentAssociation patchNodeIds */
            patchNodeIds?: (string[]|null);

            /** ChangeIntentAssociation provenanceHashes */
            provenanceHashes?: (atomic.Hash.$Properties[]|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ChangeIntentAssociation. */
        type $Shape = atomic.ChangeIntentAssociation.$Properties;
    }

    /**
     * Properties of a PreviewRestoreRequest.
     * @deprecated Use atomic.PreviewRestoreRequest.$Properties instead.
     */
    interface IPreviewRestoreRequest extends atomic.PreviewRestoreRequest.$Properties {
    }

    /** Represents a PreviewRestoreRequest. */
    class PreviewRestoreRequest {

        /**
         * Constructs a new PreviewRestoreRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.PreviewRestoreRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** PreviewRestoreRequest repository. */
        repository?: (atomic.RepositoryRef.$Properties|null);

        /** PreviewRestoreRequest paths. */
        paths: string[];

        /** PreviewRestoreRequest force. */
        force: boolean;

        /** PreviewRestoreRequest contentPath. */
        contentPath?: (string|null);

        /**
         * Creates a new PreviewRestoreRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PreviewRestoreRequest instance
         */
        static create(properties: atomic.PreviewRestoreRequest.$Shape): atomic.PreviewRestoreRequest & atomic.PreviewRestoreRequest.$Shape;
        static create(properties?: atomic.PreviewRestoreRequest.$Properties): atomic.PreviewRestoreRequest;

        /**
         * Encodes the specified PreviewRestoreRequest message. Does not implicitly {@link atomic.PreviewRestoreRequest.verify|verify} messages.
         * @param message PreviewRestoreRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.PreviewRestoreRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PreviewRestoreRequest message, length delimited. Does not implicitly {@link atomic.PreviewRestoreRequest.verify|verify} messages.
         * @param message PreviewRestoreRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.PreviewRestoreRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PreviewRestoreRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.PreviewRestoreRequest & atomic.PreviewRestoreRequest.$Shape} PreviewRestoreRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.PreviewRestoreRequest & atomic.PreviewRestoreRequest.$Shape;

        /**
         * Decodes a PreviewRestoreRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.PreviewRestoreRequest & atomic.PreviewRestoreRequest.$Shape} PreviewRestoreRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.PreviewRestoreRequest & atomic.PreviewRestoreRequest.$Shape;

        /**
         * Verifies a PreviewRestoreRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PreviewRestoreRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PreviewRestoreRequest
         */
        static fromObject(object: { [k: string]: any }): atomic.PreviewRestoreRequest;

        /**
         * Creates a plain object from a PreviewRestoreRequest message. Also converts values to other types if specified.
         * @param message PreviewRestoreRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.PreviewRestoreRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PreviewRestoreRequest to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for PreviewRestoreRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace PreviewRestoreRequest {

        /** Properties of a PreviewRestoreRequest. */
        interface $Properties {

            /** PreviewRestoreRequest repository */
            repository?: (atomic.RepositoryRef.$Properties|null);

            /** PreviewRestoreRequest paths */
            paths?: (string[]|null);

            /** PreviewRestoreRequest force */
            force?: (boolean|null);

            /** PreviewRestoreRequest contentPath */
            contentPath?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a PreviewRestoreRequest. */
        type $Shape = atomic.PreviewRestoreRequest.$Properties;
    }

    /**
     * Properties of a PreviewMutationResponse.
     * @deprecated Use atomic.PreviewMutationResponse.$Properties instead.
     */
    interface IPreviewMutationResponse extends atomic.PreviewMutationResponse.$Properties {
    }

    /** Represents a PreviewMutationResponse. */
    class PreviewMutationResponse {

        /**
         * Constructs a new PreviewMutationResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.PreviewMutationResponse.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** PreviewMutationResponse affectedPaths. */
        affectedPaths: string[];

        /** PreviewMutationResponse changes. */
        changes: atomic.ChangeInfo.$Properties[];

        /** PreviewMutationResponse conflicts. */
        conflicts: atomic.ConflictInfo.$Properties[];

        /** PreviewMutationResponse snapshot. */
        snapshot?: (atomic.ViewSnapshot.$Properties|null);

        /** PreviewMutationResponse untracked. */
        untracked: string[];

        /** PreviewMutationResponse pristineContent. */
        pristineContent?: (Uint8Array|null);

        /** PreviewMutationResponse view. */
        view?: (string|null);

        /**
         * Creates a new PreviewMutationResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PreviewMutationResponse instance
         */
        static create(properties: atomic.PreviewMutationResponse.$Shape): atomic.PreviewMutationResponse & atomic.PreviewMutationResponse.$Shape;
        static create(properties?: atomic.PreviewMutationResponse.$Properties): atomic.PreviewMutationResponse;

        /**
         * Encodes the specified PreviewMutationResponse message. Does not implicitly {@link atomic.PreviewMutationResponse.verify|verify} messages.
         * @param message PreviewMutationResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.PreviewMutationResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PreviewMutationResponse message, length delimited. Does not implicitly {@link atomic.PreviewMutationResponse.verify|verify} messages.
         * @param message PreviewMutationResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.PreviewMutationResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PreviewMutationResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.PreviewMutationResponse & atomic.PreviewMutationResponse.$Shape} PreviewMutationResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.PreviewMutationResponse & atomic.PreviewMutationResponse.$Shape;

        /**
         * Decodes a PreviewMutationResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.PreviewMutationResponse & atomic.PreviewMutationResponse.$Shape} PreviewMutationResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.PreviewMutationResponse & atomic.PreviewMutationResponse.$Shape;

        /**
         * Verifies a PreviewMutationResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PreviewMutationResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PreviewMutationResponse
         */
        static fromObject(object: { [k: string]: any }): atomic.PreviewMutationResponse;

        /**
         * Creates a plain object from a PreviewMutationResponse message. Also converts values to other types if specified.
         * @param message PreviewMutationResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.PreviewMutationResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PreviewMutationResponse to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for PreviewMutationResponse
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace PreviewMutationResponse {

        /** Properties of a PreviewMutationResponse. */
        interface $Properties {

            /** PreviewMutationResponse affectedPaths */
            affectedPaths?: (string[]|null);

            /** PreviewMutationResponse changes */
            changes?: (atomic.ChangeInfo.$Properties[]|null);

            /** PreviewMutationResponse conflicts */
            conflicts?: (atomic.ConflictInfo.$Properties[]|null);

            /** PreviewMutationResponse snapshot */
            snapshot?: (atomic.ViewSnapshot.$Properties|null);

            /** PreviewMutationResponse untracked */
            untracked?: (string[]|null);

            /** PreviewMutationResponse pristineContent */
            pristineContent?: (Uint8Array|null);

            /** PreviewMutationResponse view */
            view?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a PreviewMutationResponse. */
        type $Shape = atomic.PreviewMutationResponse.$Properties;
    }

    /**
     * Properties of a ConflictInfo.
     * @deprecated Use atomic.ConflictInfo.$Properties instead.
     */
    interface IConflictInfo extends atomic.ConflictInfo.$Properties {
    }

    /** Represents a ConflictInfo. */
    class ConflictInfo {

        /**
         * Constructs a new ConflictInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.ConflictInfo.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ConflictInfo path. */
        path: string;

        /** ConflictInfo view. */
        view?: (string|null);

        /** ConflictInfo base. */
        base?: (atomic.Hash.$Properties|null);

        /** ConflictInfo kind. */
        kind?: (string|null);

        /** ConflictInfo line. */
        line?: (number|Long|null);

        /** ConflictInfo sides. */
        sides: string[];

        /**
         * Creates a new ConflictInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ConflictInfo instance
         */
        static create(properties: atomic.ConflictInfo.$Shape): atomic.ConflictInfo & atomic.ConflictInfo.$Shape;
        static create(properties?: atomic.ConflictInfo.$Properties): atomic.ConflictInfo;

        /**
         * Encodes the specified ConflictInfo message. Does not implicitly {@link atomic.ConflictInfo.verify|verify} messages.
         * @param message ConflictInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.ConflictInfo.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ConflictInfo message, length delimited. Does not implicitly {@link atomic.ConflictInfo.verify|verify} messages.
         * @param message ConflictInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.ConflictInfo.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ConflictInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.ConflictInfo & atomic.ConflictInfo.$Shape} ConflictInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.ConflictInfo & atomic.ConflictInfo.$Shape;

        /**
         * Decodes a ConflictInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.ConflictInfo & atomic.ConflictInfo.$Shape} ConflictInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.ConflictInfo & atomic.ConflictInfo.$Shape;

        /**
         * Verifies a ConflictInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ConflictInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ConflictInfo
         */
        static fromObject(object: { [k: string]: any }): atomic.ConflictInfo;

        /**
         * Creates a plain object from a ConflictInfo message. Also converts values to other types if specified.
         * @param message ConflictInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.ConflictInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ConflictInfo to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ConflictInfo
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ConflictInfo {

        /** Properties of a ConflictInfo. */
        interface $Properties {

            /** ConflictInfo path */
            path?: (string|null);

            /** ConflictInfo view */
            view?: (string|null);

            /** ConflictInfo base */
            base?: (atomic.Hash.$Properties|null);

            /** ConflictInfo kind */
            kind?: (string|null);

            /** ConflictInfo line */
            line?: (number|Long|null);

            /** ConflictInfo sides */
            sides?: (string[]|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ConflictInfo. */
        type $Shape = atomic.ConflictInfo.$Properties;
    }

    /**
     * Properties of a ListViewsRequest.
     * @deprecated Use atomic.ListViewsRequest.$Properties instead.
     */
    interface IListViewsRequest extends atomic.ListViewsRequest.$Properties {
    }

    /** Represents a ListViewsRequest. */
    class ListViewsRequest {

        /**
         * Constructs a new ListViewsRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.ListViewsRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ListViewsRequest repository. */
        repository?: (atomic.RepositoryRef.$Properties|null);

        /** ListViewsRequest includeDetails. */
        includeDetails: boolean;

        /**
         * Creates a new ListViewsRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListViewsRequest instance
         */
        static create(properties: atomic.ListViewsRequest.$Shape): atomic.ListViewsRequest & atomic.ListViewsRequest.$Shape;
        static create(properties?: atomic.ListViewsRequest.$Properties): atomic.ListViewsRequest;

        /**
         * Encodes the specified ListViewsRequest message. Does not implicitly {@link atomic.ListViewsRequest.verify|verify} messages.
         * @param message ListViewsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.ListViewsRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListViewsRequest message, length delimited. Does not implicitly {@link atomic.ListViewsRequest.verify|verify} messages.
         * @param message ListViewsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.ListViewsRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListViewsRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.ListViewsRequest & atomic.ListViewsRequest.$Shape} ListViewsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.ListViewsRequest & atomic.ListViewsRequest.$Shape;

        /**
         * Decodes a ListViewsRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.ListViewsRequest & atomic.ListViewsRequest.$Shape} ListViewsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.ListViewsRequest & atomic.ListViewsRequest.$Shape;

        /**
         * Verifies a ListViewsRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListViewsRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListViewsRequest
         */
        static fromObject(object: { [k: string]: any }): atomic.ListViewsRequest;

        /**
         * Creates a plain object from a ListViewsRequest message. Also converts values to other types if specified.
         * @param message ListViewsRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.ListViewsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListViewsRequest to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ListViewsRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ListViewsRequest {

        /** Properties of a ListViewsRequest. */
        interface $Properties {

            /** ListViewsRequest repository */
            repository?: (atomic.RepositoryRef.$Properties|null);

            /** ListViewsRequest includeDetails */
            includeDetails?: (boolean|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ListViewsRequest. */
        type $Shape = atomic.ListViewsRequest.$Properties;
    }

    /**
     * Properties of a ListViewsResponse.
     * @deprecated Use atomic.ListViewsResponse.$Properties instead.
     */
    interface IListViewsResponse extends atomic.ListViewsResponse.$Properties {
    }

    /** Represents a ListViewsResponse. */
    class ListViewsResponse {

        /**
         * Constructs a new ListViewsResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.ListViewsResponse.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ListViewsResponse views. */
        views: atomic.ViewInfo.$Properties[];

        /**
         * Creates a new ListViewsResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListViewsResponse instance
         */
        static create(properties: atomic.ListViewsResponse.$Shape): atomic.ListViewsResponse & atomic.ListViewsResponse.$Shape;
        static create(properties?: atomic.ListViewsResponse.$Properties): atomic.ListViewsResponse;

        /**
         * Encodes the specified ListViewsResponse message. Does not implicitly {@link atomic.ListViewsResponse.verify|verify} messages.
         * @param message ListViewsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.ListViewsResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListViewsResponse message, length delimited. Does not implicitly {@link atomic.ListViewsResponse.verify|verify} messages.
         * @param message ListViewsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.ListViewsResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListViewsResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.ListViewsResponse & atomic.ListViewsResponse.$Shape} ListViewsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.ListViewsResponse & atomic.ListViewsResponse.$Shape;

        /**
         * Decodes a ListViewsResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.ListViewsResponse & atomic.ListViewsResponse.$Shape} ListViewsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.ListViewsResponse & atomic.ListViewsResponse.$Shape;

        /**
         * Verifies a ListViewsResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListViewsResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListViewsResponse
         */
        static fromObject(object: { [k: string]: any }): atomic.ListViewsResponse;

        /**
         * Creates a plain object from a ListViewsResponse message. Also converts values to other types if specified.
         * @param message ListViewsResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.ListViewsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListViewsResponse to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ListViewsResponse
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ListViewsResponse {

        /** Properties of a ListViewsResponse. */
        interface $Properties {

            /** ListViewsResponse views */
            views?: (atomic.ViewInfo.$Properties[]|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ListViewsResponse. */
        type $Shape = atomic.ListViewsResponse.$Properties;
    }

    /**
     * Properties of a ViewInfo.
     * @deprecated Use atomic.ViewInfo.$Properties instead.
     */
    interface IViewInfo extends atomic.ViewInfo.$Properties {
    }

    /** Represents a ViewInfo. */
    class ViewInfo {

        /**
         * Constructs a new ViewInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.ViewInfo.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ViewInfo name. */
        name: string;

        /** ViewInfo scope. */
        scope: atomic.ViewScope;

        /** ViewInfo parent. */
        parent?: (string|null);

        /** ViewInfo head. */
        head?: (atomic.Hash.$Properties|null);

        /** ViewInfo changeCount. */
        changeCount: (number|Long);

        /** ViewInfo current. */
        current: boolean;

        /** ViewInfo ref. */
        ref?: (atomic.ViewRef.$Properties|null);

        /** ViewInfo snapshot. */
        snapshot?: (atomic.ViewSnapshot.$Properties|null);

        /** ViewInfo ownChangeCount. */
        ownChangeCount?: (number|Long|null);

        /** ViewInfo inheritedChangeCount. */
        inheritedChangeCount?: (number|Long|null);

        /**
         * Creates a new ViewInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ViewInfo instance
         */
        static create(properties: atomic.ViewInfo.$Shape): atomic.ViewInfo & atomic.ViewInfo.$Shape;
        static create(properties?: atomic.ViewInfo.$Properties): atomic.ViewInfo;

        /**
         * Encodes the specified ViewInfo message. Does not implicitly {@link atomic.ViewInfo.verify|verify} messages.
         * @param message ViewInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.ViewInfo.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ViewInfo message, length delimited. Does not implicitly {@link atomic.ViewInfo.verify|verify} messages.
         * @param message ViewInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.ViewInfo.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ViewInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.ViewInfo & atomic.ViewInfo.$Shape} ViewInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.ViewInfo & atomic.ViewInfo.$Shape;

        /**
         * Decodes a ViewInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.ViewInfo & atomic.ViewInfo.$Shape} ViewInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.ViewInfo & atomic.ViewInfo.$Shape;

        /**
         * Verifies a ViewInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ViewInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ViewInfo
         */
        static fromObject(object: { [k: string]: any }): atomic.ViewInfo;

        /**
         * Creates a plain object from a ViewInfo message. Also converts values to other types if specified.
         * @param message ViewInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.ViewInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ViewInfo to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ViewInfo
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ViewInfo {

        /** Properties of a ViewInfo. */
        interface $Properties {

            /** ViewInfo name */
            name?: (string|null);

            /** ViewInfo scope */
            scope?: (atomic.ViewScope|null);

            /** ViewInfo parent */
            parent?: (string|null);

            /** ViewInfo head */
            head?: (atomic.Hash.$Properties|null);

            /** ViewInfo changeCount */
            changeCount?: (number|Long|null);

            /** ViewInfo current */
            current?: (boolean|null);

            /** ViewInfo ref */
            ref?: (atomic.ViewRef.$Properties|null);

            /** ViewInfo snapshot */
            snapshot?: (atomic.ViewSnapshot.$Properties|null);

            /** ViewInfo ownChangeCount */
            ownChangeCount?: (number|Long|null);

            /** ViewInfo inheritedChangeCount */
            inheritedChangeCount?: (number|Long|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ViewInfo. */
        type $Shape = atomic.ViewInfo.$Properties;
    }

    /** ViewScope enum. */
    enum ViewScope {

        /** VIEW_SCOPE_UNSPECIFIED value */
        VIEW_SCOPE_UNSPECIFIED = 0,

        /** VIEW_SCOPE_DRAFT value */
        VIEW_SCOPE_DRAFT = 1,

        /** VIEW_SCOPE_SHARED value */
        VIEW_SCOPE_SHARED = 2
    }

    /**
     * Properties of a CreateViewRequest.
     * @deprecated Use atomic.CreateViewRequest.$Properties instead.
     */
    interface ICreateViewRequest extends atomic.CreateViewRequest.$Properties {
    }

    /** Represents a CreateViewRequest. */
    class CreateViewRequest {

        /**
         * Constructs a new CreateViewRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.CreateViewRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** CreateViewRequest repository. */
        repository?: (atomic.RepositoryRef.$Properties|null);

        /** CreateViewRequest meta. */
        meta?: (atomic.RequestMeta.$Properties|null);

        /** CreateViewRequest name. */
        name: string;

        /** CreateViewRequest fromView. */
        fromView?: (string|null);

        /** CreateViewRequest empty. */
        empty?: (boolean|null);

        /** CreateViewRequest parent. */
        parent?: (string|null);

        /** CreateViewRequest scope. */
        scope: atomic.ViewScope;

        /** CreateViewRequest baseSnapshot. */
        baseSnapshot?: (atomic.ViewSnapshot.$Properties|null);

        /** CreateViewRequest base. */
        base?: ("fromView"|"empty"|"parent");

        /**
         * Creates a new CreateViewRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateViewRequest instance
         */
        static create(properties: atomic.CreateViewRequest.$Shape): atomic.CreateViewRequest & atomic.CreateViewRequest.$Shape;
        static create(properties?: atomic.CreateViewRequest.$Properties): atomic.CreateViewRequest;

        /**
         * Encodes the specified CreateViewRequest message. Does not implicitly {@link atomic.CreateViewRequest.verify|verify} messages.
         * @param message CreateViewRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.CreateViewRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateViewRequest message, length delimited. Does not implicitly {@link atomic.CreateViewRequest.verify|verify} messages.
         * @param message CreateViewRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.CreateViewRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateViewRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.CreateViewRequest & atomic.CreateViewRequest.$Shape} CreateViewRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.CreateViewRequest & atomic.CreateViewRequest.$Shape;

        /**
         * Decodes a CreateViewRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.CreateViewRequest & atomic.CreateViewRequest.$Shape} CreateViewRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.CreateViewRequest & atomic.CreateViewRequest.$Shape;

        /**
         * Verifies a CreateViewRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateViewRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateViewRequest
         */
        static fromObject(object: { [k: string]: any }): atomic.CreateViewRequest;

        /**
         * Creates a plain object from a CreateViewRequest message. Also converts values to other types if specified.
         * @param message CreateViewRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.CreateViewRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateViewRequest to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for CreateViewRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace CreateViewRequest {

        /** Properties of a CreateViewRequest. */
        interface $Properties {

            /** CreateViewRequest repository */
            repository?: (atomic.RepositoryRef.$Properties|null);

            /** CreateViewRequest meta */
            meta?: (atomic.RequestMeta.$Properties|null);

            /** CreateViewRequest name */
            name?: (string|null);

            /** CreateViewRequest fromView */
            fromView?: (string|null);

            /** CreateViewRequest empty */
            empty?: (boolean|null);

            /** CreateViewRequest parent */
            parent?: (string|null);

            /** CreateViewRequest scope */
            scope?: (atomic.ViewScope|null);

            /** CreateViewRequest baseSnapshot */
            baseSnapshot?: (atomic.ViewSnapshot.$Properties|null);

            /** CreateViewRequest base */
            base?: ("fromView"|"empty"|"parent");

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Narrowed shape of a CreateViewRequest. */
        type $Shape = {
          repository?: atomic.RepositoryRef.$Shape|null;
          meta?: atomic.RequestMeta.$Shape|null;
          name?: string|null;
          fromView?: string|null;
          empty?: boolean|null;
          parent?: string|null;
          scope?: atomic.ViewScope|null;
          baseSnapshot?: atomic.ViewSnapshot.$Shape|null;
          $unknowns?: Uint8Array[];
        } & (
          ({ base?: undefined; fromView?: null; empty?: null; parent?: null }|{ base?: "fromView"; fromView: string; empty?: null; parent?: null }|{ base?: "empty"; fromView?: null; empty: boolean; parent?: null }|{ base?: "parent"; fromView?: null; empty?: null; parent: string })
        );
    }

    /**
     * Properties of a CreateViewResponse.
     * @deprecated Use atomic.CreateViewResponse.$Properties instead.
     */
    interface ICreateViewResponse extends atomic.CreateViewResponse.$Properties {
    }

    /** Represents a CreateViewResponse. */
    class CreateViewResponse {

        /**
         * Constructs a new CreateViewResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.CreateViewResponse.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** CreateViewResponse view. */
        view?: (atomic.ViewInfo.$Properties|null);

        /** CreateViewResponse meta. */
        meta?: (atomic.ResponseMeta.$Properties|null);

        /**
         * Creates a new CreateViewResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateViewResponse instance
         */
        static create(properties: atomic.CreateViewResponse.$Shape): atomic.CreateViewResponse & atomic.CreateViewResponse.$Shape;
        static create(properties?: atomic.CreateViewResponse.$Properties): atomic.CreateViewResponse;

        /**
         * Encodes the specified CreateViewResponse message. Does not implicitly {@link atomic.CreateViewResponse.verify|verify} messages.
         * @param message CreateViewResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.CreateViewResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateViewResponse message, length delimited. Does not implicitly {@link atomic.CreateViewResponse.verify|verify} messages.
         * @param message CreateViewResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.CreateViewResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateViewResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.CreateViewResponse & atomic.CreateViewResponse.$Shape} CreateViewResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.CreateViewResponse & atomic.CreateViewResponse.$Shape;

        /**
         * Decodes a CreateViewResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.CreateViewResponse & atomic.CreateViewResponse.$Shape} CreateViewResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.CreateViewResponse & atomic.CreateViewResponse.$Shape;

        /**
         * Verifies a CreateViewResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateViewResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateViewResponse
         */
        static fromObject(object: { [k: string]: any }): atomic.CreateViewResponse;

        /**
         * Creates a plain object from a CreateViewResponse message. Also converts values to other types if specified.
         * @param message CreateViewResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.CreateViewResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateViewResponse to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for CreateViewResponse
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace CreateViewResponse {

        /** Properties of a CreateViewResponse. */
        interface $Properties {

            /** CreateViewResponse view */
            view?: (atomic.ViewInfo.$Properties|null);

            /** CreateViewResponse meta */
            meta?: (atomic.ResponseMeta.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a CreateViewResponse. */
        type $Shape = atomic.CreateViewResponse.$Properties;
    }

    /**
     * Properties of a SwitchViewRequest.
     * @deprecated Use atomic.SwitchViewRequest.$Properties instead.
     */
    interface ISwitchViewRequest extends atomic.SwitchViewRequest.$Properties {
    }

    /** Represents a SwitchViewRequest. */
    class SwitchViewRequest {

        /**
         * Constructs a new SwitchViewRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.SwitchViewRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** SwitchViewRequest repository. */
        repository?: (atomic.RepositoryRef.$Properties|null);

        /** SwitchViewRequest meta. */
        meta?: (atomic.RequestMeta.$Properties|null);

        /** SwitchViewRequest view. */
        view: string;

        /** SwitchViewRequest bypassDirtyCheck. */
        bypassDirtyCheck?: (boolean|null);

        /**
         * Creates a new SwitchViewRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SwitchViewRequest instance
         */
        static create(properties: atomic.SwitchViewRequest.$Shape): atomic.SwitchViewRequest & atomic.SwitchViewRequest.$Shape;
        static create(properties?: atomic.SwitchViewRequest.$Properties): atomic.SwitchViewRequest;

        /**
         * Encodes the specified SwitchViewRequest message. Does not implicitly {@link atomic.SwitchViewRequest.verify|verify} messages.
         * @param message SwitchViewRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.SwitchViewRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SwitchViewRequest message, length delimited. Does not implicitly {@link atomic.SwitchViewRequest.verify|verify} messages.
         * @param message SwitchViewRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.SwitchViewRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SwitchViewRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.SwitchViewRequest & atomic.SwitchViewRequest.$Shape} SwitchViewRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.SwitchViewRequest & atomic.SwitchViewRequest.$Shape;

        /**
         * Decodes a SwitchViewRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.SwitchViewRequest & atomic.SwitchViewRequest.$Shape} SwitchViewRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.SwitchViewRequest & atomic.SwitchViewRequest.$Shape;

        /**
         * Verifies a SwitchViewRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SwitchViewRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SwitchViewRequest
         */
        static fromObject(object: { [k: string]: any }): atomic.SwitchViewRequest;

        /**
         * Creates a plain object from a SwitchViewRequest message. Also converts values to other types if specified.
         * @param message SwitchViewRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.SwitchViewRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SwitchViewRequest to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for SwitchViewRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace SwitchViewRequest {

        /** Properties of a SwitchViewRequest. */
        interface $Properties {

            /** SwitchViewRequest repository */
            repository?: (atomic.RepositoryRef.$Properties|null);

            /** SwitchViewRequest meta */
            meta?: (atomic.RequestMeta.$Properties|null);

            /** SwitchViewRequest view */
            view?: (string|null);

            /** SwitchViewRequest bypassDirtyCheck */
            bypassDirtyCheck?: (boolean|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a SwitchViewRequest. */
        type $Shape = atomic.SwitchViewRequest.$Properties;
    }

    /**
     * Properties of a SwitchViewResponse.
     * @deprecated Use atomic.SwitchViewResponse.$Properties instead.
     */
    interface ISwitchViewResponse extends atomic.SwitchViewResponse.$Properties {
    }

    /** Represents a SwitchViewResponse. */
    class SwitchViewResponse {

        /**
         * Constructs a new SwitchViewResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.SwitchViewResponse.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** SwitchViewResponse filesWritten. */
        filesWritten: (number|Long);

        /** SwitchViewResponse meta. */
        meta?: (atomic.ResponseMeta.$Properties|null);

        /**
         * Creates a new SwitchViewResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SwitchViewResponse instance
         */
        static create(properties: atomic.SwitchViewResponse.$Shape): atomic.SwitchViewResponse & atomic.SwitchViewResponse.$Shape;
        static create(properties?: atomic.SwitchViewResponse.$Properties): atomic.SwitchViewResponse;

        /**
         * Encodes the specified SwitchViewResponse message. Does not implicitly {@link atomic.SwitchViewResponse.verify|verify} messages.
         * @param message SwitchViewResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.SwitchViewResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SwitchViewResponse message, length delimited. Does not implicitly {@link atomic.SwitchViewResponse.verify|verify} messages.
         * @param message SwitchViewResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.SwitchViewResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SwitchViewResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.SwitchViewResponse & atomic.SwitchViewResponse.$Shape} SwitchViewResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.SwitchViewResponse & atomic.SwitchViewResponse.$Shape;

        /**
         * Decodes a SwitchViewResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.SwitchViewResponse & atomic.SwitchViewResponse.$Shape} SwitchViewResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.SwitchViewResponse & atomic.SwitchViewResponse.$Shape;

        /**
         * Verifies a SwitchViewResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SwitchViewResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SwitchViewResponse
         */
        static fromObject(object: { [k: string]: any }): atomic.SwitchViewResponse;

        /**
         * Creates a plain object from a SwitchViewResponse message. Also converts values to other types if specified.
         * @param message SwitchViewResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.SwitchViewResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SwitchViewResponse to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for SwitchViewResponse
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace SwitchViewResponse {

        /** Properties of a SwitchViewResponse. */
        interface $Properties {

            /** SwitchViewResponse filesWritten */
            filesWritten?: (number|Long|null);

            /** SwitchViewResponse meta */
            meta?: (atomic.ResponseMeta.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a SwitchViewResponse. */
        type $Shape = atomic.SwitchViewResponse.$Properties;
    }

    /**
     * Properties of a DeleteViewRequest.
     * @deprecated Use atomic.DeleteViewRequest.$Properties instead.
     */
    interface IDeleteViewRequest extends atomic.DeleteViewRequest.$Properties {
    }

    /** Represents a DeleteViewRequest. */
    class DeleteViewRequest {

        /**
         * Constructs a new DeleteViewRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.DeleteViewRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** DeleteViewRequest repository. */
        repository?: (atomic.RepositoryRef.$Properties|null);

        /** DeleteViewRequest meta. */
        meta?: (atomic.RequestMeta.$Properties|null);

        /** DeleteViewRequest view. */
        view: string;

        /** DeleteViewRequest expected. */
        expected?: (atomic.ExpectedState.$Properties|null);

        /**
         * Creates a new DeleteViewRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeleteViewRequest instance
         */
        static create(properties: atomic.DeleteViewRequest.$Shape): atomic.DeleteViewRequest & atomic.DeleteViewRequest.$Shape;
        static create(properties?: atomic.DeleteViewRequest.$Properties): atomic.DeleteViewRequest;

        /**
         * Encodes the specified DeleteViewRequest message. Does not implicitly {@link atomic.DeleteViewRequest.verify|verify} messages.
         * @param message DeleteViewRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.DeleteViewRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeleteViewRequest message, length delimited. Does not implicitly {@link atomic.DeleteViewRequest.verify|verify} messages.
         * @param message DeleteViewRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.DeleteViewRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeleteViewRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.DeleteViewRequest & atomic.DeleteViewRequest.$Shape} DeleteViewRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.DeleteViewRequest & atomic.DeleteViewRequest.$Shape;

        /**
         * Decodes a DeleteViewRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.DeleteViewRequest & atomic.DeleteViewRequest.$Shape} DeleteViewRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.DeleteViewRequest & atomic.DeleteViewRequest.$Shape;

        /**
         * Verifies a DeleteViewRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeleteViewRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeleteViewRequest
         */
        static fromObject(object: { [k: string]: any }): atomic.DeleteViewRequest;

        /**
         * Creates a plain object from a DeleteViewRequest message. Also converts values to other types if specified.
         * @param message DeleteViewRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.DeleteViewRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeleteViewRequest to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for DeleteViewRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace DeleteViewRequest {

        /** Properties of a DeleteViewRequest. */
        interface $Properties {

            /** DeleteViewRequest repository */
            repository?: (atomic.RepositoryRef.$Properties|null);

            /** DeleteViewRequest meta */
            meta?: (atomic.RequestMeta.$Properties|null);

            /** DeleteViewRequest view */
            view?: (string|null);

            /** DeleteViewRequest expected */
            expected?: (atomic.ExpectedState.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a DeleteViewRequest. */
        type $Shape = {
          repository?: atomic.RepositoryRef.$Shape|null;
          meta?: atomic.RequestMeta.$Shape|null;
          view?: string|null;
          expected?: atomic.ExpectedState.$Shape|null;
          $unknowns?: Uint8Array[];
        };
    }

    /**
     * Properties of a DeleteViewResponse.
     * @deprecated Use atomic.DeleteViewResponse.$Properties instead.
     */
    interface IDeleteViewResponse extends atomic.DeleteViewResponse.$Properties {
    }

    /** Represents a DeleteViewResponse. */
    class DeleteViewResponse {

        /**
         * Constructs a new DeleteViewResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.DeleteViewResponse.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** DeleteViewResponse meta. */
        meta?: (atomic.ResponseMeta.$Properties|null);

        /**
         * Creates a new DeleteViewResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeleteViewResponse instance
         */
        static create(properties: atomic.DeleteViewResponse.$Shape): atomic.DeleteViewResponse & atomic.DeleteViewResponse.$Shape;
        static create(properties?: atomic.DeleteViewResponse.$Properties): atomic.DeleteViewResponse;

        /**
         * Encodes the specified DeleteViewResponse message. Does not implicitly {@link atomic.DeleteViewResponse.verify|verify} messages.
         * @param message DeleteViewResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.DeleteViewResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeleteViewResponse message, length delimited. Does not implicitly {@link atomic.DeleteViewResponse.verify|verify} messages.
         * @param message DeleteViewResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.DeleteViewResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeleteViewResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.DeleteViewResponse & atomic.DeleteViewResponse.$Shape} DeleteViewResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.DeleteViewResponse & atomic.DeleteViewResponse.$Shape;

        /**
         * Decodes a DeleteViewResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.DeleteViewResponse & atomic.DeleteViewResponse.$Shape} DeleteViewResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.DeleteViewResponse & atomic.DeleteViewResponse.$Shape;

        /**
         * Verifies a DeleteViewResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeleteViewResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeleteViewResponse
         */
        static fromObject(object: { [k: string]: any }): atomic.DeleteViewResponse;

        /**
         * Creates a plain object from a DeleteViewResponse message. Also converts values to other types if specified.
         * @param message DeleteViewResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.DeleteViewResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeleteViewResponse to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for DeleteViewResponse
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace DeleteViewResponse {

        /** Properties of a DeleteViewResponse. */
        interface $Properties {

            /** DeleteViewResponse meta */
            meta?: (atomic.ResponseMeta.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a DeleteViewResponse. */
        type $Shape = atomic.DeleteViewResponse.$Properties;
    }

    /**
     * Properties of a PushChangesRequest.
     * @deprecated Use atomic.PushChangesRequest.$Properties instead.
     */
    interface IPushChangesRequest extends atomic.PushChangesRequest.$Properties {
    }

    /** Represents a PushChangesRequest. */
    class PushChangesRequest {

        /**
         * Constructs a new PushChangesRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.PushChangesRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** PushChangesRequest repository. */
        repository?: (atomic.RepositoryRef.$Properties|null);

        /** PushChangesRequest meta. */
        meta?: (atomic.RequestMeta.$Properties|null);

        /** PushChangesRequest remote. */
        remote: string;

        /** PushChangesRequest views. */
        views: string[];

        /** PushChangesRequest expected. */
        expected?: (atomic.ExpectedState.$Properties|null);

        /** PushChangesRequest toView. */
        toView?: (string|null);

        /** PushChangesRequest fromView. */
        fromView?: (string|null);

        /** PushChangesRequest dryRun. */
        dryRun: boolean;

        /** PushChangesRequest force. */
        force: boolean;

        /** PushChangesRequest all. */
        all: boolean;

        /** PushChangesRequest insecure. */
        insecure: boolean;

        /** PushChangesRequest timeoutSecs. */
        timeoutSecs: (number|Long);

        /** PushChangesRequest authHeaders. */
        authHeaders: { [k: string]: string };

        /** PushChangesRequest remoteUrl. */
        remoteUrl?: (string|null);

        /** PushChangesRequest identity. */
        identity?: (string|null);

        /**
         * Creates a new PushChangesRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PushChangesRequest instance
         */
        static create(properties: atomic.PushChangesRequest.$Shape): atomic.PushChangesRequest & atomic.PushChangesRequest.$Shape;
        static create(properties?: atomic.PushChangesRequest.$Properties): atomic.PushChangesRequest;

        /**
         * Encodes the specified PushChangesRequest message. Does not implicitly {@link atomic.PushChangesRequest.verify|verify} messages.
         * @param message PushChangesRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.PushChangesRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PushChangesRequest message, length delimited. Does not implicitly {@link atomic.PushChangesRequest.verify|verify} messages.
         * @param message PushChangesRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.PushChangesRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PushChangesRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.PushChangesRequest & atomic.PushChangesRequest.$Shape} PushChangesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.PushChangesRequest & atomic.PushChangesRequest.$Shape;

        /**
         * Decodes a PushChangesRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.PushChangesRequest & atomic.PushChangesRequest.$Shape} PushChangesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.PushChangesRequest & atomic.PushChangesRequest.$Shape;

        /**
         * Verifies a PushChangesRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PushChangesRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PushChangesRequest
         */
        static fromObject(object: { [k: string]: any }): atomic.PushChangesRequest;

        /**
         * Creates a plain object from a PushChangesRequest message. Also converts values to other types if specified.
         * @param message PushChangesRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.PushChangesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PushChangesRequest to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for PushChangesRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace PushChangesRequest {

        /** Properties of a PushChangesRequest. */
        interface $Properties {

            /** PushChangesRequest repository */
            repository?: (atomic.RepositoryRef.$Properties|null);

            /** PushChangesRequest meta */
            meta?: (atomic.RequestMeta.$Properties|null);

            /** PushChangesRequest remote */
            remote?: (string|null);

            /** PushChangesRequest views */
            views?: (string[]|null);

            /** PushChangesRequest expected */
            expected?: (atomic.ExpectedState.$Properties|null);

            /** PushChangesRequest toView */
            toView?: (string|null);

            /** PushChangesRequest fromView */
            fromView?: (string|null);

            /** PushChangesRequest dryRun */
            dryRun?: (boolean|null);

            /** PushChangesRequest force */
            force?: (boolean|null);

            /** PushChangesRequest all */
            all?: (boolean|null);

            /** PushChangesRequest insecure */
            insecure?: (boolean|null);

            /** PushChangesRequest timeoutSecs */
            timeoutSecs?: (number|Long|null);

            /** PushChangesRequest authHeaders */
            authHeaders?: ({ [k: string]: string }|null);

            /** PushChangesRequest remoteUrl */
            remoteUrl?: (string|null);

            /** PushChangesRequest identity */
            identity?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a PushChangesRequest. */
        type $Shape = {
          repository?: atomic.RepositoryRef.$Shape|null;
          meta?: atomic.RequestMeta.$Shape|null;
          remote?: string|null;
          views?: string[]|null;
          expected?: atomic.ExpectedState.$Shape|null;
          toView?: string|null;
          fromView?: string|null;
          dryRun?: boolean|null;
          force?: boolean|null;
          all?: boolean|null;
          insecure?: boolean|null;
          timeoutSecs?: number|Long|null;
          authHeaders?: { [k: string]: string }|null;
          remoteUrl?: string|null;
          identity?: string|null;
          $unknowns?: Uint8Array[];
        };
    }

    /**
     * Properties of a PushChangesResponse.
     * @deprecated Use atomic.PushChangesResponse.$Properties instead.
     */
    interface IPushChangesResponse extends atomic.PushChangesResponse.$Properties {
    }

    /** Represents a PushChangesResponse. */
    class PushChangesResponse {

        /**
         * Constructs a new PushChangesResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.PushChangesResponse.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** PushChangesResponse pushedChanges. */
        pushedChanges: (number|Long);

        /** PushChangesResponse manifests. */
        manifests: string[];

        /** PushChangesResponse meta. */
        meta?: (atomic.ResponseMeta.$Properties|null);

        /** PushChangesResponse report. */
        report?: (atomic.PushReport.$Properties|null);

        /** PushChangesResponse conflict. */
        conflict?: (atomic.PushConflict.$Properties|null);

        /**
         * Creates a new PushChangesResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PushChangesResponse instance
         */
        static create(properties: atomic.PushChangesResponse.$Shape): atomic.PushChangesResponse & atomic.PushChangesResponse.$Shape;
        static create(properties?: atomic.PushChangesResponse.$Properties): atomic.PushChangesResponse;

        /**
         * Encodes the specified PushChangesResponse message. Does not implicitly {@link atomic.PushChangesResponse.verify|verify} messages.
         * @param message PushChangesResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.PushChangesResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PushChangesResponse message, length delimited. Does not implicitly {@link atomic.PushChangesResponse.verify|verify} messages.
         * @param message PushChangesResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.PushChangesResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PushChangesResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.PushChangesResponse & atomic.PushChangesResponse.$Shape} PushChangesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.PushChangesResponse & atomic.PushChangesResponse.$Shape;

        /**
         * Decodes a PushChangesResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.PushChangesResponse & atomic.PushChangesResponse.$Shape} PushChangesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.PushChangesResponse & atomic.PushChangesResponse.$Shape;

        /**
         * Verifies a PushChangesResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PushChangesResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PushChangesResponse
         */
        static fromObject(object: { [k: string]: any }): atomic.PushChangesResponse;

        /**
         * Creates a plain object from a PushChangesResponse message. Also converts values to other types if specified.
         * @param message PushChangesResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.PushChangesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PushChangesResponse to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for PushChangesResponse
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace PushChangesResponse {

        /** Properties of a PushChangesResponse. */
        interface $Properties {

            /** PushChangesResponse pushedChanges */
            pushedChanges?: (number|Long|null);

            /** PushChangesResponse manifests */
            manifests?: (string[]|null);

            /** PushChangesResponse meta */
            meta?: (atomic.ResponseMeta.$Properties|null);

            /** PushChangesResponse report */
            report?: (atomic.PushReport.$Properties|null);

            /** PushChangesResponse conflict */
            conflict?: (atomic.PushConflict.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a PushChangesResponse. */
        type $Shape = atomic.PushChangesResponse.$Properties;
    }

    /**
     * Properties of a PushReport.
     * @deprecated Use atomic.PushReport.$Properties instead.
     */
    interface IPushReport extends atomic.PushReport.$Properties {
    }

    /** Represents a PushReport. */
    class PushReport {

        /**
         * Constructs a new PushReport.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.PushReport.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** PushReport remoteName. */
        remoteName: string;

        /** PushReport remoteUrl. */
        remoteUrl: string;

        /** PushReport views. */
        views: atomic.PushViewReport.$Properties[];

        /** PushReport totalStored. */
        totalStored: (number|Long);

        /** PushReport viewsDeclared. */
        viewsDeclared: (number|Long);

        /** PushReport attestations. */
        attestations: atomic.PushSidecar.$Properties[];

        /** PushReport provenance. */
        provenance: atomic.PushSidecar.$Properties[];

        /** PushReport tags. */
        tags: atomic.PushTag.$Properties[];

        /**
         * Creates a new PushReport instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PushReport instance
         */
        static create(properties: atomic.PushReport.$Shape): atomic.PushReport & atomic.PushReport.$Shape;
        static create(properties?: atomic.PushReport.$Properties): atomic.PushReport;

        /**
         * Encodes the specified PushReport message. Does not implicitly {@link atomic.PushReport.verify|verify} messages.
         * @param message PushReport message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.PushReport.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PushReport message, length delimited. Does not implicitly {@link atomic.PushReport.verify|verify} messages.
         * @param message PushReport message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.PushReport.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PushReport message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.PushReport & atomic.PushReport.$Shape} PushReport
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.PushReport & atomic.PushReport.$Shape;

        /**
         * Decodes a PushReport message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.PushReport & atomic.PushReport.$Shape} PushReport
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.PushReport & atomic.PushReport.$Shape;

        /**
         * Verifies a PushReport message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PushReport message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PushReport
         */
        static fromObject(object: { [k: string]: any }): atomic.PushReport;

        /**
         * Creates a plain object from a PushReport message. Also converts values to other types if specified.
         * @param message PushReport
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.PushReport, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PushReport to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for PushReport
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace PushReport {

        /** Properties of a PushReport. */
        interface $Properties {

            /** PushReport remoteName */
            remoteName?: (string|null);

            /** PushReport remoteUrl */
            remoteUrl?: (string|null);

            /** PushReport views */
            views?: (atomic.PushViewReport.$Properties[]|null);

            /** PushReport totalStored */
            totalStored?: (number|Long|null);

            /** PushReport viewsDeclared */
            viewsDeclared?: (number|Long|null);

            /** PushReport attestations */
            attestations?: (atomic.PushSidecar.$Properties[]|null);

            /** PushReport provenance */
            provenance?: (atomic.PushSidecar.$Properties[]|null);

            /** PushReport tags */
            tags?: (atomic.PushTag.$Properties[]|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a PushReport. */
        type $Shape = atomic.PushReport.$Properties;
    }

    /**
     * Properties of a PushViewReport.
     * @deprecated Use atomic.PushViewReport.$Properties instead.
     */
    interface IPushViewReport extends atomic.PushViewReport.$Properties {
    }

    /** Represents a PushViewReport. */
    class PushViewReport {

        /**
         * Constructs a new PushViewReport.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.PushViewReport.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** PushViewReport remoteName. */
        remoteName: string;

        /** PushViewReport scope. */
        scope: string;

        /** PushViewReport parent. */
        parent?: (string|null);

        /** PushViewReport existsOnRemote. */
        existsOnRemote: boolean;

        /** PushViewReport remoteChangeCount. */
        remoteChangeCount: (number|Long);

        /** PushViewReport noop. */
        noop: boolean;

        /** PushViewReport shrink. */
        shrink: boolean;

        /** PushViewReport forced. */
        forced: boolean;

        /** PushViewReport toStore. */
        toStore: atomic.PushChange.$Properties[];

        /** PushViewReport logCount. */
        logCount: (number|Long);

        /** PushViewReport declared. */
        declared: boolean;

        /**
         * Creates a new PushViewReport instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PushViewReport instance
         */
        static create(properties: atomic.PushViewReport.$Shape): atomic.PushViewReport & atomic.PushViewReport.$Shape;
        static create(properties?: atomic.PushViewReport.$Properties): atomic.PushViewReport;

        /**
         * Encodes the specified PushViewReport message. Does not implicitly {@link atomic.PushViewReport.verify|verify} messages.
         * @param message PushViewReport message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.PushViewReport.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PushViewReport message, length delimited. Does not implicitly {@link atomic.PushViewReport.verify|verify} messages.
         * @param message PushViewReport message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.PushViewReport.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PushViewReport message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.PushViewReport & atomic.PushViewReport.$Shape} PushViewReport
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.PushViewReport & atomic.PushViewReport.$Shape;

        /**
         * Decodes a PushViewReport message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.PushViewReport & atomic.PushViewReport.$Shape} PushViewReport
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.PushViewReport & atomic.PushViewReport.$Shape;

        /**
         * Verifies a PushViewReport message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PushViewReport message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PushViewReport
         */
        static fromObject(object: { [k: string]: any }): atomic.PushViewReport;

        /**
         * Creates a plain object from a PushViewReport message. Also converts values to other types if specified.
         * @param message PushViewReport
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.PushViewReport, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PushViewReport to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for PushViewReport
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace PushViewReport {

        /** Properties of a PushViewReport. */
        interface $Properties {

            /** PushViewReport remoteName */
            remoteName?: (string|null);

            /** PushViewReport scope */
            scope?: (string|null);

            /** PushViewReport parent */
            parent?: (string|null);

            /** PushViewReport existsOnRemote */
            existsOnRemote?: (boolean|null);

            /** PushViewReport remoteChangeCount */
            remoteChangeCount?: (number|Long|null);

            /** PushViewReport noop */
            noop?: (boolean|null);

            /** PushViewReport shrink */
            shrink?: (boolean|null);

            /** PushViewReport forced */
            forced?: (boolean|null);

            /** PushViewReport toStore */
            toStore?: (atomic.PushChange.$Properties[]|null);

            /** PushViewReport logCount */
            logCount?: (number|Long|null);

            /** PushViewReport declared */
            declared?: (boolean|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a PushViewReport. */
        type $Shape = atomic.PushViewReport.$Properties;
    }

    /**
     * Properties of a PushChange.
     * @deprecated Use atomic.PushChange.$Properties instead.
     */
    interface IPushChange extends atomic.PushChange.$Properties {
    }

    /** Represents a PushChange. */
    class PushChange {

        /**
         * Constructs a new PushChange.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.PushChange.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** PushChange hash. */
        hash?: (atomic.Hash.$Properties|null);

        /** PushChange message. */
        message?: (string|null);

        /**
         * Creates a new PushChange instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PushChange instance
         */
        static create(properties: atomic.PushChange.$Shape): atomic.PushChange & atomic.PushChange.$Shape;
        static create(properties?: atomic.PushChange.$Properties): atomic.PushChange;

        /**
         * Encodes the specified PushChange message. Does not implicitly {@link atomic.PushChange.verify|verify} messages.
         * @param message PushChange message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.PushChange.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PushChange message, length delimited. Does not implicitly {@link atomic.PushChange.verify|verify} messages.
         * @param message PushChange message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.PushChange.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PushChange message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.PushChange & atomic.PushChange.$Shape} PushChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.PushChange & atomic.PushChange.$Shape;

        /**
         * Decodes a PushChange message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.PushChange & atomic.PushChange.$Shape} PushChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.PushChange & atomic.PushChange.$Shape;

        /**
         * Verifies a PushChange message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PushChange message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PushChange
         */
        static fromObject(object: { [k: string]: any }): atomic.PushChange;

        /**
         * Creates a plain object from a PushChange message. Also converts values to other types if specified.
         * @param message PushChange
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.PushChange, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PushChange to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for PushChange
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace PushChange {

        /** Properties of a PushChange. */
        interface $Properties {

            /** PushChange hash */
            hash?: (atomic.Hash.$Properties|null);

            /** PushChange message */
            message?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a PushChange. */
        type $Shape = atomic.PushChange.$Properties;
    }

    /**
     * Properties of a PushSidecar.
     * @deprecated Use atomic.PushSidecar.$Properties instead.
     */
    interface IPushSidecar extends atomic.PushSidecar.$Properties {
    }

    /** Represents a PushSidecar. */
    class PushSidecar {

        /**
         * Constructs a new PushSidecar.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.PushSidecar.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** PushSidecar hash. */
        hash?: (atomic.Hash.$Properties|null);

        /** PushSidecar cost. */
        cost?: (string|null);

        /** PushSidecar covered. */
        covered: (number|Long);

        /** PushSidecar nodes. */
        nodes: (number|Long);

        /** PushSidecar explained. */
        explained: (number|Long);

        /**
         * Creates a new PushSidecar instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PushSidecar instance
         */
        static create(properties: atomic.PushSidecar.$Shape): atomic.PushSidecar & atomic.PushSidecar.$Shape;
        static create(properties?: atomic.PushSidecar.$Properties): atomic.PushSidecar;

        /**
         * Encodes the specified PushSidecar message. Does not implicitly {@link atomic.PushSidecar.verify|verify} messages.
         * @param message PushSidecar message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.PushSidecar.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PushSidecar message, length delimited. Does not implicitly {@link atomic.PushSidecar.verify|verify} messages.
         * @param message PushSidecar message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.PushSidecar.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PushSidecar message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.PushSidecar & atomic.PushSidecar.$Shape} PushSidecar
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.PushSidecar & atomic.PushSidecar.$Shape;

        /**
         * Decodes a PushSidecar message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.PushSidecar & atomic.PushSidecar.$Shape} PushSidecar
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.PushSidecar & atomic.PushSidecar.$Shape;

        /**
         * Verifies a PushSidecar message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PushSidecar message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PushSidecar
         */
        static fromObject(object: { [k: string]: any }): atomic.PushSidecar;

        /**
         * Creates a plain object from a PushSidecar message. Also converts values to other types if specified.
         * @param message PushSidecar
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.PushSidecar, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PushSidecar to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for PushSidecar
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace PushSidecar {

        /** Properties of a PushSidecar. */
        interface $Properties {

            /** PushSidecar hash */
            hash?: (atomic.Hash.$Properties|null);

            /** PushSidecar cost */
            cost?: (string|null);

            /** PushSidecar covered */
            covered?: (number|Long|null);

            /** PushSidecar nodes */
            nodes?: (number|Long|null);

            /** PushSidecar explained */
            explained?: (number|Long|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a PushSidecar. */
        type $Shape = atomic.PushSidecar.$Properties;
    }

    /**
     * Properties of a PushTag.
     * @deprecated Use atomic.PushTag.$Properties instead.
     */
    interface IPushTag extends atomic.PushTag.$Properties {
    }

    /** Represents a PushTag. */
    class PushTag {

        /**
         * Constructs a new PushTag.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.PushTag.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** PushTag hash. */
        hash?: (atomic.Hash.$Properties|null);

        /** PushTag name. */
        name: string;

        /** PushTag kind. */
        kind: string;

        /**
         * Creates a new PushTag instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PushTag instance
         */
        static create(properties: atomic.PushTag.$Shape): atomic.PushTag & atomic.PushTag.$Shape;
        static create(properties?: atomic.PushTag.$Properties): atomic.PushTag;

        /**
         * Encodes the specified PushTag message. Does not implicitly {@link atomic.PushTag.verify|verify} messages.
         * @param message PushTag message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.PushTag.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PushTag message, length delimited. Does not implicitly {@link atomic.PushTag.verify|verify} messages.
         * @param message PushTag message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.PushTag.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PushTag message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.PushTag & atomic.PushTag.$Shape} PushTag
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.PushTag & atomic.PushTag.$Shape;

        /**
         * Decodes a PushTag message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.PushTag & atomic.PushTag.$Shape} PushTag
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.PushTag & atomic.PushTag.$Shape;

        /**
         * Verifies a PushTag message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PushTag message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PushTag
         */
        static fromObject(object: { [k: string]: any }): atomic.PushTag;

        /**
         * Creates a plain object from a PushTag message. Also converts values to other types if specified.
         * @param message PushTag
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.PushTag, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PushTag to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for PushTag
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace PushTag {

        /** Properties of a PushTag. */
        interface $Properties {

            /** PushTag hash */
            hash?: (atomic.Hash.$Properties|null);

            /** PushTag name */
            name?: (string|null);

            /** PushTag kind */
            kind?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a PushTag. */
        type $Shape = atomic.PushTag.$Properties;
    }

    /**
     * Properties of a PushConflict.
     * @deprecated Use atomic.PushConflict.$Properties instead.
     */
    interface IPushConflict extends atomic.PushConflict.$Properties {
    }

    /** Represents a PushConflict. */
    class PushConflict {

        /**
         * Constructs a new PushConflict.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.PushConflict.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** PushConflict view. */
        view: string;

        /** PushConflict identityMismatch. */
        identityMismatch: boolean;

        /** PushConflict description. */
        description: string;

        /** PushConflict local. */
        local?: (atomic.ManifestState.$Properties|null);

        /** PushConflict remote. */
        remote?: (atomic.ManifestState.$Properties|null);

        /**
         * Creates a new PushConflict instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PushConflict instance
         */
        static create(properties: atomic.PushConflict.$Shape): atomic.PushConflict & atomic.PushConflict.$Shape;
        static create(properties?: atomic.PushConflict.$Properties): atomic.PushConflict;

        /**
         * Encodes the specified PushConflict message. Does not implicitly {@link atomic.PushConflict.verify|verify} messages.
         * @param message PushConflict message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.PushConflict.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PushConflict message, length delimited. Does not implicitly {@link atomic.PushConflict.verify|verify} messages.
         * @param message PushConflict message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.PushConflict.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PushConflict message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.PushConflict & atomic.PushConflict.$Shape} PushConflict
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.PushConflict & atomic.PushConflict.$Shape;

        /**
         * Decodes a PushConflict message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.PushConflict & atomic.PushConflict.$Shape} PushConflict
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.PushConflict & atomic.PushConflict.$Shape;

        /**
         * Verifies a PushConflict message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PushConflict message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PushConflict
         */
        static fromObject(object: { [k: string]: any }): atomic.PushConflict;

        /**
         * Creates a plain object from a PushConflict message. Also converts values to other types if specified.
         * @param message PushConflict
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.PushConflict, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PushConflict to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for PushConflict
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace PushConflict {

        /** Properties of a PushConflict. */
        interface $Properties {

            /** PushConflict view */
            view?: (string|null);

            /** PushConflict identityMismatch */
            identityMismatch?: (boolean|null);

            /** PushConflict description */
            description?: (string|null);

            /** PushConflict local */
            local?: (atomic.ManifestState.$Properties|null);

            /** PushConflict remote */
            remote?: (atomic.ManifestState.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a PushConflict. */
        type $Shape = atomic.PushConflict.$Properties;
    }

    /**
     * Properties of a ManifestState.
     * @deprecated Use atomic.ManifestState.$Properties instead.
     */
    interface IManifestState extends atomic.ManifestState.$Properties {
    }

    /** Represents a ManifestState. */
    class ManifestState {

        /**
         * Constructs a new ManifestState.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.ManifestState.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ManifestState view. */
        view: string;

        /** ManifestState state. */
        state: string;

        /** ManifestState changeCount. */
        changeCount: (number|Long);

        /**
         * Creates a new ManifestState instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ManifestState instance
         */
        static create(properties: atomic.ManifestState.$Shape): atomic.ManifestState & atomic.ManifestState.$Shape;
        static create(properties?: atomic.ManifestState.$Properties): atomic.ManifestState;

        /**
         * Encodes the specified ManifestState message. Does not implicitly {@link atomic.ManifestState.verify|verify} messages.
         * @param message ManifestState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.ManifestState.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ManifestState message, length delimited. Does not implicitly {@link atomic.ManifestState.verify|verify} messages.
         * @param message ManifestState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.ManifestState.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ManifestState message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.ManifestState & atomic.ManifestState.$Shape} ManifestState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.ManifestState & atomic.ManifestState.$Shape;

        /**
         * Decodes a ManifestState message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.ManifestState & atomic.ManifestState.$Shape} ManifestState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.ManifestState & atomic.ManifestState.$Shape;

        /**
         * Verifies a ManifestState message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ManifestState message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ManifestState
         */
        static fromObject(object: { [k: string]: any }): atomic.ManifestState;

        /**
         * Creates a plain object from a ManifestState message. Also converts values to other types if specified.
         * @param message ManifestState
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.ManifestState, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ManifestState to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ManifestState
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ManifestState {

        /** Properties of a ManifestState. */
        interface $Properties {

            /** ManifestState view */
            view?: (string|null);

            /** ManifestState state */
            state?: (string|null);

            /** ManifestState changeCount */
            changeCount?: (number|Long|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ManifestState. */
        type $Shape = atomic.ManifestState.$Properties;
    }

    /**
     * Properties of a PullChangesRequest.
     * @deprecated Use atomic.PullChangesRequest.$Properties instead.
     */
    interface IPullChangesRequest extends atomic.PullChangesRequest.$Properties {
    }

    /** Represents a PullChangesRequest. */
    class PullChangesRequest {

        /**
         * Constructs a new PullChangesRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.PullChangesRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** PullChangesRequest repository. */
        repository?: (atomic.RepositoryRef.$Properties|null);

        /** PullChangesRequest meta. */
        meta?: (atomic.RequestMeta.$Properties|null);

        /** PullChangesRequest remote. */
        remote: string;

        /** PullChangesRequest importSidecars. */
        importSidecars: boolean;

        /** PullChangesRequest toView. */
        toView?: (string|null);

        /** PullChangesRequest fromView. */
        fromView?: (string|null);

        /** PullChangesRequest dryRun. */
        dryRun: boolean;

        /** PullChangesRequest all. */
        all: boolean;

        /** PullChangesRequest insecure. */
        insecure: boolean;

        /** PullChangesRequest timeoutSecs. */
        timeoutSecs: (number|Long);

        /** PullChangesRequest identity. */
        identity?: (string|null);

        /** PullChangesRequest downloadOnly. */
        downloadOnly: boolean;

        /** PullChangesRequest authHeaders. */
        authHeaders: { [k: string]: string };

        /** PullChangesRequest remoteUrl. */
        remoteUrl?: (string|null);

        /**
         * Creates a new PullChangesRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PullChangesRequest instance
         */
        static create(properties: atomic.PullChangesRequest.$Shape): atomic.PullChangesRequest & atomic.PullChangesRequest.$Shape;
        static create(properties?: atomic.PullChangesRequest.$Properties): atomic.PullChangesRequest;

        /**
         * Encodes the specified PullChangesRequest message. Does not implicitly {@link atomic.PullChangesRequest.verify|verify} messages.
         * @param message PullChangesRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.PullChangesRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PullChangesRequest message, length delimited. Does not implicitly {@link atomic.PullChangesRequest.verify|verify} messages.
         * @param message PullChangesRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.PullChangesRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PullChangesRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.PullChangesRequest & atomic.PullChangesRequest.$Shape} PullChangesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.PullChangesRequest & atomic.PullChangesRequest.$Shape;

        /**
         * Decodes a PullChangesRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.PullChangesRequest & atomic.PullChangesRequest.$Shape} PullChangesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.PullChangesRequest & atomic.PullChangesRequest.$Shape;

        /**
         * Verifies a PullChangesRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PullChangesRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PullChangesRequest
         */
        static fromObject(object: { [k: string]: any }): atomic.PullChangesRequest;

        /**
         * Creates a plain object from a PullChangesRequest message. Also converts values to other types if specified.
         * @param message PullChangesRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.PullChangesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PullChangesRequest to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for PullChangesRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace PullChangesRequest {

        /** Properties of a PullChangesRequest. */
        interface $Properties {

            /** PullChangesRequest repository */
            repository?: (atomic.RepositoryRef.$Properties|null);

            /** PullChangesRequest meta */
            meta?: (atomic.RequestMeta.$Properties|null);

            /** PullChangesRequest remote */
            remote?: (string|null);

            /** PullChangesRequest importSidecars */
            importSidecars?: (boolean|null);

            /** PullChangesRequest toView */
            toView?: (string|null);

            /** PullChangesRequest fromView */
            fromView?: (string|null);

            /** PullChangesRequest dryRun */
            dryRun?: (boolean|null);

            /** PullChangesRequest all */
            all?: (boolean|null);

            /** PullChangesRequest insecure */
            insecure?: (boolean|null);

            /** PullChangesRequest timeoutSecs */
            timeoutSecs?: (number|Long|null);

            /** PullChangesRequest identity */
            identity?: (string|null);

            /** PullChangesRequest downloadOnly */
            downloadOnly?: (boolean|null);

            /** PullChangesRequest authHeaders */
            authHeaders?: ({ [k: string]: string }|null);

            /** PullChangesRequest remoteUrl */
            remoteUrl?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a PullChangesRequest. */
        type $Shape = atomic.PullChangesRequest.$Properties;
    }

    /**
     * Properties of a PullChangesResponse.
     * @deprecated Use atomic.PullChangesResponse.$Properties instead.
     */
    interface IPullChangesResponse extends atomic.PullChangesResponse.$Properties {
    }

    /** Represents a PullChangesResponse. */
    class PullChangesResponse {

        /**
         * Constructs a new PullChangesResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.PullChangesResponse.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** PullChangesResponse appliedChanges. */
        appliedChanges: (number|Long);

        /** PullChangesResponse updatedViews. */
        updatedViews: string[];

        /** PullChangesResponse meta. */
        meta?: (atomic.ResponseMeta.$Properties|null);

        /** PullChangesResponse report. */
        report?: (atomic.PullReport.$Properties|null);

        /**
         * Creates a new PullChangesResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PullChangesResponse instance
         */
        static create(properties: atomic.PullChangesResponse.$Shape): atomic.PullChangesResponse & atomic.PullChangesResponse.$Shape;
        static create(properties?: atomic.PullChangesResponse.$Properties): atomic.PullChangesResponse;

        /**
         * Encodes the specified PullChangesResponse message. Does not implicitly {@link atomic.PullChangesResponse.verify|verify} messages.
         * @param message PullChangesResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.PullChangesResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PullChangesResponse message, length delimited. Does not implicitly {@link atomic.PullChangesResponse.verify|verify} messages.
         * @param message PullChangesResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.PullChangesResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PullChangesResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.PullChangesResponse & atomic.PullChangesResponse.$Shape} PullChangesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.PullChangesResponse & atomic.PullChangesResponse.$Shape;

        /**
         * Decodes a PullChangesResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.PullChangesResponse & atomic.PullChangesResponse.$Shape} PullChangesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.PullChangesResponse & atomic.PullChangesResponse.$Shape;

        /**
         * Verifies a PullChangesResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PullChangesResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PullChangesResponse
         */
        static fromObject(object: { [k: string]: any }): atomic.PullChangesResponse;

        /**
         * Creates a plain object from a PullChangesResponse message. Also converts values to other types if specified.
         * @param message PullChangesResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.PullChangesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PullChangesResponse to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for PullChangesResponse
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace PullChangesResponse {

        /** Properties of a PullChangesResponse. */
        interface $Properties {

            /** PullChangesResponse appliedChanges */
            appliedChanges?: (number|Long|null);

            /** PullChangesResponse updatedViews */
            updatedViews?: (string[]|null);

            /** PullChangesResponse meta */
            meta?: (atomic.ResponseMeta.$Properties|null);

            /** PullChangesResponse report */
            report?: (atomic.PullReport.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a PullChangesResponse. */
        type $Shape = atomic.PullChangesResponse.$Properties;
    }

    /**
     * Properties of a PullReport.
     * @deprecated Use atomic.PullReport.$Properties instead.
     */
    interface IPullReport extends atomic.PullReport.$Properties {
    }

    /** Represents a PullReport. */
    class PullReport {

        /**
         * Constructs a new PullReport.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.PullReport.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** PullReport remoteName. */
        remoteName: string;

        /** PullReport remoteUrl. */
        remoteUrl: string;

        /** PullReport remoteView. */
        remoteView: string;

        /** PullReport localView. */
        localView: string;

        /** PullReport localViewChanges. */
        localViewChanges: (number|Long);

        /** PullReport graphObjects. */
        graphObjects: (number|Long);

        /** PullReport remoteChanges. */
        remoteChanges: (number|Long);

        /** PullReport remoteState. */
        remoteState?: (string|null);

        /** PullReport localOnly. */
        localOnly: string[];

        /** PullReport downloads. */
        downloads: atomic.PullDownload.$Properties[];

        /** PullReport changesDownloaded. */
        changesDownloaded: (number|Long);

        /** PullReport bytesTransferred. */
        bytesTransferred: (number|Long);

        /** PullReport applied. */
        applied: boolean;

        /** PullReport appliedChanges. */
        appliedChanges: (number|Long);

        /** PullReport applyErrors. */
        applyErrors: string[];

        /** PullReport sidecars. */
        sidecars: atomic.PullSidecar.$Properties[];

        /** PullReport setIdVerified. */
        setIdVerified: boolean;

        /** PullReport setIdWarning. */
        setIdWarning?: (string|null);

        /** PullReport materialized. */
        materialized: boolean;

        /** PullReport filesWritten. */
        filesWritten: (number|Long);

        /** PullReport materializeError. */
        materializeError?: (string|null);

        /** PullReport tags. */
        tags: atomic.PullTag.$Properties[];

        /** PullReport warnings. */
        warnings: atomic.PullWarning.$Properties[];

        /** PullReport localTip. */
        localTip?: (string|null);

        /** PullReport vaultBootstrapped. */
        vaultBootstrapped: boolean;

        /** PullReport reconciledViews. */
        reconciledViews: (number|Long);

        /** PullReport downloadOnly. */
        downloadOnly: boolean;

        /** PullReport changesFailed. */
        changesFailed: (number|Long);

        /**
         * Creates a new PullReport instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PullReport instance
         */
        static create(properties: atomic.PullReport.$Shape): atomic.PullReport & atomic.PullReport.$Shape;
        static create(properties?: atomic.PullReport.$Properties): atomic.PullReport;

        /**
         * Encodes the specified PullReport message. Does not implicitly {@link atomic.PullReport.verify|verify} messages.
         * @param message PullReport message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.PullReport.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PullReport message, length delimited. Does not implicitly {@link atomic.PullReport.verify|verify} messages.
         * @param message PullReport message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.PullReport.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PullReport message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.PullReport & atomic.PullReport.$Shape} PullReport
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.PullReport & atomic.PullReport.$Shape;

        /**
         * Decodes a PullReport message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.PullReport & atomic.PullReport.$Shape} PullReport
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.PullReport & atomic.PullReport.$Shape;

        /**
         * Verifies a PullReport message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PullReport message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PullReport
         */
        static fromObject(object: { [k: string]: any }): atomic.PullReport;

        /**
         * Creates a plain object from a PullReport message. Also converts values to other types if specified.
         * @param message PullReport
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.PullReport, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PullReport to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for PullReport
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace PullReport {

        /** Properties of a PullReport. */
        interface $Properties {

            /** PullReport remoteName */
            remoteName?: (string|null);

            /** PullReport remoteUrl */
            remoteUrl?: (string|null);

            /** PullReport remoteView */
            remoteView?: (string|null);

            /** PullReport localView */
            localView?: (string|null);

            /** PullReport localViewChanges */
            localViewChanges?: (number|Long|null);

            /** PullReport graphObjects */
            graphObjects?: (number|Long|null);

            /** PullReport remoteChanges */
            remoteChanges?: (number|Long|null);

            /** PullReport remoteState */
            remoteState?: (string|null);

            /** PullReport localOnly */
            localOnly?: (string[]|null);

            /** PullReport downloads */
            downloads?: (atomic.PullDownload.$Properties[]|null);

            /** PullReport changesDownloaded */
            changesDownloaded?: (number|Long|null);

            /** PullReport bytesTransferred */
            bytesTransferred?: (number|Long|null);

            /** PullReport applied */
            applied?: (boolean|null);

            /** PullReport appliedChanges */
            appliedChanges?: (number|Long|null);

            /** PullReport applyErrors */
            applyErrors?: (string[]|null);

            /** PullReport sidecars */
            sidecars?: (atomic.PullSidecar.$Properties[]|null);

            /** PullReport setIdVerified */
            setIdVerified?: (boolean|null);

            /** PullReport setIdWarning */
            setIdWarning?: (string|null);

            /** PullReport materialized */
            materialized?: (boolean|null);

            /** PullReport filesWritten */
            filesWritten?: (number|Long|null);

            /** PullReport materializeError */
            materializeError?: (string|null);

            /** PullReport tags */
            tags?: (atomic.PullTag.$Properties[]|null);

            /** PullReport warnings */
            warnings?: (atomic.PullWarning.$Properties[]|null);

            /** PullReport localTip */
            localTip?: (string|null);

            /** PullReport vaultBootstrapped */
            vaultBootstrapped?: (boolean|null);

            /** PullReport reconciledViews */
            reconciledViews?: (number|Long|null);

            /** PullReport downloadOnly */
            downloadOnly?: (boolean|null);

            /** PullReport changesFailed */
            changesFailed?: (number|Long|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a PullReport. */
        type $Shape = atomic.PullReport.$Properties;
    }

    /**
     * Properties of a PullDownload.
     * @deprecated Use atomic.PullDownload.$Properties instead.
     */
    interface IPullDownload extends atomic.PullDownload.$Properties {
    }

    /** Represents a PullDownload. */
    class PullDownload {

        /**
         * Constructs a new PullDownload.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.PullDownload.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** PullDownload hash. */
        hash?: (atomic.Hash.$Properties|null);

        /** PullDownload message. */
        message?: (string|null);

        /** PullDownload ok. */
        ok: boolean;

        /** PullDownload error. */
        error?: (string|null);

        /** PullDownload index. */
        index: (number|Long);

        /** PullDownload total. */
        total: (number|Long);

        /**
         * Creates a new PullDownload instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PullDownload instance
         */
        static create(properties: atomic.PullDownload.$Shape): atomic.PullDownload & atomic.PullDownload.$Shape;
        static create(properties?: atomic.PullDownload.$Properties): atomic.PullDownload;

        /**
         * Encodes the specified PullDownload message. Does not implicitly {@link atomic.PullDownload.verify|verify} messages.
         * @param message PullDownload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.PullDownload.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PullDownload message, length delimited. Does not implicitly {@link atomic.PullDownload.verify|verify} messages.
         * @param message PullDownload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.PullDownload.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PullDownload message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.PullDownload & atomic.PullDownload.$Shape} PullDownload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.PullDownload & atomic.PullDownload.$Shape;

        /**
         * Decodes a PullDownload message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.PullDownload & atomic.PullDownload.$Shape} PullDownload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.PullDownload & atomic.PullDownload.$Shape;

        /**
         * Verifies a PullDownload message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PullDownload message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PullDownload
         */
        static fromObject(object: { [k: string]: any }): atomic.PullDownload;

        /**
         * Creates a plain object from a PullDownload message. Also converts values to other types if specified.
         * @param message PullDownload
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.PullDownload, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PullDownload to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for PullDownload
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace PullDownload {

        /** Properties of a PullDownload. */
        interface $Properties {

            /** PullDownload hash */
            hash?: (atomic.Hash.$Properties|null);

            /** PullDownload message */
            message?: (string|null);

            /** PullDownload ok */
            ok?: (boolean|null);

            /** PullDownload error */
            error?: (string|null);

            /** PullDownload index */
            index?: (number|Long|null);

            /** PullDownload total */
            total?: (number|Long|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a PullDownload. */
        type $Shape = atomic.PullDownload.$Properties;
    }

    /**
     * Properties of a PullSidecar.
     * @deprecated Use atomic.PullSidecar.$Properties instead.
     */
    interface IPullSidecar extends atomic.PullSidecar.$Properties {
    }

    /** Represents a PullSidecar. */
    class PullSidecar {

        /**
         * Constructs a new PullSidecar.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.PullSidecar.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** PullSidecar kind. */
        kind: string;

        /** PullSidecar count. */
        count: (number|Long);

        /** PullSidecar detail. */
        detail?: (string|null);

        /**
         * Creates a new PullSidecar instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PullSidecar instance
         */
        static create(properties: atomic.PullSidecar.$Shape): atomic.PullSidecar & atomic.PullSidecar.$Shape;
        static create(properties?: atomic.PullSidecar.$Properties): atomic.PullSidecar;

        /**
         * Encodes the specified PullSidecar message. Does not implicitly {@link atomic.PullSidecar.verify|verify} messages.
         * @param message PullSidecar message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.PullSidecar.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PullSidecar message, length delimited. Does not implicitly {@link atomic.PullSidecar.verify|verify} messages.
         * @param message PullSidecar message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.PullSidecar.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PullSidecar message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.PullSidecar & atomic.PullSidecar.$Shape} PullSidecar
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.PullSidecar & atomic.PullSidecar.$Shape;

        /**
         * Decodes a PullSidecar message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.PullSidecar & atomic.PullSidecar.$Shape} PullSidecar
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.PullSidecar & atomic.PullSidecar.$Shape;

        /**
         * Verifies a PullSidecar message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PullSidecar message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PullSidecar
         */
        static fromObject(object: { [k: string]: any }): atomic.PullSidecar;

        /**
         * Creates a plain object from a PullSidecar message. Also converts values to other types if specified.
         * @param message PullSidecar
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.PullSidecar, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PullSidecar to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for PullSidecar
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace PullSidecar {

        /** Properties of a PullSidecar. */
        interface $Properties {

            /** PullSidecar kind */
            kind?: (string|null);

            /** PullSidecar count */
            count?: (number|Long|null);

            /** PullSidecar detail */
            detail?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a PullSidecar. */
        type $Shape = atomic.PullSidecar.$Properties;
    }

    /**
     * Properties of a PullTag.
     * @deprecated Use atomic.PullTag.$Properties instead.
     */
    interface IPullTag extends atomic.PullTag.$Properties {
    }

    /** Represents a PullTag. */
    class PullTag {

        /**
         * Constructs a new PullTag.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.PullTag.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** PullTag name. */
        name: string;

        /** PullTag kind. */
        kind: string;

        /**
         * Creates a new PullTag instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PullTag instance
         */
        static create(properties: atomic.PullTag.$Shape): atomic.PullTag & atomic.PullTag.$Shape;
        static create(properties?: atomic.PullTag.$Properties): atomic.PullTag;

        /**
         * Encodes the specified PullTag message. Does not implicitly {@link atomic.PullTag.verify|verify} messages.
         * @param message PullTag message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.PullTag.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PullTag message, length delimited. Does not implicitly {@link atomic.PullTag.verify|verify} messages.
         * @param message PullTag message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.PullTag.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PullTag message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.PullTag & atomic.PullTag.$Shape} PullTag
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.PullTag & atomic.PullTag.$Shape;

        /**
         * Decodes a PullTag message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.PullTag & atomic.PullTag.$Shape} PullTag
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.PullTag & atomic.PullTag.$Shape;

        /**
         * Verifies a PullTag message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PullTag message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PullTag
         */
        static fromObject(object: { [k: string]: any }): atomic.PullTag;

        /**
         * Creates a plain object from a PullTag message. Also converts values to other types if specified.
         * @param message PullTag
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.PullTag, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PullTag to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for PullTag
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace PullTag {

        /** Properties of a PullTag. */
        interface $Properties {

            /** PullTag name */
            name?: (string|null);

            /** PullTag kind */
            kind?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a PullTag. */
        type $Shape = atomic.PullTag.$Properties;
    }

    /**
     * Properties of a PullWarning.
     * @deprecated Use atomic.PullWarning.$Properties instead.
     */
    interface IPullWarning extends atomic.PullWarning.$Properties {
    }

    /** Represents a PullWarning. */
    class PullWarning {

        /**
         * Constructs a new PullWarning.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.PullWarning.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** PullWarning text. */
        text: string;

        /**
         * Creates a new PullWarning instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PullWarning instance
         */
        static create(properties: atomic.PullWarning.$Shape): atomic.PullWarning & atomic.PullWarning.$Shape;
        static create(properties?: atomic.PullWarning.$Properties): atomic.PullWarning;

        /**
         * Encodes the specified PullWarning message. Does not implicitly {@link atomic.PullWarning.verify|verify} messages.
         * @param message PullWarning message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.PullWarning.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PullWarning message, length delimited. Does not implicitly {@link atomic.PullWarning.verify|verify} messages.
         * @param message PullWarning message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.PullWarning.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PullWarning message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.PullWarning & atomic.PullWarning.$Shape} PullWarning
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.PullWarning & atomic.PullWarning.$Shape;

        /**
         * Decodes a PullWarning message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.PullWarning & atomic.PullWarning.$Shape} PullWarning
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.PullWarning & atomic.PullWarning.$Shape;

        /**
         * Verifies a PullWarning message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PullWarning message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PullWarning
         */
        static fromObject(object: { [k: string]: any }): atomic.PullWarning;

        /**
         * Creates a plain object from a PullWarning message. Also converts values to other types if specified.
         * @param message PullWarning
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.PullWarning, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PullWarning to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for PullWarning
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace PullWarning {

        /** Properties of a PullWarning. */
        interface $Properties {

            /** PullWarning text */
            text?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a PullWarning. */
        type $Shape = atomic.PullWarning.$Properties;
    }

    /**
     * Properties of a ListRemotesRequest.
     * @deprecated Use atomic.ListRemotesRequest.$Properties instead.
     */
    interface IListRemotesRequest extends atomic.ListRemotesRequest.$Properties {
    }

    /** Represents a ListRemotesRequest. */
    class ListRemotesRequest {

        /**
         * Constructs a new ListRemotesRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.ListRemotesRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ListRemotesRequest repository. */
        repository?: (atomic.RepositoryRef.$Properties|null);

        /**
         * Creates a new ListRemotesRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListRemotesRequest instance
         */
        static create(properties: atomic.ListRemotesRequest.$Shape): atomic.ListRemotesRequest & atomic.ListRemotesRequest.$Shape;
        static create(properties?: atomic.ListRemotesRequest.$Properties): atomic.ListRemotesRequest;

        /**
         * Encodes the specified ListRemotesRequest message. Does not implicitly {@link atomic.ListRemotesRequest.verify|verify} messages.
         * @param message ListRemotesRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.ListRemotesRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListRemotesRequest message, length delimited. Does not implicitly {@link atomic.ListRemotesRequest.verify|verify} messages.
         * @param message ListRemotesRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.ListRemotesRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListRemotesRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.ListRemotesRequest & atomic.ListRemotesRequest.$Shape} ListRemotesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.ListRemotesRequest & atomic.ListRemotesRequest.$Shape;

        /**
         * Decodes a ListRemotesRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.ListRemotesRequest & atomic.ListRemotesRequest.$Shape} ListRemotesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.ListRemotesRequest & atomic.ListRemotesRequest.$Shape;

        /**
         * Verifies a ListRemotesRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListRemotesRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListRemotesRequest
         */
        static fromObject(object: { [k: string]: any }): atomic.ListRemotesRequest;

        /**
         * Creates a plain object from a ListRemotesRequest message. Also converts values to other types if specified.
         * @param message ListRemotesRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.ListRemotesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListRemotesRequest to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ListRemotesRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ListRemotesRequest {

        /** Properties of a ListRemotesRequest. */
        interface $Properties {

            /** ListRemotesRequest repository */
            repository?: (atomic.RepositoryRef.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ListRemotesRequest. */
        type $Shape = atomic.ListRemotesRequest.$Properties;
    }

    /**
     * Properties of a ListRemotesResponse.
     * @deprecated Use atomic.ListRemotesResponse.$Properties instead.
     */
    interface IListRemotesResponse extends atomic.ListRemotesResponse.$Properties {
    }

    /** Represents a ListRemotesResponse. */
    class ListRemotesResponse {

        /**
         * Constructs a new ListRemotesResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.ListRemotesResponse.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ListRemotesResponse remotes. */
        remotes: atomic.RemoteInfo.$Properties[];

        /**
         * Creates a new ListRemotesResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListRemotesResponse instance
         */
        static create(properties: atomic.ListRemotesResponse.$Shape): atomic.ListRemotesResponse & atomic.ListRemotesResponse.$Shape;
        static create(properties?: atomic.ListRemotesResponse.$Properties): atomic.ListRemotesResponse;

        /**
         * Encodes the specified ListRemotesResponse message. Does not implicitly {@link atomic.ListRemotesResponse.verify|verify} messages.
         * @param message ListRemotesResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.ListRemotesResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListRemotesResponse message, length delimited. Does not implicitly {@link atomic.ListRemotesResponse.verify|verify} messages.
         * @param message ListRemotesResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.ListRemotesResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListRemotesResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.ListRemotesResponse & atomic.ListRemotesResponse.$Shape} ListRemotesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.ListRemotesResponse & atomic.ListRemotesResponse.$Shape;

        /**
         * Decodes a ListRemotesResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.ListRemotesResponse & atomic.ListRemotesResponse.$Shape} ListRemotesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.ListRemotesResponse & atomic.ListRemotesResponse.$Shape;

        /**
         * Verifies a ListRemotesResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListRemotesResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListRemotesResponse
         */
        static fromObject(object: { [k: string]: any }): atomic.ListRemotesResponse;

        /**
         * Creates a plain object from a ListRemotesResponse message. Also converts values to other types if specified.
         * @param message ListRemotesResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.ListRemotesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListRemotesResponse to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ListRemotesResponse
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ListRemotesResponse {

        /** Properties of a ListRemotesResponse. */
        interface $Properties {

            /** ListRemotesResponse remotes */
            remotes?: (atomic.RemoteInfo.$Properties[]|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ListRemotesResponse. */
        type $Shape = atomic.ListRemotesResponse.$Properties;
    }

    /**
     * Properties of a RemoteInfo.
     * @deprecated Use atomic.RemoteInfo.$Properties instead.
     */
    interface IRemoteInfo extends atomic.RemoteInfo.$Properties {
    }

    /** Represents a RemoteInfo. */
    class RemoteInfo {

        /**
         * Constructs a new RemoteInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.RemoteInfo.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** RemoteInfo name. */
        name: string;

        /** RemoteInfo url. */
        url: string;

        /** RemoteInfo default. */
        default: boolean;

        /**
         * Creates a new RemoteInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RemoteInfo instance
         */
        static create(properties: atomic.RemoteInfo.$Shape): atomic.RemoteInfo & atomic.RemoteInfo.$Shape;
        static create(properties?: atomic.RemoteInfo.$Properties): atomic.RemoteInfo;

        /**
         * Encodes the specified RemoteInfo message. Does not implicitly {@link atomic.RemoteInfo.verify|verify} messages.
         * @param message RemoteInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.RemoteInfo.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RemoteInfo message, length delimited. Does not implicitly {@link atomic.RemoteInfo.verify|verify} messages.
         * @param message RemoteInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.RemoteInfo.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RemoteInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.RemoteInfo & atomic.RemoteInfo.$Shape} RemoteInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.RemoteInfo & atomic.RemoteInfo.$Shape;

        /**
         * Decodes a RemoteInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.RemoteInfo & atomic.RemoteInfo.$Shape} RemoteInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.RemoteInfo & atomic.RemoteInfo.$Shape;

        /**
         * Verifies a RemoteInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RemoteInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RemoteInfo
         */
        static fromObject(object: { [k: string]: any }): atomic.RemoteInfo;

        /**
         * Creates a plain object from a RemoteInfo message. Also converts values to other types if specified.
         * @param message RemoteInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.RemoteInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RemoteInfo to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for RemoteInfo
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace RemoteInfo {

        /** Properties of a RemoteInfo. */
        interface $Properties {

            /** RemoteInfo name */
            name?: (string|null);

            /** RemoteInfo url */
            url?: (string|null);

            /** RemoteInfo default */
            "default"?: (boolean|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a RemoteInfo. */
        type $Shape = atomic.RemoteInfo.$Properties;
    }

    /**
     * Properties of a ManageRemotesRequest.
     * @deprecated Use atomic.ManageRemotesRequest.$Properties instead.
     */
    interface IManageRemotesRequest extends atomic.ManageRemotesRequest.$Properties {
    }

    /** Represents a ManageRemotesRequest. */
    class ManageRemotesRequest {

        /**
         * Constructs a new ManageRemotesRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.ManageRemotesRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ManageRemotesRequest repository. */
        repository?: (atomic.RepositoryRef.$Properties|null);

        /** ManageRemotesRequest meta. */
        meta?: (atomic.RequestMeta.$Properties|null);

        /** ManageRemotesRequest action. */
        action: atomic.RemoteAction;

        /** ManageRemotesRequest name. */
        name?: (string|null);

        /** ManageRemotesRequest url. */
        url?: (string|null);

        /** ManageRemotesRequest newName. */
        newName?: (string|null);

        /** ManageRemotesRequest setDefault. */
        setDefault: boolean;

        /**
         * Creates a new ManageRemotesRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ManageRemotesRequest instance
         */
        static create(properties: atomic.ManageRemotesRequest.$Shape): atomic.ManageRemotesRequest & atomic.ManageRemotesRequest.$Shape;
        static create(properties?: atomic.ManageRemotesRequest.$Properties): atomic.ManageRemotesRequest;

        /**
         * Encodes the specified ManageRemotesRequest message. Does not implicitly {@link atomic.ManageRemotesRequest.verify|verify} messages.
         * @param message ManageRemotesRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.ManageRemotesRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ManageRemotesRequest message, length delimited. Does not implicitly {@link atomic.ManageRemotesRequest.verify|verify} messages.
         * @param message ManageRemotesRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.ManageRemotesRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ManageRemotesRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.ManageRemotesRequest & atomic.ManageRemotesRequest.$Shape} ManageRemotesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.ManageRemotesRequest & atomic.ManageRemotesRequest.$Shape;

        /**
         * Decodes a ManageRemotesRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.ManageRemotesRequest & atomic.ManageRemotesRequest.$Shape} ManageRemotesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.ManageRemotesRequest & atomic.ManageRemotesRequest.$Shape;

        /**
         * Verifies a ManageRemotesRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ManageRemotesRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ManageRemotesRequest
         */
        static fromObject(object: { [k: string]: any }): atomic.ManageRemotesRequest;

        /**
         * Creates a plain object from a ManageRemotesRequest message. Also converts values to other types if specified.
         * @param message ManageRemotesRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.ManageRemotesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ManageRemotesRequest to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ManageRemotesRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ManageRemotesRequest {

        /** Properties of a ManageRemotesRequest. */
        interface $Properties {

            /** ManageRemotesRequest repository */
            repository?: (atomic.RepositoryRef.$Properties|null);

            /** ManageRemotesRequest meta */
            meta?: (atomic.RequestMeta.$Properties|null);

            /** ManageRemotesRequest action */
            action?: (atomic.RemoteAction|null);

            /** ManageRemotesRequest name */
            name?: (string|null);

            /** ManageRemotesRequest url */
            url?: (string|null);

            /** ManageRemotesRequest newName */
            newName?: (string|null);

            /** ManageRemotesRequest setDefault */
            setDefault?: (boolean|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ManageRemotesRequest. */
        type $Shape = atomic.ManageRemotesRequest.$Properties;
    }

    /** RemoteAction enum. */
    enum RemoteAction {

        /** REMOTE_ACTION_UNSPECIFIED value */
        REMOTE_ACTION_UNSPECIFIED = 0,

        /** REMOTE_ACTION_ADD value */
        REMOTE_ACTION_ADD = 1,

        /** REMOTE_ACTION_REMOVE value */
        REMOTE_ACTION_REMOVE = 2,

        /** REMOTE_ACTION_RENAME value */
        REMOTE_ACTION_RENAME = 3,

        /** REMOTE_ACTION_SET_URL value */
        REMOTE_ACTION_SET_URL = 4,

        /** REMOTE_ACTION_SET_DEFAULT value */
        REMOTE_ACTION_SET_DEFAULT = 5
    }

    /**
     * Properties of a ManageRemotesResponse.
     * @deprecated Use atomic.ManageRemotesResponse.$Properties instead.
     */
    interface IManageRemotesResponse extends atomic.ManageRemotesResponse.$Properties {
    }

    /** Represents a ManageRemotesResponse. */
    class ManageRemotesResponse {

        /**
         * Constructs a new ManageRemotesResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.ManageRemotesResponse.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ManageRemotesResponse remotes. */
        remotes: atomic.RemoteInfo.$Properties[];

        /** ManageRemotesResponse meta. */
        meta?: (atomic.ResponseMeta.$Properties|null);

        /**
         * Creates a new ManageRemotesResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ManageRemotesResponse instance
         */
        static create(properties: atomic.ManageRemotesResponse.$Shape): atomic.ManageRemotesResponse & atomic.ManageRemotesResponse.$Shape;
        static create(properties?: atomic.ManageRemotesResponse.$Properties): atomic.ManageRemotesResponse;

        /**
         * Encodes the specified ManageRemotesResponse message. Does not implicitly {@link atomic.ManageRemotesResponse.verify|verify} messages.
         * @param message ManageRemotesResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.ManageRemotesResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ManageRemotesResponse message, length delimited. Does not implicitly {@link atomic.ManageRemotesResponse.verify|verify} messages.
         * @param message ManageRemotesResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.ManageRemotesResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ManageRemotesResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.ManageRemotesResponse & atomic.ManageRemotesResponse.$Shape} ManageRemotesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.ManageRemotesResponse & atomic.ManageRemotesResponse.$Shape;

        /**
         * Decodes a ManageRemotesResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.ManageRemotesResponse & atomic.ManageRemotesResponse.$Shape} ManageRemotesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.ManageRemotesResponse & atomic.ManageRemotesResponse.$Shape;

        /**
         * Verifies a ManageRemotesResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ManageRemotesResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ManageRemotesResponse
         */
        static fromObject(object: { [k: string]: any }): atomic.ManageRemotesResponse;

        /**
         * Creates a plain object from a ManageRemotesResponse message. Also converts values to other types if specified.
         * @param message ManageRemotesResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.ManageRemotesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ManageRemotesResponse to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ManageRemotesResponse
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ManageRemotesResponse {

        /** Properties of a ManageRemotesResponse. */
        interface $Properties {

            /** ManageRemotesResponse remotes */
            remotes?: (atomic.RemoteInfo.$Properties[]|null);

            /** ManageRemotesResponse meta */
            meta?: (atomic.ResponseMeta.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ManageRemotesResponse. */
        type $Shape = atomic.ManageRemotesResponse.$Properties;
    }

    /**
     * Properties of an InsertChangesRequest.
     * @deprecated Use atomic.InsertChangesRequest.$Properties instead.
     */
    interface IInsertChangesRequest extends atomic.InsertChangesRequest.$Properties {
    }

    /** Represents an InsertChangesRequest. */
    class InsertChangesRequest {

        /**
         * Constructs a new InsertChangesRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.InsertChangesRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** InsertChangesRequest repository. */
        repository?: (atomic.RepositoryRef.$Properties|null);

        /** InsertChangesRequest meta. */
        meta?: (atomic.RequestMeta.$Properties|null);

        /** InsertChangesRequest singleChange. */
        singleChange?: (atomic.Hash.$Properties|null);

        /** InsertChangesRequest fromView. */
        fromView?: (string|null);

        /** InsertChangesRequest upToTag. */
        upToTag?: (string|null);

        /** InsertChangesRequest promoteCurrentView. */
        promoteCurrentView?: (atomic.PromoteCurrentView.$Properties|null);

        /** InsertChangesRequest changeSet. */
        changeSet?: (atomic.ChangeSet.$Properties|null);

        /** InsertChangesRequest singleRef. */
        singleRef?: (string|null);

        /** InsertChangesRequest targetView. */
        targetView?: (string|null);

        /** InsertChangesRequest allowConflicts. */
        allowConflicts: boolean;

        /** InsertChangesRequest target. */
        target?: (atomic.ViewRef.$Properties|null);

        /** InsertChangesRequest expectedSnapshot. */
        expectedSnapshot?: (atomic.ViewSnapshot.$Properties|null);

        /** InsertChangesRequest sourceSnapshot. */
        sourceSnapshot?: (atomic.ViewSnapshot.$Properties|null);

        /** InsertChangesRequest applyDependencies. */
        applyDependencies?: (boolean|null);

        /** InsertChangesRequest dryRun. */
        dryRun?: (boolean|null);

        /** InsertChangesRequest tagFromView. */
        tagFromView?: (string|null);

        /** InsertChangesRequest source. */
        source?: ("singleChange"|"fromView"|"upToTag"|"promoteCurrentView"|"changeSet"|"singleRef");

        /**
         * Creates a new InsertChangesRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns InsertChangesRequest instance
         */
        static create(properties: atomic.InsertChangesRequest.$Shape): atomic.InsertChangesRequest & atomic.InsertChangesRequest.$Shape;
        static create(properties?: atomic.InsertChangesRequest.$Properties): atomic.InsertChangesRequest;

        /**
         * Encodes the specified InsertChangesRequest message. Does not implicitly {@link atomic.InsertChangesRequest.verify|verify} messages.
         * @param message InsertChangesRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.InsertChangesRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified InsertChangesRequest message, length delimited. Does not implicitly {@link atomic.InsertChangesRequest.verify|verify} messages.
         * @param message InsertChangesRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.InsertChangesRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an InsertChangesRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.InsertChangesRequest & atomic.InsertChangesRequest.$Shape} InsertChangesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.InsertChangesRequest & atomic.InsertChangesRequest.$Shape;

        /**
         * Decodes an InsertChangesRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.InsertChangesRequest & atomic.InsertChangesRequest.$Shape} InsertChangesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.InsertChangesRequest & atomic.InsertChangesRequest.$Shape;

        /**
         * Verifies an InsertChangesRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an InsertChangesRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns InsertChangesRequest
         */
        static fromObject(object: { [k: string]: any }): atomic.InsertChangesRequest;

        /**
         * Creates a plain object from an InsertChangesRequest message. Also converts values to other types if specified.
         * @param message InsertChangesRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.InsertChangesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this InsertChangesRequest to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for InsertChangesRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace InsertChangesRequest {

        /** Properties of an InsertChangesRequest. */
        interface $Properties {

            /** InsertChangesRequest repository */
            repository?: (atomic.RepositoryRef.$Properties|null);

            /** InsertChangesRequest meta */
            meta?: (atomic.RequestMeta.$Properties|null);

            /** InsertChangesRequest singleChange */
            singleChange?: (atomic.Hash.$Properties|null);

            /** InsertChangesRequest fromView */
            fromView?: (string|null);

            /** InsertChangesRequest upToTag */
            upToTag?: (string|null);

            /** InsertChangesRequest promoteCurrentView */
            promoteCurrentView?: (atomic.PromoteCurrentView.$Properties|null);

            /** InsertChangesRequest changeSet */
            changeSet?: (atomic.ChangeSet.$Properties|null);

            /** InsertChangesRequest singleRef */
            singleRef?: (string|null);

            /** InsertChangesRequest targetView */
            targetView?: (string|null);

            /** InsertChangesRequest allowConflicts */
            allowConflicts?: (boolean|null);

            /** InsertChangesRequest target */
            target?: (atomic.ViewRef.$Properties|null);

            /** InsertChangesRequest expectedSnapshot */
            expectedSnapshot?: (atomic.ViewSnapshot.$Properties|null);

            /** InsertChangesRequest sourceSnapshot */
            sourceSnapshot?: (atomic.ViewSnapshot.$Properties|null);

            /** InsertChangesRequest applyDependencies */
            applyDependencies?: (boolean|null);

            /** InsertChangesRequest dryRun */
            dryRun?: (boolean|null);

            /** InsertChangesRequest tagFromView */
            tagFromView?: (string|null);

            /** InsertChangesRequest source */
            source?: ("singleChange"|"fromView"|"upToTag"|"promoteCurrentView"|"changeSet"|"singleRef");

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Narrowed shape of an InsertChangesRequest. */
        type $Shape = {
          repository?: atomic.RepositoryRef.$Shape|null;
          meta?: atomic.RequestMeta.$Shape|null;
          singleChange?: atomic.Hash.$Shape|null;
          fromView?: string|null;
          upToTag?: string|null;
          promoteCurrentView?: atomic.PromoteCurrentView.$Shape|null;
          changeSet?: atomic.ChangeSet.$Shape|null;
          singleRef?: string|null;
          targetView?: string|null;
          allowConflicts?: boolean|null;
          target?: atomic.ViewRef.$Shape|null;
          expectedSnapshot?: atomic.ViewSnapshot.$Shape|null;
          sourceSnapshot?: atomic.ViewSnapshot.$Shape|null;
          applyDependencies?: boolean|null;
          dryRun?: boolean|null;
          tagFromView?: string|null;
          $unknowns?: Uint8Array[];
        } & (
          ({ source?: undefined; singleChange?: null; fromView?: null; upToTag?: null; promoteCurrentView?: null; changeSet?: null; singleRef?: null }|{ source?: "singleChange"; singleChange: atomic.Hash.$Shape; fromView?: null; upToTag?: null; promoteCurrentView?: null; changeSet?: null; singleRef?: null }|{ source?: "fromView"; singleChange?: null; fromView: string; upToTag?: null; promoteCurrentView?: null; changeSet?: null; singleRef?: null }|{ source?: "upToTag"; singleChange?: null; fromView?: null; upToTag: string; promoteCurrentView?: null; changeSet?: null; singleRef?: null }|{ source?: "promoteCurrentView"; singleChange?: null; fromView?: null; upToTag?: null; promoteCurrentView: atomic.PromoteCurrentView.$Shape; changeSet?: null; singleRef?: null }|{ source?: "changeSet"; singleChange?: null; fromView?: null; upToTag?: null; promoteCurrentView?: null; changeSet: atomic.ChangeSet.$Shape; singleRef?: null }|{ source?: "singleRef"; singleChange?: null; fromView?: null; upToTag?: null; promoteCurrentView?: null; changeSet?: null; singleRef: string })
        );
    }

    /**
     * Properties of a PromoteCurrentView.
     * @deprecated Use atomic.PromoteCurrentView.$Properties instead.
     */
    interface IPromoteCurrentView extends atomic.PromoteCurrentView.$Properties {
    }

    /** Represents a PromoteCurrentView. */
    class PromoteCurrentView {

        /**
         * Constructs a new PromoteCurrentView.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.PromoteCurrentView.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /**
         * Creates a new PromoteCurrentView instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PromoteCurrentView instance
         */
        static create(properties: atomic.PromoteCurrentView.$Shape): atomic.PromoteCurrentView & atomic.PromoteCurrentView.$Shape;
        static create(properties?: atomic.PromoteCurrentView.$Properties): atomic.PromoteCurrentView;

        /**
         * Encodes the specified PromoteCurrentView message. Does not implicitly {@link atomic.PromoteCurrentView.verify|verify} messages.
         * @param message PromoteCurrentView message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.PromoteCurrentView.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PromoteCurrentView message, length delimited. Does not implicitly {@link atomic.PromoteCurrentView.verify|verify} messages.
         * @param message PromoteCurrentView message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.PromoteCurrentView.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PromoteCurrentView message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.PromoteCurrentView & atomic.PromoteCurrentView.$Shape} PromoteCurrentView
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.PromoteCurrentView & atomic.PromoteCurrentView.$Shape;

        /**
         * Decodes a PromoteCurrentView message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.PromoteCurrentView & atomic.PromoteCurrentView.$Shape} PromoteCurrentView
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.PromoteCurrentView & atomic.PromoteCurrentView.$Shape;

        /**
         * Verifies a PromoteCurrentView message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PromoteCurrentView message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PromoteCurrentView
         */
        static fromObject(object: { [k: string]: any }): atomic.PromoteCurrentView;

        /**
         * Creates a plain object from a PromoteCurrentView message. Also converts values to other types if specified.
         * @param message PromoteCurrentView
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.PromoteCurrentView, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PromoteCurrentView to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for PromoteCurrentView
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace PromoteCurrentView {

        /** Properties of a PromoteCurrentView. */
        interface $Properties {

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a PromoteCurrentView. */
        type $Shape = atomic.PromoteCurrentView.$Properties;
    }

    /**
     * Properties of a ChangeSet.
     * @deprecated Use atomic.ChangeSet.$Properties instead.
     */
    interface IChangeSet extends atomic.ChangeSet.$Properties {
    }

    /** Represents a ChangeSet. */
    class ChangeSet {

        /**
         * Constructs a new ChangeSet.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.ChangeSet.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ChangeSet changes. */
        changes: string[];

        /**
         * Creates a new ChangeSet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChangeSet instance
         */
        static create(properties: atomic.ChangeSet.$Shape): atomic.ChangeSet & atomic.ChangeSet.$Shape;
        static create(properties?: atomic.ChangeSet.$Properties): atomic.ChangeSet;

        /**
         * Encodes the specified ChangeSet message. Does not implicitly {@link atomic.ChangeSet.verify|verify} messages.
         * @param message ChangeSet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.ChangeSet.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChangeSet message, length delimited. Does not implicitly {@link atomic.ChangeSet.verify|verify} messages.
         * @param message ChangeSet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.ChangeSet.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChangeSet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.ChangeSet & atomic.ChangeSet.$Shape} ChangeSet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.ChangeSet & atomic.ChangeSet.$Shape;

        /**
         * Decodes a ChangeSet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.ChangeSet & atomic.ChangeSet.$Shape} ChangeSet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.ChangeSet & atomic.ChangeSet.$Shape;

        /**
         * Verifies a ChangeSet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChangeSet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChangeSet
         */
        static fromObject(object: { [k: string]: any }): atomic.ChangeSet;

        /**
         * Creates a plain object from a ChangeSet message. Also converts values to other types if specified.
         * @param message ChangeSet
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.ChangeSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChangeSet to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ChangeSet
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ChangeSet {

        /** Properties of a ChangeSet. */
        interface $Properties {

            /** ChangeSet changes */
            changes?: (string[]|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ChangeSet. */
        type $Shape = atomic.ChangeSet.$Properties;
    }

    /**
     * Properties of an InsertChangesResponse.
     * @deprecated Use atomic.InsertChangesResponse.$Properties instead.
     */
    interface IInsertChangesResponse extends atomic.InsertChangesResponse.$Properties {
    }

    /** Represents an InsertChangesResponse. */
    class InsertChangesResponse {

        /**
         * Constructs a new InsertChangesResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.InsertChangesResponse.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** InsertChangesResponse inserted. */
        inserted: atomic.ChangeInfo.$Properties[];

        /** InsertChangesResponse conflicts. */
        conflicts: atomic.ConflictInfo.$Properties[];

        /** InsertChangesResponse resolvedSourceView. */
        resolvedSourceView?: (string|null);

        /** InsertChangesResponse resolvedTargetView. */
        resolvedTargetView?: (string|null);

        /** InsertChangesResponse bothViewsShared. */
        bothViewsShared?: (boolean|null);

        /** InsertChangesResponse resolvedChange. */
        resolvedChange?: (atomic.Hash.$Properties|null);

        /** InsertChangesResponse newState. */
        newState?: (atomic.Hash.$Properties|null);

        /** InsertChangesResponse skippedCount. */
        skippedCount: number;

        /** InsertChangesResponse filesUpdated. */
        filesUpdated?: (number|Long|null);

        /** InsertChangesResponse directoriesCreated. */
        directoriesCreated?: (number|Long|null);

        /** InsertChangesResponse hasConflicts. */
        hasConflicts: boolean;

        /** InsertChangesResponse meta. */
        meta?: (atomic.ResponseMeta.$Properties|null);

        /**
         * Creates a new InsertChangesResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns InsertChangesResponse instance
         */
        static create(properties: atomic.InsertChangesResponse.$Shape): atomic.InsertChangesResponse & atomic.InsertChangesResponse.$Shape;
        static create(properties?: atomic.InsertChangesResponse.$Properties): atomic.InsertChangesResponse;

        /**
         * Encodes the specified InsertChangesResponse message. Does not implicitly {@link atomic.InsertChangesResponse.verify|verify} messages.
         * @param message InsertChangesResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.InsertChangesResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified InsertChangesResponse message, length delimited. Does not implicitly {@link atomic.InsertChangesResponse.verify|verify} messages.
         * @param message InsertChangesResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.InsertChangesResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an InsertChangesResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.InsertChangesResponse & atomic.InsertChangesResponse.$Shape} InsertChangesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.InsertChangesResponse & atomic.InsertChangesResponse.$Shape;

        /**
         * Decodes an InsertChangesResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.InsertChangesResponse & atomic.InsertChangesResponse.$Shape} InsertChangesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.InsertChangesResponse & atomic.InsertChangesResponse.$Shape;

        /**
         * Verifies an InsertChangesResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an InsertChangesResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns InsertChangesResponse
         */
        static fromObject(object: { [k: string]: any }): atomic.InsertChangesResponse;

        /**
         * Creates a plain object from an InsertChangesResponse message. Also converts values to other types if specified.
         * @param message InsertChangesResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.InsertChangesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this InsertChangesResponse to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for InsertChangesResponse
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace InsertChangesResponse {

        /** Properties of an InsertChangesResponse. */
        interface $Properties {

            /** InsertChangesResponse inserted */
            inserted?: (atomic.ChangeInfo.$Properties[]|null);

            /** InsertChangesResponse conflicts */
            conflicts?: (atomic.ConflictInfo.$Properties[]|null);

            /** InsertChangesResponse resolvedSourceView */
            resolvedSourceView?: (string|null);

            /** InsertChangesResponse resolvedTargetView */
            resolvedTargetView?: (string|null);

            /** InsertChangesResponse bothViewsShared */
            bothViewsShared?: (boolean|null);

            /** InsertChangesResponse resolvedChange */
            resolvedChange?: (atomic.Hash.$Properties|null);

            /** InsertChangesResponse newState */
            newState?: (atomic.Hash.$Properties|null);

            /** InsertChangesResponse skippedCount */
            skippedCount?: (number|null);

            /** InsertChangesResponse filesUpdated */
            filesUpdated?: (number|Long|null);

            /** InsertChangesResponse directoriesCreated */
            directoriesCreated?: (number|Long|null);

            /** InsertChangesResponse hasConflicts */
            hasConflicts?: (boolean|null);

            /** InsertChangesResponse meta */
            meta?: (atomic.ResponseMeta.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of an InsertChangesResponse. */
        type $Shape = atomic.InsertChangesResponse.$Properties;
    }

    /**
     * Properties of a GetVaultEntryRequest.
     * @deprecated Use atomic.GetVaultEntryRequest.$Properties instead.
     */
    interface IGetVaultEntryRequest extends atomic.GetVaultEntryRequest.$Properties {
    }

    /** Represents a GetVaultEntryRequest. */
    class GetVaultEntryRequest {

        /**
         * Constructs a new GetVaultEntryRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.GetVaultEntryRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** GetVaultEntryRequest repository. */
        repository?: (atomic.RepositoryRef.$Properties|null);

        /** GetVaultEntryRequest kind. */
        kind: atomic.VaultEntityKind;

        /** GetVaultEntryRequest id. */
        id: string;

        /** GetVaultEntryRequest path. */
        path?: (string|null);

        /** GetVaultEntryRequest includeBundle. */
        includeBundle: boolean;

        /** GetVaultEntryRequest view. */
        view?: (atomic.ViewRef.$Properties|null);

        /**
         * Creates a new GetVaultEntryRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetVaultEntryRequest instance
         */
        static create(properties: atomic.GetVaultEntryRequest.$Shape): atomic.GetVaultEntryRequest & atomic.GetVaultEntryRequest.$Shape;
        static create(properties?: atomic.GetVaultEntryRequest.$Properties): atomic.GetVaultEntryRequest;

        /**
         * Encodes the specified GetVaultEntryRequest message. Does not implicitly {@link atomic.GetVaultEntryRequest.verify|verify} messages.
         * @param message GetVaultEntryRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.GetVaultEntryRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetVaultEntryRequest message, length delimited. Does not implicitly {@link atomic.GetVaultEntryRequest.verify|verify} messages.
         * @param message GetVaultEntryRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.GetVaultEntryRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetVaultEntryRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.GetVaultEntryRequest & atomic.GetVaultEntryRequest.$Shape} GetVaultEntryRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.GetVaultEntryRequest & atomic.GetVaultEntryRequest.$Shape;

        /**
         * Decodes a GetVaultEntryRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.GetVaultEntryRequest & atomic.GetVaultEntryRequest.$Shape} GetVaultEntryRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.GetVaultEntryRequest & atomic.GetVaultEntryRequest.$Shape;

        /**
         * Verifies a GetVaultEntryRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetVaultEntryRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetVaultEntryRequest
         */
        static fromObject(object: { [k: string]: any }): atomic.GetVaultEntryRequest;

        /**
         * Creates a plain object from a GetVaultEntryRequest message. Also converts values to other types if specified.
         * @param message GetVaultEntryRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.GetVaultEntryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetVaultEntryRequest to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for GetVaultEntryRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace GetVaultEntryRequest {

        /** Properties of a GetVaultEntryRequest. */
        interface $Properties {

            /** GetVaultEntryRequest repository */
            repository?: (atomic.RepositoryRef.$Properties|null);

            /** GetVaultEntryRequest kind */
            kind?: (atomic.VaultEntityKind|null);

            /** GetVaultEntryRequest id */
            id?: (string|null);

            /** GetVaultEntryRequest path */
            path?: (string|null);

            /** GetVaultEntryRequest includeBundle */
            includeBundle?: (boolean|null);

            /** GetVaultEntryRequest view */
            view?: (atomic.ViewRef.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a GetVaultEntryRequest. */
        type $Shape = atomic.GetVaultEntryRequest.$Properties;
    }

    /** VaultEntityKind enum. */
    enum VaultEntityKind {

        /** VAULT_ENTITY_KIND_UNSPECIFIED value */
        VAULT_ENTITY_KIND_UNSPECIFIED = 0,

        /** VAULT_ENTITY_KIND_INTENT value */
        VAULT_ENTITY_KIND_INTENT = 1,

        /** VAULT_ENTITY_KIND_MEMORY value */
        VAULT_ENTITY_KIND_MEMORY = 2,

        /** VAULT_ENTITY_KIND_GOAL value */
        VAULT_ENTITY_KIND_GOAL = 3
    }

    /**
     * Properties of a GetVaultEntryResponse.
     * @deprecated Use atomic.GetVaultEntryResponse.$Properties instead.
     */
    interface IGetVaultEntryResponse extends atomic.GetVaultEntryResponse.$Properties {
    }

    /** Represents a GetVaultEntryResponse. */
    class GetVaultEntryResponse {

        /**
         * Constructs a new GetVaultEntryResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.GetVaultEntryResponse.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** GetVaultEntryResponse entry. */
        entry?: (atomic.VaultEntry.$Properties|null);

        /** GetVaultEntryResponse snapshot. */
        snapshot?: (atomic.ViewSnapshot.$Properties|null);

        /** GetVaultEntryResponse entryBundle. */
        entryBundle?: (atomic.VersionedBytes.$Properties|null);

        /**
         * Creates a new GetVaultEntryResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetVaultEntryResponse instance
         */
        static create(properties: atomic.GetVaultEntryResponse.$Shape): atomic.GetVaultEntryResponse & atomic.GetVaultEntryResponse.$Shape;
        static create(properties?: atomic.GetVaultEntryResponse.$Properties): atomic.GetVaultEntryResponse;

        /**
         * Encodes the specified GetVaultEntryResponse message. Does not implicitly {@link atomic.GetVaultEntryResponse.verify|verify} messages.
         * @param message GetVaultEntryResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.GetVaultEntryResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetVaultEntryResponse message, length delimited. Does not implicitly {@link atomic.GetVaultEntryResponse.verify|verify} messages.
         * @param message GetVaultEntryResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.GetVaultEntryResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetVaultEntryResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.GetVaultEntryResponse & atomic.GetVaultEntryResponse.$Shape} GetVaultEntryResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.GetVaultEntryResponse & atomic.GetVaultEntryResponse.$Shape;

        /**
         * Decodes a GetVaultEntryResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.GetVaultEntryResponse & atomic.GetVaultEntryResponse.$Shape} GetVaultEntryResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.GetVaultEntryResponse & atomic.GetVaultEntryResponse.$Shape;

        /**
         * Verifies a GetVaultEntryResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetVaultEntryResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetVaultEntryResponse
         */
        static fromObject(object: { [k: string]: any }): atomic.GetVaultEntryResponse;

        /**
         * Creates a plain object from a GetVaultEntryResponse message. Also converts values to other types if specified.
         * @param message GetVaultEntryResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.GetVaultEntryResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetVaultEntryResponse to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for GetVaultEntryResponse
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace GetVaultEntryResponse {

        /** Properties of a GetVaultEntryResponse. */
        interface $Properties {

            /** GetVaultEntryResponse entry */
            entry?: (atomic.VaultEntry.$Properties|null);

            /** GetVaultEntryResponse snapshot */
            snapshot?: (atomic.ViewSnapshot.$Properties|null);

            /** GetVaultEntryResponse entryBundle */
            entryBundle?: (atomic.VersionedBytes.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a GetVaultEntryResponse. */
        type $Shape = atomic.GetVaultEntryResponse.$Properties;
    }

    /**
     * Properties of a VaultEntry.
     * @deprecated Use atomic.VaultEntry.$Properties instead.
     */
    interface IVaultEntry extends atomic.VaultEntry.$Properties {
    }

    /** Represents a VaultEntry. */
    class VaultEntry {

        /**
         * Constructs a new VaultEntry.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.VaultEntry.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** VaultEntry kind. */
        kind: atomic.VaultEntityKind;

        /** VaultEntry id. */
        id: string;

        /** VaultEntry title. */
        title: string;

        /** VaultEntry status. */
        status?: (atomic.VaultEntityStatus|null);

        /** VaultEntry body. */
        body?: (string|null);

        /** VaultEntry createdAt. */
        createdAt?: (google.protobuf.Timestamp.$Properties|null);

        /** VaultEntry updatedAt. */
        updatedAt?: (google.protobuf.Timestamp.$Properties|null);

        /** VaultEntry linked. */
        linked: string[];

        /** VaultEntry vaultPath. */
        vaultPath?: (string|null);

        /** VaultEntry priority. */
        priority?: (string|null);

        /** VaultEntry manifestKind. */
        manifestKind?: (string|null);

        /** VaultEntry attested. */
        attested?: (string|null);

        /** VaultEntry verifies. */
        verifies?: (string|null);

        /** VaultEntry memoryKind. */
        memoryKind?: (string|null);

        /** VaultEntry memoryStatus. */
        memoryStatus?: (string|null);

        /** VaultEntry aboutCount. */
        aboutCount?: (number|null);

        /** VaultEntry contentSize. */
        contentSize?: (number|Long|null);

        /** VaultEntry updatedAtLabel. */
        updatedAtLabel?: (string|null);

        /** VaultEntry entryType. */
        entryType?: (string|null);

        /** VaultEntry startedAt. */
        startedAt?: (string|null);

        /** VaultEntry turns. */
        turns?: (number|null);

        /** VaultEntry assignee. */
        assignee?: (string|null);

        /** VaultEntry statusLabel. */
        statusLabel?: (string|null);

        /** VaultEntry developer. */
        developer?: (string|null);

        /** VaultEntry goalDir. */
        goalDir?: (string|null);

        /** VaultEntry goalFile. */
        goalFile?: (string|null);

        /**
         * Creates a new VaultEntry instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VaultEntry instance
         */
        static create(properties: atomic.VaultEntry.$Shape): atomic.VaultEntry & atomic.VaultEntry.$Shape;
        static create(properties?: atomic.VaultEntry.$Properties): atomic.VaultEntry;

        /**
         * Encodes the specified VaultEntry message. Does not implicitly {@link atomic.VaultEntry.verify|verify} messages.
         * @param message VaultEntry message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.VaultEntry.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VaultEntry message, length delimited. Does not implicitly {@link atomic.VaultEntry.verify|verify} messages.
         * @param message VaultEntry message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.VaultEntry.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VaultEntry message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.VaultEntry & atomic.VaultEntry.$Shape} VaultEntry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.VaultEntry & atomic.VaultEntry.$Shape;

        /**
         * Decodes a VaultEntry message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.VaultEntry & atomic.VaultEntry.$Shape} VaultEntry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.VaultEntry & atomic.VaultEntry.$Shape;

        /**
         * Verifies a VaultEntry message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VaultEntry message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VaultEntry
         */
        static fromObject(object: { [k: string]: any }): atomic.VaultEntry;

        /**
         * Creates a plain object from a VaultEntry message. Also converts values to other types if specified.
         * @param message VaultEntry
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.VaultEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VaultEntry to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for VaultEntry
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace VaultEntry {

        /** Properties of a VaultEntry. */
        interface $Properties {

            /** VaultEntry kind */
            kind?: (atomic.VaultEntityKind|null);

            /** VaultEntry id */
            id?: (string|null);

            /** VaultEntry title */
            title?: (string|null);

            /** VaultEntry status */
            status?: (atomic.VaultEntityStatus|null);

            /** VaultEntry body */
            body?: (string|null);

            /** VaultEntry createdAt */
            createdAt?: (google.protobuf.Timestamp.$Properties|null);

            /** VaultEntry updatedAt */
            updatedAt?: (google.protobuf.Timestamp.$Properties|null);

            /** VaultEntry linked */
            linked?: (string[]|null);

            /** VaultEntry vaultPath */
            vaultPath?: (string|null);

            /** VaultEntry priority */
            priority?: (string|null);

            /** VaultEntry manifestKind */
            manifestKind?: (string|null);

            /** VaultEntry attested */
            attested?: (string|null);

            /** VaultEntry verifies */
            verifies?: (string|null);

            /** VaultEntry memoryKind */
            memoryKind?: (string|null);

            /** VaultEntry memoryStatus */
            memoryStatus?: (string|null);

            /** VaultEntry aboutCount */
            aboutCount?: (number|null);

            /** VaultEntry contentSize */
            contentSize?: (number|Long|null);

            /** VaultEntry updatedAtLabel */
            updatedAtLabel?: (string|null);

            /** VaultEntry entryType */
            entryType?: (string|null);

            /** VaultEntry startedAt */
            startedAt?: (string|null);

            /** VaultEntry turns */
            turns?: (number|null);

            /** VaultEntry assignee */
            assignee?: (string|null);

            /** VaultEntry statusLabel */
            statusLabel?: (string|null);

            /** VaultEntry developer */
            developer?: (string|null);

            /** VaultEntry goalDir */
            goalDir?: (string|null);

            /** VaultEntry goalFile */
            goalFile?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a VaultEntry. */
        type $Shape = atomic.VaultEntry.$Properties;
    }

    /** VaultEntityStatus enum. */
    enum VaultEntityStatus {

        /** VAULT_ENTITY_STATUS_UNSPECIFIED value */
        VAULT_ENTITY_STATUS_UNSPECIFIED = 0,

        /** VAULT_ENTITY_STATUS_BACKLOG value */
        VAULT_ENTITY_STATUS_BACKLOG = 1,

        /** VAULT_ENTITY_STATUS_IN_PROGRESS value */
        VAULT_ENTITY_STATUS_IN_PROGRESS = 2,

        /** VAULT_ENTITY_STATUS_NEEDS_REVIEW value */
        VAULT_ENTITY_STATUS_NEEDS_REVIEW = 3,

        /** VAULT_ENTITY_STATUS_PLANNED value */
        VAULT_ENTITY_STATUS_PLANNED = 4,

        /** VAULT_ENTITY_STATUS_DONE value */
        VAULT_ENTITY_STATUS_DONE = 5,

        /** VAULT_ENTITY_STATUS_ACTIVE value */
        VAULT_ENTITY_STATUS_ACTIVE = 6,

        /** VAULT_ENTITY_STATUS_SUSPENDED value */
        VAULT_ENTITY_STATUS_SUSPENDED = 7,

        /** VAULT_ENTITY_STATUS_COMPLETED value */
        VAULT_ENTITY_STATUS_COMPLETED = 8,

        /** VAULT_ENTITY_STATUS_SUPERSEDED value */
        VAULT_ENTITY_STATUS_SUPERSEDED = 9,

        /** VAULT_ENTITY_STATUS_RETRACTED value */
        VAULT_ENTITY_STATUS_RETRACTED = 10
    }

    /**
     * Properties of a ListVaultEntriesRequest.
     * @deprecated Use atomic.ListVaultEntriesRequest.$Properties instead.
     */
    interface IListVaultEntriesRequest extends atomic.ListVaultEntriesRequest.$Properties {
    }

    /** Represents a ListVaultEntriesRequest. */
    class ListVaultEntriesRequest {

        /**
         * Constructs a new ListVaultEntriesRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.ListVaultEntriesRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ListVaultEntriesRequest repository. */
        repository?: (atomic.RepositoryRef.$Properties|null);

        /** ListVaultEntriesRequest kind. */
        kind?: (atomic.VaultEntityKind|null);

        /** ListVaultEntriesRequest status. */
        status?: (atomic.VaultEntityStatus|null);

        /** ListVaultEntriesRequest summariesOnly. */
        summariesOnly: boolean;

        /** ListVaultEntriesRequest cursor. */
        cursor?: (atomic.PageCursor.$Properties|null);

        /** ListVaultEntriesRequest budget. */
        budget?: (atomic.PageBudget.$Properties|null);

        /** ListVaultEntriesRequest identity. */
        identity?: (string|null);

        /** ListVaultEntriesRequest pathPrefix. */
        pathPrefix?: (string|null);

        /** ListVaultEntriesRequest entryType. */
        entryType?: (string|null);

        /** ListVaultEntriesRequest statusFilter. */
        statusFilter?: (string|null);

        /** ListVaultEntriesRequest toolResultPreviews. */
        toolResultPreviews: boolean;

        /** ListVaultEntriesRequest sort. */
        sort?: (atomic.VaultListSort|null);

        /** ListVaultEntriesRequest reverse. */
        reverse: boolean;

        /** ListVaultEntriesRequest view. */
        view?: (atomic.ViewRef.$Properties|null);

        /**
         * Creates a new ListVaultEntriesRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListVaultEntriesRequest instance
         */
        static create(properties: atomic.ListVaultEntriesRequest.$Shape): atomic.ListVaultEntriesRequest & atomic.ListVaultEntriesRequest.$Shape;
        static create(properties?: atomic.ListVaultEntriesRequest.$Properties): atomic.ListVaultEntriesRequest;

        /**
         * Encodes the specified ListVaultEntriesRequest message. Does not implicitly {@link atomic.ListVaultEntriesRequest.verify|verify} messages.
         * @param message ListVaultEntriesRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.ListVaultEntriesRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListVaultEntriesRequest message, length delimited. Does not implicitly {@link atomic.ListVaultEntriesRequest.verify|verify} messages.
         * @param message ListVaultEntriesRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.ListVaultEntriesRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListVaultEntriesRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.ListVaultEntriesRequest & atomic.ListVaultEntriesRequest.$Shape} ListVaultEntriesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.ListVaultEntriesRequest & atomic.ListVaultEntriesRequest.$Shape;

        /**
         * Decodes a ListVaultEntriesRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.ListVaultEntriesRequest & atomic.ListVaultEntriesRequest.$Shape} ListVaultEntriesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.ListVaultEntriesRequest & atomic.ListVaultEntriesRequest.$Shape;

        /**
         * Verifies a ListVaultEntriesRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListVaultEntriesRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListVaultEntriesRequest
         */
        static fromObject(object: { [k: string]: any }): atomic.ListVaultEntriesRequest;

        /**
         * Creates a plain object from a ListVaultEntriesRequest message. Also converts values to other types if specified.
         * @param message ListVaultEntriesRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.ListVaultEntriesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListVaultEntriesRequest to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ListVaultEntriesRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ListVaultEntriesRequest {

        /** Properties of a ListVaultEntriesRequest. */
        interface $Properties {

            /** ListVaultEntriesRequest repository */
            repository?: (atomic.RepositoryRef.$Properties|null);

            /** ListVaultEntriesRequest kind */
            kind?: (atomic.VaultEntityKind|null);

            /** ListVaultEntriesRequest status */
            status?: (atomic.VaultEntityStatus|null);

            /** ListVaultEntriesRequest summariesOnly */
            summariesOnly?: (boolean|null);

            /** ListVaultEntriesRequest cursor */
            cursor?: (atomic.PageCursor.$Properties|null);

            /** ListVaultEntriesRequest budget */
            budget?: (atomic.PageBudget.$Properties|null);

            /** ListVaultEntriesRequest identity */
            identity?: (string|null);

            /** ListVaultEntriesRequest pathPrefix */
            pathPrefix?: (string|null);

            /** ListVaultEntriesRequest entryType */
            entryType?: (string|null);

            /** ListVaultEntriesRequest statusFilter */
            statusFilter?: (string|null);

            /** ListVaultEntriesRequest toolResultPreviews */
            toolResultPreviews?: (boolean|null);

            /** ListVaultEntriesRequest sort */
            sort?: (atomic.VaultListSort|null);

            /** ListVaultEntriesRequest reverse */
            reverse?: (boolean|null);

            /** ListVaultEntriesRequest view */
            view?: (atomic.ViewRef.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ListVaultEntriesRequest. */
        type $Shape = atomic.ListVaultEntriesRequest.$Properties;
    }

    /** VaultListSort enum. */
    enum VaultListSort {

        /** VAULT_LIST_SORT_UNSPECIFIED value */
        VAULT_LIST_SORT_UNSPECIFIED = 0,

        /** VAULT_LIST_SORT_ID value */
        VAULT_LIST_SORT_ID = 1,

        /** VAULT_LIST_SORT_UPDATED value */
        VAULT_LIST_SORT_UPDATED = 2,

        /** VAULT_LIST_SORT_TITLE value */
        VAULT_LIST_SORT_TITLE = 3,

        /** VAULT_LIST_SORT_STATUS value */
        VAULT_LIST_SORT_STATUS = 4,

        /** VAULT_LIST_SORT_KIND value */
        VAULT_LIST_SORT_KIND = 5,

        /** VAULT_LIST_SORT_ABOUT value */
        VAULT_LIST_SORT_ABOUT = 6,

        /** VAULT_LIST_SORT_ATTESTED value */
        VAULT_LIST_SORT_ATTESTED = 7,

        /** VAULT_LIST_SORT_VERIFIES value */
        VAULT_LIST_SORT_VERIFIES = 8
    }

    /**
     * Properties of a ListVaultEntriesResponse.
     * @deprecated Use atomic.ListVaultEntriesResponse.$Properties instead.
     */
    interface IListVaultEntriesResponse extends atomic.ListVaultEntriesResponse.$Properties {
    }

    /** Represents a ListVaultEntriesResponse. */
    class ListVaultEntriesResponse {

        /**
         * Constructs a new ListVaultEntriesResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.ListVaultEntriesResponse.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ListVaultEntriesResponse entries. */
        entries: atomic.VaultEntry.$Properties[];

        /** ListVaultEntriesResponse nextCursor. */
        nextCursor?: (atomic.PageCursor.$Properties|null);

        /** ListVaultEntriesResponse snapshot. */
        snapshot?: (atomic.ViewSnapshot.$Properties|null);

        /**
         * Creates a new ListVaultEntriesResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListVaultEntriesResponse instance
         */
        static create(properties: atomic.ListVaultEntriesResponse.$Shape): atomic.ListVaultEntriesResponse & atomic.ListVaultEntriesResponse.$Shape;
        static create(properties?: atomic.ListVaultEntriesResponse.$Properties): atomic.ListVaultEntriesResponse;

        /**
         * Encodes the specified ListVaultEntriesResponse message. Does not implicitly {@link atomic.ListVaultEntriesResponse.verify|verify} messages.
         * @param message ListVaultEntriesResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.ListVaultEntriesResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListVaultEntriesResponse message, length delimited. Does not implicitly {@link atomic.ListVaultEntriesResponse.verify|verify} messages.
         * @param message ListVaultEntriesResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.ListVaultEntriesResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListVaultEntriesResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.ListVaultEntriesResponse & atomic.ListVaultEntriesResponse.$Shape} ListVaultEntriesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.ListVaultEntriesResponse & atomic.ListVaultEntriesResponse.$Shape;

        /**
         * Decodes a ListVaultEntriesResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.ListVaultEntriesResponse & atomic.ListVaultEntriesResponse.$Shape} ListVaultEntriesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.ListVaultEntriesResponse & atomic.ListVaultEntriesResponse.$Shape;

        /**
         * Verifies a ListVaultEntriesResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListVaultEntriesResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListVaultEntriesResponse
         */
        static fromObject(object: { [k: string]: any }): atomic.ListVaultEntriesResponse;

        /**
         * Creates a plain object from a ListVaultEntriesResponse message. Also converts values to other types if specified.
         * @param message ListVaultEntriesResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.ListVaultEntriesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListVaultEntriesResponse to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ListVaultEntriesResponse
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ListVaultEntriesResponse {

        /** Properties of a ListVaultEntriesResponse. */
        interface $Properties {

            /** ListVaultEntriesResponse entries */
            entries?: (atomic.VaultEntry.$Properties[]|null);

            /** ListVaultEntriesResponse nextCursor */
            nextCursor?: (atomic.PageCursor.$Properties|null);

            /** ListVaultEntriesResponse snapshot */
            snapshot?: (atomic.ViewSnapshot.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ListVaultEntriesResponse. */
        type $Shape = atomic.ListVaultEntriesResponse.$Properties;
    }

    /**
     * Properties of a GetVaultContextRequest.
     * @deprecated Use atomic.GetVaultContextRequest.$Properties instead.
     */
    interface IGetVaultContextRequest extends atomic.GetVaultContextRequest.$Properties {
    }

    /** Represents a GetVaultContextRequest. */
    class GetVaultContextRequest {

        /**
         * Constructs a new GetVaultContextRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.GetVaultContextRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** GetVaultContextRequest repository. */
        repository?: (atomic.RepositoryRef.$Properties|null);

        /** GetVaultContextRequest maxEntries. */
        maxEntries?: (number|null);

        /** GetVaultContextRequest kinds. */
        kinds: atomic.VaultEntityKind[];

        /** GetVaultContextRequest query. */
        query: string[];

        /** GetVaultContextRequest intent. */
        intent?: (string|null);

        /** GetVaultContextRequest files. */
        files: string[];

        /** GetVaultContextRequest budgetChars. */
        budgetChars?: (number|null);

        /** GetVaultContextRequest includeBody. */
        includeBody?: (boolean|null);

        /** GetVaultContextRequest view. */
        view?: (atomic.ViewRef.$Properties|null);

        /**
         * Creates a new GetVaultContextRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetVaultContextRequest instance
         */
        static create(properties: atomic.GetVaultContextRequest.$Shape): atomic.GetVaultContextRequest & atomic.GetVaultContextRequest.$Shape;
        static create(properties?: atomic.GetVaultContextRequest.$Properties): atomic.GetVaultContextRequest;

        /**
         * Encodes the specified GetVaultContextRequest message. Does not implicitly {@link atomic.GetVaultContextRequest.verify|verify} messages.
         * @param message GetVaultContextRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.GetVaultContextRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetVaultContextRequest message, length delimited. Does not implicitly {@link atomic.GetVaultContextRequest.verify|verify} messages.
         * @param message GetVaultContextRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.GetVaultContextRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetVaultContextRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.GetVaultContextRequest & atomic.GetVaultContextRequest.$Shape} GetVaultContextRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.GetVaultContextRequest & atomic.GetVaultContextRequest.$Shape;

        /**
         * Decodes a GetVaultContextRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.GetVaultContextRequest & atomic.GetVaultContextRequest.$Shape} GetVaultContextRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.GetVaultContextRequest & atomic.GetVaultContextRequest.$Shape;

        /**
         * Verifies a GetVaultContextRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetVaultContextRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetVaultContextRequest
         */
        static fromObject(object: { [k: string]: any }): atomic.GetVaultContextRequest;

        /**
         * Creates a plain object from a GetVaultContextRequest message. Also converts values to other types if specified.
         * @param message GetVaultContextRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.GetVaultContextRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetVaultContextRequest to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for GetVaultContextRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace GetVaultContextRequest {

        /** Properties of a GetVaultContextRequest. */
        interface $Properties {

            /** GetVaultContextRequest repository */
            repository?: (atomic.RepositoryRef.$Properties|null);

            /** GetVaultContextRequest maxEntries */
            maxEntries?: (number|null);

            /** GetVaultContextRequest kinds */
            kinds?: (atomic.VaultEntityKind[]|null);

            /** GetVaultContextRequest query */
            query?: (string[]|null);

            /** GetVaultContextRequest intent */
            intent?: (string|null);

            /** GetVaultContextRequest files */
            files?: (string[]|null);

            /** GetVaultContextRequest budgetChars */
            budgetChars?: (number|null);

            /** GetVaultContextRequest includeBody */
            includeBody?: (boolean|null);

            /** GetVaultContextRequest view */
            view?: (atomic.ViewRef.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a GetVaultContextRequest. */
        type $Shape = atomic.GetVaultContextRequest.$Properties;
    }

    /**
     * Properties of a GetVaultContextResponse.
     * @deprecated Use atomic.GetVaultContextResponse.$Properties instead.
     */
    interface IGetVaultContextResponse extends atomic.GetVaultContextResponse.$Properties {
    }

    /** Represents a GetVaultContextResponse. */
    class GetVaultContextResponse {

        /**
         * Constructs a new GetVaultContextResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.GetVaultContextResponse.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** GetVaultContextResponse entries. */
        entries: atomic.VaultEntry.$Properties[];

        /** GetVaultContextResponse context. */
        context: atomic.ContextItem.$Properties[];

        /** GetVaultContextResponse snapshot. */
        snapshot?: (atomic.ViewSnapshot.$Properties|null);

        /**
         * Creates a new GetVaultContextResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetVaultContextResponse instance
         */
        static create(properties: atomic.GetVaultContextResponse.$Shape): atomic.GetVaultContextResponse & atomic.GetVaultContextResponse.$Shape;
        static create(properties?: atomic.GetVaultContextResponse.$Properties): atomic.GetVaultContextResponse;

        /**
         * Encodes the specified GetVaultContextResponse message. Does not implicitly {@link atomic.GetVaultContextResponse.verify|verify} messages.
         * @param message GetVaultContextResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.GetVaultContextResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetVaultContextResponse message, length delimited. Does not implicitly {@link atomic.GetVaultContextResponse.verify|verify} messages.
         * @param message GetVaultContextResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.GetVaultContextResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetVaultContextResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.GetVaultContextResponse & atomic.GetVaultContextResponse.$Shape} GetVaultContextResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.GetVaultContextResponse & atomic.GetVaultContextResponse.$Shape;

        /**
         * Decodes a GetVaultContextResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.GetVaultContextResponse & atomic.GetVaultContextResponse.$Shape} GetVaultContextResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.GetVaultContextResponse & atomic.GetVaultContextResponse.$Shape;

        /**
         * Verifies a GetVaultContextResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetVaultContextResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetVaultContextResponse
         */
        static fromObject(object: { [k: string]: any }): atomic.GetVaultContextResponse;

        /**
         * Creates a plain object from a GetVaultContextResponse message. Also converts values to other types if specified.
         * @param message GetVaultContextResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.GetVaultContextResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetVaultContextResponse to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for GetVaultContextResponse
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace GetVaultContextResponse {

        /** Properties of a GetVaultContextResponse. */
        interface $Properties {

            /** GetVaultContextResponse entries */
            entries?: (atomic.VaultEntry.$Properties[]|null);

            /** GetVaultContextResponse context */
            context?: (atomic.ContextItem.$Properties[]|null);

            /** GetVaultContextResponse snapshot */
            snapshot?: (atomic.ViewSnapshot.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a GetVaultContextResponse. */
        type $Shape = atomic.GetVaultContextResponse.$Properties;
    }

    /**
     * Properties of a ContextItem.
     * @deprecated Use atomic.ContextItem.$Properties instead.
     */
    interface IContextItem extends atomic.ContextItem.$Properties {
    }

    /** Represents a ContextItem. */
    class ContextItem {

        /**
         * Constructs a new ContextItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.ContextItem.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ContextItem memoryId. */
        memoryId: string;

        /** ContextItem kgNodeId. */
        kgNodeId: string;

        /** ContextItem revisionHash. */
        revisionHash: string;

        /** ContextItem contentHash. */
        contentHash: string;

        /** ContextItem path. */
        path: string;

        /** ContextItem name. */
        name: string;

        /** ContextItem kind. */
        kind: string;

        /** ContextItem status. */
        status: string;

        /** ContextItem score. */
        score: number;

        /** ContextItem whyMatched. */
        whyMatched: string;

        /** ContextItem body. */
        body?: (string|null);

        /** ContextItem preview. */
        preview?: (string|null);

        /** ContextItem updatedAt. */
        updatedAt: string;

        /** ContextItem introducedBy. */
        introducedBy: (number|Long);

        /** ContextItem recorded. */
        recorded: boolean;

        /** ContextItem truncated. */
        truncated: boolean;

        /**
         * Creates a new ContextItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ContextItem instance
         */
        static create(properties: atomic.ContextItem.$Shape): atomic.ContextItem & atomic.ContextItem.$Shape;
        static create(properties?: atomic.ContextItem.$Properties): atomic.ContextItem;

        /**
         * Encodes the specified ContextItem message. Does not implicitly {@link atomic.ContextItem.verify|verify} messages.
         * @param message ContextItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.ContextItem.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ContextItem message, length delimited. Does not implicitly {@link atomic.ContextItem.verify|verify} messages.
         * @param message ContextItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.ContextItem.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ContextItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.ContextItem & atomic.ContextItem.$Shape} ContextItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.ContextItem & atomic.ContextItem.$Shape;

        /**
         * Decodes a ContextItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.ContextItem & atomic.ContextItem.$Shape} ContextItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.ContextItem & atomic.ContextItem.$Shape;

        /**
         * Verifies a ContextItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ContextItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ContextItem
         */
        static fromObject(object: { [k: string]: any }): atomic.ContextItem;

        /**
         * Creates a plain object from a ContextItem message. Also converts values to other types if specified.
         * @param message ContextItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.ContextItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ContextItem to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ContextItem
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ContextItem {

        /** Properties of a ContextItem. */
        interface $Properties {

            /** ContextItem memoryId */
            memoryId?: (string|null);

            /** ContextItem kgNodeId */
            kgNodeId?: (string|null);

            /** ContextItem revisionHash */
            revisionHash?: (string|null);

            /** ContextItem contentHash */
            contentHash?: (string|null);

            /** ContextItem path */
            path?: (string|null);

            /** ContextItem name */
            name?: (string|null);

            /** ContextItem kind */
            kind?: (string|null);

            /** ContextItem status */
            status?: (string|null);

            /** ContextItem score */
            score?: (number|null);

            /** ContextItem whyMatched */
            whyMatched?: (string|null);

            /** ContextItem body */
            body?: (string|null);

            /** ContextItem preview */
            preview?: (string|null);

            /** ContextItem updatedAt */
            updatedAt?: (string|null);

            /** ContextItem introducedBy */
            introducedBy?: (number|Long|null);

            /** ContextItem recorded */
            recorded?: (boolean|null);

            /** ContextItem truncated */
            truncated?: (boolean|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ContextItem. */
        type $Shape = atomic.ContextItem.$Properties;
    }

    /**
     * Properties of a VerifyAttestationRequest.
     * @deprecated Use atomic.VerifyAttestationRequest.$Properties instead.
     */
    interface IVerifyAttestationRequest extends atomic.VerifyAttestationRequest.$Properties {
    }

    /** Represents a VerifyAttestationRequest. */
    class VerifyAttestationRequest {

        /**
         * Constructs a new VerifyAttestationRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.VerifyAttestationRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** VerifyAttestationRequest repository. */
        repository?: (atomic.RepositoryRef.$Properties|null);

        /** VerifyAttestationRequest attestationId. */
        attestationId?: (string|null);

        /** VerifyAttestationRequest subject. */
        subject?: (atomic.AttestationTarget.$Properties|null);

        /** VerifyAttestationRequest view. */
        view?: (atomic.ViewRef.$Properties|null);

        /** VerifyAttestationRequest identityName. */
        identityName?: (string|null);

        /** VerifyAttestationRequest publicKey. */
        publicKey?: (Uint8Array|null);

        /** VerifyAttestationRequest target. */
        target?: ("attestationId"|"subject");

        /**
         * Creates a new VerifyAttestationRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VerifyAttestationRequest instance
         */
        static create(properties: atomic.VerifyAttestationRequest.$Shape): atomic.VerifyAttestationRequest & atomic.VerifyAttestationRequest.$Shape;
        static create(properties?: atomic.VerifyAttestationRequest.$Properties): atomic.VerifyAttestationRequest;

        /**
         * Encodes the specified VerifyAttestationRequest message. Does not implicitly {@link atomic.VerifyAttestationRequest.verify|verify} messages.
         * @param message VerifyAttestationRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.VerifyAttestationRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VerifyAttestationRequest message, length delimited. Does not implicitly {@link atomic.VerifyAttestationRequest.verify|verify} messages.
         * @param message VerifyAttestationRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.VerifyAttestationRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VerifyAttestationRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.VerifyAttestationRequest & atomic.VerifyAttestationRequest.$Shape} VerifyAttestationRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.VerifyAttestationRequest & atomic.VerifyAttestationRequest.$Shape;

        /**
         * Decodes a VerifyAttestationRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.VerifyAttestationRequest & atomic.VerifyAttestationRequest.$Shape} VerifyAttestationRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.VerifyAttestationRequest & atomic.VerifyAttestationRequest.$Shape;

        /**
         * Verifies a VerifyAttestationRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VerifyAttestationRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VerifyAttestationRequest
         */
        static fromObject(object: { [k: string]: any }): atomic.VerifyAttestationRequest;

        /**
         * Creates a plain object from a VerifyAttestationRequest message. Also converts values to other types if specified.
         * @param message VerifyAttestationRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.VerifyAttestationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VerifyAttestationRequest to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for VerifyAttestationRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace VerifyAttestationRequest {

        /** Properties of a VerifyAttestationRequest. */
        interface $Properties {

            /** VerifyAttestationRequest repository */
            repository?: (atomic.RepositoryRef.$Properties|null);

            /** VerifyAttestationRequest attestationId */
            attestationId?: (string|null);

            /** VerifyAttestationRequest subject */
            subject?: (atomic.AttestationTarget.$Properties|null);

            /** VerifyAttestationRequest view */
            view?: (atomic.ViewRef.$Properties|null);

            /** VerifyAttestationRequest identityName */
            identityName?: (string|null);

            /** VerifyAttestationRequest publicKey */
            publicKey?: (Uint8Array|null);

            /** VerifyAttestationRequest target */
            target?: ("attestationId"|"subject");

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Narrowed shape of a VerifyAttestationRequest. */
        type $Shape = {
          repository?: atomic.RepositoryRef.$Shape|null;
          attestationId?: string|null;
          subject?: atomic.AttestationTarget.$Shape|null;
          view?: atomic.ViewRef.$Shape|null;
          identityName?: string|null;
          publicKey?: Uint8Array|null;
          $unknowns?: Uint8Array[];
        } & (
          ({ target?: undefined; attestationId?: null; subject?: null }|{ target?: "attestationId"; attestationId: string; subject?: null }|{ target?: "subject"; attestationId?: null; subject: atomic.AttestationTarget.$Shape })
        );
    }

    /**
     * Properties of an AttestationTarget.
     * @deprecated Use atomic.AttestationTarget.$Properties instead.
     */
    interface IAttestationTarget extends atomic.AttestationTarget.$Properties {
    }

    /** Represents an AttestationTarget. */
    class AttestationTarget {

        /**
         * Constructs a new AttestationTarget.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.AttestationTarget.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** AttestationTarget intentId. */
        intentId?: (string|null);

        /** AttestationTarget memoryId. */
        memoryId?: (string|null);

        /** AttestationTarget changeHash. */
        changeHash?: (atomic.Hash.$Properties|null);

        /** AttestationTarget graphStats. */
        graphStats?: (atomic.GraphStatsRef.$Properties|null);

        /** AttestationTarget kind. */
        kind?: ("intentId"|"memoryId"|"changeHash"|"graphStats");

        /**
         * Creates a new AttestationTarget instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AttestationTarget instance
         */
        static create(properties: atomic.AttestationTarget.$Shape): atomic.AttestationTarget & atomic.AttestationTarget.$Shape;
        static create(properties?: atomic.AttestationTarget.$Properties): atomic.AttestationTarget;

        /**
         * Encodes the specified AttestationTarget message. Does not implicitly {@link atomic.AttestationTarget.verify|verify} messages.
         * @param message AttestationTarget message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.AttestationTarget.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AttestationTarget message, length delimited. Does not implicitly {@link atomic.AttestationTarget.verify|verify} messages.
         * @param message AttestationTarget message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.AttestationTarget.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AttestationTarget message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.AttestationTarget & atomic.AttestationTarget.$Shape} AttestationTarget
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.AttestationTarget & atomic.AttestationTarget.$Shape;

        /**
         * Decodes an AttestationTarget message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.AttestationTarget & atomic.AttestationTarget.$Shape} AttestationTarget
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.AttestationTarget & atomic.AttestationTarget.$Shape;

        /**
         * Verifies an AttestationTarget message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AttestationTarget message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AttestationTarget
         */
        static fromObject(object: { [k: string]: any }): atomic.AttestationTarget;

        /**
         * Creates a plain object from an AttestationTarget message. Also converts values to other types if specified.
         * @param message AttestationTarget
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.AttestationTarget, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AttestationTarget to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for AttestationTarget
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace AttestationTarget {

        /** Properties of an AttestationTarget. */
        interface $Properties {

            /** AttestationTarget intentId */
            intentId?: (string|null);

            /** AttestationTarget memoryId */
            memoryId?: (string|null);

            /** AttestationTarget changeHash */
            changeHash?: (atomic.Hash.$Properties|null);

            /** AttestationTarget graphStats */
            graphStats?: (atomic.GraphStatsRef.$Properties|null);

            /** AttestationTarget kind */
            kind?: ("intentId"|"memoryId"|"changeHash"|"graphStats");

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Narrowed shape of an AttestationTarget. */
        type $Shape = {
          intentId?: string|null;
          memoryId?: string|null;
          changeHash?: atomic.Hash.$Shape|null;
          graphStats?: atomic.GraphStatsRef.$Shape|null;
          $unknowns?: Uint8Array[];
        } & (
          ({ kind?: undefined; intentId?: null; memoryId?: null; changeHash?: null; graphStats?: null }|{ kind?: "intentId"; intentId: string; memoryId?: null; changeHash?: null; graphStats?: null }|{ kind?: "memoryId"; intentId?: null; memoryId: string; changeHash?: null; graphStats?: null }|{ kind?: "changeHash"; intentId?: null; memoryId?: null; changeHash: atomic.Hash.$Shape; graphStats?: null }|{ kind?: "graphStats"; intentId?: null; memoryId?: null; changeHash?: null; graphStats: atomic.GraphStatsRef.$Shape })
        );
    }

    /**
     * Properties of a GraphStatsRef.
     * @deprecated Use atomic.GraphStatsRef.$Properties instead.
     */
    interface IGraphStatsRef extends atomic.GraphStatsRef.$Properties {
    }

    /** Represents a GraphStatsRef. */
    class GraphStatsRef {

        /**
         * Constructs a new GraphStatsRef.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.GraphStatsRef.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** GraphStatsRef sessionId. */
        sessionId?: (string|null);

        /** GraphStatsRef turnNumber. */
        turnNumber?: (number|null);

        /** GraphStatsRef changeHash. */
        changeHash?: (atomic.Hash.$Properties|null);

        /**
         * Creates a new GraphStatsRef instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GraphStatsRef instance
         */
        static create(properties: atomic.GraphStatsRef.$Shape): atomic.GraphStatsRef & atomic.GraphStatsRef.$Shape;
        static create(properties?: atomic.GraphStatsRef.$Properties): atomic.GraphStatsRef;

        /**
         * Encodes the specified GraphStatsRef message. Does not implicitly {@link atomic.GraphStatsRef.verify|verify} messages.
         * @param message GraphStatsRef message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.GraphStatsRef.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GraphStatsRef message, length delimited. Does not implicitly {@link atomic.GraphStatsRef.verify|verify} messages.
         * @param message GraphStatsRef message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.GraphStatsRef.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GraphStatsRef message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.GraphStatsRef & atomic.GraphStatsRef.$Shape} GraphStatsRef
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.GraphStatsRef & atomic.GraphStatsRef.$Shape;

        /**
         * Decodes a GraphStatsRef message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.GraphStatsRef & atomic.GraphStatsRef.$Shape} GraphStatsRef
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.GraphStatsRef & atomic.GraphStatsRef.$Shape;

        /**
         * Verifies a GraphStatsRef message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GraphStatsRef message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GraphStatsRef
         */
        static fromObject(object: { [k: string]: any }): atomic.GraphStatsRef;

        /**
         * Creates a plain object from a GraphStatsRef message. Also converts values to other types if specified.
         * @param message GraphStatsRef
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.GraphStatsRef, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GraphStatsRef to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for GraphStatsRef
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace GraphStatsRef {

        /** Properties of a GraphStatsRef. */
        interface $Properties {

            /** GraphStatsRef sessionId */
            sessionId?: (string|null);

            /** GraphStatsRef turnNumber */
            turnNumber?: (number|null);

            /** GraphStatsRef changeHash */
            changeHash?: (atomic.Hash.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a GraphStatsRef. */
        type $Shape = atomic.GraphStatsRef.$Properties;
    }

    /**
     * Properties of a VerifyAttestationResponse.
     * @deprecated Use atomic.VerifyAttestationResponse.$Properties instead.
     */
    interface IVerifyAttestationResponse extends atomic.VerifyAttestationResponse.$Properties {
    }

    /** Represents a VerifyAttestationResponse. */
    class VerifyAttestationResponse {

        /**
         * Constructs a new VerifyAttestationResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.VerifyAttestationResponse.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** VerifyAttestationResponse valid. */
        valid: boolean;

        /** VerifyAttestationResponse reason. */
        reason?: (string|null);

        /** VerifyAttestationResponse signatureValid. */
        signatureValid?: (boolean|null);

        /** VerifyAttestationResponse sourceFresh. */
        sourceFresh?: (boolean|null);

        /** VerifyAttestationResponse signedDocument. */
        signedDocument?: (string|null);

        /** VerifyAttestationResponse signerDid. */
        signerDid?: (string|null);

        /** VerifyAttestationResponse currentSourceHash. */
        currentSourceHash?: (string|null);

        /** VerifyAttestationResponse signedSourceHash. */
        signedSourceHash?: (string|null);

        /** VerifyAttestationResponse signedRevision. */
        signedRevision?: (atomic.Hash.$Properties|null);

        /**
         * Creates a new VerifyAttestationResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VerifyAttestationResponse instance
         */
        static create(properties: atomic.VerifyAttestationResponse.$Shape): atomic.VerifyAttestationResponse & atomic.VerifyAttestationResponse.$Shape;
        static create(properties?: atomic.VerifyAttestationResponse.$Properties): atomic.VerifyAttestationResponse;

        /**
         * Encodes the specified VerifyAttestationResponse message. Does not implicitly {@link atomic.VerifyAttestationResponse.verify|verify} messages.
         * @param message VerifyAttestationResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.VerifyAttestationResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VerifyAttestationResponse message, length delimited. Does not implicitly {@link atomic.VerifyAttestationResponse.verify|verify} messages.
         * @param message VerifyAttestationResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.VerifyAttestationResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VerifyAttestationResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.VerifyAttestationResponse & atomic.VerifyAttestationResponse.$Shape} VerifyAttestationResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.VerifyAttestationResponse & atomic.VerifyAttestationResponse.$Shape;

        /**
         * Decodes a VerifyAttestationResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.VerifyAttestationResponse & atomic.VerifyAttestationResponse.$Shape} VerifyAttestationResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.VerifyAttestationResponse & atomic.VerifyAttestationResponse.$Shape;

        /**
         * Verifies a VerifyAttestationResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VerifyAttestationResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VerifyAttestationResponse
         */
        static fromObject(object: { [k: string]: any }): atomic.VerifyAttestationResponse;

        /**
         * Creates a plain object from a VerifyAttestationResponse message. Also converts values to other types if specified.
         * @param message VerifyAttestationResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.VerifyAttestationResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VerifyAttestationResponse to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for VerifyAttestationResponse
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace VerifyAttestationResponse {

        /** Properties of a VerifyAttestationResponse. */
        interface $Properties {

            /** VerifyAttestationResponse valid */
            valid?: (boolean|null);

            /** VerifyAttestationResponse reason */
            reason?: (string|null);

            /** VerifyAttestationResponse signatureValid */
            signatureValid?: (boolean|null);

            /** VerifyAttestationResponse sourceFresh */
            sourceFresh?: (boolean|null);

            /** VerifyAttestationResponse signedDocument */
            signedDocument?: (string|null);

            /** VerifyAttestationResponse signerDid */
            signerDid?: (string|null);

            /** VerifyAttestationResponse currentSourceHash */
            currentSourceHash?: (string|null);

            /** VerifyAttestationResponse signedSourceHash */
            signedSourceHash?: (string|null);

            /** VerifyAttestationResponse signedRevision */
            signedRevision?: (atomic.Hash.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a VerifyAttestationResponse. */
        type $Shape = atomic.VerifyAttestationResponse.$Properties;
    }

    /**
     * Properties of a QueryGraphRequest.
     * @deprecated Use atomic.QueryGraphRequest.$Properties instead.
     */
    interface IQueryGraphRequest extends atomic.QueryGraphRequest.$Properties {
    }

    /** Represents a QueryGraphRequest. */
    class QueryGraphRequest {

        /**
         * Constructs a new QueryGraphRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.QueryGraphRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** QueryGraphRequest repository. */
        repository?: (atomic.RepositoryRef.$Properties|null);

        /** QueryGraphRequest limit. */
        limit: number;

        /** QueryGraphRequest contentSearch. */
        contentSearch?: (atomic.ContentSearchQuery.$Properties|null);

        /** QueryGraphRequest kgSearch. */
        kgSearch?: (atomic.KgSearchQuery.$Properties|null);

        /** QueryGraphRequest entity. */
        entity?: (atomic.EntityQuery.$Properties|null);

        /** QueryGraphRequest neighbors. */
        neighbors?: (atomic.NeighborsQuery.$Properties|null);

        /** QueryGraphRequest callers. */
        callers?: (atomic.CallersQuery.$Properties|null);

        /** QueryGraphRequest graphSlice. */
        graphSlice?: (atomic.GraphSliceQuery.$Properties|null);

        /** QueryGraphRequest plan. */
        plan?: (atomic.PlanExecutionQuery.$Properties|null);

        /** QueryGraphRequest ragAsk. */
        ragAsk?: (atomic.RagAskQuery.$Properties|null);

        /** QueryGraphRequest view. */
        view?: (atomic.ViewRef.$Properties|null);

        /** QueryGraphRequest query. */
        query?: ("contentSearch"|"kgSearch"|"entity"|"neighbors"|"callers"|"graphSlice"|"plan"|"ragAsk");

        /**
         * Creates a new QueryGraphRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QueryGraphRequest instance
         */
        static create(properties: atomic.QueryGraphRequest.$Shape): atomic.QueryGraphRequest & atomic.QueryGraphRequest.$Shape;
        static create(properties?: atomic.QueryGraphRequest.$Properties): atomic.QueryGraphRequest;

        /**
         * Encodes the specified QueryGraphRequest message. Does not implicitly {@link atomic.QueryGraphRequest.verify|verify} messages.
         * @param message QueryGraphRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.QueryGraphRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QueryGraphRequest message, length delimited. Does not implicitly {@link atomic.QueryGraphRequest.verify|verify} messages.
         * @param message QueryGraphRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.QueryGraphRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QueryGraphRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.QueryGraphRequest & atomic.QueryGraphRequest.$Shape} QueryGraphRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.QueryGraphRequest & atomic.QueryGraphRequest.$Shape;

        /**
         * Decodes a QueryGraphRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.QueryGraphRequest & atomic.QueryGraphRequest.$Shape} QueryGraphRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.QueryGraphRequest & atomic.QueryGraphRequest.$Shape;

        /**
         * Verifies a QueryGraphRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a QueryGraphRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QueryGraphRequest
         */
        static fromObject(object: { [k: string]: any }): atomic.QueryGraphRequest;

        /**
         * Creates a plain object from a QueryGraphRequest message. Also converts values to other types if specified.
         * @param message QueryGraphRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.QueryGraphRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QueryGraphRequest to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for QueryGraphRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace QueryGraphRequest {

        /** Properties of a QueryGraphRequest. */
        interface $Properties {

            /** QueryGraphRequest repository */
            repository?: (atomic.RepositoryRef.$Properties|null);

            /** QueryGraphRequest limit */
            limit?: (number|null);

            /** QueryGraphRequest contentSearch */
            contentSearch?: (atomic.ContentSearchQuery.$Properties|null);

            /** QueryGraphRequest kgSearch */
            kgSearch?: (atomic.KgSearchQuery.$Properties|null);

            /** QueryGraphRequest entity */
            entity?: (atomic.EntityQuery.$Properties|null);

            /** QueryGraphRequest neighbors */
            neighbors?: (atomic.NeighborsQuery.$Properties|null);

            /** QueryGraphRequest callers */
            callers?: (atomic.CallersQuery.$Properties|null);

            /** QueryGraphRequest graphSlice */
            graphSlice?: (atomic.GraphSliceQuery.$Properties|null);

            /** QueryGraphRequest plan */
            plan?: (atomic.PlanExecutionQuery.$Properties|null);

            /** QueryGraphRequest ragAsk */
            ragAsk?: (atomic.RagAskQuery.$Properties|null);

            /** QueryGraphRequest view */
            view?: (atomic.ViewRef.$Properties|null);

            /** QueryGraphRequest query */
            query?: ("contentSearch"|"kgSearch"|"entity"|"neighbors"|"callers"|"graphSlice"|"plan"|"ragAsk");

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Narrowed shape of a QueryGraphRequest. */
        type $Shape = {
          repository?: atomic.RepositoryRef.$Shape|null;
          limit?: number|null;
          contentSearch?: atomic.ContentSearchQuery.$Shape|null;
          kgSearch?: atomic.KgSearchQuery.$Shape|null;
          entity?: atomic.EntityQuery.$Shape|null;
          neighbors?: atomic.NeighborsQuery.$Shape|null;
          callers?: atomic.CallersQuery.$Shape|null;
          graphSlice?: atomic.GraphSliceQuery.$Shape|null;
          plan?: atomic.PlanExecutionQuery.$Shape|null;
          ragAsk?: atomic.RagAskQuery.$Shape|null;
          view?: atomic.ViewRef.$Shape|null;
          $unknowns?: Uint8Array[];
        } & (
          ({ query?: undefined; contentSearch?: null; kgSearch?: null; entity?: null; neighbors?: null; callers?: null; graphSlice?: null; plan?: null; ragAsk?: null }|{ query?: "contentSearch"; contentSearch: atomic.ContentSearchQuery.$Shape; kgSearch?: null; entity?: null; neighbors?: null; callers?: null; graphSlice?: null; plan?: null; ragAsk?: null }|{ query?: "kgSearch"; contentSearch?: null; kgSearch: atomic.KgSearchQuery.$Shape; entity?: null; neighbors?: null; callers?: null; graphSlice?: null; plan?: null; ragAsk?: null }|{ query?: "entity"; contentSearch?: null; kgSearch?: null; entity: atomic.EntityQuery.$Shape; neighbors?: null; callers?: null; graphSlice?: null; plan?: null; ragAsk?: null }|{ query?: "neighbors"; contentSearch?: null; kgSearch?: null; entity?: null; neighbors: atomic.NeighborsQuery.$Shape; callers?: null; graphSlice?: null; plan?: null; ragAsk?: null }|{ query?: "callers"; contentSearch?: null; kgSearch?: null; entity?: null; neighbors?: null; callers: atomic.CallersQuery.$Shape; graphSlice?: null; plan?: null; ragAsk?: null }|{ query?: "graphSlice"; contentSearch?: null; kgSearch?: null; entity?: null; neighbors?: null; callers?: null; graphSlice: atomic.GraphSliceQuery.$Shape; plan?: null; ragAsk?: null }|{ query?: "plan"; contentSearch?: null; kgSearch?: null; entity?: null; neighbors?: null; callers?: null; graphSlice?: null; plan: atomic.PlanExecutionQuery.$Shape; ragAsk?: null }|{ query?: "ragAsk"; contentSearch?: null; kgSearch?: null; entity?: null; neighbors?: null; callers?: null; graphSlice?: null; plan?: null; ragAsk: atomic.RagAskQuery.$Shape })
        );
    }

    /**
     * Properties of a ContentSearchQuery.
     * @deprecated Use atomic.ContentSearchQuery.$Properties instead.
     */
    interface IContentSearchQuery extends atomic.ContentSearchQuery.$Properties {
    }

    /** Represents a ContentSearchQuery. */
    class ContentSearchQuery {

        /**
         * Constructs a new ContentSearchQuery.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.ContentSearchQuery.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ContentSearchQuery query. */
        query: string;

        /** ContentSearchQuery paths. */
        paths: string[];

        /** ContentSearchQuery pathFilter. */
        pathFilter?: (string|null);

        /** ContentSearchQuery fileType. */
        fileType?: (string|null);

        /** ContentSearchQuery excludeType. */
        excludeType?: (string|null);

        /** ContentSearchQuery caseInsensitive. */
        caseInsensitive: boolean;

        /** ContentSearchQuery maxResults. */
        maxResults?: (number|null);

        /**
         * Creates a new ContentSearchQuery instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ContentSearchQuery instance
         */
        static create(properties: atomic.ContentSearchQuery.$Shape): atomic.ContentSearchQuery & atomic.ContentSearchQuery.$Shape;
        static create(properties?: atomic.ContentSearchQuery.$Properties): atomic.ContentSearchQuery;

        /**
         * Encodes the specified ContentSearchQuery message. Does not implicitly {@link atomic.ContentSearchQuery.verify|verify} messages.
         * @param message ContentSearchQuery message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.ContentSearchQuery.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ContentSearchQuery message, length delimited. Does not implicitly {@link atomic.ContentSearchQuery.verify|verify} messages.
         * @param message ContentSearchQuery message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.ContentSearchQuery.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ContentSearchQuery message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.ContentSearchQuery & atomic.ContentSearchQuery.$Shape} ContentSearchQuery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.ContentSearchQuery & atomic.ContentSearchQuery.$Shape;

        /**
         * Decodes a ContentSearchQuery message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.ContentSearchQuery & atomic.ContentSearchQuery.$Shape} ContentSearchQuery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.ContentSearchQuery & atomic.ContentSearchQuery.$Shape;

        /**
         * Verifies a ContentSearchQuery message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ContentSearchQuery message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ContentSearchQuery
         */
        static fromObject(object: { [k: string]: any }): atomic.ContentSearchQuery;

        /**
         * Creates a plain object from a ContentSearchQuery message. Also converts values to other types if specified.
         * @param message ContentSearchQuery
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.ContentSearchQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ContentSearchQuery to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ContentSearchQuery
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ContentSearchQuery {

        /** Properties of a ContentSearchQuery. */
        interface $Properties {

            /** ContentSearchQuery query */
            query?: (string|null);

            /** ContentSearchQuery paths */
            paths?: (string[]|null);

            /** ContentSearchQuery pathFilter */
            pathFilter?: (string|null);

            /** ContentSearchQuery fileType */
            fileType?: (string|null);

            /** ContentSearchQuery excludeType */
            excludeType?: (string|null);

            /** ContentSearchQuery caseInsensitive */
            caseInsensitive?: (boolean|null);

            /** ContentSearchQuery maxResults */
            maxResults?: (number|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ContentSearchQuery. */
        type $Shape = atomic.ContentSearchQuery.$Properties;
    }

    /**
     * Properties of a KgSearchQuery.
     * @deprecated Use atomic.KgSearchQuery.$Properties instead.
     */
    interface IKgSearchQuery extends atomic.KgSearchQuery.$Properties {
    }

    /** Represents a KgSearchQuery. */
    class KgSearchQuery {

        /**
         * Constructs a new KgSearchQuery.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.KgSearchQuery.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** KgSearchQuery query. */
        query: string;

        /** KgSearchQuery kind. */
        kind?: (string|null);

        /** KgSearchQuery pool. */
        pool?: (number|null);

        /**
         * Creates a new KgSearchQuery instance using the specified properties.
         * @param [properties] Properties to set
         * @returns KgSearchQuery instance
         */
        static create(properties: atomic.KgSearchQuery.$Shape): atomic.KgSearchQuery & atomic.KgSearchQuery.$Shape;
        static create(properties?: atomic.KgSearchQuery.$Properties): atomic.KgSearchQuery;

        /**
         * Encodes the specified KgSearchQuery message. Does not implicitly {@link atomic.KgSearchQuery.verify|verify} messages.
         * @param message KgSearchQuery message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.KgSearchQuery.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified KgSearchQuery message, length delimited. Does not implicitly {@link atomic.KgSearchQuery.verify|verify} messages.
         * @param message KgSearchQuery message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.KgSearchQuery.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a KgSearchQuery message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.KgSearchQuery & atomic.KgSearchQuery.$Shape} KgSearchQuery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.KgSearchQuery & atomic.KgSearchQuery.$Shape;

        /**
         * Decodes a KgSearchQuery message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.KgSearchQuery & atomic.KgSearchQuery.$Shape} KgSearchQuery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.KgSearchQuery & atomic.KgSearchQuery.$Shape;

        /**
         * Verifies a KgSearchQuery message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a KgSearchQuery message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns KgSearchQuery
         */
        static fromObject(object: { [k: string]: any }): atomic.KgSearchQuery;

        /**
         * Creates a plain object from a KgSearchQuery message. Also converts values to other types if specified.
         * @param message KgSearchQuery
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.KgSearchQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this KgSearchQuery to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for KgSearchQuery
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace KgSearchQuery {

        /** Properties of a KgSearchQuery. */
        interface $Properties {

            /** KgSearchQuery query */
            query?: (string|null);

            /** KgSearchQuery kind */
            kind?: (string|null);

            /** KgSearchQuery pool */
            pool?: (number|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a KgSearchQuery. */
        type $Shape = atomic.KgSearchQuery.$Properties;
    }

    /**
     * Properties of an EntityQuery.
     * @deprecated Use atomic.EntityQuery.$Properties instead.
     */
    interface IEntityQuery extends atomic.EntityQuery.$Properties {
    }

    /** Represents an EntityQuery. */
    class EntityQuery {

        /**
         * Constructs a new EntityQuery.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.EntityQuery.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** EntityQuery nodeId. */
        nodeId: string;

        /**
         * Creates a new EntityQuery instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EntityQuery instance
         */
        static create(properties: atomic.EntityQuery.$Shape): atomic.EntityQuery & atomic.EntityQuery.$Shape;
        static create(properties?: atomic.EntityQuery.$Properties): atomic.EntityQuery;

        /**
         * Encodes the specified EntityQuery message. Does not implicitly {@link atomic.EntityQuery.verify|verify} messages.
         * @param message EntityQuery message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.EntityQuery.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EntityQuery message, length delimited. Does not implicitly {@link atomic.EntityQuery.verify|verify} messages.
         * @param message EntityQuery message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.EntityQuery.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EntityQuery message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.EntityQuery & atomic.EntityQuery.$Shape} EntityQuery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.EntityQuery & atomic.EntityQuery.$Shape;

        /**
         * Decodes an EntityQuery message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.EntityQuery & atomic.EntityQuery.$Shape} EntityQuery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.EntityQuery & atomic.EntityQuery.$Shape;

        /**
         * Verifies an EntityQuery message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EntityQuery message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EntityQuery
         */
        static fromObject(object: { [k: string]: any }): atomic.EntityQuery;

        /**
         * Creates a plain object from an EntityQuery message. Also converts values to other types if specified.
         * @param message EntityQuery
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.EntityQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EntityQuery to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for EntityQuery
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace EntityQuery {

        /** Properties of an EntityQuery. */
        interface $Properties {

            /** EntityQuery nodeId */
            nodeId?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of an EntityQuery. */
        type $Shape = atomic.EntityQuery.$Properties;
    }

    /**
     * Properties of a NeighborsQuery.
     * @deprecated Use atomic.NeighborsQuery.$Properties instead.
     */
    interface INeighborsQuery extends atomic.NeighborsQuery.$Properties {
    }

    /** Represents a NeighborsQuery. */
    class NeighborsQuery {

        /**
         * Constructs a new NeighborsQuery.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.NeighborsQuery.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** NeighborsQuery nodeId. */
        nodeId: string;

        /** NeighborsQuery incoming. */
        incoming?: (boolean|null);

        /** NeighborsQuery depth. */
        depth?: (number|null);

        /**
         * Creates a new NeighborsQuery instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NeighborsQuery instance
         */
        static create(properties: atomic.NeighborsQuery.$Shape): atomic.NeighborsQuery & atomic.NeighborsQuery.$Shape;
        static create(properties?: atomic.NeighborsQuery.$Properties): atomic.NeighborsQuery;

        /**
         * Encodes the specified NeighborsQuery message. Does not implicitly {@link atomic.NeighborsQuery.verify|verify} messages.
         * @param message NeighborsQuery message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.NeighborsQuery.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NeighborsQuery message, length delimited. Does not implicitly {@link atomic.NeighborsQuery.verify|verify} messages.
         * @param message NeighborsQuery message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.NeighborsQuery.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NeighborsQuery message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.NeighborsQuery & atomic.NeighborsQuery.$Shape} NeighborsQuery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.NeighborsQuery & atomic.NeighborsQuery.$Shape;

        /**
         * Decodes a NeighborsQuery message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.NeighborsQuery & atomic.NeighborsQuery.$Shape} NeighborsQuery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.NeighborsQuery & atomic.NeighborsQuery.$Shape;

        /**
         * Verifies a NeighborsQuery message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NeighborsQuery message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NeighborsQuery
         */
        static fromObject(object: { [k: string]: any }): atomic.NeighborsQuery;

        /**
         * Creates a plain object from a NeighborsQuery message. Also converts values to other types if specified.
         * @param message NeighborsQuery
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.NeighborsQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NeighborsQuery to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for NeighborsQuery
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace NeighborsQuery {

        /** Properties of a NeighborsQuery. */
        interface $Properties {

            /** NeighborsQuery nodeId */
            nodeId?: (string|null);

            /** NeighborsQuery incoming */
            incoming?: (boolean|null);

            /** NeighborsQuery depth */
            depth?: (number|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a NeighborsQuery. */
        type $Shape = atomic.NeighborsQuery.$Properties;
    }

    /**
     * Properties of a CallersQuery.
     * @deprecated Use atomic.CallersQuery.$Properties instead.
     */
    interface ICallersQuery extends atomic.CallersQuery.$Properties {
    }

    /** Represents a CallersQuery. */
    class CallersQuery {

        /**
         * Constructs a new CallersQuery.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.CallersQuery.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** CallersQuery nodeId. */
        nodeId: string;

        /**
         * Creates a new CallersQuery instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CallersQuery instance
         */
        static create(properties: atomic.CallersQuery.$Shape): atomic.CallersQuery & atomic.CallersQuery.$Shape;
        static create(properties?: atomic.CallersQuery.$Properties): atomic.CallersQuery;

        /**
         * Encodes the specified CallersQuery message. Does not implicitly {@link atomic.CallersQuery.verify|verify} messages.
         * @param message CallersQuery message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.CallersQuery.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CallersQuery message, length delimited. Does not implicitly {@link atomic.CallersQuery.verify|verify} messages.
         * @param message CallersQuery message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.CallersQuery.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CallersQuery message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.CallersQuery & atomic.CallersQuery.$Shape} CallersQuery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.CallersQuery & atomic.CallersQuery.$Shape;

        /**
         * Decodes a CallersQuery message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.CallersQuery & atomic.CallersQuery.$Shape} CallersQuery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.CallersQuery & atomic.CallersQuery.$Shape;

        /**
         * Verifies a CallersQuery message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CallersQuery message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CallersQuery
         */
        static fromObject(object: { [k: string]: any }): atomic.CallersQuery;

        /**
         * Creates a plain object from a CallersQuery message. Also converts values to other types if specified.
         * @param message CallersQuery
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.CallersQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CallersQuery to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for CallersQuery
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace CallersQuery {

        /** Properties of a CallersQuery. */
        interface $Properties {

            /** CallersQuery nodeId */
            nodeId?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a CallersQuery. */
        type $Shape = atomic.CallersQuery.$Properties;
    }

    /**
     * Properties of a GraphSliceQuery.
     * @deprecated Use atomic.GraphSliceQuery.$Properties instead.
     */
    interface IGraphSliceQuery extends atomic.GraphSliceQuery.$Properties {
    }

    /** Represents a GraphSliceQuery. */
    class GraphSliceQuery {

        /**
         * Constructs a new GraphSliceQuery.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.GraphSliceQuery.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** GraphSliceQuery nodeIds. */
        nodeIds: string[];

        /** GraphSliceQuery maxDepth. */
        maxDepth?: (number|null);

        /** GraphSliceQuery query. */
        query?: (string|null);

        /** GraphSliceQuery seedLimit. */
        seedLimit?: (number|null);

        /** GraphSliceQuery depth. */
        depth?: (number|null);

        /** GraphSliceQuery kinds. */
        kinds?: (string|null);

        /** GraphSliceQuery changesPerSeed. */
        changesPerSeed?: (number|null);

        /** GraphSliceQuery maxNodes. */
        maxNodes?: (number|null);

        /**
         * Creates a new GraphSliceQuery instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GraphSliceQuery instance
         */
        static create(properties: atomic.GraphSliceQuery.$Shape): atomic.GraphSliceQuery & atomic.GraphSliceQuery.$Shape;
        static create(properties?: atomic.GraphSliceQuery.$Properties): atomic.GraphSliceQuery;

        /**
         * Encodes the specified GraphSliceQuery message. Does not implicitly {@link atomic.GraphSliceQuery.verify|verify} messages.
         * @param message GraphSliceQuery message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.GraphSliceQuery.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GraphSliceQuery message, length delimited. Does not implicitly {@link atomic.GraphSliceQuery.verify|verify} messages.
         * @param message GraphSliceQuery message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.GraphSliceQuery.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GraphSliceQuery message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.GraphSliceQuery & atomic.GraphSliceQuery.$Shape} GraphSliceQuery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.GraphSliceQuery & atomic.GraphSliceQuery.$Shape;

        /**
         * Decodes a GraphSliceQuery message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.GraphSliceQuery & atomic.GraphSliceQuery.$Shape} GraphSliceQuery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.GraphSliceQuery & atomic.GraphSliceQuery.$Shape;

        /**
         * Verifies a GraphSliceQuery message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GraphSliceQuery message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GraphSliceQuery
         */
        static fromObject(object: { [k: string]: any }): atomic.GraphSliceQuery;

        /**
         * Creates a plain object from a GraphSliceQuery message. Also converts values to other types if specified.
         * @param message GraphSliceQuery
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.GraphSliceQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GraphSliceQuery to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for GraphSliceQuery
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace GraphSliceQuery {

        /** Properties of a GraphSliceQuery. */
        interface $Properties {

            /** GraphSliceQuery nodeIds */
            nodeIds?: (string[]|null);

            /** GraphSliceQuery maxDepth */
            maxDepth?: (number|null);

            /** GraphSliceQuery query */
            query?: (string|null);

            /** GraphSliceQuery seedLimit */
            seedLimit?: (number|null);

            /** GraphSliceQuery depth */
            depth?: (number|null);

            /** GraphSliceQuery kinds */
            kinds?: (string|null);

            /** GraphSliceQuery changesPerSeed */
            changesPerSeed?: (number|null);

            /** GraphSliceQuery maxNodes */
            maxNodes?: (number|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a GraphSliceQuery. */
        type $Shape = atomic.GraphSliceQuery.$Properties;
    }

    /**
     * Properties of a PlanExecutionQuery.
     * @deprecated Use atomic.PlanExecutionQuery.$Properties instead.
     */
    interface IPlanExecutionQuery extends atomic.PlanExecutionQuery.$Properties {
    }

    /** Represents a PlanExecutionQuery. */
    class PlanExecutionQuery {

        /**
         * Constructs a new PlanExecutionQuery.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.PlanExecutionQuery.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** PlanExecutionQuery planJson. */
        planJson: Uint8Array;

        /**
         * Creates a new PlanExecutionQuery instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlanExecutionQuery instance
         */
        static create(properties: atomic.PlanExecutionQuery.$Shape): atomic.PlanExecutionQuery & atomic.PlanExecutionQuery.$Shape;
        static create(properties?: atomic.PlanExecutionQuery.$Properties): atomic.PlanExecutionQuery;

        /**
         * Encodes the specified PlanExecutionQuery message. Does not implicitly {@link atomic.PlanExecutionQuery.verify|verify} messages.
         * @param message PlanExecutionQuery message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.PlanExecutionQuery.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PlanExecutionQuery message, length delimited. Does not implicitly {@link atomic.PlanExecutionQuery.verify|verify} messages.
         * @param message PlanExecutionQuery message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.PlanExecutionQuery.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlanExecutionQuery message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.PlanExecutionQuery & atomic.PlanExecutionQuery.$Shape} PlanExecutionQuery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.PlanExecutionQuery & atomic.PlanExecutionQuery.$Shape;

        /**
         * Decodes a PlanExecutionQuery message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.PlanExecutionQuery & atomic.PlanExecutionQuery.$Shape} PlanExecutionQuery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.PlanExecutionQuery & atomic.PlanExecutionQuery.$Shape;

        /**
         * Verifies a PlanExecutionQuery message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlanExecutionQuery message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlanExecutionQuery
         */
        static fromObject(object: { [k: string]: any }): atomic.PlanExecutionQuery;

        /**
         * Creates a plain object from a PlanExecutionQuery message. Also converts values to other types if specified.
         * @param message PlanExecutionQuery
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.PlanExecutionQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlanExecutionQuery to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for PlanExecutionQuery
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace PlanExecutionQuery {

        /** Properties of a PlanExecutionQuery. */
        interface $Properties {

            /** PlanExecutionQuery planJson */
            planJson?: (Uint8Array|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a PlanExecutionQuery. */
        type $Shape = atomic.PlanExecutionQuery.$Properties;
    }

    /**
     * Properties of a RagAskQuery.
     * @deprecated Use atomic.RagAskQuery.$Properties instead.
     */
    interface IRagAskQuery extends atomic.RagAskQuery.$Properties {
    }

    /** Represents a RagAskQuery. */
    class RagAskQuery {

        /**
         * Constructs a new RagAskQuery.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.RagAskQuery.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** RagAskQuery question. */
        question: string;

        /** RagAskQuery topK. */
        topK: number;

        /** RagAskQuery maxTurns. */
        maxTurns?: (number|null);

        /** RagAskQuery verbose. */
        verbose?: (boolean|null);

        /**
         * Creates a new RagAskQuery instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RagAskQuery instance
         */
        static create(properties: atomic.RagAskQuery.$Shape): atomic.RagAskQuery & atomic.RagAskQuery.$Shape;
        static create(properties?: atomic.RagAskQuery.$Properties): atomic.RagAskQuery;

        /**
         * Encodes the specified RagAskQuery message. Does not implicitly {@link atomic.RagAskQuery.verify|verify} messages.
         * @param message RagAskQuery message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.RagAskQuery.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RagAskQuery message, length delimited. Does not implicitly {@link atomic.RagAskQuery.verify|verify} messages.
         * @param message RagAskQuery message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.RagAskQuery.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RagAskQuery message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.RagAskQuery & atomic.RagAskQuery.$Shape} RagAskQuery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.RagAskQuery & atomic.RagAskQuery.$Shape;

        /**
         * Decodes a RagAskQuery message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.RagAskQuery & atomic.RagAskQuery.$Shape} RagAskQuery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.RagAskQuery & atomic.RagAskQuery.$Shape;

        /**
         * Verifies a RagAskQuery message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RagAskQuery message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RagAskQuery
         */
        static fromObject(object: { [k: string]: any }): atomic.RagAskQuery;

        /**
         * Creates a plain object from a RagAskQuery message. Also converts values to other types if specified.
         * @param message RagAskQuery
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.RagAskQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RagAskQuery to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for RagAskQuery
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace RagAskQuery {

        /** Properties of a RagAskQuery. */
        interface $Properties {

            /** RagAskQuery question */
            question?: (string|null);

            /** RagAskQuery topK */
            topK?: (number|null);

            /** RagAskQuery maxTurns */
            maxTurns?: (number|null);

            /** RagAskQuery verbose */
            verbose?: (boolean|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a RagAskQuery. */
        type $Shape = atomic.RagAskQuery.$Properties;
    }

    /**
     * Properties of a QueryGraphResponse.
     * @deprecated Use atomic.QueryGraphResponse.$Properties instead.
     */
    interface IQueryGraphResponse extends atomic.QueryGraphResponse.$Properties {
    }

    /** Represents a QueryGraphResponse. */
    class QueryGraphResponse {

        /**
         * Constructs a new QueryGraphResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.QueryGraphResponse.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** QueryGraphResponse nodes. */
        nodes: atomic.KGNode.$Properties[];

        /** QueryGraphResponse edges. */
        edges: atomic.KGEdge.$Properties[];

        /** QueryGraphResponse hits. */
        hits: atomic.ContentHit.$Properties[];

        /** QueryGraphResponse answer. */
        answer?: (string|null);

        /** QueryGraphResponse planResult. */
        planResult?: (Uint8Array|null);

        /** QueryGraphResponse snapshot. */
        snapshot?: (atomic.ViewSnapshot.$Properties|null);

        /** QueryGraphResponse graphCollected. */
        graphCollected?: (number|null);

        /** QueryGraphResponse callsPresent. */
        callsPresent: boolean;

        /** QueryGraphResponse askResult. */
        askResult?: (atomic.VersionedBytes.$Properties|null);

        /** QueryGraphResponse askElapsedMs. */
        askElapsedMs?: (number|Long|null);

        /** QueryGraphResponse apiVersion. */
        apiVersion: number;

        /** QueryGraphResponse callers. */
        callers: atomic.CodeCaller.$Properties[];

        /** QueryGraphResponse contentResult. */
        contentResult?: (atomic.ContentSearchResult.$Properties|null);

        /**
         * Creates a new QueryGraphResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QueryGraphResponse instance
         */
        static create(properties: atomic.QueryGraphResponse.$Shape): atomic.QueryGraphResponse & atomic.QueryGraphResponse.$Shape;
        static create(properties?: atomic.QueryGraphResponse.$Properties): atomic.QueryGraphResponse;

        /**
         * Encodes the specified QueryGraphResponse message. Does not implicitly {@link atomic.QueryGraphResponse.verify|verify} messages.
         * @param message QueryGraphResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.QueryGraphResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QueryGraphResponse message, length delimited. Does not implicitly {@link atomic.QueryGraphResponse.verify|verify} messages.
         * @param message QueryGraphResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.QueryGraphResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QueryGraphResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.QueryGraphResponse & atomic.QueryGraphResponse.$Shape} QueryGraphResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.QueryGraphResponse & atomic.QueryGraphResponse.$Shape;

        /**
         * Decodes a QueryGraphResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.QueryGraphResponse & atomic.QueryGraphResponse.$Shape} QueryGraphResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.QueryGraphResponse & atomic.QueryGraphResponse.$Shape;

        /**
         * Verifies a QueryGraphResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a QueryGraphResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QueryGraphResponse
         */
        static fromObject(object: { [k: string]: any }): atomic.QueryGraphResponse;

        /**
         * Creates a plain object from a QueryGraphResponse message. Also converts values to other types if specified.
         * @param message QueryGraphResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.QueryGraphResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QueryGraphResponse to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for QueryGraphResponse
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace QueryGraphResponse {

        /** Properties of a QueryGraphResponse. */
        interface $Properties {

            /** QueryGraphResponse nodes */
            nodes?: (atomic.KGNode.$Properties[]|null);

            /** QueryGraphResponse edges */
            edges?: (atomic.KGEdge.$Properties[]|null);

            /** QueryGraphResponse hits */
            hits?: (atomic.ContentHit.$Properties[]|null);

            /** QueryGraphResponse answer */
            answer?: (string|null);

            /** QueryGraphResponse planResult */
            planResult?: (Uint8Array|null);

            /** QueryGraphResponse snapshot */
            snapshot?: (atomic.ViewSnapshot.$Properties|null);

            /** QueryGraphResponse graphCollected */
            graphCollected?: (number|null);

            /** QueryGraphResponse callsPresent */
            callsPresent?: (boolean|null);

            /** QueryGraphResponse askResult */
            askResult?: (atomic.VersionedBytes.$Properties|null);

            /** QueryGraphResponse askElapsedMs */
            askElapsedMs?: (number|Long|null);

            /** QueryGraphResponse apiVersion */
            apiVersion?: (number|null);

            /** QueryGraphResponse callers */
            callers?: (atomic.CodeCaller.$Properties[]|null);

            /** QueryGraphResponse contentResult */
            contentResult?: (atomic.ContentSearchResult.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a QueryGraphResponse. */
        type $Shape = atomic.QueryGraphResponse.$Properties;
    }

    /**
     * Properties of a KGNode.
     * @deprecated Use atomic.KGNode.$Properties instead.
     */
    interface IKGNode extends atomic.KGNode.$Properties {
    }

    /** Represents a KGNode. */
    class KGNode {

        /**
         * Constructs a new KGNode.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.KGNode.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** KGNode id. */
        id: string;

        /** KGNode types. */
        types: string[];

        /** KGNode name. */
        name?: (string|null);

        /** KGNode data. */
        data?: (Uint8Array|null);

        /** KGNode score. */
        score?: (number|null);

        /** KGNode source. */
        source?: (string|null);

        /** KGNode metadata. */
        metadata?: (Uint8Array|null);

        /**
         * Creates a new KGNode instance using the specified properties.
         * @param [properties] Properties to set
         * @returns KGNode instance
         */
        static create(properties: atomic.KGNode.$Shape): atomic.KGNode & atomic.KGNode.$Shape;
        static create(properties?: atomic.KGNode.$Properties): atomic.KGNode;

        /**
         * Encodes the specified KGNode message. Does not implicitly {@link atomic.KGNode.verify|verify} messages.
         * @param message KGNode message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.KGNode.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified KGNode message, length delimited. Does not implicitly {@link atomic.KGNode.verify|verify} messages.
         * @param message KGNode message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.KGNode.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a KGNode message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.KGNode & atomic.KGNode.$Shape} KGNode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.KGNode & atomic.KGNode.$Shape;

        /**
         * Decodes a KGNode message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.KGNode & atomic.KGNode.$Shape} KGNode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.KGNode & atomic.KGNode.$Shape;

        /**
         * Verifies a KGNode message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a KGNode message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns KGNode
         */
        static fromObject(object: { [k: string]: any }): atomic.KGNode;

        /**
         * Creates a plain object from a KGNode message. Also converts values to other types if specified.
         * @param message KGNode
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.KGNode, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this KGNode to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for KGNode
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace KGNode {

        /** Properties of a KGNode. */
        interface $Properties {

            /** KGNode id */
            id?: (string|null);

            /** KGNode types */
            types?: (string[]|null);

            /** KGNode name */
            name?: (string|null);

            /** KGNode data */
            data?: (Uint8Array|null);

            /** KGNode score */
            score?: (number|null);

            /** KGNode source */
            source?: (string|null);

            /** KGNode metadata */
            metadata?: (Uint8Array|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a KGNode. */
        type $Shape = atomic.KGNode.$Properties;
    }

    /**
     * Properties of a KGEdge.
     * @deprecated Use atomic.KGEdge.$Properties instead.
     */
    interface IKGEdge extends atomic.KGEdge.$Properties {
    }

    /** Represents a KGEdge. */
    class KGEdge {

        /**
         * Constructs a new KGEdge.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.KGEdge.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** KGEdge source. */
        source: string;

        /** KGEdge target. */
        target: string;

        /** KGEdge relation. */
        relation: string;

        /** KGEdge metadata. */
        metadata?: (Uint8Array|null);

        /**
         * Creates a new KGEdge instance using the specified properties.
         * @param [properties] Properties to set
         * @returns KGEdge instance
         */
        static create(properties: atomic.KGEdge.$Shape): atomic.KGEdge & atomic.KGEdge.$Shape;
        static create(properties?: atomic.KGEdge.$Properties): atomic.KGEdge;

        /**
         * Encodes the specified KGEdge message. Does not implicitly {@link atomic.KGEdge.verify|verify} messages.
         * @param message KGEdge message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.KGEdge.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified KGEdge message, length delimited. Does not implicitly {@link atomic.KGEdge.verify|verify} messages.
         * @param message KGEdge message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.KGEdge.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a KGEdge message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.KGEdge & atomic.KGEdge.$Shape} KGEdge
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.KGEdge & atomic.KGEdge.$Shape;

        /**
         * Decodes a KGEdge message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.KGEdge & atomic.KGEdge.$Shape} KGEdge
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.KGEdge & atomic.KGEdge.$Shape;

        /**
         * Verifies a KGEdge message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a KGEdge message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns KGEdge
         */
        static fromObject(object: { [k: string]: any }): atomic.KGEdge;

        /**
         * Creates a plain object from a KGEdge message. Also converts values to other types if specified.
         * @param message KGEdge
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.KGEdge, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this KGEdge to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for KGEdge
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace KGEdge {

        /** Properties of a KGEdge. */
        interface $Properties {

            /** KGEdge source */
            source?: (string|null);

            /** KGEdge target */
            target?: (string|null);

            /** KGEdge relation */
            relation?: (string|null);

            /** KGEdge metadata */
            metadata?: (Uint8Array|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a KGEdge. */
        type $Shape = atomic.KGEdge.$Properties;
    }

    /**
     * Properties of a ContentHit.
     * @deprecated Use atomic.ContentHit.$Properties instead.
     */
    interface IContentHit extends atomic.ContentHit.$Properties {
    }

    /** Represents a ContentHit. */
    class ContentHit {

        /**
         * Constructs a new ContentHit.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.ContentHit.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ContentHit path. */
        path: string;

        /** ContentHit snippet. */
        snippet: string;

        /** ContentHit line. */
        line?: (number|Long|null);

        /** ContentHit score. */
        score?: (number|null);

        /**
         * Creates a new ContentHit instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ContentHit instance
         */
        static create(properties: atomic.ContentHit.$Shape): atomic.ContentHit & atomic.ContentHit.$Shape;
        static create(properties?: atomic.ContentHit.$Properties): atomic.ContentHit;

        /**
         * Encodes the specified ContentHit message. Does not implicitly {@link atomic.ContentHit.verify|verify} messages.
         * @param message ContentHit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.ContentHit.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ContentHit message, length delimited. Does not implicitly {@link atomic.ContentHit.verify|verify} messages.
         * @param message ContentHit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.ContentHit.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ContentHit message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.ContentHit & atomic.ContentHit.$Shape} ContentHit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.ContentHit & atomic.ContentHit.$Shape;

        /**
         * Decodes a ContentHit message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.ContentHit & atomic.ContentHit.$Shape} ContentHit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.ContentHit & atomic.ContentHit.$Shape;

        /**
         * Verifies a ContentHit message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ContentHit message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ContentHit
         */
        static fromObject(object: { [k: string]: any }): atomic.ContentHit;

        /**
         * Creates a plain object from a ContentHit message. Also converts values to other types if specified.
         * @param message ContentHit
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.ContentHit, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ContentHit to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ContentHit
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ContentHit {

        /** Properties of a ContentHit. */
        interface $Properties {

            /** ContentHit path */
            path?: (string|null);

            /** ContentHit snippet */
            snippet?: (string|null);

            /** ContentHit line */
            line?: (number|Long|null);

            /** ContentHit score */
            score?: (number|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ContentHit. */
        type $Shape = atomic.ContentHit.$Properties;
    }

    /**
     * Properties of a CodeCaller.
     * @deprecated Use atomic.CodeCaller.$Properties instead.
     */
    interface ICodeCaller extends atomic.CodeCaller.$Properties {
    }

    /** Represents a CodeCaller. */
    class CodeCaller {

        /**
         * Constructs a new CodeCaller.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.CodeCaller.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** CodeCaller path. */
        path: string;

        /** CodeCaller name. */
        name: string;

        /** CodeCaller line. */
        line: number;

        /** CodeCaller summary. */
        summary?: (string|null);

        /**
         * Creates a new CodeCaller instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CodeCaller instance
         */
        static create(properties: atomic.CodeCaller.$Shape): atomic.CodeCaller & atomic.CodeCaller.$Shape;
        static create(properties?: atomic.CodeCaller.$Properties): atomic.CodeCaller;

        /**
         * Encodes the specified CodeCaller message. Does not implicitly {@link atomic.CodeCaller.verify|verify} messages.
         * @param message CodeCaller message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.CodeCaller.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CodeCaller message, length delimited. Does not implicitly {@link atomic.CodeCaller.verify|verify} messages.
         * @param message CodeCaller message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.CodeCaller.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CodeCaller message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.CodeCaller & atomic.CodeCaller.$Shape} CodeCaller
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.CodeCaller & atomic.CodeCaller.$Shape;

        /**
         * Decodes a CodeCaller message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.CodeCaller & atomic.CodeCaller.$Shape} CodeCaller
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.CodeCaller & atomic.CodeCaller.$Shape;

        /**
         * Verifies a CodeCaller message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CodeCaller message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CodeCaller
         */
        static fromObject(object: { [k: string]: any }): atomic.CodeCaller;

        /**
         * Creates a plain object from a CodeCaller message. Also converts values to other types if specified.
         * @param message CodeCaller
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.CodeCaller, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CodeCaller to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for CodeCaller
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace CodeCaller {

        /** Properties of a CodeCaller. */
        interface $Properties {

            /** CodeCaller path */
            path?: (string|null);

            /** CodeCaller name */
            name?: (string|null);

            /** CodeCaller line */
            line?: (number|null);

            /** CodeCaller summary */
            summary?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a CodeCaller. */
        type $Shape = atomic.CodeCaller.$Properties;
    }

    /**
     * Properties of a ContentSearchResult.
     * @deprecated Use atomic.ContentSearchResult.$Properties instead.
     */
    interface IContentSearchResult extends atomic.ContentSearchResult.$Properties {
    }

    /** Represents a ContentSearchResult. */
    class ContentSearchResult {

        /**
         * Constructs a new ContentSearchResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.ContentSearchResult.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ContentSearchResult matches. */
        matches: atomic.ContentMatch.$Properties[];

        /** ContentSearchResult totalMatches. */
        totalMatches: (number|Long);

        /** ContentSearchResult dirFacets. */
        dirFacets: atomic.ContentDirectoryFacet.$Properties[];

        /**
         * Creates a new ContentSearchResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ContentSearchResult instance
         */
        static create(properties: atomic.ContentSearchResult.$Shape): atomic.ContentSearchResult & atomic.ContentSearchResult.$Shape;
        static create(properties?: atomic.ContentSearchResult.$Properties): atomic.ContentSearchResult;

        /**
         * Encodes the specified ContentSearchResult message. Does not implicitly {@link atomic.ContentSearchResult.verify|verify} messages.
         * @param message ContentSearchResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.ContentSearchResult.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ContentSearchResult message, length delimited. Does not implicitly {@link atomic.ContentSearchResult.verify|verify} messages.
         * @param message ContentSearchResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.ContentSearchResult.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ContentSearchResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.ContentSearchResult & atomic.ContentSearchResult.$Shape} ContentSearchResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.ContentSearchResult & atomic.ContentSearchResult.$Shape;

        /**
         * Decodes a ContentSearchResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.ContentSearchResult & atomic.ContentSearchResult.$Shape} ContentSearchResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.ContentSearchResult & atomic.ContentSearchResult.$Shape;

        /**
         * Verifies a ContentSearchResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ContentSearchResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ContentSearchResult
         */
        static fromObject(object: { [k: string]: any }): atomic.ContentSearchResult;

        /**
         * Creates a plain object from a ContentSearchResult message. Also converts values to other types if specified.
         * @param message ContentSearchResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.ContentSearchResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ContentSearchResult to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ContentSearchResult
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ContentSearchResult {

        /** Properties of a ContentSearchResult. */
        interface $Properties {

            /** ContentSearchResult matches */
            matches?: (atomic.ContentMatch.$Properties[]|null);

            /** ContentSearchResult totalMatches */
            totalMatches?: (number|Long|null);

            /** ContentSearchResult dirFacets */
            dirFacets?: (atomic.ContentDirectoryFacet.$Properties[]|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ContentSearchResult. */
        type $Shape = atomic.ContentSearchResult.$Properties;
    }

    /**
     * Properties of a ContentMatch.
     * @deprecated Use atomic.ContentMatch.$Properties instead.
     */
    interface IContentMatch extends atomic.ContentMatch.$Properties {
    }

    /** Represents a ContentMatch. */
    class ContentMatch {

        /**
         * Constructs a new ContentMatch.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.ContentMatch.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ContentMatch path. */
        path: string;

        /** ContentMatch lineNumber. */
        lineNumber: number;

        /** ContentMatch lineContent. */
        lineContent: string;

        /** ContentMatch byteOffset. */
        byteOffset: (number|Long);

        /** ContentMatch submatchStart. */
        submatchStart: (number|Long);

        /** ContentMatch submatchEnd. */
        submatchEnd: (number|Long);

        /**
         * Creates a new ContentMatch instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ContentMatch instance
         */
        static create(properties: atomic.ContentMatch.$Shape): atomic.ContentMatch & atomic.ContentMatch.$Shape;
        static create(properties?: atomic.ContentMatch.$Properties): atomic.ContentMatch;

        /**
         * Encodes the specified ContentMatch message. Does not implicitly {@link atomic.ContentMatch.verify|verify} messages.
         * @param message ContentMatch message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.ContentMatch.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ContentMatch message, length delimited. Does not implicitly {@link atomic.ContentMatch.verify|verify} messages.
         * @param message ContentMatch message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.ContentMatch.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ContentMatch message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.ContentMatch & atomic.ContentMatch.$Shape} ContentMatch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.ContentMatch & atomic.ContentMatch.$Shape;

        /**
         * Decodes a ContentMatch message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.ContentMatch & atomic.ContentMatch.$Shape} ContentMatch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.ContentMatch & atomic.ContentMatch.$Shape;

        /**
         * Verifies a ContentMatch message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ContentMatch message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ContentMatch
         */
        static fromObject(object: { [k: string]: any }): atomic.ContentMatch;

        /**
         * Creates a plain object from a ContentMatch message. Also converts values to other types if specified.
         * @param message ContentMatch
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.ContentMatch, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ContentMatch to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ContentMatch
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ContentMatch {

        /** Properties of a ContentMatch. */
        interface $Properties {

            /** ContentMatch path */
            path?: (string|null);

            /** ContentMatch lineNumber */
            lineNumber?: (number|null);

            /** ContentMatch lineContent */
            lineContent?: (string|null);

            /** ContentMatch byteOffset */
            byteOffset?: (number|Long|null);

            /** ContentMatch submatchStart */
            submatchStart?: (number|Long|null);

            /** ContentMatch submatchEnd */
            submatchEnd?: (number|Long|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ContentMatch. */
        type $Shape = atomic.ContentMatch.$Properties;
    }

    /**
     * Properties of a ContentDirectoryFacet.
     * @deprecated Use atomic.ContentDirectoryFacet.$Properties instead.
     */
    interface IContentDirectoryFacet extends atomic.ContentDirectoryFacet.$Properties {
    }

    /** Represents a ContentDirectoryFacet. */
    class ContentDirectoryFacet {

        /**
         * Constructs a new ContentDirectoryFacet.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.ContentDirectoryFacet.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ContentDirectoryFacet path. */
        path: string;

        /** ContentDirectoryFacet count. */
        count: (number|Long);

        /**
         * Creates a new ContentDirectoryFacet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ContentDirectoryFacet instance
         */
        static create(properties: atomic.ContentDirectoryFacet.$Shape): atomic.ContentDirectoryFacet & atomic.ContentDirectoryFacet.$Shape;
        static create(properties?: atomic.ContentDirectoryFacet.$Properties): atomic.ContentDirectoryFacet;

        /**
         * Encodes the specified ContentDirectoryFacet message. Does not implicitly {@link atomic.ContentDirectoryFacet.verify|verify} messages.
         * @param message ContentDirectoryFacet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.ContentDirectoryFacet.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ContentDirectoryFacet message, length delimited. Does not implicitly {@link atomic.ContentDirectoryFacet.verify|verify} messages.
         * @param message ContentDirectoryFacet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.ContentDirectoryFacet.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ContentDirectoryFacet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.ContentDirectoryFacet & atomic.ContentDirectoryFacet.$Shape} ContentDirectoryFacet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.ContentDirectoryFacet & atomic.ContentDirectoryFacet.$Shape;

        /**
         * Decodes a ContentDirectoryFacet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.ContentDirectoryFacet & atomic.ContentDirectoryFacet.$Shape} ContentDirectoryFacet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.ContentDirectoryFacet & atomic.ContentDirectoryFacet.$Shape;

        /**
         * Verifies a ContentDirectoryFacet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ContentDirectoryFacet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ContentDirectoryFacet
         */
        static fromObject(object: { [k: string]: any }): atomic.ContentDirectoryFacet;

        /**
         * Creates a plain object from a ContentDirectoryFacet message. Also converts values to other types if specified.
         * @param message ContentDirectoryFacet
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.ContentDirectoryFacet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ContentDirectoryFacet to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ContentDirectoryFacet
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ContentDirectoryFacet {

        /** Properties of a ContentDirectoryFacet. */
        interface $Properties {

            /** ContentDirectoryFacet path */
            path?: (string|null);

            /** ContentDirectoryFacet count */
            count?: (number|Long|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ContentDirectoryFacet. */
        type $Shape = atomic.ContentDirectoryFacet.$Properties;
    }

    /**
     * Properties of a GetProjectIdentityRequest.
     * @deprecated Use atomic.GetProjectIdentityRequest.$Properties instead.
     */
    interface IGetProjectIdentityRequest extends atomic.GetProjectIdentityRequest.$Properties {
    }

    /** Represents a GetProjectIdentityRequest. */
    class GetProjectIdentityRequest {

        /**
         * Constructs a new GetProjectIdentityRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.GetProjectIdentityRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** GetProjectIdentityRequest repository. */
        repository?: (atomic.RepositoryRef.$Properties|null);

        /**
         * Creates a new GetProjectIdentityRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetProjectIdentityRequest instance
         */
        static create(properties: atomic.GetProjectIdentityRequest.$Shape): atomic.GetProjectIdentityRequest & atomic.GetProjectIdentityRequest.$Shape;
        static create(properties?: atomic.GetProjectIdentityRequest.$Properties): atomic.GetProjectIdentityRequest;

        /**
         * Encodes the specified GetProjectIdentityRequest message. Does not implicitly {@link atomic.GetProjectIdentityRequest.verify|verify} messages.
         * @param message GetProjectIdentityRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.GetProjectIdentityRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetProjectIdentityRequest message, length delimited. Does not implicitly {@link atomic.GetProjectIdentityRequest.verify|verify} messages.
         * @param message GetProjectIdentityRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.GetProjectIdentityRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetProjectIdentityRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.GetProjectIdentityRequest & atomic.GetProjectIdentityRequest.$Shape} GetProjectIdentityRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.GetProjectIdentityRequest & atomic.GetProjectIdentityRequest.$Shape;

        /**
         * Decodes a GetProjectIdentityRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.GetProjectIdentityRequest & atomic.GetProjectIdentityRequest.$Shape} GetProjectIdentityRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.GetProjectIdentityRequest & atomic.GetProjectIdentityRequest.$Shape;

        /**
         * Verifies a GetProjectIdentityRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetProjectIdentityRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetProjectIdentityRequest
         */
        static fromObject(object: { [k: string]: any }): atomic.GetProjectIdentityRequest;

        /**
         * Creates a plain object from a GetProjectIdentityRequest message. Also converts values to other types if specified.
         * @param message GetProjectIdentityRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.GetProjectIdentityRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetProjectIdentityRequest to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for GetProjectIdentityRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace GetProjectIdentityRequest {

        /** Properties of a GetProjectIdentityRequest. */
        interface $Properties {

            /** GetProjectIdentityRequest repository */
            repository?: (atomic.RepositoryRef.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a GetProjectIdentityRequest. */
        type $Shape = atomic.GetProjectIdentityRequest.$Properties;
    }

    /**
     * Properties of a GetProjectIdentityResponse.
     * @deprecated Use atomic.GetProjectIdentityResponse.$Properties instead.
     */
    interface IGetProjectIdentityResponse extends atomic.GetProjectIdentityResponse.$Properties {
    }

    /** Represents a GetProjectIdentityResponse. */
    class GetProjectIdentityResponse {

        /**
         * Constructs a new GetProjectIdentityResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.GetProjectIdentityResponse.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** GetProjectIdentityResponse project. */
        project: string;

        /** GetProjectIdentityResponse urn. */
        urn: string;

        /** GetProjectIdentityResponse created. */
        created: string;

        /** GetProjectIdentityResponse minted. */
        minted: string;

        /** GetProjectIdentityResponse signedBy. */
        signedBy?: (string|null);

        /** GetProjectIdentityResponse hash. */
        hash: string;

        /**
         * Creates a new GetProjectIdentityResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetProjectIdentityResponse instance
         */
        static create(properties: atomic.GetProjectIdentityResponse.$Shape): atomic.GetProjectIdentityResponse & atomic.GetProjectIdentityResponse.$Shape;
        static create(properties?: atomic.GetProjectIdentityResponse.$Properties): atomic.GetProjectIdentityResponse;

        /**
         * Encodes the specified GetProjectIdentityResponse message. Does not implicitly {@link atomic.GetProjectIdentityResponse.verify|verify} messages.
         * @param message GetProjectIdentityResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.GetProjectIdentityResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetProjectIdentityResponse message, length delimited. Does not implicitly {@link atomic.GetProjectIdentityResponse.verify|verify} messages.
         * @param message GetProjectIdentityResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.GetProjectIdentityResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetProjectIdentityResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.GetProjectIdentityResponse & atomic.GetProjectIdentityResponse.$Shape} GetProjectIdentityResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.GetProjectIdentityResponse & atomic.GetProjectIdentityResponse.$Shape;

        /**
         * Decodes a GetProjectIdentityResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.GetProjectIdentityResponse & atomic.GetProjectIdentityResponse.$Shape} GetProjectIdentityResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.GetProjectIdentityResponse & atomic.GetProjectIdentityResponse.$Shape;

        /**
         * Verifies a GetProjectIdentityResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetProjectIdentityResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetProjectIdentityResponse
         */
        static fromObject(object: { [k: string]: any }): atomic.GetProjectIdentityResponse;

        /**
         * Creates a plain object from a GetProjectIdentityResponse message. Also converts values to other types if specified.
         * @param message GetProjectIdentityResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.GetProjectIdentityResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetProjectIdentityResponse to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for GetProjectIdentityResponse
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace GetProjectIdentityResponse {

        /** Properties of a GetProjectIdentityResponse. */
        interface $Properties {

            /** GetProjectIdentityResponse project */
            project?: (string|null);

            /** GetProjectIdentityResponse urn */
            urn?: (string|null);

            /** GetProjectIdentityResponse created */
            created?: (string|null);

            /** GetProjectIdentityResponse minted */
            minted?: (string|null);

            /** GetProjectIdentityResponse signedBy */
            signedBy?: (string|null);

            /** GetProjectIdentityResponse hash */
            hash?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a GetProjectIdentityResponse. */
        type $Shape = atomic.GetProjectIdentityResponse.$Properties;
    }

    /**
     * Properties of a GetWorkflowSnapshotRequest.
     * @deprecated Use atomic.GetWorkflowSnapshotRequest.$Properties instead.
     */
    interface IGetWorkflowSnapshotRequest extends atomic.GetWorkflowSnapshotRequest.$Properties {
    }

    /** Represents a GetWorkflowSnapshotRequest. */
    class GetWorkflowSnapshotRequest {

        /**
         * Constructs a new GetWorkflowSnapshotRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.GetWorkflowSnapshotRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** GetWorkflowSnapshotRequest repository. */
        repository?: (atomic.RepositoryRef.$Properties|null);

        /**
         * Creates a new GetWorkflowSnapshotRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetWorkflowSnapshotRequest instance
         */
        static create(properties: atomic.GetWorkflowSnapshotRequest.$Shape): atomic.GetWorkflowSnapshotRequest & atomic.GetWorkflowSnapshotRequest.$Shape;
        static create(properties?: atomic.GetWorkflowSnapshotRequest.$Properties): atomic.GetWorkflowSnapshotRequest;

        /**
         * Encodes the specified GetWorkflowSnapshotRequest message. Does not implicitly {@link atomic.GetWorkflowSnapshotRequest.verify|verify} messages.
         * @param message GetWorkflowSnapshotRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.GetWorkflowSnapshotRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetWorkflowSnapshotRequest message, length delimited. Does not implicitly {@link atomic.GetWorkflowSnapshotRequest.verify|verify} messages.
         * @param message GetWorkflowSnapshotRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.GetWorkflowSnapshotRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetWorkflowSnapshotRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.GetWorkflowSnapshotRequest & atomic.GetWorkflowSnapshotRequest.$Shape} GetWorkflowSnapshotRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.GetWorkflowSnapshotRequest & atomic.GetWorkflowSnapshotRequest.$Shape;

        /**
         * Decodes a GetWorkflowSnapshotRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.GetWorkflowSnapshotRequest & atomic.GetWorkflowSnapshotRequest.$Shape} GetWorkflowSnapshotRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.GetWorkflowSnapshotRequest & atomic.GetWorkflowSnapshotRequest.$Shape;

        /**
         * Verifies a GetWorkflowSnapshotRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetWorkflowSnapshotRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetWorkflowSnapshotRequest
         */
        static fromObject(object: { [k: string]: any }): atomic.GetWorkflowSnapshotRequest;

        /**
         * Creates a plain object from a GetWorkflowSnapshotRequest message. Also converts values to other types if specified.
         * @param message GetWorkflowSnapshotRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.GetWorkflowSnapshotRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetWorkflowSnapshotRequest to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for GetWorkflowSnapshotRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace GetWorkflowSnapshotRequest {

        /** Properties of a GetWorkflowSnapshotRequest. */
        interface $Properties {

            /** GetWorkflowSnapshotRequest repository */
            repository?: (atomic.RepositoryRef.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a GetWorkflowSnapshotRequest. */
        type $Shape = atomic.GetWorkflowSnapshotRequest.$Properties;
    }

    /**
     * Properties of a GetWorkflowSnapshotResponse.
     * @deprecated Use atomic.GetWorkflowSnapshotResponse.$Properties instead.
     */
    interface IGetWorkflowSnapshotResponse extends atomic.GetWorkflowSnapshotResponse.$Properties {
    }

    /** Represents a GetWorkflowSnapshotResponse. */
    class GetWorkflowSnapshotResponse {

        /**
         * Constructs a new GetWorkflowSnapshotResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.GetWorkflowSnapshotResponse.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** GetWorkflowSnapshotResponse apiVersion. */
        apiVersion: number;

        /** GetWorkflowSnapshotResponse generation. */
        generation: number;

        /** GetWorkflowSnapshotResponse ontologyVersion. */
        ontologyVersion: string;

        /** GetWorkflowSnapshotResponse identity. */
        identity: string;

        /** GetWorkflowSnapshotResponse nodes. */
        nodes: atomic.KGNode.$Properties[];

        /** GetWorkflowSnapshotResponse edges. */
        edges: atomic.KGEdge.$Properties[];

        /**
         * Creates a new GetWorkflowSnapshotResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetWorkflowSnapshotResponse instance
         */
        static create(properties: atomic.GetWorkflowSnapshotResponse.$Shape): atomic.GetWorkflowSnapshotResponse & atomic.GetWorkflowSnapshotResponse.$Shape;
        static create(properties?: atomic.GetWorkflowSnapshotResponse.$Properties): atomic.GetWorkflowSnapshotResponse;

        /**
         * Encodes the specified GetWorkflowSnapshotResponse message. Does not implicitly {@link atomic.GetWorkflowSnapshotResponse.verify|verify} messages.
         * @param message GetWorkflowSnapshotResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.GetWorkflowSnapshotResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetWorkflowSnapshotResponse message, length delimited. Does not implicitly {@link atomic.GetWorkflowSnapshotResponse.verify|verify} messages.
         * @param message GetWorkflowSnapshotResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.GetWorkflowSnapshotResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetWorkflowSnapshotResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.GetWorkflowSnapshotResponse & atomic.GetWorkflowSnapshotResponse.$Shape} GetWorkflowSnapshotResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.GetWorkflowSnapshotResponse & atomic.GetWorkflowSnapshotResponse.$Shape;

        /**
         * Decodes a GetWorkflowSnapshotResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.GetWorkflowSnapshotResponse & atomic.GetWorkflowSnapshotResponse.$Shape} GetWorkflowSnapshotResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.GetWorkflowSnapshotResponse & atomic.GetWorkflowSnapshotResponse.$Shape;

        /**
         * Verifies a GetWorkflowSnapshotResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetWorkflowSnapshotResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetWorkflowSnapshotResponse
         */
        static fromObject(object: { [k: string]: any }): atomic.GetWorkflowSnapshotResponse;

        /**
         * Creates a plain object from a GetWorkflowSnapshotResponse message. Also converts values to other types if specified.
         * @param message GetWorkflowSnapshotResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.GetWorkflowSnapshotResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetWorkflowSnapshotResponse to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for GetWorkflowSnapshotResponse
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace GetWorkflowSnapshotResponse {

        /** Properties of a GetWorkflowSnapshotResponse. */
        interface $Properties {

            /** GetWorkflowSnapshotResponse apiVersion */
            apiVersion?: (number|null);

            /** GetWorkflowSnapshotResponse generation */
            generation?: (number|null);

            /** GetWorkflowSnapshotResponse ontologyVersion */
            ontologyVersion?: (string|null);

            /** GetWorkflowSnapshotResponse identity */
            identity?: (string|null);

            /** GetWorkflowSnapshotResponse nodes */
            nodes?: (atomic.KGNode.$Properties[]|null);

            /** GetWorkflowSnapshotResponse edges */
            edges?: (atomic.KGEdge.$Properties[]|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a GetWorkflowSnapshotResponse. */
        type $Shape = atomic.GetWorkflowSnapshotResponse.$Properties;
    }

    /**
     * Properties of a MaintainKnowledgeGraphRequest.
     * @deprecated Use atomic.MaintainKnowledgeGraphRequest.$Properties instead.
     */
    interface IMaintainKnowledgeGraphRequest extends atomic.MaintainKnowledgeGraphRequest.$Properties {
    }

    /** Represents a MaintainKnowledgeGraphRequest. */
    class MaintainKnowledgeGraphRequest {

        /**
         * Constructs a new MaintainKnowledgeGraphRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.MaintainKnowledgeGraphRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** MaintainKnowledgeGraphRequest repository. */
        repository?: (atomic.RepositoryRef.$Properties|null);

        /** MaintainKnowledgeGraphRequest meta. */
        meta?: (atomic.RequestMeta.$Properties|null);

        /** MaintainKnowledgeGraphRequest action. */
        action: atomic.KnowledgeMaintainAction;

        /** MaintainKnowledgeGraphRequest scope. */
        scope?: (string|null);

        /** MaintainKnowledgeGraphRequest changes. */
        changes: atomic.Hash.$Properties[];

        /** MaintainKnowledgeGraphRequest signerAuthHeaders. */
        signerAuthHeaders: { [k: string]: string };

        /** MaintainKnowledgeGraphRequest signerRemoteUrl. */
        signerRemoteUrl?: (string|null);

        /**
         * Creates a new MaintainKnowledgeGraphRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MaintainKnowledgeGraphRequest instance
         */
        static create(properties: atomic.MaintainKnowledgeGraphRequest.$Shape): atomic.MaintainKnowledgeGraphRequest & atomic.MaintainKnowledgeGraphRequest.$Shape;
        static create(properties?: atomic.MaintainKnowledgeGraphRequest.$Properties): atomic.MaintainKnowledgeGraphRequest;

        /**
         * Encodes the specified MaintainKnowledgeGraphRequest message. Does not implicitly {@link atomic.MaintainKnowledgeGraphRequest.verify|verify} messages.
         * @param message MaintainKnowledgeGraphRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.MaintainKnowledgeGraphRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MaintainKnowledgeGraphRequest message, length delimited. Does not implicitly {@link atomic.MaintainKnowledgeGraphRequest.verify|verify} messages.
         * @param message MaintainKnowledgeGraphRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.MaintainKnowledgeGraphRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MaintainKnowledgeGraphRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.MaintainKnowledgeGraphRequest & atomic.MaintainKnowledgeGraphRequest.$Shape} MaintainKnowledgeGraphRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.MaintainKnowledgeGraphRequest & atomic.MaintainKnowledgeGraphRequest.$Shape;

        /**
         * Decodes a MaintainKnowledgeGraphRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.MaintainKnowledgeGraphRequest & atomic.MaintainKnowledgeGraphRequest.$Shape} MaintainKnowledgeGraphRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.MaintainKnowledgeGraphRequest & atomic.MaintainKnowledgeGraphRequest.$Shape;

        /**
         * Verifies a MaintainKnowledgeGraphRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MaintainKnowledgeGraphRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MaintainKnowledgeGraphRequest
         */
        static fromObject(object: { [k: string]: any }): atomic.MaintainKnowledgeGraphRequest;

        /**
         * Creates a plain object from a MaintainKnowledgeGraphRequest message. Also converts values to other types if specified.
         * @param message MaintainKnowledgeGraphRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.MaintainKnowledgeGraphRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MaintainKnowledgeGraphRequest to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for MaintainKnowledgeGraphRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace MaintainKnowledgeGraphRequest {

        /** Properties of a MaintainKnowledgeGraphRequest. */
        interface $Properties {

            /** MaintainKnowledgeGraphRequest repository */
            repository?: (atomic.RepositoryRef.$Properties|null);

            /** MaintainKnowledgeGraphRequest meta */
            meta?: (atomic.RequestMeta.$Properties|null);

            /** MaintainKnowledgeGraphRequest action */
            action?: (atomic.KnowledgeMaintainAction|null);

            /** MaintainKnowledgeGraphRequest scope */
            scope?: (string|null);

            /** MaintainKnowledgeGraphRequest changes */
            changes?: (atomic.Hash.$Properties[]|null);

            /** MaintainKnowledgeGraphRequest signerAuthHeaders */
            signerAuthHeaders?: ({ [k: string]: string }|null);

            /** MaintainKnowledgeGraphRequest signerRemoteUrl */
            signerRemoteUrl?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a MaintainKnowledgeGraphRequest. */
        type $Shape = atomic.MaintainKnowledgeGraphRequest.$Properties;
    }

    /** KnowledgeMaintainAction enum. */
    enum KnowledgeMaintainAction {

        /** KNOWLEDGE_MAINTAIN_ACTION_UNSPECIFIED value */
        KNOWLEDGE_MAINTAIN_ACTION_UNSPECIFIED = 0,

        /** KNOWLEDGE_MAINTAIN_ACTION_EMBED value */
        KNOWLEDGE_MAINTAIN_ACTION_EMBED = 1,

        /** KNOWLEDGE_MAINTAIN_ACTION_ENRICH value */
        KNOWLEDGE_MAINTAIN_ACTION_ENRICH = 2,

        /** KNOWLEDGE_MAINTAIN_ACTION_REINDEX value */
        KNOWLEDGE_MAINTAIN_ACTION_REINDEX = 3
    }

    /**
     * Properties of a MaintainKnowledgeGraphResponse.
     * @deprecated Use atomic.MaintainKnowledgeGraphResponse.$Properties instead.
     */
    interface IMaintainKnowledgeGraphResponse extends atomic.MaintainKnowledgeGraphResponse.$Properties {
    }

    /** Represents a MaintainKnowledgeGraphResponse. */
    class MaintainKnowledgeGraphResponse {

        /**
         * Constructs a new MaintainKnowledgeGraphResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: atomic.MaintainKnowledgeGraphResponse.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** MaintainKnowledgeGraphResponse processed. */
        processed: (number|Long);

        /** MaintainKnowledgeGraphResponse meta. */
        meta?: (atomic.ResponseMeta.$Properties|null);

        /** MaintainKnowledgeGraphResponse provider. */
        provider?: (string|null);

        /** MaintainKnowledgeGraphResponse dimensions. */
        dimensions?: (number|null);

        /** MaintainKnowledgeGraphResponse path. */
        path?: (string|null);

        /**
         * Creates a new MaintainKnowledgeGraphResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MaintainKnowledgeGraphResponse instance
         */
        static create(properties: atomic.MaintainKnowledgeGraphResponse.$Shape): atomic.MaintainKnowledgeGraphResponse & atomic.MaintainKnowledgeGraphResponse.$Shape;
        static create(properties?: atomic.MaintainKnowledgeGraphResponse.$Properties): atomic.MaintainKnowledgeGraphResponse;

        /**
         * Encodes the specified MaintainKnowledgeGraphResponse message. Does not implicitly {@link atomic.MaintainKnowledgeGraphResponse.verify|verify} messages.
         * @param message MaintainKnowledgeGraphResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: atomic.MaintainKnowledgeGraphResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MaintainKnowledgeGraphResponse message, length delimited. Does not implicitly {@link atomic.MaintainKnowledgeGraphResponse.verify|verify} messages.
         * @param message MaintainKnowledgeGraphResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: atomic.MaintainKnowledgeGraphResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MaintainKnowledgeGraphResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {atomic.MaintainKnowledgeGraphResponse & atomic.MaintainKnowledgeGraphResponse.$Shape} MaintainKnowledgeGraphResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): atomic.MaintainKnowledgeGraphResponse & atomic.MaintainKnowledgeGraphResponse.$Shape;

        /**
         * Decodes a MaintainKnowledgeGraphResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {atomic.MaintainKnowledgeGraphResponse & atomic.MaintainKnowledgeGraphResponse.$Shape} MaintainKnowledgeGraphResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): atomic.MaintainKnowledgeGraphResponse & atomic.MaintainKnowledgeGraphResponse.$Shape;

        /**
         * Verifies a MaintainKnowledgeGraphResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MaintainKnowledgeGraphResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MaintainKnowledgeGraphResponse
         */
        static fromObject(object: { [k: string]: any }): atomic.MaintainKnowledgeGraphResponse;

        /**
         * Creates a plain object from a MaintainKnowledgeGraphResponse message. Also converts values to other types if specified.
         * @param message MaintainKnowledgeGraphResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: atomic.MaintainKnowledgeGraphResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MaintainKnowledgeGraphResponse to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for MaintainKnowledgeGraphResponse
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace MaintainKnowledgeGraphResponse {

        /** Properties of a MaintainKnowledgeGraphResponse. */
        interface $Properties {

            /** MaintainKnowledgeGraphResponse processed */
            processed?: (number|Long|null);

            /** MaintainKnowledgeGraphResponse meta */
            meta?: (atomic.ResponseMeta.$Properties|null);

            /** MaintainKnowledgeGraphResponse provider */
            provider?: (string|null);

            /** MaintainKnowledgeGraphResponse dimensions */
            dimensions?: (number|null);

            /** MaintainKnowledgeGraphResponse path */
            path?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a MaintainKnowledgeGraphResponse. */
        type $Shape = atomic.MaintainKnowledgeGraphResponse.$Properties;
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /**
         * Properties of a Timestamp.
         * @deprecated Use google.protobuf.Timestamp.$Properties instead.
         */
        interface ITimestamp extends google.protobuf.Timestamp.$Properties {
        }

        /** Represents a Timestamp. */
        class Timestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.Timestamp.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** Timestamp seconds. */
            seconds: (number|Long);

            /** Timestamp nanos. */
            nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            static create(properties: google.protobuf.Timestamp.$Shape): google.protobuf.Timestamp & google.protobuf.Timestamp.$Shape;
            static create(properties?: google.protobuf.Timestamp.$Properties): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: google.protobuf.Timestamp.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: google.protobuf.Timestamp.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {google.protobuf.Timestamp & google.protobuf.Timestamp.$Shape} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp & google.protobuf.Timestamp.$Shape;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {google.protobuf.Timestamp & google.protobuf.Timestamp.$Shape} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp & google.protobuf.Timestamp.$Shape;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Timestamp
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Timestamp {

            /** Properties of a Timestamp. */
            interface $Properties {

                /** Timestamp seconds */
                seconds?: (number|Long|null);

                /** Timestamp nanos */
                nanos?: (number|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a Timestamp. */
            type $Shape = google.protobuf.Timestamp.$Properties;
        }
    }
}
