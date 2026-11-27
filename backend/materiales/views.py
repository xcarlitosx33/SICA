from django.shortcuts import render

# Create your views here.
import json
from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods

from .models import Categoria_Objeto, Tipo_objeto, Elemento


@require_http_methods(["GET", "POST"])
@csrf_exempt
def categorias_view(request):
    if request.method == "GET":
        categorias = list(
            Categoria_Objeto.objects.values("id", "nombre_categoria", "descripcion")
        )
        return JsonResponse({"categorias": categorias}, status=200)

    try:
        data = json.loads(request.body)
        nombre = (data.get("nombre_categoria") or "").strip()
        if not nombre:
            return JsonResponse(
                {"error": "El campo 'nombre_categoria' es obligatorio."},
                status=400,
            )

        categoria = Categoria_Objeto.objects.create(
            nombre_categoria=nombre,
            descripcion=data.get("descripcion", ""),
        )
        return JsonResponse(
            {
                "id": categoria.id,
                "nombre_categoria": categoria.nombre_categoria,
                "descripcion": categoria.descripcion,
            },
            status=201,
        )
    except json.JSONDecodeError:
        return JsonResponse({"error": "JSON inválido."}, status=400)


@require_http_methods(["GET", "POST"])
@csrf_exempt
def tipos_objeto_view(request):
    if request.method == "GET":
        queryset = Tipo_objeto.objects.select_related("categoria").all()
        categoria_id = request.GET.get("categoria_id")
        if categoria_id:
            queryset = queryset.filter(categoria_id=categoria_id)

        tipos = [
            {
                "id": tipo.id,
                "categoria_id": tipo.categoria_id,
                "nombre_categoria": tipo.categoria.nombre_categoria,
                "nombre_tipo": tipo.nombre_tipo,
                "descripcion": tipo.descripcion,
            }
            for tipo in queryset
        ]
        return JsonResponse({"tipos": tipos}, status=200)

    try:
        data = json.loads(request.body)
        categoria = get_object_or_404(Categoria_Objeto, pk=data.get("categoria_id"))
        nombre_tipo = (data.get("nombre_tipo") or "").strip()
        if not nombre_tipo:
            return JsonResponse(
                {"error": "El campo 'nombre_tipo' es obligatorio."},
                status=400,
            )

        tipo = Tipo_objeto.objects.create(
            categoria=categoria,
            nombre_tipo=nombre_tipo,
            descripcion=data.get("descripcion", ""),
        )
        return JsonResponse(
            {
                "id": tipo.id,
                "categoria_id": tipo.categoria_id,
                "nombre_tipo": tipo.nombre_tipo,
                "descripcion": tipo.descripcion,
            },
            status=201,
        )
    except json.JSONDecodeError:
        return JsonResponse({"error": "JSON inválido."}, status=400)


@require_http_methods(["GET", "POST"])
@csrf_exempt
def elementos_view(request):
    if request.method == "GET":
        queryset = (
            Elemento.objects.select_related("tipo_objeto", "tipo_objeto__categoria")
            .prefetch_related("ambientes")
            .all()
        )

        estado = request.GET.get("estado")
        tipo_id = request.GET.get("tipo_id")
        ambiente_id = request.GET.get("ambiente_id")

        if estado:
            queryset = queryset.filter(estado=estado)
        if tipo_id:
            queryset = queryset.filter(tipo_objeto_id=tipo_id)
        if ambiente_id:
            queryset = queryset.filter(ambientes__id=ambiente_id)

        elementos = [
            {
                "id": el.id,
                "codigo_barras": el.codigo_barras,
                "nombre_objeto": el.nombre_objeto,
                "marca_ingreso": el.marca_ingreso,
                "fecha_ingreso": el.fecha_ingreso.isoformat(),
                "estado": el.estado,
                "vida_estimada_util": el.vida_estimada_util,
                "tipo_objeto_id": el.tipo_objeto_id,
                "nombre_tipo": el.tipo_objeto.nombre_tipo,
                "ambientes": [amb.id for amb in el.ambientes.all()],
            }
            for el in queryset
        ]
        return JsonResponse({"elementos": elementos}, status=200)

    try:
        data = json.loads(request.body)
        tipo_objeto = get_object_or_404(Tipo_objeto, pk=data.get("tipo_objeto_id"))

        elemento = Elemento.objects.create(
            tipo_objeto=tipo_objeto,
            codigo_barras=data["codigo_barras"],
            nombre_objeto=data["nombre_objeto"],
            marca_ingreso=data.get("marca_ingreso"),
            fecha_ingreso=data["fecha_ingreso"],
            estado=data.get("estado", "Disponible"),
            vida_estimada_util=data.get("vida_estimada_util"),
        )

        ambientes_ids = data.get("ambientes")
        if isinstance(ambientes_ids, list):
            elemento.ambientes.set(ambientes_ids)

        return JsonResponse(
            {
                "id": elemento.id,
                "codigo_barras": elemento.codigo_barras,
                "nombre_objeto": elemento.nombre_objeto,
                "estado": elemento.estado,
            },
            status=201,
        )
    except KeyError as exc:
        return JsonResponse(
            {"error": f"Falta el campo obligatorio: {exc.args[0]}"},
            status=400,
        )
    except json.JSONDecodeError:
        return JsonResponse({"error": "JSON inválido."}, status=400)


@require_http_methods(["PATCH", "PUT"])
@csrf_exempt
def elemento_estado_view(request, pk):
    elemento = get_object_or_404(Elemento, pk=pk)
    try:
        data = json.loads(request.body)
        nuevo_estado = (data.get("estado") or "").strip()
        if not nuevo_estado:
            return JsonResponse(
                {"error": "El campo 'estado' es obligatorio."},
                status=400,
            )

        elemento.estado = nuevo_estado
        elemento.save(update_fields=["estado"])
        return JsonResponse(
            {"id": elemento.id, "estado": elemento.estado},
            status=200,
        )
    except json.JSONDecodeError:
        return JsonResponse({"error": "JSON inválido."}, status=400)