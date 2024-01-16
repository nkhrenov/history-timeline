type TimelineEvent = {
    date: Date;
    title: string;
}

const getYear = (e: TimelineEvent) => {
    return e.date.getUTCFullYear()
}