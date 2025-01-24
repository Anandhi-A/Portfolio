function Projects() {
    return (
      <section>
        <h2>My Projects</h2>
        <ul>
          <li>Project 1: Transportation Data Analysis Project</li>
          <p>This project focuses on analyzing public transportation patterns by leveraging data from 
            public transportation APIs. Initially incorporating web scraping techniques to gather 
            additional data on traffic, the project shifted to rely solely on API data for a cleaner
            and more sustainable approach. By performing exploratory data analysis (EDA),you identify 
            trends in bus and train schedules, providing insights into optimization and commuter behaviors. 
            The project also includes a model to enhance transportation efficiency based on analyzed data.
          </p>

          <li>Project 2: Vehicle Parking System</li>
          <p>A comprehensive system to manage parking operations, this project involvestracking vehicle 
            details, assigning parking spots, calculating parking fees, and maintaining 
            records. Built using core Java concepts like collections, inheritance, and file 
            handling, it also integrates JDBC for database management. The system is designed 
            to streamline parking processes, improve record accuracy, and enhance user convenience.
          </p>
          
          <li>Project 3: Restaurant Management Application</li>
          <p>This console-based Java application enables efficient restaurant management by handling 
             orders, customers, and menus. The application calculates the total amount for orders, 
             including taxes, ensuring financial accuracy. With functionalities like CRUD operations, 
             database normalization, and stored procedures, it provides seamless interaction between Java 
             and a MySQL database.Features like file handling and custom exceptions add to its robustness.
          </p>
        </ul>
      </section>
    );
  }
  
  export default Projects;
  