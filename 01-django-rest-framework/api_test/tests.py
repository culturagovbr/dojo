from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework.test import APITestCase

# Escrever uma API REST
# GET que vai retornar uma lista de Estados(UF)
# POST Criar um novo estado
class EstadoTest(APITestCase):

    def test_get_url_retorna_200(self):

        response = self.client.get('/estados/', format='json')

        self.assertEqual(response.status_code, 200)

    def testar_retorna_lista(self):

        response = self.client.get('/estados/', format='json')

        self.assertIsInstance(response.data, list)

    def test_verificar_estado_go(self):

        response = self.client.get('/estados/', format='json')

        self.assertContains(response, 'go')

    def test_post_url_retorna_201(self):

        response = self.client.post("/estados/", "Estado CGTEC")

        self.assertEqual(response.status_code, 201)

    def test_inserir_estado_retorna_valor(self):

        response = self.client.post("/estados/", "DF")

        self.assertContains(response, "DF", status_code=201)


    def test_inserir_estado_retorna_valor_inserido(self):

        uf = 'RJ'

        response = self.client.post("/estados/", uf)

        self.assertContains(response, uf, status_code=201)

    def test_inserir_e_consultar_registros(self):
         
        response1 = self.client.post("/estados/", "MG")
        response2 = self.client.post("/estados/", "ES")
        response3 = self.client.post("/estados/", "TO")
        
        response_get= self.client.get("/estados/")
        self.assertContains(response_get,"MG")
        self.assertContains(response_get,"ES")
        self.assertContains(response_get,"TO")

    def test_verificar_campo_descricao(self):

       response = self.client.get('/estados/', format='json')

       self.assertContains(response, 'sigla')
       self.assertContains(response, 'nome')


