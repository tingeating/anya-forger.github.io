const pic = {
    uniform: "https://spy-family.net/assets/img/common/header_bottomimg_3.png",
    icecream: "https://spy-family.net/assets/img/common/header_bottomimg_3_family.png",
    uniform_large: "https://spy-family.net/assets/img/top/chara_anya_1.png",
    casual_large: "https://cdn.bella.tw/files-20220604/FT5OGggVIAAHxhF.jpeg",
    avatars: [],
};

for (let i = 1; i <= 40; i++) {
    pic.avatars[i] = `https://spy-family.net/assets/img/special/anya/${i
        .toString()
        .padStart(2, "0")}.png`;
}
pic.avatars.push(
    "https://spy-family.net/assets/img/special/episode4/02.png",
    "https://spy-family.net/assets/img/special/episode4/05.png",
    "https://spy-family.net/assets/img/special/episode5/01.png",
    "https://spy-family.net/assets/img/special/episode5/02.png",
    "https://spy-family.net/assets/img/special/episode6/03.png",
    "https://spy-family.net/assets/img/special/episode6/05.png",
    "https://spy-family.net/assets/img/special/episode7/01.png",
    "https://spy-family.net/assets/img/special/episode7/03.png",
    "https://spy-family.net/assets/img/special/episode7/04.png",
    "https://spy-family.net/assets/img/special/episode8/01.png",
    "https://spy-family.net/assets/img/special/episode9/04.png",
    "https://spy-family.net/assets/img/special/episode10/02.png",
    "https://spy-family.net/assets/img/special/episode10/03.png",
    "https://spy-family.net/assets/img/special/episode10/04.png",
    "https://spy-family.net/assets/img/special/episode11/01.png",
    "https://spy-family.net/assets/img/special/episode11/02.png",
    "https://spy-family.net/assets/img/special/episode11/03.png",
    "https://spy-family.net/assets/img/special/episode11/04.png",
    "https://spy-family.net/assets/img/special/episode11/06.png",
    "https://spy-family.net/assets/img/special/episode12/03.png",
    "https://spy-family.net/assets/img/special/episode12/06.png",
);

const titles = ["First-Grade Student", "Test Subject 007", "Telepath"];

const about = [
    "My name is Anya Forger. I am 6 years old now!",
    "I am studing in Cecile Hall at Eden Academy.",
    "",
    "This summer I went to NTNU CSIE Camp to learn how to code.",
    "During the camp, I learned how to: ",
    "  - Build SPA Website with frontend framework Vue and Tailwind.",
    "  - Develop efficiently with Node.js ecosystem.",
    "  - Design and develop a gomoku gaming agent with Python.",
    "  - Operate Linux system with common commands.",
    "  - Use Git and GitHub to work on projects.",
    "",
    'By the way, I am starring in an anime called "SPY x FAMILY". Did you watch it?',
].join("\n");

const projects = [
    {
        name: "My Portfolio Website",
        description: "A portfolio website for myself that I developed in NTNU CSIE Camp.",
        image: "https://i0.wp.com/www.animegeek.com/wp-content/uploads/2022/05/The-Forger-family-in-the-park-sightseeing.jpg?fit=1200%2C675&ssl=1",
        skills: ["Vue", "Tailwind", "Node.js", "GitHub"],
        url: "https://github.com/anya-forger/anya-forger.github.io",
    },
    {
        name: "AI Gomoku Gaming Agent",
        description: "A gomoku gaming agent with Python that I designed in NTNU CSIE Camp.",
        image: "https://www.anime-internet.com/content/images/2022/04/spyxfamilyanime.jpg"
        url: "https://github.com/anya-forger",
    },
    {
        name: "SPY x FAMILY",
        description: "An anime that I starred in.",
        image: "https://spy-family.net/assets/img/special/special10_1.gif",
        skills: ["Performings"],
        url: "https://spy-family.net",
    },
];

export { pic, titles, about, projects };
