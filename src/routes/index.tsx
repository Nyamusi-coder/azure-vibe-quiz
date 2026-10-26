import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { questions } from "@/lib/questions";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AzureVibe Prep — AZ-900 Smart Quiz" },
      { name: "description", content: "Unofficial AZ-900 practice quiz with instant feedback and African context tips." },
      { property: "og:title", content: "AzureVibe Prep — AZ-900 Smart Quiz" },
      { property: "og:description", content: "Practice AZ-900 questions with clear explanations and relatable tips." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const q = questions[i];
  const answered = picked !== null;
  const correct = picked === q.answer;

  const choose = (idx: number) => {
    if (answered) return;
    setPicked(idx);
    if (idx === q.answer) setScore((s) => s + 1);
  };
  const next = () => {
    if (i + 1 >= questions.length) return setDone(true);
    setI(i + 1);
    setPicked(null);
  };
  const restart = () => {
    setI(0); setPicked(null); setScore(0); setDone(false);
  };

  return (
    <div className="min-h-screen bg-vibe">
      <div className="border-b border-warning/40 bg-warning/15 px-4 py-3 text-center text-sm font-medium text-warning-foreground">
        ⚠️ Unofficial AZ-900 Prep Tool. Not affiliated with Microsoft. For educational purposes only.
      </div>
      <main className="mx-auto max-w-2xl px-4 py-10 sm:py-16">
        <header className="mb-8 text-center">
          <h1 className="font-display text-4xl font-bold text-primary-foreground sm:text-5xl">AzureVibe Prep</h1>
          <p className="mt-2 text-primary-foreground/80">AZ-900 Smart Quiz Builder</p>
        </header>

        <div className="rounded-2xl bg-card p-6 shadow-vibe sm:p-8">
          {done ? (
            <div className="text-center">
              <h2 className="font-display text-2xl font-bold">Quiz complete 🎉</h2>
              <p className="mt-3 text-lg">You scored <strong>{score}</strong> of {questions.length}</p>
              <button onClick={restart} className="mt-6 rounded-xl bg-gradient-vibe px-6 py-3 font-semibold text-primary-foreground transition hover:opacity-90">
                Try again
              </button>
            </div>
          ) : (
            <>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="font-semibold text-primary">Question {i + 1} of {questions.length}</span>
                <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">{q.domain}</span>
              </div>
              <div className="mb-6 h-2 overflow-hidden rounded-full bg-muted">
                <div className="h-full bg-gradient-vibe transition-all" style={{ width: `${((i + (answered ? 1 : 0)) / questions.length) * 100}%` }} />
              </div>
              <h2 className="mb-6 text-lg font-semibold leading-snug sm:text-xl">{q.question}</h2>
              <div className="space-y-3">
                {q.options.map((opt, idx) => {
                  let cls = "border-border hover:border-primary hover:bg-accent";
                  if (answered) {
                    if (idx === q.answer) cls = "border-success bg-success/10 text-success";
                    else if (idx === picked) cls = "border-destructive bg-destructive/10 text-destructive";
                    else cls = "border-border opacity-60";
                  }
                  return (
                    <button key={idx} onClick={() => choose(idx)} disabled={answered}
                      className={`flex w-full items-center gap-3 rounded-xl border-2 p-4 text-left font-medium transition ${cls}`}>
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-muted text-sm text-muted-foreground">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      {opt}
                    </button>
                  );
                })}
              </div>

              {answered && (
                <div className="mt-6 space-y-4">
                  <div className={`rounded-xl p-4 ${correct ? "bg-success/10" : "bg-destructive/10"}`}>
                    <p className={`font-bold ${correct ? "text-success" : "text-destructive"}`}>
                      {correct ? "✅ Correct!" : "❌ Incorrect"}
                    </p>
                    <p className="mt-2 text-sm">{q.explanation}</p>
                    {!correct && <p className="mt-2 text-sm text-muted-foreground">{q.wrongHint}</p>}
                  </div>
                  <div className="rounded-xl border-l-4 border-warning bg-warning/10 p-4">
                    <p className="text-sm font-bold">🌍 African Context</p>
                    <p className="mt-1 text-sm">{q.africanTip}</p>
                  </div>
                  <button onClick={next} className="w-full rounded-xl bg-gradient-vibe py-3 font-semibold text-primary-foreground transition hover:opacity-90">
                    {i + 1 >= questions.length ? "See Results" : "Next Question →"}
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </main>
    </div>
  );
}
