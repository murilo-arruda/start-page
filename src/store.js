import { readable } from "svelte/store";

const Sectiontemplate = {
  title: "section title",
  links: [
    {
      name: "link name",
      url: "http://www.google.com",
    },
  ],
};

const sectionsList = [
  {
    title: "section title",
    links: [
      {
        name: "link name",
        url: "http://www.google.com",
      },
    ],
  },
];

function createTimer() {
  const { subscribe } = readable(new Date(), function start(set) {
    const interval = setInterval(() => {
      set(new Date());
    }, 1000);

    return function stop() {
      clearInterval(interval);
    };
  });

  return {
    subscribe,
  };
}

export const sections = readable(sectionsList);
export const time = createTimer();
