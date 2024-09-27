const projects = [
                         {
                             title: "Project Title 1 - Pagination",
                             description: "The Pagination project is a web-based application designed to manage and display large sets of data in a user-friendly manner. This project showcases how to break down extensive lists into smaller, manageable chunks, allowing users to navigate through the data efficiently.",
                             technologies: "HTML, CSS, JavaScript",
                             role: "To make PPT and explain the code base also.",
                             link: "git@github.com:Saitejash15/Pagination.git"
                         },
                         {
                             title: "Project Title 2 - Calculator",
                             description: "The Calculator project is a web-based application designed to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. This intuitive application provides users with a simple interface to perform calculations quickly and efficiently.",
                             technologies: "HTML, CSS, JavaScript",
                             role: "To present the PPT and explain the code base also",
                             link: "git@github.com:Saitejash15/Calculator.git"
                         },
                         
                         {
                             title: "Project Title 3 - Dies",
                             description: "The Dice Rolling Application is an interactive web-based tool that simulates the rolling of dice. This application allows users to roll three virtual dice simultaneously, providing a fun and engaging way to generate random numbers between 1 and 6.",
                             technologies: "HTML, CSS, JavaScript",
                             role: "To present the PPT and explain the code base also",
                             link: "git@github.com:Saitejash15/dice.git"
                         },
                     ];
             
                     const projectList = document.getElementById('project-list');
             
                     projects.forEach(project => {
                         const projectDiv = document.createElement('div');
                         projectDiv.classList.add('project');
                         projectDiv.innerHTML = `
                             <h3>${project.title}</h3>
                             <p>Description: ${project.description}</p>
                             <p>Technologies Used: ${project.technologies}</p>
                             <p>Your Role: ${project.role}</p>
                             <p><a href="${project.link}">View Project</a></p>
                         `;
                         projectList.appendChild(projectDiv);
                     });
             
                     // Smooth scroll
                     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                         anchor.addEventListener('click', function (e) {
                             e.preventDefault();
                             document.querySelector(this.getAttribute('href')).scrollIntoView({
                                 behavior: 'smooth'
                             });
                         });
                     });