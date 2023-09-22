import MainDash from "./../../Component/DboardContent/MainDash";
import { useSelector } from 'react-redux';
const DashBoard = () => {
  const admin = useSelector(st=>st.admin.data)
  const cards = [
    {
      text: "Total User",
      count: 10,
    },
    {
      text: "Enquiry Request",
      count: admin?.enquiry?.length,
    },
    {
      text: "Carrier Request",
      count: admin?.carrier?.length,
    },
    {
      text: "Contact Us Request",
      count: admin?.contacts?.length,
    },
    {
      text: "Employees",
      count: admin?.employees?.length,
    },
    {
      text: "Total RP",
      count: 10,
    },
    {
      text: "Total CP",
      count: 10,
    },
    {
      text: "Total BP",
      count: 10,
    },
  ];

  return (
    <>
      <div className="flex items-center">
        <div className="container max-w-6xl px-4 mx-auto">
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((card, i) => {
              return (
                <div
                  key={i}
                  className="flex items-center justify-between p-3 mb-2 bg-white rounded shadow"
                >
                  <div>
                    <div className="text-md text-gray-700 text-bold">{card.text}</div>
                    <div className="flex items-center pt-1">
                      <div className="text-xl font-medium text-blue-500 ">
                        {card.count}
                      </div>
                    </div>
                  </div>
                  <div className="text-green-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8"
                      fill="none"
                      viewBox="0 0 51 51"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M48.875 12.75L28.687 32.938 18.063 22.312 2.126 38.25"
                      ></path>
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M36.125 12.75h12.75V25.5"
                      ></path>
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <MainDash />
    </>
  );
};

export default DashBoard;
