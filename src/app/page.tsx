import Link from "next/link";

export default function Home() {
    return (
        <div className="container">
            {/* Header Section */}
            <header className="section">
                <h1 className="text-center text-2xl font-bold">Max Liu</h1>
                <div className="text-center text-sm">
                    <Link href="https://github.com/maxliu42" target="_blank" className="mx-1">{`{GitHub}`}</Link>
                    <Link href="https://linkedin.com/in/maxliu42" target="_blank" className="mx-1">{`{LinkedIn}`}</Link>
                    <Link href="/files/resume.pdf" target="_blank" className="mx-1">{`{resume}`}</Link>
                </div>
            </header>

            {/* Introduction Section */}
            <section className="section">
                <h2 className="text-xl font-bold text-center mb-4">About Me</h2>
                <p className="text-center text-sm mb-2">
                    Hi! I&apos;m Max, a Computer Science student at the University of Toronto and Inference Consoles Engineer Intern at Cerebras.
                </p>
                <p className="text-center text-sm">
                    I&apos;m passionate about software development and game design. Currently exploring opportunities in
                    full-stack development and AI research.
                </p>
                <p className="text-center text-sm">
                    If that interests you, you can read more at{" "}
                    <Link href="https://maxliu.me/blog" target="_blank" className="text-blue-500">
                        my blog
                    </Link>
                    .
                </p>
            </section>

            {/* Projects Heading */}
            <h2 className="text-xl font-bold mb-4">Projects</h2>

            {/* NoteFlip */}
            <section className="section mb-4">
                <div className="flex justify-between mb-2">
                    <div>
                        <h2 className="text-xl font-bold">
                            NoteFlip{" "}
                            <span className="text-xs italic font-normal">
                                FastAPI, PostgreSQL, React Native, Next.js, Google Cloud Vision, OpenAI API
                            </span>
                        </h2>
                        <div className="text-sm">
                            <Link
                                href="https://noteflip.io"
                                target="_blank"
                                className="mx-1"
                            >{`[web -- site temporarily down, apologies]`}</Link>
                            {/* <Link href="https://github.com/maxliu42/noteflip" target="_blank" className="mx-1">{`{GitHub}`}</Link> */}
                        </div>
                    </div>
                    <div className="text-xs self-start">Feb 2024 - Present</div>
                </div>
                <ul className="list-disc pl-6 text-xs">
                    <li>
                        Developed a cross-platform educational app that converts handwritten notes into interactive
                        flash cards
                    </li>
                    <li>
                        Designed a scalable backend using FastAPI and PostgreSQL, integrating Google Cloud Vision for
                        OCR and OpenAI&apos;s API for content processing
                    </li>
                    <li>
                        Built dual-platform frontend interfaces with React Native for mobile and Next.js for web,
                        ensuring seamless user experience
                    </li>
                </ul>
            </section>

            {/* mnk-Game */}
            <section className="section mb-4">
                <div className="flex justify-between mb-2">
                    <div>
                        <h2 className="text-xl font-bold">
                            mnk-Game <span className="text-xs italic font-normal">React, TypeScript, WebSocket</span>
                        </h2>
                        <div className="text-sm">
                            <Link href="https://maxliu.me/mnk-game/" target="_blank" className="mx-1">{`[web]`}</Link>
                            <Link
                                href="https://github.com/maxliu42/mnk-game "
                                target="_blank"
                                className="mx-1"
                            >{`{GitHub}`}</Link>
                        </div>
                    </div>
                    <div className="text-xs self-start">Feb 2025 - Present</div>
                </div>
                <ul className="list-disc pl-6 text-xs">
                    <li>
                        Created a generalized m,n,k-game (like Tic-Tac-Toe) with emoji pieces and customizable board
                        sizes/win conditions
                    </li>
                    <li>Built with React and TypeScript for a responsive and interactive user experience</li>
                </ul>
            </section>

            {/* TextWolfram */}
            <section className="section mb-4">
                <div className="flex justify-between mb-2">
                    <div>
                        <h2 className="text-xl font-bold">
                            TextWolfram{" "}
                            <span className="text-xs italic font-normal">React, Python, Twilio, REST APIs</span>
                        </h2>
                        <div className="text-sm">
                            <Link
                                href="https://tranq88.github.io/text-wolfram/"
                                target="_blank"
                                className="mx-1"
                            >{`[web]`}</Link>
                            <Link
                                href="https://www.youtube.com/watch?v=_lqYMOJTqRk"
                                target="_blank"
                                className="mx-1"
                            >{`[video demo]`}</Link>
                            <Link
                                href="https://github.com/tranq88/text-wolfram/tree/main"
                                target="_blank"
                                className="mx-1"
                            >{`{GitHub}`}</Link>
                        </div>
                    </div>
                    <div className="text-xs self-start">Apr 2023</div>
                </div>
                <ul className="list-disc pl-6 text-xs">
                    <li>
                        Developed a text messaging conversation service that gives fast responses to technical questions
                    </li>
                    <li>
                        Used WolframAlpha Conversational API for generating accurate human-like responses within two
                        seconds of a message, Twilio webhooks with ngrok for deploying to a live server
                    </li>
                    <li>Designed an informative user-friendly website using the React framework</li>
                </ul>
            </section>

            {/* Woodlands CS Website */}
            <section className="section mb-4">
                <div className="flex justify-between mb-2">
                    <div>
                        <h2 className="text-xl font-bold">
                            Woodlands CS Website{" "}
                            <span className="text-xs italic font-normal">Jekyll, Ruby, Pyodide, GitHub Pages</span>
                        </h2>
                        <div className="text-sm">
                            <Link
                                href="https://maxliu.me/woodlandscodesnew/"
                                target="_blank"
                                className="mx-1"
                            >{`[web]`}</Link>
                            <Link
                                href="https://github.com/maxliu42/woodlandscodesnew"
                                target="_blank"
                                className="mx-1"
                            >{`{GitHub}`}</Link>
                        </div>
                    </div>
                    <div className="text-xs self-start">Dec 2021 - May 2022</div>
                </div>
                <ul className="list-disc pl-6 text-xs">
                    <li>
                        Created an educational blog-style website using Jekyll and Ruby, featuring Pyodide-powered
                        interactive code execution, syntax highlighting, and LaTeX rendering
                    </li>
                </ul>
            </section>

            {/* Bee-ware! */}
            <section className="section mb-4">
                <div className="flex justify-between mb-2">
                    <div>
                        <h2 className="text-xl font-bold">
                            Bee-ware! <span className="text-xs italic font-normal">React, Phaser 3</span>
                        </h2>
                        <div className="text-sm">
                            <Link href="https://maxliu.me/bee-ware/" target="_blank" className="mx-1">{`[web]`}</Link>
                            <Link
                                href="https://github.com/maxliu42/bee-ware"
                                target="_blank"
                                className="mx-1"
                            >{`{GitHub}`}</Link>
                        </div>
                    </div>
                    <div className="text-xs self-start">Dec 2024 - Present</div>
                </div>
                <ul className="list-disc pl-6 text-xs">
                    <li>A bee-themed Vampire Survivors-like game created using React and Phaser 3</li>
                </ul>
            </section>

            {/* Other stuff */}
            <h2 className="text-xl font-bold mb-4">Other Stuff</h2>

            {/* My old games */}
            <section className="section mb-4">
                <div className="mb-2">
                    <h2 className="text-xl font-bold">
                        My old games <span className="text-xs italic font-normal">GameMaker Studio</span>
                    </h2>
                    <div className="text-sm">
                        <Link href="https://maxliu42.itch.io/" target="_blank" className="mx-1">{`{itch.io}`}</Link>
                    </div>
                </div>
                <ul className="list-disc pl-6 text-xs">
                    <li>My old games made with GameMaker. Start with FATHEAD.</li>
                </ul>
            </section>

            {/* My music */}
            <section className="section mb-4">
                <div className="mb-2">
                    <h2 className="text-xl font-bold">My music</h2>
                    <div className="text-sm">
                        <Link
                            href="https://anaether.bandcamp.com/"
                            target="_blank"
                            className="mx-1"
                        >{`{bandcamp}`}</Link>
                    </div>
                </div>
            </section>

            {/* My photography */}
            <section className="section mb-4">
                <div className="mb-2">
                    <h2 className="text-xl font-bold">My photography (tba)</h2>
                </div>
                <ul className="list-disc pl-6 text-xs">
                    <li>
                        <Link href="https://i.imgur.com/rTCYwFT.jpeg" target="_blank" className="text-blue-500">
                            Fall{" "}
                        </Link>
                        <Link href="https://i.imgur.com/vebN3u2.jpeg" target="_blank" className="text-blue-500">
                            is{" "}
                        </Link>
                        <Link href="https://i.imgur.com/6kNIVcH.jpeg" target="_blank" className="text-blue-500">
                            my{" "}
                        </Link>
                        <Link href="https://i.imgur.com/OFmlbA6.jpeg" target="_blank" className="text-blue-500">
                            only{" "}
                        </Link>
                        <Link href="https://i.imgur.com/iQXy31w.jpeg" target="_blank" className="text-blue-500">
                            good{" "}
                        </Link>
                        <Link href="https://i.imgur.com/pqJifak.jpeg" target="_blank" className="text-blue-500">
                            season.
                        </Link>
                    </li>
                </ul>
            </section>
        </div>
    );
}
