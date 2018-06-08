from unittest import TestCase
from unittest.mock import MagicMock
import json
import responses
import server


class ServerTest(TestCase):
    def setUp(self):
        self.data = server.initial_data

    def test_handle_set_timer(self):
        entities = {
            'duration': 'five minutes',
        }
        new_data = server.handle_set_timer(entities, self.data)
        self.assertEqual(new_data['minutesLeftOnTimer'], 5)

    def test_handle_play_song(self):
        entities = {
            'song': 'Call Me Maybe',
        }
        new_data = server.handle_play_song(entities, self.data)
        self.assertEqual(new_data['currentSong'], 'Call Me Maybe')

    def test_handle_turn_on_appliance(self):
        self.assertEqual(len(self.data['activatedAppliances']), 0)
        entities = {
            'object': 'electric spoon',
        }
        new_data = server.handle_turn_on_appliance(entities, self.data)
        self.assertEqual(len(new_data['activatedAppliances']), 1)
        self.assertEqual(new_data['activatedAppliances'][0], 'electric spoon')

    @responses.activate
    def test_handle_interpreted_speech(self):
        interpretation = MagicMock(intent='play_song',
                                   entities={'song': 'Friday'})
        responses.add(responses.POST, 'http://localhost:3000/update-data')
        server.handle_interpreted_speech(interpretation, self.data)
        self.assertEqual(len(responses.calls), 1)
        request_body = json.loads(responses.calls[0].request.body)
        self.assertEqual(request_body['currentSong'], 'Friday')
