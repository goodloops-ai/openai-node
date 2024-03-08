// File generated from our OpenAPI spec by Stainless.
import { APIResource } from '../../../resource.mjs';
import * as CompletionsAPI from '../../../resources/beta/chat/completions.mjs';
export class Chat extends APIResource {
    constructor() {
        super(...arguments);
        this.completions = new CompletionsAPI.Completions(this._client);
    }
}
(function (Chat) {
    Chat.Completions = CompletionsAPI.Completions;
})(Chat || (Chat = {}));
//# sourceMappingURL=chat.mjs.map