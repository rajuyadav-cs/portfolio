from django.contrib import admin
from .models import (
    Hero,
    About,
    Skill,
    Project,
    Experience,
    Education,
    Certification,
)


@admin.register(Hero)
class HeroAdmin(admin.ModelAdmin):
    list_display = ("name", "designation", "is_active", "updated_at")
    list_display_links = ("name",)
    list_filter = ("is_active",)
    search_fields = ("name", "designation", "email")
    readonly_fields = ("created_at", "updated_at")
    ordering = ("-updated_at",)


@admin.register(About)
class AboutAdmin(admin.ModelAdmin):
    list_display = ("title", "updated_at")
    list_display_links = ("title",)
    search_fields = ("title",)
    readonly_fields = ("created_at", "updated_at")


@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ("name", "category", "proficiency", "updated_at")
    list_display_links = ("name",)
    list_filter = ("category",)
    search_fields = ("name",)
    readonly_fields = ("created_at", "updated_at")
    ordering = ("category", "name")


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "featured",
        "display_order",
        "updated_at",
    )
    list_display_links = ("title",)
    list_filter = ("featured",)
    search_fields = ("title", "description")
    filter_horizontal = ("skills",)
    readonly_fields = ("created_at", "updated_at")
    ordering = ("display_order",)


@admin.register(Experience)
class ExperienceAdmin(admin.ModelAdmin):
    list_display = (
        "role",
        "organization",
        "currently_working",
        "start_date",
        "updated_at",
    )
    list_display_links = ("role",)
    list_filter = ("currently_working",)
    search_fields = ("role", "organization")
    readonly_fields = ("created_at", "updated_at")
    ordering = ("display_order",)


@admin.register(Education)
class EducationAdmin(admin.ModelAdmin):
    list_display = (
        "institution",
        "degree",
        "grade",
        "start_year",
        "end_year",
        "updated_at",
    )
    list_display_links = ("institution",)
    search_fields = (
        "institution",
        "degree",
        "specialization",
    )
    readonly_fields = ("created_at", "updated_at")
    ordering = ("display_order",)


@admin.register(Certification)
class CertificationAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "issuer",
        "issue_date",
        "updated_at",
    )
    list_display_links = ("title",)
    search_fields = (
        "title",
        "issuer",
    )
    readonly_fields = ("created_at", "updated_at")
    ordering = ("display_order",)