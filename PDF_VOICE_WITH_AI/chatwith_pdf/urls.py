from django.contrib import admin
from django.urls import path
from .views import chat_with_pdf, upload_pdf

urlpatterns = [
    path('pdfupload/',upload_pdf,name="pdflist"),
    path('pdfview/',upload_pdf,name="pdflist"),
    path('pdfchat/',chat_with_pdf,name="pdfchat"),
    
]