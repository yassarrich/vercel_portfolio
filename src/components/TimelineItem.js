const TimelineItem = ({ data }) => (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <span className="tag" style={{ background: data.category.color }}>
                {data.category.tag}
            </span>
            <time>{data.date}</time>
            <p className="text-black">{data.text}</p>
            {/* {data.link && (
                <a className="text-black"
                    href={data.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {data.link.text}
                </a>
            )} */}
            <span className="circle" />
        </div>
    </div>
);

export default TimelineItem;