import CountUp from "@/components/shared/CountUp";

const stats = [
  { value: 12, suffix: "+", label: "Módulos integrados" },
  { value: 1, suffix: " semana", label: "Para estar operando" },
  { value: 100, suffix: "% web", label: "Sem instalação" },
  { value: 3, suffix: "+ CEASAs", label: "Atendidas no RJ" },
];

export default function Stats() {
  return (
    <section className="bg-white shadow-md border-b border-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-gray-100">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center px-4 py-2"
            >
              <span className="text-2xl lg:text-3xl font-extrabold text-luga-dark">
                <CountUp
                  end={stat.value}
                  prefix={stat.prefix ?? ""}
                  suffix={stat.suffix ?? ""}
                />
              </span>
              <span className="text-sm text-luga-text-secondary mt-1">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
