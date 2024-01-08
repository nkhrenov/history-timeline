import TimeScale from "@/components/timeline";

export default function Page() {
    return (
        <section className="flex min-h-screen flex-col p-24">
            <TimeScale startYear={2000} endYear={2030} />
        </section>
    )
}