from django.urls import path
from .views import clear_clicked, session_view

urlpatterns = [
    path('', session_view),
    path('clear_session/', clear_clicked),
]
