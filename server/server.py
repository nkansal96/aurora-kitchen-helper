from auroraapi.speech import continuously_listen
import auroraapi as aurora
import requests

aurora.config.app_id = "2907c5b01511489d6a56e306f8e1a544"
aurora.config.app_token = "TwFsznHlJL8Do1VnZxbTTi072yHqvVs"

initial_data = {
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


def handle_set_timer(entities, data):
    time_left = entities['duration']
    if time_left in timer_dict:
        data['minutesLeftOnTimer'] = timer_dict[time_left]
    return data


def handle_play_song(entities, data):
    data['currentSong'] = entities['song']
    return data


def handle_turn_on_appliance(entities, data):
    data['activatedAppliances'].append(entities['object'])
    return data


def post_data(data):
    r = requests.post('http://localhost:3000/update-data', json=data)
    if r.status_code != 200:
        print('Error posting data ({})'.format(r.status_code))


def handle_interpreted_speech(interpretation, data, post_data=post_data):
    print('Got Intent: "{}"'.format(interpretation.intent))
    print(interpretation.entities)

    {
        'set_timer': handle_set_timer,
        'play_song': handle_play_song,
        'turn_on': handle_turn_on_appliance,
    }.get(interpretation.intent, lambda: None)(interpretation.entities, data)

    post_data(data)


def main():
    data = initial_data

    for speech in continuously_listen(silence_len=.5):
        print('Listening...')
        try:
            interpretation = speech.text().interpret()
            handle_interpreted_speech(interpretation, data)
        except:
            pass


if __name__ == '__main__':
    main()
