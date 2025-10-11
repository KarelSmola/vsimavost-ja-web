import audioFile from "@/assets/cviceni-jedna.mp3";

const exercises = [
  {
    title: "CVIČENÍ JEDNA",
    description: "Základní techniky vědomého dýchání pro zklidnění mysli a těla.",
    duration: "5-10 minut",
    audio: audioFile,
  },
  {
    title: "BODY SCAN",
    description: "Postupné vnímání jednotlivých částí těla a uvolňování napětí.",
    duration: "15-20 minut",
  },
  {
    title: "MINDFUL WALKING",
    description: "Vědomá chůze jako forma aktivní meditace.",
    duration: "10-15 minut",
  },
  {
    title: "MEDITACE LASKAVOSTI",
    description: "Kultivace soucitu a laskavosti k sobě i druhým.",
    duration: "10-15 minut",
  },
];

const Exercises = () => {
  const handleExerciseClick = (audio?: string) => {
    if (audio) {
      const audioElement = new Audio(audio);
      audioElement.play();
    }
  };

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
          {exercises.map((exercise, index) => (
            <div
              key={index}
              onClick={() => handleExerciseClick(exercise.audio)}
              className="group p-8 bg-background border border-border hover:border-foreground transition-all duration-300 cursor-pointer"
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
                <p className="font-inter text-sm sm:text-base font-light opacity-70 leading-relaxed">
                  {exercise.description}
                </p>
                <div className="pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-inter font-light border-b border-foreground pb-1">
                    {exercise.audio ? "POSLECHNOUT →" : "VÍCE INFO →"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Exercises;
