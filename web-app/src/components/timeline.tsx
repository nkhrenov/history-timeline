interface TimeScaleProps {
    startYear: number;
    scale: number;
    maxSections: number;
    events: TimelineEvent[];
}

const TimeScale = ({ startYear, scale, maxSections, events }: TimeScaleProps) => {
    const renderYears = (): JSX.Element[] => {
        const years: JSX.Element[] = [];

        for (let i = 0; i < maxSections; i++) {
            years.push(<div className="w-36" key={i}>{startYear + i * scale}</div>);
        }

        return years;
    };

    const renderPlaceHolders = (): JSX.Element[] => {
        const divs: JSX.Element[] = [];

        for (let i = 0; i < maxSections; i++) {
            divs.push(<div className="w-36 h-36 bg-gray-500" key={i}></div>);
        }

        return divs;
    };

    return (
        <div className="flex flex-col">
            <div className="flex flex-row">{renderPlaceHolders()}</div>
            <div className="flex flex-row">{renderYears()}</div>
        </div>
        
    )
};

export default TimeScale;