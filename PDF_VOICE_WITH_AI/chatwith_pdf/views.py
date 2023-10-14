
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, redirect
from .models import PDF
from .serializers import PDFSerializer
from rest_framework.parsers import JSONParser
from django.views.decorators.csrf import csrf_exempt
import fitz



@csrf_exempt
def upload_pdf(request):
    if request.method=='GET':
        pdfs = PDF.objects.all()
        pdf_serializer = PDFSerializer(pdfs, many=True)
        return JsonResponse(pdf_serializer.data, safe=False)

    elif request.method=='POST' and request.FILES['pdfFile']:
        pdf_data=request.FILES['pdfFile']
        pdf_instance = PDF(pdf_file=pdf_data)
        pdf_instance.save()
        return JsonResponse("Added Successfully!!" , safe=False)
    else:
         return JsonResponse("Failed" , safe=False)
    

@csrf_exempt
def chat_with_pdf(request):
    if request.method=='GET':
        id =request.GET.get('id')
        pdfs = PDF.objects.all()
        pdf_serializer = PDFSerializer(pdfs, many=True)
        pdfs=pdf_serializer.data
        text = ""
        doc = fitz.open('.'+pdfs[int(id)]["pdf_file"])
    
        for page_num in range(len(doc)):
           page = doc.load_page(page_num)
           text += page.get_text()
    
    return JsonResponse(text,safe=False)


  
    



