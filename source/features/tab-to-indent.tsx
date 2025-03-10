import onetime from 'onetime';
import {eventHandler} from 'indent-textarea';
import * as pageDetect from 'github-url-detection';

import features from '.';
import {onCommentFieldKeydown} from '../github-events/on-field-keydown';

function init(): void {
	onCommentFieldKeydown(eventHandler);
}

void features.add(__filebasename, {
	include: [
		pageDetect.hasRichTextEditor,
	],
	awaitDomReady: false,
	deduplicate: 'has-rgh-inner',
	init: onetime(init),
});
