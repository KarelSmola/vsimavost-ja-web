// import { title } from "process";
import { Link } from "react-router-dom";

const excercisesNeeds = {
duration: "20-30 minut",
tools: "papír a tužka",
};

const exercises = [
  {
    title: "CVIČENÍ 1",
    description: "Jaký pocit předchází hněvu?",
    duration: excercisesNeeds.duration,
    tools: excercisesNeeds.tools,
    link: "/exercise/01",
  },
  {
    title: "CVIČENÍ 2",
    description: "Emoční most do minulosti.",
    duration: excercisesNeeds.duration,
    tools: excercisesNeeds.tools,
    link: "/exercise/02",
  },
  {
    title: "CVIČENÍ 3",
    description: "Abstrakce a zobecnění.",
    duration: excercisesNeeds.duration,
    tools: excercisesNeeds.tools,
    link: "/exercise/03",
  },
  {
    title: "CVIČENÍ 4",
    description: "Láskyplný dopis autentickému já.",
    duration: excercisesNeeds.duration,
    tools: excercisesNeeds.tools,
    link: "/exercise/04",
  },
  {
    title: "CVIČENÍ 5",
    description: "Znovuprožití láskyplné pozornosti a péče.",
    duration: excercisesNeeds.duration,
    tools: excercisesNeeds.tools,
    link: "/exercise/05",
  },
  {
    title: "CVIČENÍ 6",
    description: "Shoďte ze sebe omnipotentní vinu.",
    duration: excercisesNeeds.duration,
    tools: excercisesNeeds.tools,
    link: "/exercise/06",
  },
  {
    title: "CVIČENÍ 7",
    description: "Řekněte ano svému smutku.",
    duration: excercisesNeeds.duration,
    tools: excercisesNeeds.tools,
    link: "/exercise/07",
  },
  {
    title: "CVIČENÍ 8",
    description: "Od méněcennosti k pokoře.",
    duration: excercisesNeeds.duration,
    tools: excercisesNeeds.tools,
    link: "/exercise/08",
  },
  {
    title: "CVIČENÍ 9",
    description: "Sestoupení z piedestalu nadřazenosti.",
    duration: excercisesNeeds.duration,
    tools: excercisesNeeds.tools,
    link: "/exercise/09",
  }
];

const Exercises = () => {
  return (
    <section id="exercises" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 text-center lg:text-left">
          <h2 className="font-bebas text-5xl sm:text-6xl lg:text-7xl leading-tight mb-6">
            CVIČENÍ
          </h2>
          <p className="text-base sm:text-lg font-inter font-light opacity-80 max-w-2xl mx-auto lg:mx-0">
            Prozkoumejte naši sbírku praktických cvičení navržených pro každodenní praxi
            všímavosti.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {exercises.map((exercise, index) => {
            // const Component = exercise.link ? 'a' : 'div';
            return (
              <Link
                key={index}
                to={exercise.link!}
                className="group p-8 bg-background border border-border hover:border-foreground transition-all duration-300 cursor-pointer block"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="font-bebas text-2xl sm:text-3xl leading-tight group-hover:translate-x-2 transition-transform duration-300">
                      {exercise.title}
                    </h3>
                    <span className="text-xs font-inter font-light opacity-60 whitespace-nowrap ml-4">
                      {exercise.duration}
                    </span>
                  </div>
                  <h3 className="font-inter text-sm sm:text-base font-light opacity-70 leading-relaxed">
                    {exercise.description}
                  </h3>
                  <p className="font-inter text-sm sm:text-base font-light opacity-70 leading-relaxed">
                    Doporučené pomůcky: {excercisesNeeds.tools}
                  </p>
                  <div className="pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-inter font-light border-b border-foreground pb-1">
                      VÍCE INFO →
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Exercises;
