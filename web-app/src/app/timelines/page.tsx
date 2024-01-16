import TimeScale from "@/components/timeline";

export default function Page() {
    return (
        <section className="flex min-h-screen flex-col p-24">
            <TimeScale
                startYear={-1000}
                scale={200}
                maxSections={6}
                events={events}
            />
        </section>
    )
}

const events: TimelineEvent[] = [
    {
        date: new Date(-753, 0), // Основание Рима
        title: "Основание Рима"
    },
    {
        date: new Date(-509, 0), // Установление Римской Республики
        title: "Установление Римской Республики"
    },
    {
        date: new Date(-264, 0), // Первая Пуническая война
        title: "Первая Пуническая война"
    },
    {
        date: new Date(-146, 0), // Завоевание Карфагена
        title: "Завоевание Карфагена"
    },
    {
        date: new Date(-44, 2), // Убийство Юлия Цезаря
        title: "Убийство Юлия Цезаря"
    },
    {
        date: new Date(-27, 1), // Создание Римской империи
        title: "Создание Римской империи"
    },
    {
        date: new Date(79, 7), // Вулкан Везувий взрывается, уничтожая Помпеи
        title: "Взрыв вулкана Везувий и уничтожение Помпей"
    },
    {
        date: new Date(312, 9), // Битва при Милвиевом мосту
        title: "Битва при Милвиевом мосту"
    },
    {
        date: new Date(476, 8), // Падение Западной Римской империи
        title: "Падение Западной Римской империи"
    },
    {
        date: new Date(1453, 4), // Падение Византийской империи
        title: "Падение Византийской империи"
    }
];