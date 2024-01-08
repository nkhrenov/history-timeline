interface TimeScaleProps {
    startYear: number;
    endYear: number;
}

const TimeScale = ({ startYear, endYear }: TimeScaleProps) => {
    const renderYears = (): JSX.Element[] => {
        const years: JSX.Element[] = [];

        for (let year = startYear; year <= endYear; year++) {
            years.push(<div className="flex-initial w-32" key={year}>{year}</div>);
        }

        return years;
    };

    return <div className="time-scale flex flex-row">{renderYears()}</div>;
};

export default TimeScale;