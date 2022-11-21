from django.contrib import admin
from django.urls import path
from AppBackend.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('Home/', ReactView.as_view(), name="something"),
]