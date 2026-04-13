#  Osdag Bridge UI

A React-based frontend interface for bridge design inputs and environmental data visualization, inspired by Osdag workflows.

---

##  Overview

This project provides an interactive UI to:

- Select State and District dynamically
- Fetch location-based environmental data
- Customize bridge geometry parameters
- Visualize bridge cross-section
- Get design recommendations

---

##  Features

- State & District selection (API based)
- Wind speed & seismic data display
- Temperature insights
- Geometry customization:
  - Girder spacing
  - Number of girders (auto-calculated)
  - Deck overhang
- Validation warnings
- Interactive modal UI
- Bridge cross-section display

---

##  Logic Implemented

- Dynamic API calls using Axios
- Auto-calculation:

girders = (overall width - overhang) / spacing

- Input validation:
  - Spacing too small / large
  - Overhang limits

---

##  Tech Stack

- React.js
- Axios
- JavaScript
- HTML + CSS
- Django (Backend)

---

##  Project Structure

geo-location-api-django/
  backend/
  frontend/
    public/
    src/
      assets/
        bridge.png
      App.js
      index.js

---

##  Installation & Setup

Clone repo:

git clone https://github.com/Sumedha2028/geo-location-api-django.git

Go to frontend:

cd frontend

Install:

npm install

Run:

npm start

App runs at:
http://localhost:3000

---

##  Backend Setup

cd backend

venv\Scripts\activate

python manage.py runserver

Backend runs at:
http://localhost:8000

---

##  Features Demo

- Dynamic dropdown selection
- Live data rendering
- Geometry modal with auto calculation
- Validation warnings

---

##  Future Improvements

- Real-time bridge visualization
- Osdag integration
- Better UI

---

##  Author

BODUGAM SUMEDHA

---

##  Note

This project was developed as part of an internship screening task.
