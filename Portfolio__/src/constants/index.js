export const myProjects = [
  {
    id: 1,
    category: "42 Projects",
    description: "A deep dive into the 42 curriculum, mastering C, C++, systems programming, and full-stack development through rigorous peer-to-peer learning.",
    projects: [
      {
        id: 101,
        title: "Libft",
        description: "Custom C library implementing standard functions from scratch - the foundation for all future 42 projects.",
        image: "/assets/projects/game-engine.jpg",
        href: "https://github.com/Prvdnx/42-ft_libft",
        tags: [
          { id: 1, name: "C", path: "/assets/logos/c.svg" },
        ],
      },
      {
        id: 102,
        title: "ft_printf",
        description: "Recreation of the printf function with support for multiple format specifiers and advanced formatting.",
        image: "/assets/projects/game-engine.jpg",
        href: "https://github.com/Prvdnx/42-ft_printf",
        tags: [
          { id: 1, name: "C", path: "/assets/logos/c.svg" },
        ],
      },
      {
        id: 103,
        title: "get_next_line",
        description: "Function that reads a line from a file descriptor efficiently, one line at a time with dynamic memory management.",
        image: "/assets/projects/game-engine.jpg",
        href: "https://github.com/Prvdnx/42-get_next_line",
        tags: [
          { id: 1, name: "C", path: "/assets/logos/c.svg" },
        ],
      },
      {
        id: 104,
        title: "push_swap",
        description: "Sorting algorithm implementation using two stacks with optimized operations to minimize instruction count.",
        image: "/assets/projects/game-engine.jpg",
        href: "https://github.com/Prvdnx/42-push_swap",
        tags: [
          { id: 1, name: "C", path: "/assets/logos/c.svg" },
        ],
      },
      {
        id: 105,
        title: "minitalk",
        description: "Client-server communication program using UNIX signals to transmit strings between processes.",
        image: "/assets/projects/game-engine.jpg",
        href: "https://github.com/Prvdnx/42-minitalk",
        tags: [
          { id: 1, name: "C", path: "/assets/logos/c.svg" },
        ],
      },
      {
        id: 106,
        title: "Philosophers",
        description: "Classic dining philosophers problem solved with threads and mutexes, exploring concurrency and deadlock prevention.",
        image: "/assets/projects/game-engine.jpg",
        href: "https://github.com/Prvdnx/42-Philosophers",
        tags: [
          { id: 1, name: "C", path: "/assets/logos/c.svg" },
        ],
      },
      {
        id: 107,
        title: "FdF",
        description: "3D wireframe visualization of terrain maps using isometric projection and graphics programming fundamentals.",
        image: "/assets/projects/game-engine.jpg",
        href: "https://github.com/Prvdnx/42-FdF",
        tags: [
          { id: 1, name: "C", path: "/assets/logos/c.svg" },
        ],
      },
      {
        id: 108,
        title: "miniRT",
        description: "Ray tracing engine rendering 3D scenes with geometric objects, lighting, and realistic camera effects.",
        image: "/assets/projects/game-engine.jpg",
        href: "https://github.com/gs313/miniRT",
        tags: [
          { id: 1, name: "C", path: "/assets/logos/c.svg" },
        ],
      },
      {
        id: 109,
        title: "NetPractice",
        description: "Network configuration exercises covering IP addressing, subnetting, routing, and TCP/IP fundamentals.",
        image: "/assets/projects/game-engine.jpg",
        href: "https://github.com/Prvdnx/42-NetPractice",
        tags: [
          { id: 1, name: "Networking", path: "/assets/logos/linux.svg" },
        ],
      },
      {
        id: 110,
        title: "ft_irc",
        description: "IRC (Internet Relay Chat) server implementation following RFC specifications with multi-client support.",
        image: "/assets/projects/game-engine.jpg",
        href: "https://github.com/TanawatJukmongkol/ft_irc",
        tags: [
          { id: 1, name: "C++", path: "/assets/logos/cplusplus.svg" },
        ],
      },
      {
        id: 111,
        title: "CPP Modules",
        description: "Series of C++ exercises (00-09) covering OOP, polymorphism, templates, STL, and advanced C++ concepts.",
        image: "/assets/projects/game-engine.jpg",
        href: "https://github.com/Prvdnx/42-CPP_MODULES",
        tags: [
          { id: 1, name: "C++", path: "/assets/logos/cplusplus.svg" },
        ],
      },
      {
        id: 112,
        title: "Inception",
        description: "DevOps infrastructure project using Docker to set up WordPress, MariaDB, and Nginx in isolated containers.",
        image: "/assets/projects/game-engine.jpg",
        href: "https://github.com/Prvdnx/42_Inception",
        tags: [
          { id: 1, name: "Docker", path: "/assets/logos/docker.svg" },
          { id: 2, name: "Linux", path: "/assets/logos/linux.svg" },
        ],
      },
      {
        id: 113,
        title: "ft_transcendence",
        description: "Full-stack web application featuring real-time multiplayer Pong, chat system, and user authentication.",
        image: "/assets/projects/game-engine.jpg",
        href: "https://github.com/bpassael/transcendence",
        tags: [
          { id: 1, name: "Docker", path: "/assets/logos/docker.svg" },
          { id: 2, name: "JavaScript", path: "/assets/logos/javascript.svg" },
          { id: 3, name: "Python", path: "/assets/logos/python.svg" },
          { id: 4, name: "HTML5", path: "/assets/logos/html5.svg" },
          { id: 5, name: "CSS3", path: "/assets/logos/css3.svg" },
        ],
      },
    ],
  },
  {
    id: 2,
    category: "Web Development",
    description: "Modern, responsive, and performant web applications built with the latest technologies.",
    projects: [
      {
        id: 201,
        title: "Portfolio Website",
        description: "Personal portfolio showcasing projects with interactive 3D elements.",
        image: "/assets/projects/auth-system.jpg",
        href: "",
        tags: [
          { id: 1, name: "React", path: "/assets/logos/react.svg" },
          { id: 2, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
          { id: 3, name: "Three.js", path: "/assets/logos/threejs.svg" },
        ],
      },
      // Add more web projects here
    ],
  },
  {
    id: 3,
    category: "Mobile",
    description: "Cross-platform mobile applications delivering native performance and feel.",
    projects: [
      {
        id: 301,
        title: "ft_hangouts",
        description: "Mobile contacts and SMS management application built with React Native.",
        image: "/assets/projects/accessories.jpg",
        href: "",
        tags: [
          { id: 1, name: "React Native", path: "/assets/logos/react.svg" },
        ],
      },
      // Add more mobile projects here
    ],
  },
];

export const mySocials = [
  {
    name: "Discord",
    href: "https://discord.com/users/967592597767983158",
    icon: "/assets/socials/discord.svg",
  },
  {
    name: "Telegram",
    href: "https://t.me/daprvdnx",
    icon: "/assets/socials/telegram.svg",
  },
  {
    name: "Email",
    href: "mailto:mr.okamonu@gmail.com",
    icon: "/assets/socials/email.svg",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/oghenefega-o-530894273",
    icon: "/assets/socials/linkedIn.svg",
  },
];

export const experiences = [
  // {
  //   title: "Job Title",
  //   job: "Company Name",
  //   date: "2024 - Present",
  //   contents: [
  //     "Responsibility 1",
  //     "Responsibility 2",
  //   ],
  // },
];
export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];
