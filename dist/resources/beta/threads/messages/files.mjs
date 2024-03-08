// File generated from our OpenAPI spec by Stainless.
import { APIResource } from '../../../../resource.mjs';
import { isRequestOptions } from '../../../../core.mjs';
import * as FilesAPI from '../../../../resources/beta/threads/messages/files.mjs';
import { CursorPage } from '../../../../pagination.mjs';
export class Files extends APIResource {
    /**
     * Retrieves a message file.
     */
    retrieve(threadId, messageId, fileId, options) {
        return this._client.get(`/threads/${threadId}/messages/${messageId}/files/${fileId}`, {
            ...options,
            headers: { 'OpenAI-Beta': 'assistants=v1', ...options?.headers },
        });
    }
    list(threadId, messageId, query = {}, options) {
        if (isRequestOptions(query)) {
            return this.list(threadId, messageId, {}, query);
        }
        return this._client.getAPIList(`/threads/${threadId}/messages/${messageId}/files`, MessageFilesPage, {
            query,
            ...options,
            headers: { 'OpenAI-Beta': 'assistants=v1', ...options?.headers },
        });
    }
}
export class MessageFilesPage extends CursorPage {
}
(function (Files) {
    Files.MessageFilesPage = FilesAPI.MessageFilesPage;
})(Files || (Files = {}));
//# sourceMappingURL=files.mjs.map