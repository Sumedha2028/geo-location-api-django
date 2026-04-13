from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import State, District, LocationData


@api_view(['GET'])
def get_states(request):
    states = State.objects.all().values()
    return Response(states)


@api_view(['GET'])
def get_districts(request):
    state_id = request.GET.get('state_id')
    districts = District.objects.filter(state_id=state_id).values()
    return Response(districts)


@api_view(['GET'])
def get_location_data(request):
    district_id = request.GET.get('district_id')
    data = LocationData.objects.get(district_id=district_id)

    return Response({
        "wind_speed": data.wind_speed,
        "seismic_zone": data.seismic_zone,
        "seismic_factor": data.seismic_factor,
        "max_temp": data.max_temp,
        "min_temp": data.min_temp,
        "recommendation": generate_recommendation(data)
    })


def generate_recommendation(data):
    if data.wind_speed > 40:
        return "High wind zone → Provide lateral bracing"

    if data.seismic_zone in ["IV", "V"]:
        return "Seismic critical zone → Use ductile detailing"

    return "Standard design is acceptable"