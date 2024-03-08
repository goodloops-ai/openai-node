// File generated from our OpenAPI spec by Stainless.
import { APIResource } from '../../resource.mjs';
import * as SpeechAPI from '../../resources/audio/speech.mjs';
import * as TranscriptionsAPI from '../../resources/audio/transcriptions.mjs';
import * as TranslationsAPI from '../../resources/audio/translations.mjs';
export class Audio extends APIResource {
    constructor() {
        super(...arguments);
        this.transcriptions = new TranscriptionsAPI.Transcriptions(this._client);
        this.translations = new TranslationsAPI.Translations(this._client);
        this.speech = new SpeechAPI.Speech(this._client);
    }
}
(function (Audio) {
    Audio.Transcriptions = TranscriptionsAPI.Transcriptions;
    Audio.Translations = TranslationsAPI.Translations;
    Audio.Speech = SpeechAPI.Speech;
})(Audio || (Audio = {}));
//# sourceMappingURL=audio.mjs.map