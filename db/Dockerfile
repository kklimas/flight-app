FROM python:3.11-slim-buster
WORKDIR /app
COPY migration ./
ENV PYTHONPATH /migration/src
ENV DATABASE_NAME flight_system
ENV DATABASE_HOST 0.0.0.0
ENV DATABASE_PORT 5432
ENV DATABASE_PASSWORD postgres
ENV DATABASE_USERNAME postgres
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
CMD [ "python", "src/main.py" ]