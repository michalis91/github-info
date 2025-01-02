# Build and Run the Docker Image

Navigate to the root folder of the project
docker build -t my-react-nestjs-app .

Run the container
docker run -p 3000:3000 -p 4000:4000 my-react-nestjs-app

Access the application:
Frontend: http://localhost:3000
Backend: http://localhost:4000
