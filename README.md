# Build and Run the Application

### Backend

1. Navigate to the `./backend` folder:
   cd ./backend
2. Install dependencies:
   npm install
3. Start the backend server:
   npm start
   No environment configuration is needed to run the application. Default values are provided in the code.
   The Backend will be accessible via http://localhost:4000
4. Run tests
   npm test

### Frontend

1. Navigate to the `./frontend` folder:
   cd ./frontend
2. Install dependencies:
   npm install
3. Start the frontend server:
   npm start
   No environment configuration is needed to run the application. Default values are provided in the code.
   The Backend will be accessible via http://localhost:3000

# Build and Run the Docker Image

Navigate to the root folder of the project
docker build -t my-react-nestjs-app .

Run the container
docker run -p 3000:3000 -p 4000:4000 my-react-nestjs-app

Access the application:
Frontend: http://localhost:3000
Backend: http://localhost:4000
