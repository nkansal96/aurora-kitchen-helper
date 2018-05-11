from rest_framework import status
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response


class TimerView(GenericAPIView):

    def post(self):
        data = {}

        return Response(status=status.HTTP_200_OK, data={})


class AudioView(GenericAPIView):

    def post(self):
        data = {}

        return Response(status=status.HTTP_200_OK, data={})


class DeviceView(GenericAPIView):

    def post(self):
        data = {}

        return Response(status=status.HTTP_200_OK, data={})
