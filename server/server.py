import json

import auroraapi as aurora
from auroraapi.text import Text
from auroraapi.speech import continuously_listen


if __name__ == '__main__':
	aurora.config.app_id    = "2907c5b01511489d6a56e306f8e1a544"
	aurora.config.app_token = "TwFsznHlJL8Do1VnZxbTTi072yHqvVs"

	data={
		'Timers': {},
		'Audio': {},
		'Appliance': {}
	}

	for speech in continuously_listen(silence_len=1):
		try:
			i = speech.text().interpret()
			print('LISTENING')
			print()

			if i.intent == "set_timer":
				print('SETTING TIMER')
				print(i.entities)
				data['Timers']['duration'] = i.entities['duration']
				print()
			elif i.intent == "play_song":
				print('PLAYING SONG')
				print(i.entities)
				data['Audio']['song'] = i.entities['song']
				print()
			elif i.intent == "turn_on":
				print('TURNING ON')
				print(i.entities)
				data['Appliance'][i.entities['object']] = 'ON'
				print()
			else:
				print('OTHER')
				print(speech.text().text)
				print()

			with open('data.txt', 'w+') as outfile:
				json.dump(data, outfile)
		except:
			pass

