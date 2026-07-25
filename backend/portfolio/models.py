from django.db import models


class Hero(models.Model):
    greeting = models.CharField(max_length=100, default="Hi, I'm")
    name = models.CharField(max_length=100)
    designation = models.CharField(max_length=150)
    short_description = models.TextField()

    profile_image = models.ImageField(upload_to="hero/")
    resume = models.FileField(upload_to="resume/")

    github_url = models.URLField(blank=True)
    linkedin_url = models.URLField(blank=True)
    email = models.EmailField()

    is_active = models.BooleanField(default=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Hero Section"
        verbose_name_plural = "Hero Section"

    def __str__(self):
        return self.name


class About(models.Model):
    title = models.CharField(max_length=150)
    description = models.TextField()

    profile_image = models.ImageField(
        upload_to="about/",
        blank=True,
        null=True
    )

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "About Section"
        verbose_name_plural = "About Section"

    def __str__(self):
        return self.title


class Skill(models.Model):
    CATEGORY_CHOICES = [
        ("Programming Language", "Programming Language"),
        ("Framework", "Framework"),
        ("Library", "Library"),
        ("Styling", "Styling"),
        ("Database", "Database"),
        ("Tool", "Tool"),
        ("Core Area", "Core Area"),
    ]

    name = models.CharField(max_length=100)
    category = models.CharField(
        max_length=50,
        choices=CATEGORY_CHOICES
    )

    proficiency = models.PositiveIntegerField(default=80)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(max_length=1000)

    image = models.ImageField(upload_to="projects/")

    skills = models.ManyToManyField(
        Skill,
        related_name="projects",
        blank=True
    )

    github_url = models.URLField()
    live_url = models.URLField(blank=True)

    featured = models.BooleanField(default=False)
    display_order = models.PositiveIntegerField(default=0)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["display_order", "-created_at"]

    def __str__(self):
        return self.title


class Experience(models.Model):
    role = models.CharField(max_length=150)
    organization = models.CharField(max_length=150)

    employment_type = models.CharField(
        max_length=50,
        blank=True,
        help_text="Internship, Freelance, Full-time, etc."
    )

    location = models.CharField(max_length=100, blank=True)

    start_date = models.DateField()
    end_date = models.DateField(blank=True, null=True)

    currently_working = models.BooleanField(default=False)

    description = models.TextField(max_length=1000)

    display_order = models.PositiveIntegerField(default=0)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["display_order", "-start_date"]

    def __str__(self):
        return f"{self.role} - {self.organization}"


class Education(models.Model):
    institution = models.CharField(max_length=200)
    degree = models.CharField(max_length=200)
    specialization = models.CharField(max_length=200, blank=True)

    grade = models.CharField(max_length=50)

    start_year = models.PositiveIntegerField()
    end_year = models.PositiveIntegerField()

    location = models.CharField(max_length=100, blank=True)

    display_order = models.PositiveIntegerField(default=0)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["display_order", "-end_year"]

    def __str__(self):
        return f"{self.degree} - {self.institution}"


class Certification(models.Model):
    title = models.CharField(max_length=200)
    issuer = models.CharField(max_length=150)

    issue_date = models.DateField(blank=True, null=True)

    credential_url = models.URLField(blank=True)

    certificate_image = models.ImageField(
        upload_to="certifications/",
        blank=True,
        null=True
    )

    display_order = models.PositiveIntegerField(default=0)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["display_order", "-created_at"]

    def __str__(self):
        return self.title