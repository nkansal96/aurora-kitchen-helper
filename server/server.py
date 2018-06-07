from auroraapi.speech import continuously_listen
import auroraapi as aurora
import requests

aurora.config.app_id = "2907c5b01511489d6a56e306f8e1a544"
aurora.config.app_token = "TwFsznHlJL8Do1VnZxbTTi072yHqvVs"

data = {
    'minutesLeftOnTimer': None,
    'currentSong': None,
    'activatedAppliances': [],
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


def handleSetTimer(entities):
    time_left = entities['duration']
    if time_left in timer_dict:
        data['minutesLeftOnTimer'] = timer_dict[time_left]


def handlePlaySong(entities):
    data['currentSong'] = entities['song']


def handleTurnOnAppliance(entities):
    data['activatedAppliances'].append(entities['object'])


def handleInterpretedSpeech(interpretation):
    print('Got Intent: "{}"'.format(interpretation.intent))
    print(interpretation.entities)

    {
        'set_timer': handleSetTimer,
        'play_song': handlePlaySong,
        'turn_on': handleTurnOnAppliance,
    }.get(interpretation.intent, lambda: None)(interpretation.entities)

    r = requests.post('http://localhost:3000/update-data', json=data)

    if r.status_code != 200:
        print('Error posting data ({})'.format(r.status_code))


for speech in continuously_listen(silence_len=.5):
    print('LISTENING')
    try:
        interpretation = speech.text().interpret()
        handleInterpretedSpeech(interpretation)
    except:
        pass
