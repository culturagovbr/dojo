from django.shortcuts import render
from rest_framework.response import Response
from .models import Estado
from pprint import pprint

from rest_framework.decorators import api_view

# Create your views here.
@api_view(['GET', 'POST'])
def estados(request):
    
    if request.method == 'POST':
        data = Estado.objects.create(sigla=request.data)
        return Response(data.sigla, status=201)
    else:
        data = [
            {
                "sigla": 'go',
                "nome": 'goias'
            }
        ]

        for estado in Estado.objects.all():
            data.append({"sigla":estado.sigla, "nome": estado.nome})
        
        
        return Response(data, status=200, content_type="application/json")
