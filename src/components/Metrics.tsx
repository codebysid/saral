import MetricCard from "./MetricCard"

const metrics = [ // will be fetched from BE
    {
        id: 1,
        name: "Visitors",
        count: 416,
    },
    {
        id: 2,
        name: "Posts",
        count: 16,
    },
    {
        id: 3,
        name: "Revenue",
        count: 416,
    },
    {
        id: 4,
        name: "Orders",
        count: 46,
    },
]

const Metrics = () => {
    return (
        <div className=" grid grid-cols-2 gap-[24px]">
            {
                metrics.map(({ count, id, name }) => {
                    return <MetricCard key={id} count={count} name={name} />
                })
            }
        </div>
    )
}

export default Metrics