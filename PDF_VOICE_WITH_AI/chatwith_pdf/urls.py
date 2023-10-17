from django.contrib import admin
from django.urls import path
from .views import chat_with_pdf, upload_pdf,store_results,send_results

urlpatterns = [
    path('pdfupload/',upload_pdf,name="pdflist"),
    path('pdfview/',upload_pdf,name="pdflist"),
    path('pdfchat/',chat_with_pdf,name="pdfchat"),
    path('storeResults/',store_results,name="storeResults"),
    path('sendResults/',send_results,name="sendResults"),
    
]