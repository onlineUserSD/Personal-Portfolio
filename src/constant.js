import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
 import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
 import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
 import springbootLogo from './assets/tech_logo/springboot.png';
 import mysqlLogo from './assets/tech_logo/mysql.png';
 import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
 import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
 

 export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
       { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
         { name: 'Tailwind CSS', logo: tailwindcssLogo },
       ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
       { name: 'MySQL', logo: mysqlLogo },
     ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
       { name: 'JavaScript', logo: javascriptLogo },
     ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
     ],
  },
];

export const Projects = [
{
  id : 0,
  tittle : "User Authentication System",
  description:"A backend project featuring user authentication using Spring Boot, Spring Security and MySQL with jwt token creation and validation.",
  tags:["Springboot","SpringSecuriy","MySQL"],
  github:"https://github.com/onlineUserSD/SecuredUser_Login",
},

{
  id : 1,
  tittle : "Food App",
  description:"A basic Fullstack application with user registration and login features implementing CRUD operations ,Admin can add,delete and update foods, users can order can view their bills in the Application",
  tags:["React JS","Springboot","MySQL"],
  github:"https://github.com/onlineUserSD/FoodApp",
},

{
  id:2,
  tittle:"Currency-Converter",
  description:"A simple currency converter application that takes user input and converts it to the desired currency using HTML, CSS and JavaScript.",
  tags:["HTML","CSS","JavaScript"],
  github:"https://github.com/onlineUserSD/currency-converter",
},
];