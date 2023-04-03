const people = [
    {
      services: 'Daily Accounting & Bookkeeping',
      email: 'leslie.alexander@example.com',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
       

    },

    {
        services: ' Easy Compliances ',
        email: 'leslie.alexander@example.com',
        role: 'Co-Founder / CEO',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        services: 'Accounting for Auditors',
        email: 'leslie.alexander@example.com',
        role: 'Co-Founder / CEO',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        services: 'Complete Business Management',
        email: 'leslie.alexander@example.com',
        role: 'Co-Founder / CEO',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },

      {
        services: 'Payables & Receivables',
        email: 'leslie.alexander@example.com',
        role: 'Co-Founder / CEO',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    // More people...
  ]
  
  export default function Cards() {
    return (
      <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-5  py-12">
        {people.map((person) => (
          <div
            key={person.email}
            className="items-center mx-auto lg:px-8 rounded-bl-3xl rounded-tr-3xl shadow-[8.0px_4.0px_4.0px_rgba(0,0,0,0.38)]  border-gray-300 bg-white px-6 py-5 focus-within:ring-2 lg:w-56 lg:h-36   focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
          >
            <div className=" ">
              <img className="h-10 w-10 rounded-full mx-auto" src={person.imageUrl} alt="#" />
            </div>
            <div className="flex mx-auto">
              <a href="#" className="focus:outline-none">
                <span className="" aria-hidden="true" />
                <p className="text-sm font-medium text-gray-900 py-5 text-center mx-auto  ">{person.services}</p>
                {/* <p className="text-sm text-gray-500">{person.role}</p> */}
              </a>
            </div>
          </div>
        ))}
      </div>
    )
  }