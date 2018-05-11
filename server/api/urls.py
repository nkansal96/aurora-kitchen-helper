from django.conf.urls import url

from api.views import TimerView

urlpatterns = [
    url(r'^timer/?$', TimerView.as_view(), name='timer'),
    url(r'^audio/?$', TimerView.as_view(), name='audio'),
    url(r'^device/?$', TimerView.as_view(), name='device'),
]