import type { ReactNode } from "preact/compat";

type CardProps = {
  borderColor: string;
  title: string;
  description: string;
  children: ReactNode;
};

export function Card(props: CardProps) {
  return (
    <div
      className="p-8 bg-white border-t-4 rounded-xl shadow-lg flex flex-col gap-2 h-66 lg:h-70"
      style={{ borderColor: props.borderColor }}
    >
      <h3 className="text-xl" style={{ fontWeight: 600 }}>
        {props.title}
      </h3>
      <p>{props.description}</p>
      <div className="mt-auto ml-auto">{props.children}</div>
    </div>
  );
}
