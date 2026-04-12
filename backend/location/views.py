from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import State, District
from .serializers import StateSerializer, DistrictSerializer

@api_view(['GET'])
def get_states(request):
    states = State.objects.all()
    serializer = StateSerializer(states, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_districts(request, state_id):
    districts = District.objects.filter(state_id=state_id)
    serializer = DistrictSerializer(districts, many=True)
    return Response(serializer.data)
