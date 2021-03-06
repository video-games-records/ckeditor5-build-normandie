/**
 * Custom plugin to insert emojis
 * @link https://ckeditor.com/docs/ckeditor5/latest/framework/guides/creating-simple-plugin.html
 */

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

class SpecialCharactersEmoji extends Plugin {
	init() {
		const editor = this.editor;

		editor.plugins.get('SpecialCharacters').addItems('Emojis', [
			{ title: 'Happy', character: '๐' } ,
			{ title: 'LOL', character: '๐' },
			{ title: 'Cute', character: '๐' },
			{ title: 'Aww', character: '๐' },
			{ title: 'Whistle', character: '๐' },
			{ title: 'Smile', character: '๐' },
			{ title: 'WTF', character: '๐' },
			{ title: 'OK', character: '๐' },
			{ title: 'Love', character: '๐ฅฐ' },
			{ title: 'Yes', character: '๐' },
			{ title: 'Slurp', character: '๐' },
			{ title: 'What', character: '๐ค' },
			{ title: 'Hidden', character: '๐ค' },
			{ title: 'So', character: '๐คจ' },
			{ title: 'Hum', character: '๐' },
			{ title: 'Uhh', character: '๐ถ' },
			{ title: 'Yeah', character: '๐' },
			{ title: 'No', character: '๐' },
			{ title: 'Pff', character: '๐' },
			{ title: 'Sleep', character: '๐ด' },
			{ title: 'Sick', character: '๐คข' },
			{ title: 'KO', character: '๐ต' },
			{ title: 'Burnt', character: '๐คฏ' },
			{ title: 'Cool', character: '๐' },
			{ title: 'Well', character: '๐' },
			{ title: 'Sad', character: 'โน๏ธ' },
			{ title: 'Surprised', character: '๐ฒ' },
			{ title: 'Argh', character: '๐จ' },
			{ title: 'Cry', character: '๐ญ' },
			{ title: 'Damn', character: '๐' },
			{ title: 'Angry', character: '๐ก' },
			{ title: 'Dead', character: '๐' },
			{ title: 'Robot', character: '๐ค' },
		]);
	}
}

export default SpecialCharactersEmoji;
