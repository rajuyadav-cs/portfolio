from django.urls import path
from .views import HeroAPIView, AboutAPIView, SkillAPIView, ProjectAPIView, ExperienceAPIView, EducationAPIView, CertificationAPIView

urlpatterns = [
    path("hero/", HeroAPIView.as_view(), name="hero"),
    path("about/", AboutAPIView.as_view(), name="about"),
    path("skills/", SkillAPIView.as_view()),
    path("projects/", ProjectAPIView.as_view(), name="projects"),
    path("experience/", ExperienceAPIView.as_view(), name="experience"),
    path("education/", EducationAPIView.as_view(), name="education"),
    path("certifications/",CertificationAPIView.as_view(),name="certifications",),
]