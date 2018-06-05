import json

import auroraapi as aurora
from auroraapi.text import Text
from auroraapi.speech import continuously_listen


if __name__ == '__main__':
	aurora.config.app_id    = "2907c5b01511489d6a56e306f8e1a544"
	aurora.config.app_token = "TwFsznHlJL8Do1VnZxbTTi072yHqvVs"

	data = {
		'Timer': {},
		'Audio': {},
		'Appliance': {}
	}

	timer_dict = {
		'one minute': 1,
		'two minutes': 2,
		'three minutes': 3,
		'four minutes': 4,
		'five minutes': 5,
		'six minutes': 6,
		'seven minutes': 7,
		'eight minutes': 8,
		'nine minutes': 9,
		'20 minutes': 20,
		'one hour': 60,
	}

	for speech in continuously_listen(silence_len=.5):
		try:
			i = speech.text().interpret()
			print('LISTENING')
			print()

			if i.intent == "set_timer":
				print('SETTING TIMER')
				print(i.entities)
				if i.entities['duration'] in timer_dict:
					data['Timer']['duration'] = timer_dict[i.entities['duration']]
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

			with open('data.json', 'w+') as outfile:
				json.dump(data, outfile)
		except:
			pass

