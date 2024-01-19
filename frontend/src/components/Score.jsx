  export default function Score({elapsedTime, input }) {
    let words = Math.floor(input.split(' ').length / 2);
    let seconds = elapsedTime;
    const stats = [
        { id: 1, name: 'Seconds', value: seconds },
        { id: 2, name: 'Number of words', value: words },
        { id: 3, name: 'Incorrect', value: '46' },
      ]
    return (
      <div className="bg-white sm:py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="mx-auto flex max-w-xs flex-col gap-y-4"
              >
                <dt className="text-base leading-7 text-gray-600">
                  {" "}
                  {stat.name}
                  
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {stat.value}
                  
                  
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    );
  }