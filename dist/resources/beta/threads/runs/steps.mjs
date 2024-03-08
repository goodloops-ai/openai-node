// File generated from our OpenAPI spec by Stainless.
import { APIResource } from '../../../../resource.mjs';
import { isRequestOptions } from '../../../../core.mjs';
import * as StepsAPI from '../../../../resources/beta/threads/runs/steps.mjs';
import { CursorPage } from '../../../../pagination.mjs';
export class Steps extends APIResource {
    /**
     * Retrieves a run step.
     */
    retrieve(threadId, runId, stepId, options) {
        return this._client.get(`/threads/${threadId}/runs/${runId}/steps/${stepId}`, {
            ...options,
            headers: { 'OpenAI-Beta': 'assistants=v1', ...options?.headers },
        });
    }
    list(threadId, runId, query = {}, options) {
        if (isRequestOptions(query)) {
            return this.list(threadId, runId, {}, query);
        }
        return this._client.getAPIList(`/threads/${threadId}/runs/${runId}/steps`, RunStepsPage, {
            query,
            ...options,
            headers: { 'OpenAI-Beta': 'assistants=v1', ...options?.headers },
        });
    }
}
export class RunStepsPage extends CursorPage {
}
(function (Steps) {
    Steps.RunStepsPage = StepsAPI.RunStepsPage;
})(Steps || (Steps = {}));
//# sourceMappingURL=steps.mjs.map