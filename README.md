<div align="center">

# Geo Location API (Django)

Hierarchical location data service for
**States → Districts**

Built using Django REST Framework for backend API development.

[![Django](https://img.shields.io/badge/Django-6.0-092E20?style=flat\&logo=django)]()
[![DRF](https://img.shields.io/badge/Django%20REST-Framework-red)]()
[![SQLite](https://img.shields.io/badge/SQLite-Database-blue)]()

</div>

---

##  Overview

This project provides a REST API for managing and retrieving location data.

It supports:

* Fetching all available states
* Fetching districts based on selected state
* Managing data using Django admin panel

---

##  Features

* REST API for hierarchical location data
* State → District relational mapping
* Admin interface for data management
* Clean and modular Django project structure

---

##  Tech Stack

* **Backend:** Django, Django REST Framework
* **Database:** SQLite (default)

---

##  Backend Setup

```bash
cd backend

# Create virtual environment
python -m venv venv

# Activate (Windows)
venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt
```

---

##  Database Setup

```bash
# Apply migrations
python manage.py migrate

# Create superuser (optional)
python manage.py createsuperuser
```

---

##  Run Server

```bash
python manage.py runserver
```

Backend will run at:

```
http://127.0.0.1:8000/
```

---

##  API Endpoints

| Method | Endpoint                     | Description            |
| ------ | ---------------------------- | ---------------------- |
| GET    | `/api/states/`               | Get all states         |
| GET    | `/api/districts/<state_id>/` | Get districts by state |

---

##  Example Response

```json
[
  {
    "id": 1,
    "name": "Telangana"
  }
]
```

---

##  Admin Panel

Access:

```
http://127.0.0.1:8000/admin/
```

Use admin panel to:

* Add states
* Add districts
* Manage location data

---

##  Project Structure

```
backend/
│
├── config/                # Django project settings
│
├── location/              # Location app
│   ├── models.py
│   ├── views.py
│   ├── serializers.py
│   ├── urls.py
│   └── admin.py
│
├── geometry/              # (Optional future module)
├── materials/             # (Optional future module)
│
├── manage.py
└── requirements.txt
```

---

##  Notes

* Uses SQLite for simplicity (can be extended to PostgreSQL)
* Designed with scalable app structure
* Focused on backend API development

---

##  Submission Context

This project was developed as part of a backend screening task
to demonstrate Django REST API skills and project structuring.
