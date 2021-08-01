const projects = [
  {
    title: 'Where In The World',
    image: 'countries',
    tech: ['React', 'Next.js', 'Emotion', 'Rest APIs', 'ESLint'],
    github: 'countries',
    url: 'https://countries-tanzeel.vercel.app/',
    summary: "A front end focused project, that fetches data about all the countries in the world from a REST API, and displays  them in a responsive layout. Dark Mode functionality was added using React's context API.\nThe project was built with Next.js, a technology that had been on my radar for a while, and styled using Emotion. A responsive flexbox layout was used for the main card display.",
  },
  {
    title: 'Odin Weather',
    image: 'odinweather',
    tech: ['HTML', 'CSS', 'JavaScript', 'Webpack', 'Rest APIs', 'ESLint'],
    github: 'weather_app',
    url: 'https://weather-tanzeel.vercel.app/',
    summary: "A simple weather application that uses the Openweather API to fetch weather data. The user can share their location via the geolocation API, and also query the Openweather API for live weather data anywhere.\nThe primary aim was to get hands-on practice with Webpack and JavaScript ES6 modules. This is one of my older projects, but unique in that it doesn't use any frameworks. Despite the relatively simple configuration used here, Webpack proved to be quite challenging.",
  },
  {
    title: 'Odin Library',
    image: 'odinlibrary',
    tech: ['React', 'Redux', 'CSS Modules'],
    github: 'react_library_project',
    url: 'https://library-tanzeel.netlify.app/',
    summary: "A redo of a previous project HTML, CSS, and vanilla JavaScript project made with React and Redux. The aim of this project was to practice state management through the 'Redux' library. The app allows users to save a list of their books and toggle their 'read' status, which is also saved to the browser's local storage, and retreieved and loaded into redux when the app loads.\nThe project was fairly straightforward, and offered and opportunity to get a high level understanding of 'Redux'.",
  },
  {
    title: 'Express Library',
    image: 'expresslibrary',
    tech: ['Node.js', 'Express', 'MongoDB', 'Bootstrap'],
    github: '',
    url: 'https://quiet-springs-87408.herokuapp.com/',
    summary: 'An inventory management project made with Node.js, Express, Pug, MongoDB, and Bootstrap. The primary purpose of the project was to learn and understand the intricacies of server side development using Node.js and Express. This was purely a server side MVC project, with the views written in the Pug templating engine.\nThe project was structured as a series of problems to be solved, which proved more challenging than expected, particularly async data fetching. Completing it offered invaluable insights into server side development and asynchronous programming.',
  },
];

export default projects;
