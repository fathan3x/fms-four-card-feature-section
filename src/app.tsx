// ### Primary

import { cn } from "cn";
import "@fontsource/poppins/200.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";
import { Supervisor } from "./assets/svgs/Supervisor";
import { TeamBuilder } from "./assets/svgs/TeamBuilder";
import { Karma } from "./assets/svgs/Karma";
import { Calculator } from "./assets/svgs/Calculator";
import { Card } from "./components/Card";

// - Red: hsl(0, 78%, 62%)
// - Cyan: hsl(180, 62%, 55%)
// - Orange: hsl(34, 97%, 64%)
// - Blue: hsl(212, 86%, 64%)

// ### Neutral

// - Grey 500: hsl(234, 12%, 34%)
// - Grey 400: hsl(212, 6%, 44%)
// - White: hsl(0, 0%, 100%)

export function App() {
  const style = {
    "bg-new-white": "bg-[hsl(0,0%,98%)]",
    "text-gray-500": "text-[hsl(234,12%,34%)]",
  };
  return (
    <main
      className={cn(
        "p-10 font-['Poppins'] space-y-20",
        style["bg-new-white"],
        style["text-gray-500"],
      )}
    >
      <section className="space-y-6 w-fit mx-auto">
        <div className="text-3xl lg:text-4xl lg:space-y-2">
          <h2 className="text-center" style={{ fontWeight: 100 }}>
            Reliable, efficient delivery
          </h2>
          <h2 className="text-center" style={{ fontWeight: 600 }}>
            Powered by Technology
          </h2>
        </div>
        <p className="max-w-120 text-center">
          Our Artifical Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </section>
      <section className="flex flex-col lg:flex-row lg:items-center gap-10 max-w-300 mx-auto">
        <div className="basis-1/3">
          <Card
            borderColor={cards[0].borderColor}
            title={cards[0].title}
            description={cards[0].description}
          >
            {cards[0].children}
          </Card>
        </div>
        <div className="basis-1/3 space-y-10">
          <Card
            borderColor={cards[1].borderColor}
            title={cards[1].title}
            description={cards[1].description}
          >
            {cards[1].children}
          </Card>
          <Card
            borderColor={cards[2].borderColor}
            title={cards[2].title}
            description={cards[2].description}
          >
            {cards[2].children}
          </Card>
        </div>
        <div className="basis-1/3">
          <Card
            borderColor={cards[3].borderColor}
            title={cards[3].title}
            description={cards[3].description}
          >
            {cards[3].children}
          </Card>
        </div>
      </section>
    </main>
  );
}

const cards = [
  {
    id: 0,
    title: "Supervisor",
    description: "Monitors activity to identify project roadblocks",
    borderColor: "hsl(180,62%,55%)",
    children: <Supervisor />,
  },
  {
    id: 1,
    title: "Team Builder",
    description:
      "Scans our talent network to create the optimal team for your project",
    borderColor: "hsl(0,78%,62%)",
    children: <TeamBuilder />,
  },
  {
    id: 2,
    title: "Karma",
    description: "Regularly evaluates our talent to ensure quality",
    borderColor: "hsl(34,97%,64%)",
    children: <Karma />,
  },
  {
    id: 3,
    title: "Calculator",
    description:
      "Uses data from past projects to provide better delivery estimates",
    borderColor: "hsl(212,86%,64%)",
    children: <Calculator />,
  },
];
