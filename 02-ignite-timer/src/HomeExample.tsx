import { createContext, useContext, useState } from "react";

const CyclesContext = createContext({} as any);

function NewCycleForm() {
  const { activeCycle, setActiveCyle } = useContext(CyclesContext);

  return (
    <h1>
      NewCycleForm: {activeCycle}
      <button
        onClick={() => {
          setActiveCyle(2 + 2);
        }}
      >
        Alterar ciclo ativo
      </button>
    </h1>
  );
}

function Countdown() {
  const { activeCycle } = useContext(CyclesContext);

  return <h1>Countdown: {activeCycle}</h1>;
}

export function Home() {
  const [activeCycle, setActiveCyle] = useState(0);

  return (
    <CyclesContext.Provider value={{ activeCycle, setActiveCyle }}>
      <div>
        <NewCycleForm />
        <Countdown />
      </div>
    </CyclesContext.Provider>
  );
}
