from rest_framework.generics import RetrieveAPIView
from .models import Hero, About, Skill, Project, Experience, Education, Certification
from .serializers import HeroSerializer, AboutSerializer, SkillSerializer, ProjectSerializer, ExperienceSerializer, EducationSerializer, CertificationSerializer
from rest_framework.generics import ListAPIView

class SkillAPIView(ListAPIView):
    queryset = Skill.objects.all().order_by("category", "name")
    serializer_class = SkillSerializer
    
class HeroAPIView(RetrieveAPIView):
    serializer_class = HeroSerializer

    def get_object(self):
        return Hero.objects.get(is_active=True)
    


class AboutAPIView(RetrieveAPIView):
    serializer_class = AboutSerializer

    def get_object(self):
        return About.objects.first()
    
class ProjectAPIView(ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer        
    
class ExperienceAPIView(ListAPIView):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer
    
class EducationAPIView(ListAPIView):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer 
    
class CertificationAPIView(ListAPIView):
    queryset = Certification.objects.all()
    serializer_class = CertificationSerializer           