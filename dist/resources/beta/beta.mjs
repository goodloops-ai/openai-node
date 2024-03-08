// File generated from our OpenAPI spec by Stainless.
import { APIResource } from '../../resource.mjs';
import * as AssistantsAPI from '../../resources/beta/assistants/assistants.mjs';
import * as ChatAPI from '../../resources/beta/chat/chat.mjs';
import * as ThreadsAPI from '../../resources/beta/threads/threads.mjs';
export class Beta extends APIResource {
    constructor() {
        super(...arguments);
        this.chat = new ChatAPI.Chat(this._client);
        this.assistants = new AssistantsAPI.Assistants(this._client);
        this.threads = new ThreadsAPI.Threads(this._client);
    }
}
(function (Beta) {
    Beta.Chat = ChatAPI.Chat;
    Beta.Assistants = AssistantsAPI.Assistants;
    Beta.AssistantsPage = AssistantsAPI.AssistantsPage;
    Beta.Threads = ThreadsAPI.Threads;
})(Beta || (Beta = {}));
//# sourceMappingURL=beta.mjs.map